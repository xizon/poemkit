import isValidNumeric from '../_internal/isValidNumeric';
import isJSON from '../_internal/isJSON';

/*
*  Set a default JSON format configuration
*
* @param  {Json} props         - Set some default keys and values.
* @param  {Json} options       - A JSON variable passed in from outside, including key and value.
* @return {Json}               - Merge the new and old values.
*/
function setDefaultOptions(props, options) {
    if ( typeof options === typeof undefined || options === null || options === false ) options = {};
    //Set a default configuration
    if ( isJSON(props) ) {

        const defaultConfigValues = Object.values(props);
        Object.keys(props).forEach(function(prop,index) {

            // Well-formed string type
            Object.keys(options).forEach(function(prop2, index2) {
                if ( prop2 === prop ) {
                    let _v = options[prop2];
                    if ( _v == 'true' ) _v = true;
                    if ( _v == 'false' ) _v = false;
                    if ( isValidNumeric(_v) ) _v = parseFloat(_v);
                    if ( isJSON(_v) ) _v = Object.prototype.toString.call(_v) === '[object Object]' ? _v : JSON.parse(_v);

                    options[prop2] = _v;
                }
                
            });

            //
            if ( typeof options[prop] === typeof undefined || options[prop] === null ) options[prop] = defaultConfigValues[index];
        });
    }
    return options;
};



export default setDefaultOptions;