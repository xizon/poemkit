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



export default class Checkbox extends Component {
	
	constructor(props) {
		super(props);
	
		this.state = {
			isChecked: this.props.value == 'true' ? true : false
		};
		
		
		// set this, because you need get methods from CheckBox 	
        this.handleChange = this.handleChange.bind(this);
		
	}

	handleChange() {
		this.setState({isChecked: !this.state.isChecked});
	}	
	

	render() {
		
		const { 
			disabled,
			required,
			value,
			label,
			name,
			id,
			...attributes
		} = this.props;
		
		const checkedStatus = this.state.isChecked === true ? true : false;
		const nameRes = typeof(name) === 'undefined' ? ( typeof(label) !== 'undefined' ? __.toSlug( label ) : '' )  : name;
		const idRes = id ? id : 'app-control-' + __.GUID.create();
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassActive = checkedStatus ? ' is-active' : '';
		
		
		return (
		  <>

				<div className={"uix-controls uix-controls__checkbox" + wrapperClassDisabled + wrapperClassActive } aria-checked={(checkedStatus ? 'true' : 'false')}>
					<label htmlFor={idRes}>
			
					   {checkedStatus ? (
						  <input 
							  type="checkbox"
							  id={idRes}
							  name={nameRes}
							  disabled={disabled || null}
							  required={required || null}
                              onChange={ this.handleChange } 
                              defaultValue={value || ''}
			                  defaultChecked
							  {...attributes}
							/>
			
						) : (
						  <input 
							  type="checkbox"
							  id={idRes}
							  name={nameRes}
							  disabled={disabled || null}
							  required={required || null}
                              onChange={ this.handleChange } 
                              defaultValue={value || ''}
							  {...attributes}
							/>
						)}
			
	                    <span className="uix-controls__checkbox-trigger"></span>
					    {label || null}
					    {required ? <><span className="uix-controls__im">*</span></> : ''}
					</label>
				</div>

	
		  </>
		)
	}
}


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	Checkbox.propTypes = {
		value: PropTypes.string,
		label: PropTypes.string,
		name: PropTypes.string,
		id: PropTypes.string,
		disabled: PropTypes.any,
		required: PropTypes.any,	   
		
	}

}

