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

declare module 'react' {
    interface HTMLAttributes<T> {
        children?: any;
    }
}

interface MergeInputProps extends React.ComponentPropsWithoutRef<any> {
	btnType?: any;
	type?: string;
	ui?: string;
	value?: string;
	label?: string | object;
	name?: string;
	maxLength?: any;
	disabled?: any;
	required?: any;
	placeholder?: string;
	icon?: object;
	/** -- */
	id?: string;
};
type MergeInputState = false;


export default class MergeInput extends Component<MergeInputProps, MergeInputState> {

	uniqueID: string;
	
	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
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

		
		return classes;
	}
	
		

	
	render() {
		
		const { 
			btnType,
			type,
			ui,
			icon,
			disabled,
			required,
			placeholder,
			value,
			label,
			name,
			id,
			maxLength,
			...attributes
		} = this.props;
		
		
		const typeRes = typeof(type) === 'undefined' ? 'text' : type;
		const uiRes = typeof(ui) === 'undefined' ? '' : ui;
		const nameRes = typeof(name) === 'undefined' ? ( typeof(label) !== 'undefined' ? __.toSlug( label ) : '' )  : name;
		const idRes = id || this.uniqueID;
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassIcon = icon ? ' is-iconic' : '';
		const wrapperClassUi = this.uiSwitch(uiRes);
		
	
		return (
		  <>
			

				<div className={"poemkit-controls__merge" + wrapperClassDisabled + wrapperClassIcon+ wrapperClassUi}>
			      {icon || null}
				  <input 
					  type={typeRes} 
			          id={idRes}
					  name={nameRes}
					  placeholder={placeholder || ''}
					  defaultValue={value || ''}
					  maxLength={maxLength || null}
			          disabled={disabled || null}
					  required={required || null}
                      {...attributes}
					/>
			        <button type={btnType || 'button'} className="poemkit-btn poemkit-btn__bg--primary"><span>{label || null}</span></button>
				  

				</div>
	
		  </>
		)
	}
}


