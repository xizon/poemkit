
/*
* Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
*
* @param  {?String} el   - A string of HTML to set as the content of each matched element.
* @return {Void|String}     - The HTML content to set
*/
function html(this: any, el) {
    if (el === undefined) {
        return { data: this.innerHTML };
    } else {
        this.innerHTML = el; 
    }
}
	
export default html;