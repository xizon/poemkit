
import elementPath from './_internal/elementPath';
/*
* Get or set the current value of the first element in the set of matched elements.
*
* @param  {?String|?Number|?Array} v      - Corresponding to the value of each matched element.
* @return {String}          - Get the values of form elements.
*/
function val(this: any, v) {
	
	let controlType = '';
	if (this.tagName == "INPUT" || this.tagName == "TEXTARTA" ) {

		//not `radio`, `checkbox`
		if (this.type != 'checkbox' && this.type !='radio') {
			controlType = 'input-textarea';
		}

		//`checkbox`
		if (this.type == 'checkbox') {
			controlType = 'checkbox';
		}

		//`radio`
		if (this.type =='radio') {
			controlType = 'radio';
		}	

	}

	//`select`
	if (this.tagName == "SELECT") {
		controlType = 'select';
	}
		
	
	//
	if ( typeof (v) !== 'undefined' ) {
		
		
		switch (controlType) {
			case "input-textarea":
				
				this.value = v;
				break;
			case "checkbox":
				
				this.checked = v;
				break;
			case "radio":
				
				const currentSelectorDomsStr = elementPath( this );
				const currentSelector = [].slice.call( document.querySelectorAll(currentSelectorDomsStr as string) );

				currentSelector.map((item, index) => {
					if((item as unknown as HTMLFormElement).value == v.toString()) {
						(item as unknown as HTMLFormElement).checked = true;
					}	
				});

				break;
			case "select":
				
				this.value = v;
				this.dispatchEvent(new Event('change'));
				break;
			default:
				this.value = v;
				
		}//end switch
		

	}	
	
	switch (controlType) {
		case "input-textarea":
			return this.value;
		case "checkbox":
			return this.checked ? 1 : 0;
		case "radio":
            
		
			const currentSelectorDomsStr = elementPath( this );
			const currentSelector = [].slice.call( document.querySelectorAll(currentSelectorDomsStr as string) );
			const radios = currentSelector;
			let _value = null;
			for (let i = 0; i < radios.length; i++) {
				if ((radios[i] as unknown as HTMLFormElement).checked) {
					// do whatever you want with the checked radio
					_value = (radios[i] as unknown as HTMLFormElement).value;
					// only one radio can be logically checked, don't check the rest
					break;
				}
			}

			return _value;
		case "select":
			return this.value;

		default:
			return this.value;

	}//end switch
	
	
}	

export default val;