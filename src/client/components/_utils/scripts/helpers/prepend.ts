/*
* Puts the prepending element at the first index.  (Vanilla JS also has this method)
*
* @param  {Element|String} el   - An element or string to be parsed as HTML or XML and inserted into the tree.
* @return {Void}
*/
function prepend(this: any, el) {
    
    if ( typeof(el) === 'string' ) {
        
        // Just inside the element, before its first child.
        if( (document.createElement("div") as HTMLDivElement).insertAdjacentHTML ) {
            this.insertAdjacentHTML("afterbegin", el);
            return this;
        }	
    } else {
        
        const html = (typeof(el) === 'string') ? el : el.outerHTML;
        this.innerHTML = html + this.innerHTML;	
    }
    
}


export default prepend;