import { Hono } from "hono";
import { orm } from "./mongo-driver";
export const testRoute = new Hono().get("/", async (c) => {
	await orm.stats();
	return c.json({
		success: true,
		data: "OK",
	});
});
