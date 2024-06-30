import type { c } from '@/lib/riznit-engine';
import type { z } from 'zod';

interface Props {
	nat: z.output<typeof c.nat.schema>;
}
export const NatNode = ({ nat }: Props) => <span>{nat.properties.value}</span>;
