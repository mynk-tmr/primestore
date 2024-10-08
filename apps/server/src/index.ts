import "dotenv/config";
import "./utils/mongo-driver";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { errorHandler } from "./middlewares/error-handler";
import { responseTransformer } from "./middlewares/response-transformer";
import { authRoute } from "./modules/auth/route";
import { userRoute } from "./modules/user/route";
import { echo } from "./utils/echo";
import { testRoute } from "./utils/health-check";
import { isProd } from "./utils/helpers";

const app = new Hono()
	.basePath("/api")
	.onError(errorHandler)
	.use(logger())
	.use(
		cors({
			origin: isProd ? "" : "http://localhost:4000",
		}),
	)
	.use(responseTransformer)
	.route("test", testRoute)
	.route("users", userRoute)
	.route("auth", authRoute);

export type HonoApp = typeof app;

echo.blue("Running on http://localhost:3000/api");
serve(app);
