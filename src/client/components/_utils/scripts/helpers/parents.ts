
import $$ from './_core/instance';

/**
 * Get the ancestors of each element in the current set of matched elements.
 *
 * @param  {String} s                 - A string containing a selector expression to match elements against.
 * @return {Array}                    - Contains only a collection of HTML elements.
 */
function parents(this: any, s) {
    let res = [];

    this.each(function (this: any) {
        let parentSelector = document.querySelector(s);

        // If no parentSelector defined will bubble up all the way to *document*
        if (parentSelector === undefined) {
            parentSelector = document;
        }

        let _parent = this.parentNode;

        while (_parent !== parentSelector) {
            const _currentNode = _parent;

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

            //
            _parent = _currentNode.parentNode;
        }

        // Push that parentSelector you wanted to stop at
        if (parentSelector !== null) res.push(parentSelector as never);


    });

    return $$(res);

}

export default parents;