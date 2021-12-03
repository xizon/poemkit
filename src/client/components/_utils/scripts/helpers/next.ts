import $$ from './_core/instance';

/**
 * Returns the element immediately following the specified one in its parent's children list, 
 * or null if the specified element is the last one in the list.
 *
 * @param  {String} s       - A string containing a selector expression to match elements against.
 * @return {Array}          - Contains only a collection of HTML elements.
 */
function next(this: any, s) {
    let res = [];

    this.each(function (this: any) {

        const el = this.nextElementSibling;

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


export default next;