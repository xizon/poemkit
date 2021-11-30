/*
* Search for a given element from among the matched elements.
*
* @return {Number}     - The return value is an integer indicating the position of the 
*                        first element within the object relative to its sibling elements.
*/
function getIndex(this: any) {
	const self = this;
	const children = self.parentNode.childNodes;
	
	let num = 0;
	for (let i=0; i<children.length; i++) {
			if (children[i]==self) return num;
			if (children[i].nodeType==1) num++;
	}
	return -1;
}	

export default getIndex;