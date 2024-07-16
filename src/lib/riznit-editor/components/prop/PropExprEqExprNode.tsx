import {
	isSelected,
	propagate,
	type c,
	type Selection,
} from '@/lib/riznit-engine';
import { ExprNode } from '../expr/ExprNode';
import { MathFragment } from '../MathFragment';

interface Props {
	propExprEqExpr: typeof c.propExprEqExpr._ty;
	selection: Selection | null;
}

export function PropExprEqExprNode({
	propExprEqExpr,
	selection,
}: Props): JSX.Element {
	return (
		<>
			<ExprNode
				expr={propExprEqExpr.value.lhs}
				selection={propagate(selection, 0)}
			/>
			<MathFragment isSelected={isSelected(selection, 1)} px-2>
				=
			</MathFragment>
			<ExprNode
				expr={propExprEqExpr.value.rhs}
				selection={propagate(selection, 2)}
			/>
		</>
	);
}
