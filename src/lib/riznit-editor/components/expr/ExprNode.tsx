import type { c } from '@/lib/riznit-engine';
import type { z } from 'zod';
import { Fragment } from 'react/jsx-runtime';
import { TermNode } from './TermNode';
import { ExprOperatorNode } from './ExprOperatorNode';

interface Props {
	expr: z.output<typeof c.expr.schema>;
}
export const ExprNode = ({ expr }: Props) => (
	<span>
		<TermNode term={expr.properties.mostLeft} />
		{expr.properties.operations.map(([operator, term]) => (
			// biome-ignore lint/correctness/useJsxKeyInIterable: not yet.
			<Fragment>
				<ExprOperatorNode exprOperator={operator} /> <TermNode term={term} />
			</Fragment>
		))}
	</span>
);
