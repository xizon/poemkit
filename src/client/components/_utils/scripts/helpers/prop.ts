import isValidNumeric from './_internal/isValidNumeric';
import isJSON from './_internal/isJSON';

/*
* Set one or more attributes for the set of matched Form elements.
*
* @param  {String} a                 - The name of the attribute to set.
* @param  {String} v                 - A value to set for the attribute. 
* @return {Void|String}              - Get the value of an attribute for the first element in the set of matched elements.
*/
function prop(this: any, a, v) {
	a = a || '';
	if (v === undefined) {
		
		let res = this[a];
		if ( res == 'true' ) res = true;
		if ( res == 'false' ) res = false;
		if ( isValidNumeric(res) ) res = parseFloat(res);

		//check if Array or JSON format
		if ( isJSON(res) ) {
			if ( Object.prototype.toString.call(res) === '[object Object]' ) {
				res = [res];
			} else {
				//If the result is an array, you need to determine whether it is the expected array
				res = [JSON.parse(res)];
			}
		}
		// Non-existent attributes
		return res == undefined ? null : res;
	} else {
		this[a] = v;
	}
}

export default prop;