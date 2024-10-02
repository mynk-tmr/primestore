import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import "./lib/mongo-driver";
import { logger } from "hono/logger";
import { echo } from "./lib/echo";
import { testRoute } from "./utils/health-check";

const isProd = process.env.NODE_ENV === "production";

const app = new Hono()
	.basePath("/api")
	.use(logger())
	.use(
		cors({
			origin: isProd ? "" : "http://localhost:4000",
		}),
	)
	.route("test", testRoute);

serve(app);
export type HonoApp = typeof app;

echo.yellow("Running on http://localhost:3000/api");
