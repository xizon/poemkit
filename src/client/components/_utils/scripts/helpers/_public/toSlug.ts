
/*
* Convert a string to slug.
*
* @param  {String} str            - Any string.
* @return {String}                - A new string.
*/  
function toSlug( str ) {

    if ( typeof( str ) == 'string' && str.length > 0 ) {
        return str
                .toString()
                .replace(/[^\w\s\-！￥【】\u4e00-\u9eff]/gi, '')
                .replace(/\s/g, '-')
                .replace(/(\-){2,}/g, '-')
                .replace(/\-\s*$/, '' )
                .toLowerCase();



    } else {
        return str;
    }

};



export default toSlug;