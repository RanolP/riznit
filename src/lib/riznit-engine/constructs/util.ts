import { z } from 'zod';
import type { SetOptional, Simplify } from 'type-fest';

type Rest<
	Shape extends z.ZodRawShape,
	Prefill extends Partial<z.input<z.ZodObject<Shape>>>,
> = Simplify<Omit<z.input<z.ZodObject<Shape>>, keyof Prefill>>;

export const struct = <
	const Name extends string,
	const Shape extends z.ZodRawShape,
	const Prefill extends Partial<z.input<z.ZodObject<Shape>>>,
>(
	name: Name,
	properties: Shape,
	prefill: Prefill,
) => {
	const schema = z.object({
		name: z.literal(name),
		properties: z.object(properties),
	});

	return Object.assign(
		(rest: Rest<Shape, Prefill>) =>
			schema.parse({
				name,
				properties: {
					...prefill,
					...rest,
				},
			}),
		{ schema, match: { name } },
	);
};

const _enum = <
	const Name extends string,
	const Variants extends [z.ZodSchema, z.ZodSchema, ...z.ZodSchema[]],
>(
	name: Name,
	variants: Variants,
) => {
	const schema = z.object({
		name: z.literal(name),
		variant: z.union(variants),
	});

	return Object.assign(
		(variant: z.input<typeof schema>['variant']) =>
			schema.parse({
				name,
				variant,
			}),
		{ schema, match: { name } },
	);
};
export { _enum as enum };
