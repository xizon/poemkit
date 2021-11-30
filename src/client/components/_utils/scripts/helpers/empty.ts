
/*
* Remove all child nodes of the set of matched elements from the DOM.
*
* @return {Void} 
*/  
function empty(this: any) {

	while (this.firstChild) {
		this.removeChild(this.firstChild);
	}
}

export default empty;
