import { vValidator } from "@hono/valibot-validator";
import { Hono } from "hono";
import { userCtr } from "../controllers/user.controller";
import { userdto } from "../models/user.model";

export const userRoute = new Hono()
	.get("/:id", async (c) => {
		const { id } = c.req.param();
		const user = await userCtr.findById(id);
		return c.json({
			success: true,
			data: user,
		});
	})
	.post("/", vValidator("json", userdto.insert), async (c) => {
		const data = c.req.valid("json");
		const user = await userCtr.insert(data);
		return c.json({
			success: true,
			data: user,
		});
	})
	.delete("/:id", async (c) => {
		const { id } = c.req.param();
		await userCtr.removeById(id);
		return c.json({
			success: true,
		});
	});
