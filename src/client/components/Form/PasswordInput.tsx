import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/Form/styles/_basic.scss';
import '@poemkit/components/Form/styles/_layout.scss';
import '@poemkit/components/Form/styles/_theme_material.scss';
import '@poemkit/components/Form/styles/rtl/_basic.scss';
import '@poemkit/components/Form/styles/rtl/_layout.scss';
import '@poemkit/components/Form/styles/rtl/_theme_material.scss';


type PasswordInputProps = {
	type?: string;
	theme?: string;
	ui?: string;
	value: string;
	label?: string | object;
	units?: string;
	name: string;
	maxLength?: any;
	disabled?: any;
	required: any;
	placeholder?: string;
	iconLeft?: object;
	iconRight?: object;
	/** -- */
	id?: string;
};
type PasswordInputState = {
	type?: string;
};


export default class PasswordInput extends Component<PasswordInputProps, PasswordInputState> {

	uniqueID: string;
	
	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();

		this.state = {
		  type: this.props.type ? this.props.type : 'password'
		}
		
		this.showHide = this.showHide.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlurChange = this.handleBlurChange.bind(this);
		
	}
	
	showHide(event){
		event.preventDefault();
		event.stopPropagation();
		this.setState({
			type: this.state.type === 'input' ? 'password' : 'input'
		})  
	}
	
	
    handleFocus(event) {
		const el = __( event.target );
		
		el.closest( 'div' ).find( 'label, .poemkit-controls__bar' ).addClass( 'is-active' );
    }

    handleBlurChange(event) {
		const el = __( event.target );
		const val = event.target.value;
		

		//----
		//remove focus style
		if( val === '' || val === 'blank' ) {
			el.closest( 'div' ).find( 'label' ).removeClass( 'is-active' );
		}	

		//
		if( 
			val === '' || 
			val === 'blank' || 
			( val != '' && val != 'blank' ) 
		) {
			el.closest( 'div' ).find( '.poemkit-controls__bar' ).removeClass( 'is-active' );
		}	
    }
	
	
    /**
     * Set the class names of different styles
     */
	uiSwitch(param) {
		
		let classes = '';
		
		//status
		if ( param.indexOf( 'error' ) >= 0 ) classes += ' is-error';
		if ( param.indexOf( 'success' ) >= 0 ) classes += ' is-success';
		
		//corners
		if ( param.indexOf( 'pill' ) >= 0 ) classes += ' is-pill';
		if ( param.indexOf( 'rounded' ) >= 0 ) classes += ' is-rounded';

		//size
		if ( param.indexOf( 'fullwidth' ) >= 0 ) classes += ' is-fullwidth';
		if ( param.indexOf( 'small' ) >= 0 ) classes += ' poemkit-controls__short-s';
		if ( param.indexOf( 'medium' ) >= 0 ) classes += ' poemkit-controls__short-m';
		if ( param.indexOf( 'large' ) >= 0 ) classes += ' poemkit-controls__short-l';


		
		return classes;
	}
	
		

	render() {
		
		const { 
			theme,
			ui,
			disabled,
			required,
			placeholder,
			value,
			label,
			units,
			name,
			id,
			maxLength,
			iconLeft,
			iconRight,
			...attributes
		} = this.props;
		
		
		const uiRes = typeof(ui) === 'undefined' ? '' : ui;
		const nameRes = typeof(name) === 'undefined' ? ( typeof(label) !== 'undefined' ? __.toSlug( label ) : '' )  : name;
		const idRes = id || this.uniqueID;
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassIconLeft = iconLeft ? ' is-iconic' : '';
		const wrapperClassIconRight = iconRight ? ' is-iconic is-reversed' : '';
		const wrapperClassUi = this.uiSwitch(uiRes);
		const wrapperClassTheme = theme === 'line' ? ' poemkit-controls--line' : '';
		
		return (
		  <>

				<div className={"poemkit-controls" + wrapperClassDisabled + wrapperClassIconLeft + wrapperClassIconRight + wrapperClassUi + wrapperClassTheme}>
			      {iconLeft || null}
			      {iconRight || null}
				  <input 
					  type={this.state.type}
					  className="js-poemkit-float-label" 
			          id={idRes}
					  name={nameRes}
					  placeholder={placeholder || ''}
					  defaultValue={value || ''}
					  maxLength={maxLength || null}
			          onFocus={this.handleFocus}
					  onBlur={this.handleBlurChange}
			          onChange={this.handleBlurChange}
			          disabled={disabled || null}
					  required={required || null}
                      {...attributes}
					/>
			      <span className="poemkit-controls__passwordSwitch" onClick={this.showHide}>{this.state.type === 'input' ? <><i className="fa fa-eye-slash" aria-hidden="true"></i></> : <><i className="fa fa-eye" aria-hidden="true"></i></>}</span>
				  <label htmlFor={idRes} className={(value && value.length > 0 ? 'is-active' : '')}>
					  {label || null}
					  {required ? <><span className="poemkit-controls__im">*</span></> : ''}
				  </label>
				  {theme === 'line' ? <><ins className="poemkit-controls__bar"></ins><ins className="poemkit-controls__basic-bar"></ins></> : ''}
				  {units || null}

				</div>
	
		  </>
		)
	}
}

