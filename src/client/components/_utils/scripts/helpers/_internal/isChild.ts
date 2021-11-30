
/*
* Determine whether it is Child Node
* @private
*/
function isChild( el, p ) {
	if (!el || !p || !p.childNodes || !p.childNodes.length) {
		return false;
	}
	return ([].slice.call(p.childNodes).filter(function(n) {
		const found = (n === el);
		if (!found && (n as unknown as HTMLElement).childNodes && (n as unknown as HTMLElement).childNodes.length) {
			return isChild(el, n);
		}
		return found;
	})).length;
}


export default isChild;