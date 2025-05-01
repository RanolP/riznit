import { z } from 'zod';
import type { ZodLiteral, ZodObject, ZodSchema } from 'zod';

export interface Definition<
	Name extends string,
	Schema extends ZodSchema,
	CtorArgs extends unknown[],
> {
	(...args: CtorArgs): this['_ty'];

	schema: ZodObject<{ name: ZodLiteral<Name>; value: Schema }>;
	match: { name: Name };

	_ty: z.output<this['schema']>;
}

export function make<
	Name extends string,
	Schema extends ZodSchema,
	CtorArgs extends unknown[],
>(
	name: Name,
	value: Schema,
	ctor: (...args: CtorArgs) => z.infer<Schema>,
	options = { inline: false },
): Definition<Name, Schema, CtorArgs> {
	const schema = z.object({ name: z.literal(name), value });

	return Object.assign(
		(...args: CtorArgs) => schema.parse({ name, value: ctor(...args) }),
		options,
		{ schema, match: { name }, _ty: schema._output },
	);
}
