import {
	type InferInput,
	type InferOutput,
	check,
	date,
	email,
	intersect,
	minLength,
	partial,
	pipe,
	regex,
	strictObject,
	string,
	trim,
} from "valibot";

const digit = /\d/;
const special = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

const insert = strictObject({
	username: pipe(
		string(),
		trim(),
		regex(/[A-z ]{6,30}/, "Unsupported username"),
	),
	email: pipe(string(), email("Invalid email")),
	password: pipe(
		string(),
		trim(),
		minLength(8),
		check(
			(pwd) => digit.test(pwd) && special.test(pwd),
			"Include atleast one digit and one special character",
		),
	),
});

const update = partial(insert);

const db = intersect([
	insert,
	strictObject({
		createdAt: date(),
		updatedAt: date(),
	}),
]);

export const userdto = {
	insert,
	update,
	db,
};

export type UserDto = {
	insert: InferOutput<typeof insert>;
	db: InferInput<typeof db>;
	update: InferOutput<typeof update>;
};
