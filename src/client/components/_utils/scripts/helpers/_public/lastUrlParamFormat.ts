/*
* Capitalize the first letter of all words in a string
* @public
*
* @param  {String} s                 - Any string.
* @return {String}                   - A new string.
*/  	
function lastUrlParamFormat(s) {
    
    s = s || '';

    if ( s.length > 0 ) {
        
        s = s.replace(/\-/g, ' ' ).replace(/\_/g, ' ' );
        const pieces = s.split(" ");
        for ( let i = 0; i < pieces.length; i++ )
        {
            const j = pieces[i].charAt(0).toUpperCase();
            pieces[i] = j + pieces[i].substr(1);
        }
        return pieces.join(" ");	
        
    } else {
        return s;
    }
    

}

export default lastUrlParamFormat;