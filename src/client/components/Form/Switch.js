import PropTypes from "prop-types";
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap.js';
import '@uixkit.react/components/_plugins/_lib-gsap.js';
import '@uixkit.react/components/_plugins/_lib-icons.js'; 

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



export default class Switch extends Component {
	
	constructor(props) {
		super(props);
	
		
		//the default status of target
		this.targetDefaultStatus = this.props.value == 'true' ? true : false;
		
		this.state = {
			isChecked: this.targetDefaultStatus
		};
		
		
		// set this, because you need get methods from CheckBox 	
        this.handleChange = this.handleChange.bind(this);

		
	}
	
	
	targetStatus(s) {
		//hide or display target
		if ( s ) {
			__( '#' + this.props.targetID ).show();
		} else {
			__( '#' + this.props.targetID ).hide();
		}
		
	}	
	
	

	handleChange() {
		this.setState({isChecked: !this.state.isChecked});

		
		//hide or display target
		this.targetStatus(!this.state.isChecked);
		
	}	
	
	
    /**
     * Set the class names of different styles
     */
	uiSwitch(param) {
		
		let classes = '';
		

		//radius
		if ( param.indexOf( 'pill' ) >= 0 ) classes += ' is-pill';
		if ( param.indexOf( 'rounded' ) >= 0 ) classes += ' is-rounded';

		
		return classes;
	}

	componentDidMount(){

		//hide or display target
		this.targetStatus( this.targetDefaultStatus );
		
	}
	
	
	
	render() {
		
		const { 
			targetID,
			textOff,
			textOn,
			ui,
			disabled,
			required,
			value,
			label,
			name,
			id,
			...attributes
		} = this.props;
		
		const uiRes = typeof(ui) === 'undefined' ? '' : ui;
		const checkedStatus = this.state.isChecked === true ? true : false;
		const nameRes = typeof(name) === 'undefined' ? ( typeof(label) !== 'undefined' ? __.toSlug( label ) : '' )  : name;
		const idRes = id ? id : 'app-control-' + __.GUID.create();
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassUi = this.uiSwitch(uiRes);
		const wrapperClassActive = checkedStatus ? ' is-active' : '';
		
		
		return (
		  <>
			


				<div className={"uix-controls uix-controls__toggle" + wrapperClassDisabled + wrapperClassUi + wrapperClassActive } data-targetid={targetID || ''} aria-checked={(checkedStatus ? 'true' : 'false')}>
					<label htmlFor={idRes}>
			
					   {checkedStatus ? (
						  <input 
						      role="switch"
							  type="checkbox"
							  id={idRes}
							  name={nameRes}
							  disabled={disabled || null}
							  required={required || null}
                              onChange={ this.handleChange } 
			                  defaultChecked
							  {...attributes}
							/>
			
						) : (
						  <input 
							  role="switch"
							  type="checkbox"
							  id={idRes}
							  name={nameRes}
							  disabled={disabled || null}
							  required={required || null}
                              onChange={ this.handleChange } 
							  {...attributes}
							/>
						)}
			
	                    <span className="uix-controls__toggle-trigger" data-off-text={textOff || 'off'} data-on-text={textOn || 'on'}></span>
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
			
	Switch.propTypes = {
		targetID: PropTypes.string,
		ui: PropTypes.string,
		textOff: PropTypes.string,
		textOn: PropTypes.string,
		value: PropTypes.string,
		label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		name: PropTypes.string,
		id: PropTypes.string,
		disabled: PropTypes.any,
		required: PropTypes.any,	   
		
	}

}

