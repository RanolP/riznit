import { propagate, type c, type Selection } from '@/lib/riznit-engine';
import { Fragment } from 'react/jsx-runtime';
import { TermNode } from './TermNode';
import { ExprOperatorNode } from './ExprOperatorNode';

interface Props {
	expr: typeof c.expr._ty;
	selection: Selection | null;
}
export const ExprNode = ({ expr, selection }: Props) => (
	<span>
		<TermNode term={expr.value.mostLeft} selection={propagate(selection, 0)} />
		{expr.value.operations.map(([operator, term], idx) => (
			// biome-ignore lint/correctness/useJsxKeyInIterable: not yet.
			<Fragment>
				<ExprOperatorNode
					exprOperator={operator}
					selection={propagate(selection, 2 * idx + 1)}
					px-2
				/>
				<TermNode term={term} selection={propagate(selection, 2 * idx + 2)} />
			</Fragment>
		))}
	</span>
);
