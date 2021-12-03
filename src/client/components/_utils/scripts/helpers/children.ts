import $$ from './_core/instance';

/**
 * Returns a live HTMLCollection which contains all of the child elements 
 * of the node upon which it was called.
 *
 * @param  {Element} s         - The selector that needs to be filtered. A DOMstring containing 
 *                               one selector to match against.
 * @return {Array}              -  The collection of elements
 */
function children(this: any, s) {

    let res = [];

    this.each(function (this: any) {
        const self = this;
        const childrenList = self.children;


        if (childrenList) {
            for (let i = 0; i < childrenList.length; i++) {

                const _currentNode = childrenList[i];

                //Determine whether the ID, class and HTML nodes match
                if (s !== undefined) {
                    if (
                        _currentNode.nodeName.toLowerCase() === s ||
                        _currentNode.classList.contains(s.replace(/\./g, '')) ||
                        '#' + _currentNode.id === s
                    ) {
                        res.push(_currentNode as never);
                    }

                } else {

                    res.push(_currentNode as never);
                }

            }

        }

    });

    return $$(res);

}


export default children;