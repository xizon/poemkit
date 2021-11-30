/*
* Set one or more attributes for the set of matched elements.
*
* @param  {String} a                 - The name of the attribute to set.
* @param  {String} v               - A value to set for the attribute. 
* @return {Void|String}              - Get the value of an attribute for the first element in the set of matched elements.
*/
function attr(this: any, a, v) {
	a = a || '';
	if (v === undefined) {

		let res = this.getAttribute(a);
		// Non-existent attributes
		return res == null ? null : res;
	} else {
		this.setAttribute(a, v);
	}	
	
};

export default attr;