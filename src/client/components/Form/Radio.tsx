import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap';
import '@uixkit.react/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utils/styles/_all';
import '@uixkit.react/components/_utils/styles/rtl/_all';
import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Form/styles/_basic';
import '@uixkit.react/components/Form/styles/_layout';
import '@uixkit.react/components/Form/styles/_theme_material';
import '@uixkit.react/components/Form/styles/rtl/_basic';
import '@uixkit.react/components/Form/styles/rtl/_layout';
import '@uixkit.react/components/Form/styles/rtl/_theme_material';



type RadioProps = {
	options: string;
	value?: string;
	name?: string;
	disabled?: any;
	required?: any;
	/** -- */
	id?: string;
	attributes?: any;
};
type RadioState = false;


export default class Radio extends Component<RadioProps, RadioState> {
	
	constructor(props) {
		super(props);
		
	}


	render() {
		
		const { 
			options,
			disabled,
			required,
			value,
			name,
			id,
			...attributes
		} = this.props;
		
		
		const nameRes = typeof(name) === 'undefined' ? '' : name;
		const idRes = id ? id : 'app-control-' + __.GUID.create();
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		
		// Get all options from option prop
		const radioOptions = __.validate.isJSON( options ) ? JSON.parse( options ) : {};
		const optionKeys = Object.keys(radioOptions);
		const optionValues = Object.values(radioOptions);
		
		
		// Generate list of options
		const defaultValIndex = value ? optionValues.indexOf( value ) : false; //get index from default value
		const radioOptionsList = optionKeys.map((radioOption, index) => {
			const requiredVal = index === 0 ? required || null : null;
			
			if ( index === defaultValIndex ) {
				return <label key={index} className={index === defaultValIndex ? 'is-active' : ''}><input type="radio" name={nameRes} value={optionValues[index] as string} required={requiredVal} defaultChecked /><span className="uix-controls__radio-trigger"></span>{radioOption}</label>;
			} else {
				return <label key={index} className={index === defaultValIndex ? 'is-active' : ''}><input type="radio" name={nameRes} value={optionValues[index] as string} required={requiredVal} /><span className="uix-controls__radio-trigger"></span>{radioOption}</label>;
			}
			
		    
		});

		
		return (
		  <>

				<div className={"uix-controls uix-controls__radio" + wrapperClassDisabled } id={idRes} {...attributes}>
			       {radioOptionsList}
				</div>
	
		  </>
		)
	}
}


