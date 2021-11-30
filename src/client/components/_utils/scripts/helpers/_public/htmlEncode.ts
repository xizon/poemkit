/*
*  HTML entities encode.
*
* @param {string} str          - Input text.
* @return {string}             - Filtered text.
*/
function htmlEncode(str) {
    
    let res = '';
    if (typeof (document) === 'undefined') {
        res = str.replace(/[\u00A0-\u9999<>\&]/g, function(i) {
            return '&#'+i.charCodeAt(0)+';';
        });
    } else {
        const div = document.createElement('div');

        //Creates a new Text node. This method can be used to escape HTML characters.
        div.appendChild(document.createTextNode(str));

        res = div.innerHTML;
    }


    //Convert single and double quotes
    res = res.replace(/"/g, '&quot;').replace(/'/g, '&#39;');

    return res;

}

export default htmlEncode;