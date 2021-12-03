import stringlineToHump from './_internal/stringlineToHump';
import isValidNumeric from './_internal/isValidNumeric';
import isJSON from './_internal/isJSON';

/**
 * Store arbitrary data associated with the matched elements.
 *
 * @param  {String} a                 - A string naming the piece of data to set
 * @param  {String} v                 - The new data value.
 * @return {Void|String}              - Return arbitrary data associated with the first element as set by data() or by an HTML5 data-* attribute.
 */
 function data(this: any, a, v) {
    const rootObject = this;
    let res = null;

    this.each(function (this: any) {
        a = a || '';
        const _s = stringlineToHump(a);

        if (v === undefined) {
            let curVal = this.dataset[_s];
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
            this.dataset[_s] = v;
            res = rootObject;
        }
    });

    return res;

}

export default data;