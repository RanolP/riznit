import { z } from 'zod';
import { term } from './term';
import { match } from 'ts-pattern';
import { make } from '../util';

export const exprOperator = make(
	'expr/operator',
	z.enum(['add', 'subtract']),

	(operator: '+' | '-') =>
		match(operator)
			.with('+', () => 'add' as const)
			.with('-', () => 'subtract' as const)
			.exhaustive(),
);

export const expr = make(
	'expr',
	z.object({
		mostLeft: term.schema,
		operations: z.array(z.tuple([exprOperator.schema, term.schema])),
	}),
	(
		mostLeft: typeof term._ty,
		...operations: Array<[typeof exprOperator._ty, typeof term._ty]>
	) => {
		return {
			mostLeft,
			operations,
		};
	},
);
