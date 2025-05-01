import { match } from 'ts-pattern';

type RangeBegin =
	| { type: 'range/begin'; begin: number }
	| { type: 'range/full' };

type RangeEnd = { type: 'range/end'; end: number } | { type: 'range/full' };

export type Selection =
	| {
			type: 'selection/range';
			treeIndices: number[];
			begin: [number, RangeBegin];
			end: [number, RangeEnd];
	  }
	| { type: 'selection/full' };

export function propagate(
	selection: Selection | null,
	childIndex: number,
): Selection | null {
	if (!selection) return null;
	if (selection.type === 'selection/full') return selection;
	if (selection.treeIndices.length === 0) {
		if (isSelected(selection, childIndex)) return { type: 'selection/full' };
		return null;
	}
	if (selection.treeIndices[0] !== childIndex) return null;
	return {
		...selection,
		treeIndices: selection.treeIndices.slice(1),
	};
}

export function isSelected(
	selection: Selection | null,
	currIndex: number,
): boolean {
	if (!selection) return false;
	if (selection.type === 'selection/full') return true;
	if (selection.treeIndices.length !== 0) return false;
	const {
		begin: [beginNode, beginRange],
		end: [endNode, endRange],
	} = selection;

	if (!(beginNode <= currIndex && currIndex <= endNode)) return false;
	if (beginNode < currIndex && currIndex < endNode) return true;
	if (beginNode === currIndex && !includes(beginRange, currIndex)) return false;
	if (currIndex === endNode && !includes(endRange, currIndex)) return false;

	return true;
}

function includes(range: RangeBegin | RangeEnd, i: number): boolean {
	return match(range)
		.with({ type: 'range/full' }, () => true)
		.with({ type: 'range/begin' }, ({ begin }) => begin <= i)
		.with({ type: 'range/end' }, ({ end }) => i < end)
		.exhaustive();
}
