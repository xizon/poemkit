

/*
* Check if a string is a valid number
* @private
*/
function isValidNumeric(str) {
	if (typeof str != "string") return false // we only process strings!  
	if ( 
		!isNaN(str as any) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)
		!isNaN(parseFloat(str as any)) // ensure strings of whitespace fail
	) {
		return true;
	} else {
		return false;
	}
}


export default isValidNumeric;