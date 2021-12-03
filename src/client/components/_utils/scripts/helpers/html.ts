/**
 * Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
 *
 * @param  {?String} el   - A string of HTML to set as the content of each matched element.
 * @return {Void|String}     - The HTML content to set
 */
 function html(this: any, el) {
    const rootObject = this;
    let res = null;

    this.each(function (this: any) {
        if (el === undefined) {
            res = this.innerHTML;
        } else {
            this.innerHTML = el;
            res = rootObject;
        }
    });

    return res;

}

	
export default html;