
import toCamelCase from '../_internal/toCamelCase';
import trim from '../_public/trim';

/*
* Convert HTML Element's `Style` Attribute to JSON
* @public
*
* @param  {String} str   - The content of the style attribute in the HTML element, usually a string
* @return {Json}     - An HTML element to a JSON object
*/  
function styleFormat(s) {
    
    s = s || '';

    if ( s.length > 0 ) {
        const styles = s.split(';'),
                json = {};
        
        let i = styles.length,
            style, 
            k, 
            v;


        while (i--) {
            style = styles[i].split(':');
            k = toCamelCase(trim(style[0]));
            v = trim(style[1]);
            if (k.length > 0 && v.length > 0)
            {
                json[k] = v;
            }
        }	
        
        return json;
    } else {
        return '';
    }


};



export default styleFormat;