/*
* Traverse the counter of a selector, reset to 0 when calling 	`__(selector).XXX()`
* @private
*/
const traverseIndex = {
    // for `each()`
    each: 0,
    // for `eq()`
    eq: 0,
    // for `first()`
    first: 0,
    // for `last()`
    last: 0,
    total_last: 0,
    // for `filter()`
    filter: 0,
    // for `not()`
    not: 0,
    // for `maxDimension()`
    maxDimension: 0,
    total_maxDimension: 0,
    elements_maxDimension: []
};

export default traverseIndex;