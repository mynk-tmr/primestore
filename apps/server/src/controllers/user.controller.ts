import { hash } from "bcryptjs";
import { HTTPException } from "hono/http-exception";
import { ObjectId } from "mongodb";
import { orm } from "../lib/mongo-driver";
import type { UserDto } from "../models/user.model";

const users = orm.collection<UserDto["db"]>("users");

async function insert(user: UserDto["insert"]) {
	const check = await users.findOne({ email: user.email });
	if (check) {
		throw new HTTPException(400, {
			message: "email already in use.",
		});
	}
	const date = new Date();
	const doc = { ...user, createdAt: date, updatedAt: date };
	doc.password = await hash(doc.password, 10);
	const res = await users.insertOne(doc);
	return { _id: res.insertedId };
}

async function findById(id: string) {
	return await users.findOne(
		{ _id: new ObjectId(id) },
		{
			projection: { password: 0 },
		},
	);
}

async function removeById(id: string) {
	const res = await users.deleteOne({ _id: new ObjectId(id) });
	if (res.deletedCount === 0) {
		throw new HTTPException(404, {
			message: "user not found.",
		});
	}
}

async function updateById(id: string, doc: UserDto["update"]) {
	if (doc.password) {
		doc.password = await hash(doc.password, 10);
	}
	const res = await users.updateOne(
		{ _id: new ObjectId(id) },
		{
			$set: { ...doc, updatedAt: new Date() },
		},
	);
	if (res.matchedCount === 0) {
		throw new HTTPException(404, {
			message: "user not found.",
		});
	}
}

export const userCtr = {
	insert,
	findById,
	removeById,
	updateById,
};
