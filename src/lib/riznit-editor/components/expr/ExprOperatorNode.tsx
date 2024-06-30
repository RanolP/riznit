import type { c } from '@/lib/riznit-engine';
import { match } from 'ts-pattern';
import type { z } from 'zod';

interface Props {
	exprOperator: z.output<typeof c.exprOperator.schema>;
}
export const ExprOperatorNode = ({ exprOperator }: Props) =>
	match(exprOperator.properties.kind)
		.with('add', () => <span>+</span>)
		.with('subtract', () => <span>-</span>)
		.exhaustive();
