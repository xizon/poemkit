
import traverseIndex from './_internal/traverseIndex';

/*
*  Find the Tallest or widest of all elements
*
* @return {Json}      - An object containing the properties width and height.
*/
function maxDimension(this: any) {

	if ( traverseIndex.maxDimension === traverseIndex.total_maxDimension-1 ) {

		const currentSelector = traverseIndex.elements_maxDimension;

		const elementHeights: any[] = Array.prototype.map.call(currentSelector, function (el) {
			return el.clientHeight;
		});

		const elementWidths: any[] = Array.prototype.map.call(currentSelector, function (el) {
			return el.clientWidth;
		});

		const maxHeight = Math.max.apply(null, elementHeights);
		const maxWidth = Math.max.apply(null, elementWidths);


		return {
			'height': maxHeight,
			'width': maxWidth
		};

	}

	// Traverse the counter of a selector, reset to 0 when calling 	`__(selector).XXX()`
	traverseIndex.maxDimension++;
	traverseIndex.elements_maxDimension.push( this as never );



}

export default maxDimension;