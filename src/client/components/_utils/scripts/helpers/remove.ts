/*
* Remove the set of matched elements from the DOM.
*
* @return {Void} 
*/  
function remove(this: any) {
	this.parentNode.removeChild(this);
}

export default remove;
