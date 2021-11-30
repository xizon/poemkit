import isJSON from './_internal/isJSON';

/*
* Set the style properties of elements:
*
* @param  {Json} props   - The attribute and value to be set, the format is JSON
* @return {Void}
*/
function css(this: any, props, value) {
    const self = this;
    
    if ( isJSON(props) ) {
        //the json is ok
        Object.keys(props).forEach(function(prop) {
            self.style[prop] = props[prop];
        });
    } else {
        if (value !== undefined) {
            self.style[ props ] = value;
        }
        
    }
    
    
};


export default css;