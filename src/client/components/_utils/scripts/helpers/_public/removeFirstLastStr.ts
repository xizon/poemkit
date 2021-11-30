/*
* Remove first, last or both symbols
*
* @param  {String} str       - Any string.
* @param  {String} symbol    - The target string to remove.
* @param  {Number} type      - Type of all or not. if `0`, is all.
* @return {String}           - An new string.
*/  
function removeFirstLastStr( str, symbol = ',', type = 0 ) {

    if (typeof(str) === 'string') {
        if ( type == 0 ) {
            const flRegExp = new RegExp( '^\\'+symbol+'|\\'+symbol+'$' , 'g' );
            return str.replace( flRegExp, '' );
        } else {
            const flRegExp = new RegExp( ''+symbol+'\s*$' , 'g' );
            return str.replace( flRegExp, '' );
        }
    } else {
        return str;
    }

};



export default removeFirstLastStr;