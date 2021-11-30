
import isJSON from '../_internal/isJSON';

/*
* Object validation
*
* @return {Boolean}  
*/
const validate = ( () => {
	function t() { }

	return t.version = "0.0.1",

	t.isNumber = function(B) {
		const A = /^[\d|\.|,]+$/;
		return A.test(B);
	},
	t.isInt = function(B) {
		if (B == "") {
			return false;
		}
		const A = /\D+/;
		return ! A.test(B);
	},
	t.isEmail = function(A) {
		const B = /^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3})\s*$/;
		return B.test(A);
	},
	t.isTel = function(A) {
		//const B = /^[\d|\-|\s|\_]+$/;
		const B = /^[0-9- ]{7,20}$/; 
		return B.test(A);
	},
	t.isMobile = function(A) {
		//const B = /^13[0-9]{9}|15[012356789][0-9]{8}|18[0256789][0-9]{8}|147[0-9]{8}$/;
		const B = /^1[0-9]{10}$/;
		return B.test(A);
	},
	t.isJSON = function(A) {
		return isJSON(A);
	},

	//
	t
	
})();


export default validate;