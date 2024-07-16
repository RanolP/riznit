import { z } from 'zod';
import { make } from '..';
import { expr } from './expr';

export const propExprEqExpr = make(
	'prop/expr-eq-expr',
	z.object({
		lhs: expr.schema,
		rhs: expr.schema,
	}),
	(lhs: typeof expr._ty, rhs: typeof expr._ty) => ({ lhs, rhs }),
);

export const prop = make(
	'prop',
	propExprEqExpr.schema,
	(x: typeof propExprEqExpr._ty) => x,
);
