
import $$ from './_core/instance';

/**
 * Get the siblings of each element in the set of matched elements
 *
 * @param  {String} s                 - A string containing a selector expression to match elements against.
 * @return {Array}              -  The collection of elements
 */
function siblings(this: any, s) {
    let res = [];

    this.each(function (this: any) {
        const self = this;

        // if no parent, return no sibling
        if (self.parentNode) {

            // first child of the parent node
            let sibling = self.parentNode.firstChild;

            // collecting siblings
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== self) {

                    //Determine whether the ID, class and HTML nodes match
                    if (s !== undefined) {
                        if (
                            sibling.nodeName.toLowerCase() === s ||
                            sibling.classList.contains(s.replace(/\./g, '')) ||
                            '#' + sibling.id === s
                        ) {
                            res.push(sibling as never);
                        }

                    } else {
                        res.push(sibling as never);
                    }


                }

                //
                sibling = sibling.nextSibling;
            }

        }

    });


    return $$(res);
}


export default siblings;