import getStyle from './_internal/getStyle';

/*
* Get or set the current computed outer height for elenments (including padding, border, and optionally margin)
*
* @param  {Boolean} includeMargin         - A Boolean indicating whether to include the element's margin in the calculation.
* @return {Number}   - Returns the height of the element, including left and right padding, border, and optionally margin, in pixels.
*/  
function outerHeight(this: any,  includeMargin ) { 

	const self = this;

	const height_IncPaddingBorderScrollbar = self.offsetHeight;
	const marginTop = getStyle( self,  'marginTop' );
	const marginBottom = getStyle( self,  'marginBottom' );
	const borderTopWidth = getStyle( self,  'borderTopWidth' ) || 0;
	const borderBottomWidth = getStyle( self,  'borderBottomWidth' ) || 0;

	let totalHeight = height_IncPaddingBorderScrollbar;

	if ( typeof (includeMargin) !== 'undefined' ) {
		totalHeight = totalHeight+marginTop+marginBottom;
	}

	return totalHeight;
}
		
export default outerHeight;