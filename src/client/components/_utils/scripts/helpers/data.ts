import stringlineToHump from './_internal/stringlineToHump';
import isValidNumeric from './_internal/isValidNumeric';
import isJSON from './_internal/isJSON';

/*
* Store arbitrary data associated with the matched elements.
*
* @param  {String} a                 - A string naming the piece of data to set
* @param  {String} v                 - The new data value.
* @return {Void|String}              - Return arbitrary data associated with the first element as set by data() or by an HTML5 data-* attribute.
*/
function data(this: any, a, v) {
	a = a || '';
	const _s = stringlineToHump( a );

	if (v === undefined) {
		let res = this.dataset[_s];
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
		this.dataset[_s] = v;
	}
}

export default data;