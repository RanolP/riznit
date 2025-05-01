import { useLayoutEffect } from 'react';
import { useTheme } from './useTheme';

export function useGlobalThemeEffect() {
	const { data } = useTheme();

	useLayoutEffect(() => {
		document.documentElement.dataset.theme = data;
	}, [data]);
}
