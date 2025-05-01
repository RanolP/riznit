import { defineConfig, presetAttributify, presetUno } from "unocss";
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";
import type { Theme } from "unocss/preset-uno";
import { presetTheme } from "unocss-preset-theme";

const Palette = {
	Nord: [
		// Polar Night
		"#2e3440",
		"#3b4252",
		"#434c5e",
		"#4c566a",
		// Snow Storm
		"#d8dee9",
		"#e5e9f0",
		"#eceff4",
		// Frost
		"#8fbcbb",
		"#88c0d0",
		"#81a1c1",
		"#5e81ac",
		// Aurora
		"#bf616a",
		"#d08770",
		"#ebcb8b",
		"#a3be8c",
		"#b48ead",
	],
};

export default defineConfig({
	theme: {
		fontFamily: {
			math: ["WebCM Math Serif", "Libertinus Math", "STIX Two Math"]
				.map((s) => JSON.stringify(s))
				.join(", "),
			"web-cm": "'WebCM Serif 10'",
			"math-web-cm": "'WebCM Math Serif'",
			"math-libertinus": "'Libertinus Math'",
			"math-stix-two": "'STIX Two Math'",
		},
	},
	shortcuts: {
		"$-math-selected": "text-inverted-1 bg-selection",
		"$-math-cursor-located": "",
	},
	presets: [
		presetAttributify({ trueToNonValued: true }),
		presetUno(),
		presetTheme<Theme>({
			theme: {
				"nord-light": {
					colors: {
						1: Palette.Nord[0],
						inverted: {
							1: Palette.Nord[4],
						},
					},
					backgroundColor: {
						1: Palette.Nord[4],
						selection: Palette.Nord[10],
						inverted: {
							1: Palette.Nord[0],
						},
					},
				},
				"nord-dark": {
					colors: {
						1: Palette.Nord[4],
						inverted: {
							1: Palette.Nord[0],
						},
					},
					backgroundColor: {
						1: Palette.Nord[0],
						selection: Palette.Nord[9],
						inverted: {
							1: Palette.Nord[4],
						},
					},
				},
			},
			selectors: Object.fromEntries(
				["nord-light", "nord-dark"].map((key) => [key, `[data-theme=${key}]`]),
			),
		}),
	],
	transformers: [transformerAttributifyJsx()],
});
