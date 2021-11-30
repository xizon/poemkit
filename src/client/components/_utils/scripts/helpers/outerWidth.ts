
import getStyle from './_internal/getStyle';
/*
* Get or set the current computed outer width for elenments (including padding, border, and optionally margin)
*
* @param  {Boolean} includeMargin         - A Boolean indicating whether to include the element's margin in the calculation.
* @return {Number}  - Returns the width of the element, including left and right padding, border, and optionally margin, in pixels.
*/  
function outerWidth(this: any,  includeMargin ) {

	const self = this;
	
	const width_IncPaddingBorderScrollbar = self.offsetWidth;
	const marginLeft = getStyle( self,  'marginLeft' );
	const marginRight = getStyle( self,  'marginRight' );
	const borderLeftWidth = getStyle( self,  'borderLeftWidth' ) || 0;
	const borderRightWidth = getStyle( self,  'borderRightWidth' ) || 0;

	let totalWidth = width_IncPaddingBorderScrollbar;

	if ( typeof (includeMargin) !== 'undefined' ) {
		totalWidth = totalWidth+marginLeft+marginRight;
	}

	return totalWidth;
}

export default outerWidth;