import traverseIndex from './_internal/traverseIndex';

/*
* Remove elements from the set of matched elements.
*
* @param  {String} s           - A string containing a selector expression to match elements against.
* @return {Array}              -  The collection of elements
*/
function not(this: any, s) {
	let res = [];

	if (s === undefined) return res;

	if ( ! this.classList.contains( s.replace(/\./g,'') ) ) {
		res.push( this as never );
	}

	// Traverse the counter of a selector, reset to 0 when calling 	`__(selector).XXX()`
	traverseIndex.not++;

	return res;

}

export default not;