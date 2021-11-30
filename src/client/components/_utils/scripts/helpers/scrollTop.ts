/*
* Get the number of pixels that an element's content is scrolled vertically.
*
* @return {Number}  - Returns a pure number calculated.
*/    
function scrollTop(this: any) {
	const supportPageOffset = window.pageXOffset !== undefined;
	const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
	const scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? this.scrollTop : document.body.scrollTop;
	return scrollTop;
}

export default scrollTop;
