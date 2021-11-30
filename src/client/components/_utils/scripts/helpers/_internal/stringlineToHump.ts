
/*
* Convert string to hump naming
* @private
*/
function stringlineToHump(str) {
	if ( typeof str === 'string' && str.length > 0 ) {
		const re=/-(\w)/g;
		str=str.replace(re,function($0,$1){
			return $1.toUpperCase();
		});
		return str;
	} else {
		return str;
	}
}



export default stringlineToHump;