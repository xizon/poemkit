
/*
* Get the siblings of each element in the set of matched elements
*
* @param  {String} s                 - A string containing a selector expression to match elements against.
* @return {Array}              -  The collection of elements
*/
function siblings(this: any,  s ) {
	
	const self = this;
	
	// for collecting siblings
	let siblings = []; 
	// if no parent, return no sibling
	if(!self.parentNode) {
		return siblings;
	}
	// first child of the parent node
	let sibling  = self.parentNode.firstChild;

	// collecting siblings
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== self) {

			//Determine whether the ID, class and HTML nodes match
			if (s !== undefined) {
				if ( 
					sibling.nodeName.toLowerCase() === s || 
					sibling.classList.contains( s.replace(/\./g,'') ) || 
					'#' + sibling.id === s 
				) {
					siblings.push(sibling as never);
				}
				
			} else {
				siblings.push(sibling as never);
			}

			
		}

		//
		sibling = sibling.nextSibling;
	}
	
	
	return siblings;
}

export default siblings;