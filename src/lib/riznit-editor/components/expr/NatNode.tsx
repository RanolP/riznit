import { isSelected, type c, type Selection } from '@/lib/riznit-engine';
import { MathFragment } from '../MathFragment';
import { Fragment } from 'react/jsx-runtime';
import { clsx } from 'clsx';

interface Props {
	nat: typeof c.nat._ty;
	selection: Selection | null;
}
export const NatNode = ({ nat, selection }: Props) => (
	<Fragment key={nat.value}>
		{Array.from(nat.value.toString()).map((text, idx, arr) => (
			<MathFragment
				className={clsx(idx === 0 && 'pl-2', idx + 1 === arr.length && 'pr-2')}
				key={`${nat.value}-${idx}`}
				isSelected={isSelected(selection, idx)}
			>
				{text}
			</MathFragment>
		))}
	</Fragment>
);
