import type { JWTPayload } from "hono/utils/jwt/types";

export type Payload = {
	userId: string;
};

export type JWT_Payload = JWTPayload & Payload;

export type AppResponseBody =
	| { success: true; data?: unknown }
	| {
			success: false;
			error: {
				cause: Uppercase<string>;
				message: string | Record<string, unknown> | Record<string, unknown>[];
			};
	  };
