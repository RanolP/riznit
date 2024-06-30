import type { z } from 'zod';
import type { c } from '@/lib/riznit-engine';
import { ExprNode } from '../expr/ExprNode';

interface Props {
	propExprEqExpr: z.output<typeof c.propExprEqExpr.schema>;
}

export function PropExprEqExprNode({ propExprEqExpr }: Props): JSX.Element {
	return (
		<>
			<ExprNode expr={propExprEqExpr.properties.lhs} />{' '}
			<span select-none>=</span>{' '}
			<ExprNode expr={propExprEqExpr.properties.rhs} />
		</>
	);
}
