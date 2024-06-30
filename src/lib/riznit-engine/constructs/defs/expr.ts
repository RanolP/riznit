import { z } from 'zod';
import { r } from '..';
import { term } from './term';

export const exprOperator = r.struct(
	'expr/operator',
	{
		kind: z.union([z.literal('add'), z.literal('subtract')]),
	},
	{},
);

export const expr = r.struct(
	'expr',
	{
		mostLeft: term.schema,
		operations: z.array(z.tuple([exprOperator.schema, term.schema])),
	},
	{},
);
