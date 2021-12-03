import $$ from './_core/instance';

/**
 * Reduce the set of matched elements to the one at the specified index.
 *
 * @param  {Number} index   - A number for index.
 * @return {Array}          - Contains only a collection of HTML elements.
 */
 function eq(this: any, index) {
    let res = [];

    let { elems } = this;
    elems = Array.prototype.slice.call(elems);
    elems.forEach(function (element, listIndex) {
        if (index === listIndex) res.push(element as never);
    });

    return $$(res);
}


export default eq;