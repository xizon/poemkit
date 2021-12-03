
import $$ from './_core/instance';

/**
 * Reduce the set of matched elements to the first in the set.
 *
 * @return {Array}          - Contains only a collection of HTML elements.
 */
function first(this: any) {
    let res = [];

    let { elems } = this;
    elems = Array.prototype.slice.call(elems);
    elems.forEach(function (element, listIndex) {
        if (0 === listIndex) res.push(element as never);
    });

    return $$(res);
}

export default first;