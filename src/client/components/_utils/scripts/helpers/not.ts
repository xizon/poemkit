import $$ from './_core/instance';

/**
 * Remove elements from the set of matched elements.
 *
 * @param  {String} s           - A string containing a selector expression to match elements against.
 * @return {Array}              -  The collection of elements
 */
function not(this: any, s) {
    let res = [];

    this.each(function (this: any) {

        if (s !== undefined) {
            if (!this.classList.contains(s.replace(/\./g, ''))) {
                res.push(this as never);
            }
        }

    });

    return $$(res);


}


export default not;