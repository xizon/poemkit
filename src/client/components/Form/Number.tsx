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


interface NumberProps extends React.ComponentPropsWithoutRef<any> {
	min?: any;
	max?: any;
	decimals?: string | number;
	btnStepMinus?: string | number;
	btnStepPlus?: string | number;
	theme?: string;
	value?: string;
	step?: string | number;
	name?: string;
	disabled?: any;
	required?: any;
	/** -- */
	id?: string;
};
type NumberState = {
	count?: any;
};



export default class Number extends Component<NumberProps, NumberState>  {
	
	uniqueID: string;

	constructor(props) {
		super(props);
	
		this.uniqueID = 'app-' + __.GUID.create();
	
		this.state = {
			count: this.props.value ? this.props.value : 0
		};
		
		this.handleVoidChange = this.handleVoidChange.bind(this);
		this.handlePlus = this.handlePlus.bind(this);
		this.handleMinus = this.handleMinus.bind(this);
		
	}


	//Avoid warnings for the `defaultValue` attribute for <input />
	handleVoidChange(event){}

	updateCount(el, btnAction) {

		const step = parseFloat( el.data( 'step' ) );
		const max = parseFloat( el.data( 'max' ) );
		const min = parseFloat( el.data( 'min' ) );

		this.setState(function(prevState) {

			let res = parseFloat( prevState.count );

			if ( btnAction === 'plus' ) {
				if ( isNaN(max) === false ) {
					if ( (res+step) <= max ) res += step;
				} else {
					res += step;
				}
			} else {
				if ( isNaN(min) === false ) {
					if ( (res-step) >= min ) res -= step;
				} else {
					res -= step;
				}
			}
		
			return {
				count: res
			};
		});

	}

	handlePlus(event){
		event.preventDefault();

		this.updateCount( __( event.target ), 'plus' );
	}

	handleMinus(event){
		event.preventDefault();
		
		this.updateCount( __( event.target ), 'minus' );
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
		
		const nameRes = typeof(name) === 'undefined' ? '' : name;
		const idRes = id || this.uniqueID;
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassTheme = theme === 'line' ? ' poemkit-controls--line' : '';
		const dp = decimals || 0;
		const resVal = parseFloat( this.state.count ).toFixed( dp as number );
		
		
		return (
		  <>

				<div className={"poemkit-controls poemkit-controls__number" + wrapperClassDisabled + wrapperClassTheme }>
			        {theme === 'line' ? <><ins className="poemkit-controls__bar"></ins><ins className="poemkit-controls__basic-bar"></ins></> : ''}
					  <input 
						  type="number"
						  className="js-poemkit-float-label"
						  step={required || 0.01}
						  id={idRes}
						  name={nameRes}
						  disabled={disabled || null}
						  required={required || null}
						  min={min || null}
						  max={max || null}
						  value={resVal}
						  onChange={this.handleVoidChange}
						  {...attributes}
						/>
					  <span className="poemkit-controls__number__btn poemkit-controls__number__btn--add" data-min={min || null} data-max={max || null} data-step={btnStepPlus || 1} onClick={this.handlePlus}>+</span>
					  <span className="poemkit-controls__number__btn poemkit-controls__number__btn--remove" data-min={min || null} data-max={max || null} data-step={btnStepMinus || 1} onClick={this.handleMinus}>-</span>	

				</div>

	
		  </>
		)
	}
}

