
import $$ from './_core/instance';

/**
 * Returns the DOM node's parent Element, or null if the node either has no parent,
 * or its parent isn't a DOM Element.
 *
 * @param  {String} s       - A string containing a selector expression to match elements against.
 * @return {Array}          - Contains only a collection of HTML elements.
 */
function parent(this: any, s) {
    let res = [];
    this.each(function (this: any) {

        const el = this.parentElement;

        if (s === undefined) {
            if (el !== null) res.push(el as never);
        } else {
            if (
                el !== null &&
                //Determine whether the ID, class and HTML nodes match
                (el.nodeName.toLowerCase() === s || el.classList.contains(s.replace(/\./g, '')) || '#' + el.id === s)
            ) {
                res.push(el as never);
            }

        }
    });

    return $$(res);

}


export default parent;