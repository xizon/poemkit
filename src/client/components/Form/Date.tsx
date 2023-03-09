import React, { Component } from 'react';
import moment from "moment";


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

declare module 'react' {
    interface HTMLAttributes<T> {
        children?: any;
    }
}


interface DateProps extends React.ComponentPropsWithoutRef<any> {
	defaultNow?: string | boolean;
	time?: string;
	theme?: string;
	ui?: string;
	value?: string;
	label?: string | object;
	name?: string;
	disabled?: any;
	required?: any;
	/** -- */
	id?: string;
};
type DateState = false;


export default class Date extends Component<DateProps, DateState> {

	uniqueID: string;
	
	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
	
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlurChange = this.handleBlurChange.bind(this);
		
	}

    handleFocus(event) {
		const el = __( event.target );
		
		el.closest( 'div' ).find( 'input, label, .poemkit-controls__bar' ).addClass( 'is-active' );
    }

    handleBlurChange(event) {
		const el = __( event.target );
		const val = event.target.value;
		

		//----
		//remove focus style
		if( val === '' || val === 'blank' ) {
			el.closest( 'div' ).find( 'input, label' ).removeClass( 'is-active' );
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
			defaultNow,
			time,
			theme,
			ui,
			disabled,
			required,
			value,
			label,
			name,
			id,
			...attributes
		} = this.props;
		
		const typeRes = typeof(time) === 'undefined' ? 'date' : 'datetime-local';
		const uiRes = typeof(ui) === 'undefined' ? '' : ui;
		const nameRes = typeof(name) === 'undefined' ? ( typeof(label) !== 'undefined' ? __.toSlug( label ) : '' )  : name;
		const idRes = id || this.uniqueID;
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassUi = this.uiSwitch(uiRes);
		const wrapperClassTheme = theme === 'line' ? ' poemkit-controls--line' : '';
		const pattern = typeof(time) === 'undefined' ? '\\d{4}-\\d{2}-\\d{2}' : '[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}';
		const today = typeof(time) === 'undefined' ? moment().format('YYYY-MM-DD') : moment().format('YYYY-MM-DDThh:mm');
		let defaultValue = value;
		
		if ( defaultNow == 'true' || defaultNow === true ) defaultValue = today;
		
		return (
		  <>

			
				<div className={"poemkit-controls poemkit-controls__date" + wrapperClassDisabled  + wrapperClassUi + wrapperClassTheme}>
				  <input 
			          className={(defaultValue && defaultValue.length > 0 ? 'is-active' : '')}
					  type={typeRes}
			          id={idRes}
					  name={nameRes}
					  defaultValue={defaultValue || ''}
			          onFocus={this.handleFocus}
					  onBlur={this.handleBlurChange}
			          onChange={this.handleBlurChange}
			          disabled={disabled || null}
					  required={required || null}
			          pattern={pattern}
                      {...attributes}
					/>
				  <label htmlFor={idRes} className={(defaultValue && defaultValue.length > 0 ? 'is-active' : '')}>
					  {label || null}
					  {required ? <><span className="poemkit-controls__im">*</span></> : ''}
				  </label>
				  {theme === 'line' ? <><ins className="poemkit-controls__bar"></ins><ins className="poemkit-controls__basic-bar"></ins></> : ''}

				</div>
	
		  </>
		)
	}
}

