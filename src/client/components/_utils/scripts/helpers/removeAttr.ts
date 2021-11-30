/*
* Remove an attribute from each element in the set of matched elements.
*
* @param  {String} a                 - A string naming the piece of data to delete.
* @return {Void} 
*/
function removeAttr(this: any, a) {
	a = a || '';
	this.removeAttribute(a);
}

export default removeAttr;