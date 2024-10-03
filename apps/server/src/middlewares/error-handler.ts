import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { echo } from "../lib/echo";

export function errorHandler(err: Error, c: Context) {
	const isProd = process.env.NODE_ENV === "production";
	if (err instanceof HTTPException) {
		return c.json({
			success: false,
			error: {
				message: err.message,
			},
		});
	}

	echo.red(err.stack!);
	return c.json(
		{
			success: false,
			error: isProd ? { cause: "INTERNAL_ERROR" } : { stack: err.stack },
		},
		500,
	);
}
