import traverseIndex from './_internal/traverseIndex';

/*
* Reduce the set of matched elements to the last in the set.
*
* @return {Array}          - Contains only a collection of HTML elements.
*/
function last(this: any) {
	let res = [];

	if ( traverseIndex.last === traverseIndex.total_last-1 ) {
		res = this;
	}

	// Traverse the counter of a selector, reset to 0 when calling 	`__(selector).XXX()`
	traverseIndex.last++;

	return res;

}

export default last;