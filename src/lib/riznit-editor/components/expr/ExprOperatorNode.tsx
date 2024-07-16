import { isSelected, type c, type Selection } from '@/lib/riznit-engine';
import { match } from 'ts-pattern';
import { MathFragment } from '../MathFragment';
import type { PropsWithUno } from '@/lib/types';

interface Props {
	exprOperator: typeof c.exprOperator._ty;
	selection: Selection | null;
}
export const ExprOperatorNode = ({
	exprOperator,
	selection,
	...props
}: PropsWithUno<Props>) => (
	<MathFragment isSelected={isSelected(selection, 0)} {...props}>
		{match(exprOperator.value)
			.with('add', () => '+')
			.with('subtract', () => '-')
			.exhaustive()}
	</MathFragment>
);
