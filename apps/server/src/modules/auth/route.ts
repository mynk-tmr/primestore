import { type Payload, tokenValidator } from "@/middlewares/token-validator";
import { vValidator } from "@hono/valibot-validator";
import { Hono } from "hono";
import { userCtr } from "../user/controller";
import { authCtr } from "./controller";
import { authdto } from "./model";

export const authRoute = new Hono<{ Variables: Payload }>()
	.post("/get-token", vValidator("json", authdto), async (c) => {
		const creds = c.req.valid("json");
		await authCtr.addToken(creds, c);
		return c.json({
			success: true,
		});
	})
	.post("/logout", (c) => {
		authCtr.removeToken(c);
		return c.json({
			success: true,
		});
	})
	.post("/login", tokenValidator, async (c) => {
		const user = await userCtr.findById(c.get("userId"));
		return c.json({
			success: true,
			data: user,
		});
	});
