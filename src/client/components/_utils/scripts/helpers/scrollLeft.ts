
/*
* Get the number of pixels that an element's content is scrolled from its left edge.
*
@return {Number}  - Returns a pure number calculated.
*/   
function scrollLeft(this: any,  val ) {
	const supportPageOffset = window.pageXOffset !== undefined;
	const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
	const scrollLeft = supportPageOffset ? window.pageXOffset : isCSS1Compat ? this.scrollLeft : document.body.scrollLeft;
	return scrollLeft;
}

export default scrollLeft;
