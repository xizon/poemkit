
import traverseIndex from './_internal/traverseIndex';

/*
* Reduce the set of matched elements to the first in the set.
*
* @return {Array}          - Contains only a collection of HTML elements.
*/
function first(this: any) {
	let res = [];

	if ( traverseIndex.first === 0 ) {
		res = this;
	}

	// Traverse the counter of a selector, reset to 0 when calling 	`__(selector).XXX()`
	traverseIndex.first++;

	return res;
}

export default first;