
/*
* Insert an element as the first child node of another
*
* @param  {Element} el  - A DOM node containing one selector to match against.
*/
function prependTo(this: any, el) {
    if (this.firstChild) {
        this.insertBefore(el, this.firstChild);
    } 
}

export default prependTo;