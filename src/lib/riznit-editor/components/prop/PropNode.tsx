import type { z } from 'zod';
import { c } from '@/lib/riznit-engine';
import { match } from 'ts-pattern';
import { PropExprEqExprNode } from './PropExprEqExprNode';

interface Props {
	prop: z.output<typeof c.prop.schema>;
}

export const PropNode = ({ prop }: Props): JSX.Element =>
	match(prop.variant)
		.with(c.propExprEqExpr.match, (propExprEqExpr) => (
			<PropExprEqExprNode propExprEqExpr={propExprEqExpr} />
		))
		.exhaustive();
