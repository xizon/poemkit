/*
* Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
*
* @return {Json}      - An object containing the properties top and left.
*/
function position(this: any) {
	
	let top = this.offsetTop ? this.offsetTop : 0, 
		left = this.offsetLeft ? this.offsetLeft : 0;
	
	return { top: top, left: left };
}

export default position;