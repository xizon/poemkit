// ==========================================================================
// Browser sniffing
// Unfortunately, due to mixed support, UA sniffing is required
// ==========================================================================

let browser = {};

if ( typeof(window) !== 'undefined' ) {
	browser = {
	  isIE: Boolean(window.document.documentMode),
	  isEdge: window.navigator.userAgent.includes('Edge'),
	  isWebkit: 'WebkitAppearance' in document.documentElement.style && !/Edge/.test(navigator.userAgent),
	  isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
	  isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform),
	};
}


export default browser;
