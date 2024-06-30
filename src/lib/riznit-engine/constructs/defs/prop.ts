import { r } from '..';
import { expr } from './expr';

export const propExprEqExpr = r.struct(
	'prop/expr-eq-expr',
	{
		lhs: expr.schema,
		rhs: expr.schema,
	},
	{},
);

export const prop = r.enum('prop', [
	propExprEqExpr.schema,
	propExprEqExpr.schema,
]);
