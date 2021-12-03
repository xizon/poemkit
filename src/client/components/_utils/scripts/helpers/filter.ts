import $$ from './_core/instance';

/**
 * Reduce the set of matched elements to those that match the selector or pass the function's test.
 *
 * @param  {String} s           - A string containing a selector expression to match elements against.
 * @return {Array}              -  The collection of elements
 */
function filter(this: any, s) {
    let res = [];

    this.each(function (this: any) {

        if (s !== undefined) {
            if (this.classList.contains(s.replace(/\./g, ''))) {
                res.push(this as never);
            }
        }

    });

    return $$(res);

}


export default filter;