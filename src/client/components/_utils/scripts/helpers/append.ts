/**
 * Puts data inside an element at the last index (Vanilla JS also has this method)
 *
 * @param  {Element|String} el   - An element or string to be parsed as HTML or XML and inserted into the tree.
 * @return {Void}
 */
 function append(this: any, el) {
    this.each(function (this: any) {
        if (typeof (el) === 'string') {

            // Just inside the element, after its last child.
            if( (document.createElement("div") as HTMLDivElement).insertAdjacentHTML ) {
                this.insertAdjacentHTML("beforeend", el);
            }
        } else {
            const html = (typeof (el) === 'string') ? el : el.outerHTML;
            this.innerHTML += html;
        }
    });
    return this;

}


	
export default append;