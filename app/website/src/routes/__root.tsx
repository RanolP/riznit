import { useGlobalThemeEffect } from '@/features/theme';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
	notFoundComponent: (_props) => <>Oh no!</>,
	component: RootLayout,
});

function RootLayout() {
	useGlobalThemeEffect();

	return (
		<>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
}
