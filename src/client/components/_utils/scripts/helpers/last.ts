import $$ from './_core/instance';

/**
 * Reduce the set of matched elements to the last in the set.
 *
 * @return {Array}          - Contains only a collection of HTML elements.
 */
function last(this: any) {
    let res = [];

    let { elems, storeSelector } = this;
    let max = storeSelector.elems.length;

    elems = Array.prototype.slice.call(elems);
    elems.forEach(function (element, listIndex) {
        if (max - 1 === listIndex) res.push(element as never);
    });

    return $$(res);
}


export default last;