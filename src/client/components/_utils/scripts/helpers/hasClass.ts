/*
* Determine whether any of the matched elements are assigned the given class.
*
* @param  {String} v         - The class name to search for.
* @return {Boolean}   - Return true if the class is assigned to an element
*/  
function hasClass(this: any, v) {
	return this.classList.contains( v ) ? true : false;
}	

export default hasClass;
