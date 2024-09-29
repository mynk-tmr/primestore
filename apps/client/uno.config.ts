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
});
