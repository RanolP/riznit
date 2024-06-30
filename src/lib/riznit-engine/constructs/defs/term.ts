import { z } from 'zod';
import { r } from '..';
import { nat } from './nat';

export const termOperator = r.struct(
	'term/operator',
	{
		kind: z.union([
			z.literal('invisible-multiplication'),
			z.literal('multiplication'),
			z.literal('division'),
		]),
	},
	{},
);

export const term = r.struct(
	'term',
	{
		mostLeft: nat.schema,
		operations: z.array(z.tuple([termOperator.schema, nat.schema])),
	},
	{},
);
