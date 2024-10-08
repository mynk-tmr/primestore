import { vValidator } from "@hono/valibot-validator";
import { Hono } from "hono";
import { userCtr } from "./controller";
import { userdto } from "./model";

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
	})
	.put("/:id", vValidator("json", userdto.update), async (c) => {
		const { id } = c.req.param();
		const doc = c.req.valid("json");
		await userCtr.updateById(id, doc);
		return c.json({
			success: true,
			data: null,
		});
	});
