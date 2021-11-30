
/*
*  HTML entities decode
*
* @param {string} str          - Input text.
* @return {string}             - Filtered text.
*/
function htmlDecode(str) {

    let res = '';
    if (typeof (document) === 'undefined') {
        const entities = [
            ['amp', '&'],
            ['apos', '\''],
            ['#x27', '\''],
            ['#x2F', '/'],
            ['#39', '\''],
            ['#47', '/'],
            ['lt', '<'],
            ['gt', '>'],
            ['nbsp', ' '],
            ['quot', '"'],
            ['#60', '<'],
            ['#62', '>']
        ];

        for (let i = 0, max = entities.length; i < max; i++) {
            str = str.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);
        } 
        res = str;
        
    } else {
        const txt = document.createElement('textarea');
        txt.innerHTML = str;

        res = txt.value;
    }
    

    return res;

}


export default htmlDecode;