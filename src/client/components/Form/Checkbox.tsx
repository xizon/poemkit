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


type CheckboxProps = {
	value?: string;
	label?: string | object;
	name?: string;
	disabled?: any;
	required?: any;
	/** -- */
	id?: string;
	attributes?: any;
};
type CheckboxState = {
	isChecked?: boolean;
};



export default class Checkbox extends Component<CheckboxProps, CheckboxState>  {
	
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

