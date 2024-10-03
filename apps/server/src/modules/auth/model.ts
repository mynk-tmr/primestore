import { type InferOutput, pick } from "valibot";
import { userdto } from "../user/model";

export const authdto = pick(userdto.insert, ["email", "password"]);

export type Authdto = InferOutput<typeof authdto>;
