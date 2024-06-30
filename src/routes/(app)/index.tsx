import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { c } from '@/lib/riznit-engine';
import { RiznitEditor } from '@/lib/riznit-editor';

export const Route = createFileRoute('/(app)/')({
	component: HomeScreen,
});

function HomeScreen() {
	const [prop] = useState(() =>
		c.prop(
			c.propExprEqExpr({
				lhs: c.expr({
					mostLeft: c.term({
						mostLeft: c.nat({ value: 2 }),
						operations: [],
					}),
					operations: [
						[
							c.exprOperator({ kind: 'add' }),
							c.term({
								mostLeft: c.nat({ value: 3 }),
								operations: [],
							}),
						],
					],
				}),
				rhs: c.expr({
					mostLeft: c.term({
						mostLeft: c.nat({ value: 5 }),
						operations: [],
					}),
					operations: [],
				}),
			}),
		),
	);

	return (
		<>
			<h1>Hello, world!</h1>
			<RiznitEditor prop={prop} />
		</>
	);
}
