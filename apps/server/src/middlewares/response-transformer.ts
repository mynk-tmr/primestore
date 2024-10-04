import { echo } from "@/utils/echo";
import { rjson } from "@/utils/helpers";
import { createMiddleware } from "hono/factory";
import type { BaseIssue } from "valibot";

export const responseTransformer = createMiddleware(async (c, next) => {
	await next();

	let body;
	try {
		body = await c.res.json();
	} catch {
		echo.yellow("Non Json response !");
		return;
	}

	if ("issues" in body) {
		const { issues } = body as { issues: BaseIssue<string>[] };
		const message = issues.map(({ input, received, expected, message }) => ({
			input,
			received,
			expected,
			message,
		}));

		c.res = rjson(
			{
				success: false,
				error: {
					cause: "DTO_ERROR",
					message,
				},
			},
			400,
		);
	}
});
