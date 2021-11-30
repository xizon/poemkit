/*
* Determine whether it is in JSON format
* @private
*/
function isJSON( str ){
	
	if ( typeof(str) === 'string' && str.length > 0 ) {

		if ( str.replace( /\"\"/g, '' ).replace( /\,/g, '' ) == '[{}]' ) {
			return false;
		} else {

			if (/^[\],:{}\s]*$/.test( str.replace(/\\["\\\/bfnrtu]/g, '@' ).
			replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
			replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

				return true;

			}else{
				return false;
			}	

		}

	} else {
		
		if ( 
			typeof(str) === 'object' && 
			Object.prototype.toString.call(str) === '[object Object]' &&
			! str.length
			) {
			return true;
		} else {
			return false;
		}
		
	}

}


export default isJSON;