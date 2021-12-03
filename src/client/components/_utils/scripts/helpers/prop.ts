import isValidNumeric from './_internal/isValidNumeric';
import isJSON from './_internal/isJSON';



/**
 * Set one or more attributes for the set of matched Form elements.
 *
 * @param  {String} a                 - The name of the attribute to set.
 * @param  {String} v                 - A value to set for the attribute. 
 * @return {Void|String}              - Get the value of an attribute for the first element in the set of matched elements.
 */
 function prop(this: any, a, v) {
    const rootObject = this;
    let res = null;

    this.each(function (this: any) {
        a = a || '';
        if (v === undefined) {

            let curVal = this[a];
            if (curVal == 'true') curVal = true;
            if (curVal == 'false') curVal = false;
            if (isValidNumeric(curVal)) curVal = parseFloat(curVal);

            //check if Array or JSON format
            if (isJSON(curVal)) {
                if (Object.prototype.toString.call(curVal) === '[object Object]') {
                    curVal = curVal;
                } else {
                    //If the curValult is an array, you need to determine whether it is the expected array
                    curVal = JSON.parse(curVal);
                }
            }
            // Non-existent attributes
            res = curVal === undefined ? null : curVal;
        } else {
            this[a] = v;
            res = rootObject;
        }
    });

    return res;
}


export default prop;