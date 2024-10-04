import type { JWT_Payload } from "@/types";
import { isProd } from "@/utils/helpers";
import bcrypt from "bcryptjs";
import type { Context } from "hono";
import { setCookie } from "hono/cookie";
import { HTTPException } from "hono/http-exception";
import { sign } from "hono/jwt";
import { userCtr } from "../user/controller";
import type { Authdto } from "./model";

async function addToken(creds: Authdto, c: Context) {
	const user = await userCtr.findByEmail(creds.email);
	const valid = user && (await bcrypt.compare(creds.password, user.password));
	if (!valid) {
		throw new HTTPException(403, { message: "Invalid Credentials" });
	}

	const token = await sign(
		{
			exp: 7 * 24 * 3600 + Math.floor(Date.now() / 1000),
			userId: user._id.toString(),
		} as JWT_Payload,
		process.env.JWT_SECRET!,
	);

	setCookie(c, "token", token, {
		secure: isProd,
		httpOnly: true,
		maxAge: 7 * 24 * 3600,
	});
}

function removeToken(c: Context) {
	setCookie(c, "token", "");
}

export const authCtr = {
	addToken,
	removeToken,
};
