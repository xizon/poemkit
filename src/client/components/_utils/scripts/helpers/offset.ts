
/*
* Get the current coordinates of the first element in the set of matched elements, relative to the document.
*
* @return {Json}      - An object containing the properties top and left. 
*/
function offset(this: any) {
	const box = this.getBoundingClientRect();
	let top = 0, 
		left = 0;
	
	//Include scrollbar and border
	top = box.top + window.pageYOffset - document.documentElement.clientTop;
	left = box.left + window.pageXOffset - document.documentElement.clientLeft;
	
	return { top: top, left: left };
	
}

export default offset;
