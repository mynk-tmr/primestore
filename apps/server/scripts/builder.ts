// biome-ignore lint/correctness/noUndeclaredVariables: <explanation>
Bun.build({
	entrypoints: ["src/index.ts"],
	outdir: "../../api",
	format: "esm",
	target: "node",
	minify: true,
	sourcemap: "external",
});
