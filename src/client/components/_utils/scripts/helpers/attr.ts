/**
 * Set one or more attributes for the set of matched elements.
 *
 * @param  {String} a                 - The name of the attribute to set.
 * @param  {String} v               - A value to set for the attribute. 
 * @return {Void|String}              - Get the value of an attribute for the first element in the set of matched elements.
 */
 function attr(this: any, a, v) {
    const rootObject = this;
    let res = null;

    this.each(function (this: any) {
        a = a || '';
        if (v === undefined) {
            let curVal = this.getAttribute(a);

            // Non-existent attributes
            res = curVal === null ? null : curVal;
        } else {
            this.setAttribute(a, v);
            res = rootObject;
        }
    });

    return res;

}

export default attr;