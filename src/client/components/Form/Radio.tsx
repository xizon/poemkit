import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@/components/_plugins/_lib-bootstrap';
import '@/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@/components/_utils/styles/_all.scss';
import '@/components/_utils/styles/rtl/_all.scss';
import { __ } from '@/components/_utils/_all';

/*-- Apply this component styles --*/
import '@/components/Form/styles/_basic.scss';
import '@/components/Form/styles/_layout.scss';
import '@/components/Form/styles/_theme_material.scss';
import '@/components/Form/styles/rtl/_basic.scss';
import '@/components/Form/styles/rtl/_layout.scss';
import '@/components/Form/styles/rtl/_theme_material.scss';



type RadioProps = {
	options: string;
	value?: string;
	name?: string;
	disabled?: any;
	required?: any;
	/** -- */
	id?: string;
};
type RadioState = false;


export default class Radio extends Component<RadioProps, RadioState> {

	uniqueID: string;
	
	constructor(props) {
		super(props);
		
		this.uniqueID = 'app-' + __.GUID.create();
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
		const idRes = id || this.uniqueID;
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
				return <label key={index} className={index === defaultValIndex ? 'is-active' : ''}><input type="radio" name={nameRes} value={optionValues[index] as string} required={requiredVal} defaultChecked /><span className="poemkit-controls__radio-trigger"></span>{radioOption}</label>;
			} else {
				return <label key={index} className={index === defaultValIndex ? 'is-active' : ''}><input type="radio" name={nameRes} value={optionValues[index] as string} required={requiredVal} /><span className="poemkit-controls__radio-trigger"></span>{radioOption}</label>;
			}
			
		    
		});

		
		return (
		  <>

				<div className={"poemkit-controls poemkit-controls__radio" + wrapperClassDisabled } id={idRes} {...attributes}>
			       {radioOptionsList}
				</div>
	
		  </>
		)
	}
}


