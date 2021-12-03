
/**
 * Get or set the current value of the first element in the set of matched elements.
 *
 * @param  {?String|?Number|?Array} v      - Corresponding to the value of each matched element.
 * @return {String}          - Get the values of form elements.
 */
 function val(this: any, v) {
    const rootObject = this;
    let res: any = null;

    this.each(function (this: any) {
        const self = this;
        let controlType = '';
        if (this.tagName == "INPUT" || this.tagName == "TEXTARTA") {

            //not `radio`, `checkbox`
            if (this.type != 'checkbox' && this.type != 'radio') {
                controlType = 'input-textarea';
            }

            //`checkbox`
            if (this.type == 'checkbox') {
                controlType = 'checkbox';
            }

            //`radio`
            if (this.type == 'radio') {
                controlType = 'radio';
            }

        }

        //`select`
        if (this.tagName == "SELECT") {
            controlType = 'select';
        }


        //set value
        if (typeof (v) !== 'undefined') {


            switch (controlType) {
                case "input-textarea":

                    this.value = v;
                    res = rootObject;

                    break;
                case "checkbox":

                    this.checked = v;
                    res = rootObject;

                    break;
                case "radio":

                    if (self.value == v.toString()) {
                        self.checked = true;
                    }

                    res = rootObject;

                    break;
                case "select":

                    this.value = v;
                    this.dispatchEvent(new Event('change'));
                    res = rootObject;

                    break;
                default:
                    this.value = v;
                    res = rootObject;

            }//end switch


        } else {

            switch (controlType) {
                case "input-textarea":
                    res = this.value;
                    break;

                case "checkbox":
                    res = this.checked ? 1 : 0;
                    break;

                case "radio":

                    if (self.checked) {
                        // do whatever you want with the checked radio
                        res = self.value;
                    }

                    break;

                case "select":
                    res = this.value;

                    break;

                default:
                    res = this.value;

            }//end switch

        }




    });

    return res;

}

export default val;