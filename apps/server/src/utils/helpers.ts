import type { AppResponseBody } from "@/types";
import type { Context } from "hono";
import type { StatusCode } from "hono/utils/http-status";

export const isProd = process.env.NODE_ENV === "production";

export function cjson(c: Context, body: AppResponseBody, status: StatusCode) {
	return c.json(body, status);
}

export function rjson(body: AppResponseBody, status: StatusCode) {
	return new Response(JSON.stringify(body), {
		status,
	});
}
