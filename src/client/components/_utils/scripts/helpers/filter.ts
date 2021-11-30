import traverseIndex from './_internal/traverseIndex';

/*
* Reduce the set of matched elements to those that match the selector or pass the function's test.
*
* @param  {String} s           - A string containing a selector expression to match elements against.
* @return {Array}              -  The collection of elements
*/
function filter(this: any, s) {
	let res = [];

	if (s === undefined) return res;

	if ( this.classList.contains( s.replace(/\./g,'') ) ) {
		res.push( this as never );
	}

	// Traverse the counter of a selector, reset to 0 when calling 	`__(selector).XXX()`
	traverseIndex.filter++;

	return res;
}
export default filter;