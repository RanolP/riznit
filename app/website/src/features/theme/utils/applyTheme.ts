import { getDefaultStore } from 'jotai';
import { themeAtom } from '../atoms';
import { evaluateTheme } from './evaluateTheme';

export function applyTheme() {
	const root$ = document.getElementById('root');
	if (!root$) return;
	const rawTheme = getDefaultStore().get(themeAtom);
	const prefersDark = matchMedia(
		'screen and (prefers-color-scheme: dark)',
	).matches;
	const { data } = evaluateTheme(rawTheme, prefersDark);

	document.documentElement.dataset.theme = data;
}
