import { isSelected, type c, type Selection } from '@/lib/riznit-engine';
import { match } from 'ts-pattern';
import { MathFragment } from '../MathFragment';
import type { PropsWithUno } from '@/lib/types';

interface Props {
	termOperator: typeof c.termOperator._ty;
	selection: Selection | null;
}
export const TermOperatorNode = ({
	termOperator,
	selection,
	...props
}: PropsWithUno<Props>) => (
	<MathFragment isSelected={isSelected(selection, 0)} {...props}>
		{match(termOperator.value)
			.with('invisible-multiplication', () => '')
			.with('multiplication', () => '×')
			.with('division', () => '÷')
			.exhaustive()}
	</MathFragment>
);
