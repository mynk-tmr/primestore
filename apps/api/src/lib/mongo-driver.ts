import { MongoClient } from "mongodb";
import { echo } from "./echo";

declare global {
	var client: MongoClient | undefined;
}

global.client ??= new MongoClient(process.env.MONGO_URI!);

export const orm = global.client.db(process.env.MONGO_DBNAME!);

orm.stats().then((data) => echo.green(`Connected to mongo : ${data.db}`));
