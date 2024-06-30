import type { c } from '@/lib/riznit-engine';
import type { z } from 'zod';
import { PropNode } from './prop';

interface Props {
	prop: z.output<typeof c.prop.schema>;
}
export const RiznitEditor = ({ prop }: Props) => (
	<main font-math text-16>
		<PropNode prop={prop} />
	</main>
);
