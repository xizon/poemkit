import traverseIndex from './_internal/traverseIndex';
import GUID from './_public/GUID';

/*
* Iterate over an object, executing a function for each matched element.
*
* @param  {Function} fn         - A function to execute for each matched element.
* @return {Void} 
*/  
function each(this: any, fn) {

	if (fn && (typeof fn == "function")) {
		//If the ID does not exist, itemDomsStr cannot be obtained
		if ( this.id.length === 0 ) {
			this.id = 'eachitem-' + GUID.create();
		}

		//!import: The returned HTML element must be current, 
		//otherwise all HTML elements under document may be queried
		const itemDomsStr = '#' + this.id;

		fn.call(this, traverseIndex.each, itemDomsStr);

		// Traverse the counter of a selector, reset to 0 when calling 	`__(selector).XXX()`
		traverseIndex.each++;

	}


}	


export default each;