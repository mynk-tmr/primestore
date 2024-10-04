import { echo } from "@/utils/echo";
import { isProd } from "@/utils/helpers";
import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";

export function errorHandler(err: Error, c: Context) {
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
