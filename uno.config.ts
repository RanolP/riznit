import { defineConfig, presetAttributify, presetUno } from 'unocss';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';

export default defineConfig({
	theme: {
		fontFamily: {
			math: '"Libertinus Math"',
		},
	},
	presets: [presetAttributify({ trueToNonValued: true }), presetUno()],
	transformers: [transformerAttributifyJsx()],
});
