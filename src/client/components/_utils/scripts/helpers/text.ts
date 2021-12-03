
import htmlEncode from './_public/htmlEncode';


/**
 * Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.
 *
 * @param  {?String} el      - The text to set as the content of each matched element.
 * @return {Void|String}     - The HTML content to set
 */
 function text(this: any, el) {
    const rootObject = this;
    let res = null;

    this.each(function (this: any) {
        if (el === undefined) {

            //Remove HTML Tags
            let htmlstr = this.innerHTML;
            htmlstr = htmlstr.replace(/(<([^>]+)>)/ig, '');

            res = htmlstr;
        } else {
            this.innerHTML = htmlEncode(el);
            res = rootObject;
        }
    });
    return res;


}


export default text;