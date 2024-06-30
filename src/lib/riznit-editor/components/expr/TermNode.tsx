import type { c } from '@/lib/riznit-engine';
import type { z } from 'zod';
import { NatNode } from './NatNode';
import { Fragment } from 'react/jsx-runtime';
import { TermOperatorNode } from './TermOperatorNode';

interface Props {
	term: z.output<typeof c.term.schema>;
}
export const TermNode = ({ term }: Props) => (
	<span>
		{<NatNode nat={term.properties.mostLeft} />}{' '}
		{term.properties.operations.map(([operator, nat]) => (
			// biome-ignore lint/correctness/useJsxKeyInIterable: not yet.
			<Fragment>
				<TermOperatorNode termOperator={operator} />
				<NatNode nat={nat} />
			</Fragment>
		))}
	</span>
);
