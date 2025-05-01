import type { PropsWithUno } from '@/lib/types';
import { clsx } from 'clsx';
import type { PropsWithChildren } from 'react';

interface Props {
	className?: string;
	isSelected?: boolean;
	isCursorLOocated?: boolean;
}
export function MathFragment({
	className,
	isSelected,
	isCursorLOocated,

	children,

	...props
}: PropsWithUno<PropsWithChildren<Props>>) {
	return (
		<span
			className={clsx(
				className,
				isCursorLOocated && '$-math-cursor-located',
				isSelected && '$-math-selected',
			)}
			{...props}
		>
			{children}
		</span>
	);
}
