import { RouterProvider, createRouter } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import { routeTree } from './routeTree.gen';
import './assets/fonts/libertinus/libertinus.css';
import './assets/fonts/stix-two/stix-two.css';
import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';

const router = createRouter({ routeTree, defaultPreload: 'intent' });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById('root');

if (rootElement && !rootElement?.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(<RouterProvider router={router} />);
}
