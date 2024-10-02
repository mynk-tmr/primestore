import { Hono } from "hono";
import { orm } from "../lib/mongo-driver";
export const testRoute = new Hono().get("/", async (c) => {
	await orm.stats();
	return c.text("ok");
});
