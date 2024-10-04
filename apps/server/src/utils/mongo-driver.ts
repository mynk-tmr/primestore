import { MongoClient } from "mongodb";
import { echo } from "./echo";

async function init() {
	const client = new MongoClient(process.env.MONGODB_URI!);
	await client.connect();
	const orm = client.db(process.env.MONGO_DBNAME!);
	const data = await orm.stats();
	echo.green(`Connected to mongo : ${data.db}`);
	return orm;
}

export const orm = await init();
