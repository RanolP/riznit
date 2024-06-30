import type { c } from '@/lib/riznit-engine';
import { match } from 'ts-pattern';
import type { z } from 'zod';

interface Props {
	termOperator: z.output<typeof c.termOperator.schema>;
}
export const TermOperatorNode = ({ termOperator }: Props) =>
	match(termOperator.properties.kind)
		.with('invisible-multiplication', () => <span />)
		.with('multiplication', () => <span>\mul</span>)
		.with('division', () => <span>\div</span>)
		.exhaustive();
