
/**
 * Before the element itself.
 *
 * @param  {String} el   - The string to be parsed as HTML or XML and inserted into the tree.
 * @return {Void}
 */
 function before(this: any, el) {
    this.each(function (this: any) {
        if (typeof (el) === 'string') {

            // Before the element itself.
            if( (document.createElement("div") as HTMLDivElement).insertAdjacentHTML ) {
                this.insertAdjacentHTML("beforebegin", el);
            }
        } else {

            const html = (typeof (el) === 'string') ? el : el.outerHTML;
            this.insertAdjacentHTML("beforebegin", html);
        }
    });
    return this;

}

export default before;