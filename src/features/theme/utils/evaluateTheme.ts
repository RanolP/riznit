const THEME_KIND = /^(.+)-(dark|light)$/;

export function evaluateTheme(rawTheme: string, prefersDark: boolean) {
	const match = THEME_KIND.exec(rawTheme);
	const [theme, kind] = match
		? [match[1], match[2] === 'dark' ? 'dark' : 'light']
		: [rawTheme, prefersDark ? 'dark' : 'light'];

	return { theme, kind, data: `${theme}-${kind}` };
}
