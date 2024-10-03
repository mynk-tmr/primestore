import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import "./lib/mongo-driver";
import { logger } from "hono/logger";
import { echo } from "./lib/echo";
import { errorHandler } from "./middlewares/error-handler";
import { responseTransformer } from "./middlewares/response-transformer";
import { userRoute } from "./routes/user.route";
import { testRoute } from "./utils/health-check";

const isProd = process.env.NODE_ENV === "production";

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
	.route("users", userRoute);

export type HonoApp = typeof app;

echo.blue("Running on http://localhost:3000/api");
serve(app);
