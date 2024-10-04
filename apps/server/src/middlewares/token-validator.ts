import type { JWT_Payload } from "@/types";
import { getCookie } from "hono/cookie";
import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";

export const tokenValidator = createMiddleware(async (c, next) => {
	const token = getCookie(c, "token");
	const valid =
		token && ((await verify(token, process.env.JWT_SECRET!)) as JWT_Payload);
	if (!valid) {
		return c.json(
			{
				success: false,
				error: {
					cause: "INVALID_TOKEN",
				},
			},
			403,
		);
	}
	c.set("userId", valid.userId);
	await next();
});
