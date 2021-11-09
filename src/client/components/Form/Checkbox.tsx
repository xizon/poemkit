import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@poemkit/components/_plugins/_lib-gsap';

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


type CheckboxProps = {
	value?: string | boolean;
	label?: string | object;
	name?: string;
	disabled?: any;
	required?: any;
	/** -- */
	id?: string;
};
type CheckboxState = {
	isChecked?: boolean;
};



export default class Checkbox extends Component<CheckboxProps, CheckboxState>  {
	
	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
	
		this.state = {
			isChecked: this.props.value == 'true' || this.props.value === true ? true : false
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
		const idRes = id || this.uniqueID;
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassActive = checkedStatus ? ' is-active' : '';
		
		
		return (
		  <>

				<div className={"poemkit-controls poemkit-controls__checkbox" + wrapperClassDisabled + wrapperClassActive } aria-checked={(checkedStatus ? 'true' : 'false')}>
					<label htmlFor={idRes}>
			
					   {checkedStatus ? (
						  <input 
							  type="checkbox"
							  id={idRes}
							  name={nameRes}
							  disabled={disabled || null}
							  required={required || null}
                              onChange={ this.handleChange } 
                              defaultValue={value as string || ''}
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
                              defaultValue={value as string || ''}
							  {...attributes}
							/>
						)}
			
	                    <span className="poemkit-controls__checkbox-trigger"></span>
					    {label || null}
					    {required ? <><span className="poemkit-controls__im">*</span></> : ''}
					</label>
				</div>

	
		  </>
		)
	}
}

