import traverseIndex from './_internal/traverseIndex';

/*
* Reduce the set of matched elements to the one at the specified index.
*
* @param  {Number} index   - A number for index.
* @return {Array}          - Contains only a collection of HTML elements.
*/
function eq(this: any, index) {
    let res = [];

    if ( traverseIndex.eq === index ) {
        res = this;
    }

    // Traverse the counter of a selector, reset to 0 when calling 	`__(selector).XXX()`
    traverseIndex.eq++;

    return res;
}

export default eq;