import { z } from 'zod';
import { nat } from './nat';
import { make } from '../util';
import { match } from 'ts-pattern';

export const termOperator = make(
	'term/operator',
	z.enum(['invisible-multiplication', 'multiplication', 'division']),

	(operator: '_*' | '*' | '/') =>
		match(operator)
			.with('_*', () => 'invisible-multiplication' as const)
			.with('*', () => 'multiplication' as const)
			.with('/', () => 'division' as const)
			.exhaustive(),
);

export const term = make(
	'term',
	z.object({
		mostLeft: nat.schema,
		operations: z.array(z.tuple([termOperator.schema, nat.schema])),
	}),
	(
		mostLeft: typeof nat._ty,
		...operations: Array<[typeof termOperator._ty, typeof nat._ty]>
	) => {
		return {
			mostLeft,
			operations,
		};
	},
);
