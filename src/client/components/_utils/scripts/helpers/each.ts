import GUID from './_public/GUID';

/**
 * Iterate over an object, executing a function for each matched element.
 *
 * @param  {Function} fn         - A function to execute for each matched element.
 * @return {NodeList} 
 */
 function each(this: any, fn) {
    if (fn && (typeof fn == 'function')) {
        let { elems } = this;
        elems = Array.prototype.slice.call(elems);
        elems.forEach(function (element, index, array) {

            //If the ID does not exist, itemDomsStr cannot be obtained
            // Very critical, other possible methods of manipulation dom will use id
            if ((element.id !== undefined && element.id.length === 0) || element.id === undefined) {
                element.id = 'eachitem-' + GUID.create();
            }

            //!import: The returned HTML element must be current, 
            //otherwise all HTML elements under document may be queried
            const itemDomsStr = '#' + element.id;

            fn.call(element, index, itemDomsStr, array);

        });

    }
}



export default each;