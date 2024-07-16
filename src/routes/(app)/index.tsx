import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { c } from '@/lib/riznit-engine';
import { RiznitEditor } from '@/lib/riznit-editor';
import type { Selection } from '@/lib/riznit-engine/selection';

export const Route = createFileRoute('/(app)/')({
	component: HomeScreen,
});

function HomeScreen() {
	const [prop] = useState(() =>
		c.prop(
			c.propExprEqExpr(
				c.expr(c.term(c.nat(256)), [c.exprOperator('+'), c.term(c.nat(314))]),
				c.expr(c.term(c.nat(5), [c.termOperator('*'), c.nat(1)])),
			),
		),
	);

	console.log(prop);

	const [selection] = useState<Selection>(() => ({
		type: 'selection/range',
		treeIndices: [0, 0],
		begin: [0, { type: 'range/full' }],
		end: [3, { type: 'range/end', end: 1 }],
	}));

	return (
		<main className="">
			<h1 className="text-10 m-4">Hello, world!</h1>
			<RiznitEditor prop={prop} selection={selection} />
		</main>
	);
}
