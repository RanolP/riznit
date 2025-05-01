import { useAtom } from 'jotai';
import { useMedia } from 'react-use';
import { themeAtom } from '../atoms';
import { evaluateTheme } from '../utils/evaluateTheme';
import { useCallback } from 'react';
import type { ThemeKind } from '../types';

export function useTheme() {
	const [rawTheme, setRawTheme] = useAtom(themeAtom);
	const prefersDark = useMedia('(prefers-color-scheme: dark)');
	const { theme, kind, data } = evaluateTheme(rawTheme, prefersDark);

	const setTheme = useCallback(
		(newTheme: string) => {
			setRawTheme(`${newTheme}-${kind}`);
		},
		[kind, setRawTheme],
	);

	const setKind = useCallback(
		(newKind: ThemeKind) => {
			setRawTheme(`${theme}-${newKind}`);
		},
		[theme, setRawTheme],
	);

	return { theme, kind, data, setTheme, setKind };
}
