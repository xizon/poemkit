
/*
* After the element itself.
*
* @param  {String} el   - The string to be parsed as HTML or XML and inserted into the tree.
* @return {Void}
*/
function after(this: any, el) {

    if ( typeof(el) === 'string' ) {
        
        //  After the element itself.
        if( (document.createElement("div") as HTMLDivElement).insertAdjacentHTML ) {
            this.insertAdjacentHTML("afterend", el);
            return this;
        }	
    } else {
        
        const html = (typeof(el) === 'string') ? el : el.outerHTML;
        this.insertAdjacentHTML("afterend", html);
    }
}


export default after;