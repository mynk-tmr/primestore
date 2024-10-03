// biome-ignore lint/correctness/noUndeclaredVariables: <explanation>
Bun.build({
	entrypoints: ["./src/index.ts"],
	outdir: "../../api",
	target: "node",
	minify: true,
	sourcemap: "external",
	external: ["aws-sdk", "mock-aws-s3", "nock"],
});
