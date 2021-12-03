
/**
 * After the element itself.
 *
 * @param  {String} el   - The string to be parsed as HTML or XML and inserted into the tree.
 * @return {Void}
 */
 function after(this: any, el) {
    this.each(function (this: any) {
        if (typeof (el) === 'string') {

            //  After the element itself.
            if( (document.createElement("div") as HTMLDivElement).insertAdjacentHTML ) {
                this.insertAdjacentHTML("afterend", el);
            }
        } else {

            const html = (typeof (el) === 'string') ? el : el.outerHTML;
            this.insertAdjacentHTML("afterend", html);
        }
    });
    return this;

}

export default after;