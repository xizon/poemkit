/*
* Get CSS path from Dom element
* @private
*/
function elementPath(el) {

	if (!(el instanceof Element)) return;

	//
	const path: string[] = [];
	let itemIndex = 0;
	while (el.nodeType === Node.ELEMENT_NODE) {
		const oldSelector = el.nodeName.toLowerCase();
		let selector = oldSelector;

		if (el.id) {
			if ( itemIndex > 0 ) selector += '#' + el.id;
		} 
		if (el.className) {
			selector += '.' + el.className.replace(/\s+/g, ".");
		} 
		
		selector = selector.replace(/\.\./g, ".");


		//Add one or more items to the start of an array's result set.
		path.unshift(selector);


		//
		el = el.parentNode;

		//
		itemIndex++;
	}


	return path.join(" > ");
}

export default elementPath;