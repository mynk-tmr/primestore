import { createMiddleware } from "hono/factory";
import type { BaseIssue } from "valibot";

export const valiResponseHandler = createMiddleware(async (c, next) => {
	await next();
	const body = await c.res.json();
	if (c.res.status === 400 && "issues" in body) {
		const { issues } = body as { issues: BaseIssue<string>[] };
		const message = issues.map(({ input, received, expected, message }) => ({
			input,
			received,
			expected,
			message,
		}));
		c.res = undefined;
		c.res = new Response(
			JSON.stringify({
				success: false,
				error: {
					cause: "VALI_ERROR",
					message,
				},
			}),
			{
				status: 400,
			},
		);
	}
});
