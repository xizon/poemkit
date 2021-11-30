
/*
* Get the actual value with user specific methed
* it can be 'width', 'height', 'outerWidth', 'outerHeight'
* @private
* @param {Element} el           - A DOM node containing one selector to match against.
* @param {String} prop          - A string naming the property of style.
* @param {?Json} config         - Whether or not margin is included. The key `includeMargin` 
									takes effect when set to true
* @return {Number}              - Returns a pure number.
*/
function actualPropertyValue(el, prop, config?) {
	const style    = (window.getComputedStyle as unknown as boolean) ? window.getComputedStyle(el) : el.currentStyle,
		display    = style.display,
		position   = style.position,
		visibility = style.visibility;
		
	let marginWidth = 0;
	let marginHeight = 0;

	let maxVal;
	let actualVal;


	if ( config && config.includeMargin === true ) {
		marginWidth = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
		marginHeight = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
	}

	
	if ( prop === 'width' ) {
		maxVal = parseFloat( style.maxWidth );

		// if its not hidden we just return normal height
		if(display !== 'none' && maxVal !== '0') {
			return el.clientWidth;
		}
	}
	if ( prop === 'height' ) {
		maxVal = parseFloat( style.maxHeight );
		if(display !== 'none' && maxVal !== '0') {
			return el.clientHeight;
		} 
	}
	
	if ( prop === 'outerWidth' ) {
		maxVal = parseFloat( style.maxWidth );
		if(display !== 'none' && maxVal !== '0') {
			return el.offsetWidth + marginWidth;
		}
	}
	if ( prop === 'outerHeight' ) {
		maxVal = parseFloat( style.maxHeight );
		if(display !== 'none' && maxVal !== '0') {
			return el.offsetHeight + marginHeight;
		} 
	}

	// the element is hidden so:
	// making the el block so we can meassure its height but still be hidden
	el.style.position   = 'absolute';
	el.style.visibility = 'hidden';
	el.style.display    = 'block';


	if ( prop === 'width' ) actualVal = el.clientWidth;
	if ( prop === 'height' ) actualVal = el.clientHeight;
	if ( prop === 'outerWidth' ) actualVal = el.offsetWidth + marginWidth;
	if ( prop === 'outerHeight' ) actualVal = el.offsetHeight + marginHeight;

	// reverting to the original values
	el.style.display    = display;
	el.style.position   = position;
	el.style.visibility = visibility;

	return actualVal;
}


export default actualPropertyValue;