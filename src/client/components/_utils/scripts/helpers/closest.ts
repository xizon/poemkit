import $$ from './_core/instance';

/**
 * Traverses the Element and its parents (heading toward the document root) 
 * until it finds a node that matches the provided selector string. 
 *
 * @param  {String} s           - A string containing a selector expression to match elements against.
 * @return {Array}              - Contains only a collection of HTML elements.
 */
function closest(this: any, s) {
    let res = [];

    this.each(function (this: any) {
        //using recursivity
        const el = this.closest(s);

        //Must judge the result of closest()
        if (el !== null) {
            res.push(el as never);
        }

    });

    return $$(res);

}


export default closest;