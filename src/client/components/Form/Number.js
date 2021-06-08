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



export default class Number extends Component {
	
	constructor(props) {
		super(props);
	
	
		this.state = {
			count: this.props.value ? this.props.value : 0
		};
		
		
		this.handlePlus = this.handlePlus.bind(this);
		this.handleMinus = this.handleMinus.bind(this);
		
	}

	handlePlus(event){
		event.preventDefault();
		
	    const el = __( event.target );
		const step = parseFloat( el.data( 'step' ) );
		const max = parseFloat( el.data( 'max' ) );
		let res = parseFloat( this.state.count );
		
		
		if ( isNaN(max) === false ) {
			if ( (res+step) <= max ) res += step;
		} else {
			res += step;
		}
			
		this.setState({ count: res});
	}

	handleMinus(event){
		event.preventDefault();
		
		const el = __( event.target );
		const step = parseFloat( el.data( 'step' ) );
		const min = parseFloat( el.data( 'min' ) );
		let res = parseFloat( this.state.count );
		
		if ( isNaN(min) === false ) {
			if ( (res-step) >= min ) res -= step;
		} else {
			res -= step;
		}
		
		
		this.setState({ count: res});
	}

	render() {
		
		const {
			min,
			max,
			decimals,
			btnStepMinus,
			btnStepPlus,
			theme,
			disabled,
			required,
			step,
			value,
			name,
			id,
			...attributes
		} = this.props;
		
		const checkedStatus = this.state.isChecked === true ? true : false;
		const nameRes = typeof(name) === 'undefined' ? '' : name;
		const idRes = id ? id : 'app-control-' + __.GUID.create();
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassTheme = theme === 'line' ? ' uix-controls--line' : '';
		const dp = decimals || 0;
		const resVal = parseFloat( this.state.count ).toFixed( dp );
		
		
		return (
		  <>

				<div className={"uix-controls uix-controls__number" + wrapperClassDisabled + wrapperClassTheme }>
			        {theme === 'line' ? <><ins className="uix-controls__bar"></ins><ins className="uix-controls__basic-bar"></ins></> : ''}
					  <input 
						  type="number"
						  className="js-uix-float-label"
						  step={required || 0.01}
						  id={idRes}
						  name={nameRes}
						  disabled={disabled || null}
						  required={required || null}
						  min={min || null}
						  max={max || null}
						  defaultValue={resVal}
						  {...attributes}
						/>
					  <span className="uix-controls__number__btn uix-controls__number__btn--add" data-min={min || null} data-max={max || null} data-step={btnStepPlus || 1} onClick={this.handlePlus}>+</span>
					  <span className="uix-controls__number__btn uix-controls__number__btn--remove" data-min={min || null} data-max={max || null} data-step={btnStepMinus || 1} onClick={this.handleMinus}>-</span>	

				</div>

	
		  </>
		)
	}
}


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	Number.propTypes = {
		min: PropTypes.string,
		max: PropTypes.string,
		decimals: PropTypes.string,
		btnStepMinus: PropTypes.string,
		btnStepPlus: PropTypes.string,
		theme: PropTypes.string,
		value: PropTypes.string,
		step: PropTypes.string,
		name: PropTypes.string,
		id: PropTypes.string,
		disabled: PropTypes.any,
		required: PropTypes.any,	   
		
	}

}

