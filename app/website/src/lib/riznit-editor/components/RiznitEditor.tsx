import type { c, Selection } from '@/lib/riznit-engine';
import { PropNode } from './prop';

interface Props {
	prop: typeof c.prop._ty;
	selection: Selection | null;
}
export const RiznitEditor = ({ prop, selection }: Props) => (
	<main font-math text-16 px-4 py-2>
		<PropNode prop={prop} selection={selection} />
	</main>
);
