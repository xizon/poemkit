
/**
 *  Find the Tallest or widest of all elements
 *
 * @return {Json}      - An object containing the properties width and height.
 */
 function maxDimension(this: any) {
    const { storeSelector } = this;
    let res = {
        'height': 0,
        'width': 0
    };

    let traverseIndex = 0;
    let max = storeSelector.elems.length;

    this.each(function (this: any) {
        if (traverseIndex === max - 1) {

            const elementHeights: any[] = Array.prototype.map.call(storeSelector.elems, function (el) {
                return el.clientHeight;
            });

            const elementWidths: any[] = Array.prototype.map.call(storeSelector.elems, function (el) {
                return el.clientWidth;
            });

            const maxHeight = Math.max.apply(null, elementHeights);
            const maxWidth = Math.max.apply(null, elementWidths);


            res = {
                'height': maxHeight,
                'width': maxWidth
            };

        }

        // Traverse the counter of a selector, reset to 0 when calling 	`__(selector).XXX()`
        traverseIndex++;
    });

    return res;

}

export default maxDimension;