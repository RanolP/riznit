import { z } from 'zod';
import { r } from '..';

export const nat = r.struct(
	'nat',
	{
		value: z.number(),
	},
	{},
);
