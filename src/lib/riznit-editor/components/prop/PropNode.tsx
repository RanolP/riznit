import { c, propagate } from '@/lib/riznit-engine';
import { match } from 'ts-pattern';
import { PropExprEqExprNode } from './PropExprEqExprNode';
import type { Selection } from '@/lib/riznit-engine';

interface Props {
	prop: typeof c.prop._ty;
	selection: Selection | null;
}

export const PropNode = ({ prop, selection }: Props): JSX.Element =>
	match(prop.value)
		.with(c.propExprEqExpr.match, (propExprEqExpr) => (
			<PropExprEqExprNode
				propExprEqExpr={propExprEqExpr}
				selection={propagate(selection, 0)}
			/>
		))
		.exhaustive();
