import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap';
import '@uixkit.react/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utils/styles/_all.scss';
import '@uixkit.react/components/_utils/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Form/styles/_basic.scss';
import '@uixkit.react/components/Form/styles/_layout.scss';
import '@uixkit.react/components/Form/styles/_theme_material.scss';
import '@uixkit.react/components/Form/styles/rtl/_basic.scss';
import '@uixkit.react/components/Form/styles/rtl/_layout.scss';
import '@uixkit.react/components/Form/styles/rtl/_theme_material.scss';

type OptionChangeFnType = (arg1: any) => void;

type SelectProps = {
	options: string;
	theme?: string;
	ui?: string;
	value?: string;
	label?: string | object;
	name?: string;
	disabled?: any;
	required?: any;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
	optionChangeCallback?: OptionChangeFnType | null;
	/** -- */
	id?: string;
};
type SelectState = false;



export default class Select extends Component<SelectProps, SelectState>  {

	uniqueID: string;
	
	constructor(props) {
		super(props);
	
		this.uniqueID = 'app-' + __.GUID.create();

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
	}

    handleFocus(event) {
		const el = __( event.target );
		el.closest( 'div' ).find( 'label, .uix-controls__bar' ).addClass( 'is-active' );
    }

    handleBlur(event) {
		this.valueChangeEvent( event );
    }

    handleChange(event) {
		this.valueChangeEvent( event );

		if ( typeof(this.props.optionChangeCallback) === 'function' ) {
			this.props.optionChangeCallback({
				"value": event.target.value
			});
		}
    }

	valueChangeEvent(e) {
		const el = __( e.target );
		const val = e.target.value;
		
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
			el.closest( 'div' ).find( '.uix-controls__bar' ).removeClass( 'is-active' );
		}	
	}
	
	
    /**
     * Set the class names of different styles
     */
	uiSwitch(param) {
		
		let classes = '';
		

		//corners
		if ( param.indexOf( 'pill' ) >= 0 ) classes += ' is-pill';
		if ( param.indexOf( 'rounded' ) >= 0 ) classes += ' is-rounded';

		//size
		if ( param.indexOf( 'fullwidth' ) >= 0 ) classes += ' is-fullwidth';

		
		return classes;
	}
	
		

	render() {
		
		const { 
			theme,
			ui,
			options,
			disabled,
			required,
			value,
			label,
			name,
			id,
			...attributes
		} = this.props;
		
		
		const uiRes = typeof(ui) === 'undefined' ? '' : ui;
		const nameRes = typeof(name) === 'undefined' ? ( typeof(label) !== 'undefined' ? __.toSlug( label ) : '' )  : name;
		const idRes = id || this.uniqueID;
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassUi = this.uiSwitch(uiRes);
		const wrapperClassTheme = theme === 'line' ? ' uix-controls--line' : '';
		
		// Get all options from option prop
		const selectOptions = __.validate.isJSON( options ) ? JSON.parse( options ) : {};
		const optionKeys = Object.keys(selectOptions);
		const optionValues = Object.values(selectOptions);
		
		
		// Generate list of options
		const selectOptionsList = optionKeys.map((selectOption, index) => {
		    return <option key={index} value={optionValues[index] as string}>{selectOption}</option>;
		});

		
		return (
		  <>

		
				<div className={"uix-controls uix-controls__normal-select" + wrapperClassDisabled + wrapperClassUi + wrapperClassTheme}>
                  <span className="uix-controls__arrow"><i className="fa fa-sort"></i></span>
				  <select  
					  className="js-uix-float-label" 
			          id={idRes}
					  name={nameRes}
					  defaultValue={value || ''}
			          onFocus={this.handleFocus}
					  onBlur={this.handleBlur}
			          onChange={this.handleChange}
			          disabled={disabled || null}
					  required={required || null}
                      {...attributes}
					>
			           {selectOptionsList}
					</select>
				  <label htmlFor={idRes} className={(value && value.length > 0 ? 'is-active' : '')}>
					  {label || null}
					  {required ? <><span className="uix-controls__im">*</span></> : ''}
				  </label>
				  {theme === 'line' ? <><ins className="uix-controls__bar"></ins><ins className="uix-controls__basic-bar"></ins></> : ''}
	
				</div>
	
		  </>
		)
	}
}

