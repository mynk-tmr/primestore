import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetWebFonts({
			provider: "google",
			fonts: {
				sans: "Sarabun",
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	shortcuts: [
		["page-center", "grid h-full place-items-center"],
		["link", "decoration-2 underline font-bold focus:outline-offset-2 text-sm"],
		[
			"card",
			"border border-solid border-gray-300 shadow rounded-xl p-4 md:p-5",
		],
		[
			"strip",
			"bg-transparent border-transparent border-0 shadow-none p-0 text-4",
		],
	],
});
