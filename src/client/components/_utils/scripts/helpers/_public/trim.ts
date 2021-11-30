/*
* Remove all spaces in the string
*
* @param  {String} s                 - Any string.
* @param  {Boolean} isGlobal         - If the value is `true`, remove all spaces including the middle
* @return {String}                   - A new string with no spaces
*/  
function trim(s, isGlobal = false) {
    if (typeof(s) === 'string') {
        let result;
        result = s.replace(/(^\s+)|(\s+$)/g, "");
        if ( isGlobal === true ) {
            result = result.replace(/\s/g, "");
        }
        return result;
    } else {
        return s;
    }
}	


export default trim;