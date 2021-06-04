import PropTypes from "prop-types";
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/plugins/_lib-bootstrap.js';
import '@uixkit.react/plugins/_lib-gsap.js';
import '@uixkit.react/plugins/_lib-icons.js'; 

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utilities/styles/_all.scss';
import '@uixkit.react/components/_utilities/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Form/styles/_basic.scss';
import '@uixkit.react/components/Form/styles/_layout.scss';
import '@uixkit.react/components/Form/styles/_theme_material.scss';
import '@uixkit.react/components/Form/styles/rtl/_basic.scss';
import '@uixkit.react/components/Form/styles/rtl/_layout.scss';
import '@uixkit.react/components/Form/styles/rtl/_theme_material.scss';



export default class Radio extends Component {
	
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
				return <label key={index} className={index === defaultValIndex ? 'is-active' : ''}><input type="radio" name={nameRes} value={optionValues[index]} required={requiredVal} defaultChecked /><span className="uix-controls__radio-trigger"></span>{radioOption}</label>;
			} else {
				return <label key={index} className={index === defaultValIndex ? 'is-active' : ''}><input type="radio" name={nameRes} value={optionValues[index]} required={requiredVal} /><span className="uix-controls__radio-trigger"></span>{radioOption}</label>;
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


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	Radio.propTypes = { 
		options: PropTypes.string.isRequired,
		value: PropTypes.string,
		name: PropTypes.string,
		id: PropTypes.string,
		disabled: PropTypes.any,
		required: PropTypes.any
	}

}


