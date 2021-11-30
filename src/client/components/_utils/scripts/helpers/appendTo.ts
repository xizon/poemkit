
/*
* Insert an element to the end of the target
*
* @param  {Element} el  - A DOM node containing one selector to match against.
*/
function appendTo(this: any, el) {
    this.appendChild(el);
}


export default appendTo;