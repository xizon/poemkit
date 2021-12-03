/**
 * Insert an element to the end of the target
 *
 * @param  {Element} el  - A DOM node containing one selector to match against.
 */
 function appendTo(this: any, el) {
    this.each(function (this: any) {
        this.appendChild(el);
    });
    return this;

}

export default appendTo;