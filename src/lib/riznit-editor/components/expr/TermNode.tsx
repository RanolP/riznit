import { propagate, type c, type Selection } from '@/lib/riznit-engine';
import { NatNode } from './NatNode';
import { Fragment } from 'react/jsx-runtime';
import { TermOperatorNode } from './TermOperatorNode';

interface Props {
	term: typeof c.term._ty;
	selection: Selection | null;
}
export const TermNode = ({ term, selection }: Props) => (
	<span>
		{<NatNode nat={term.value.mostLeft} selection={propagate(selection, 0)} />}
		{term.value.operations.map(([operator, nat], idx) => (
			// biome-ignore lint/correctness/useJsxKeyInIterable: not yet.
			<Fragment>
				<TermOperatorNode
					termOperator={operator}
					selection={propagate(selection, 2 * idx + 1)}
					px-2
				/>
				<NatNode nat={nat} selection={propagate(selection, 2 * idx + 2)} />
			</Fragment>
		))}
	</span>
);
