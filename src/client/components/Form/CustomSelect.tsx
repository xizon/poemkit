import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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



type CustomSelectProps = {
	options: string;
	position?: string;
	theme?: string;
	ui?: string;
	value?: string;
	label?: string | object;
	name?: string;
	disabled?: any;
	required?: any;
	/** -- */
	id?: string;
	attributes?: any;
};
type CustomSelectState = false;


export default class CustomSelect extends Component<CustomSelectProps, CustomSelectState> {
	
	//Refs are commonly assigned to an instance property when a component 
	//is constructed so they can be referenced throughout the component.
	private wrapperRef = React.createRef<HTMLDivElement>();

	constructor(props) {
		super(props);
	
        this.handleClick = this.handleClick.bind(this);
		this.handleClickItem = this.handleClickItem.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		
	}

	
    /**
     * If clicked on outside of element
     */
    handleClickOutside(event) {
		if ( 
			event.target.className != '' && ( 
				event.target.className.indexOf( 'uix-controls__select-trigger' ) < 0 && 
				event.target.className.indexOf( 'uix-controls__select__option' ) < 0
			)
		   ) {
			__( '.uix-controls__select.js-uix-new' ).removeClass( 'is-opened' );
		}
    }
	

    /**
     * Show Selector
     */
    handleClick(event) {
		event.preventDefault();
		
		const root = ReactDOM.findDOMNode(this.wrapperRef.current);
		const $selectWrapper = __( root ),
			$selectCurWrapper = $selectWrapper.find( '.uix-controls__select.js-uix-new' );

		$selectCurWrapper.addClass( 'is-opened' );

    }
	

    /**
     * Change Event Here
	  * Prevents the triggering of multiple change events
     */
	handleClickItem(event) {
		event.preventDefault();
		
		const el = __( event.target );
		const root = ReactDOM.findDOMNode(this.wrapperRef.current);
		
		const $selectWrapper  = __( root ),
			$selectCurWrapper = $selectWrapper.find( '.uix-controls__select.js-uix-new' ),
			curVal            = el.data( 'value' );

		//Close the selector
		$selectCurWrapper.removeClass( 'is-opened' );

		//Set the selector text
		$selectCurWrapper.find( '.uix-controls__select-trigger' ).html( el.html() );

		//Activate this option
		$selectCurWrapper.find( '.uix-controls__select__option' ).removeClass( 'is-active' );
		el.addClass( 'is-active' );

		
		//Change <select>'s option and trigger events
		$selectWrapper.find( 'select' )[0].value = curVal;
		$selectWrapper.find( 'select' )[0].dispatchEvent(new Event('change'));
		

    }
	
	
    /**
     * Set the class names of different styles
     */
	uiSwitch(param) {
		
		let classes = '';
		

		//radius
		if ( param.indexOf( 'pill' ) >= 0 ) classes += ' is-pill';
		if ( param.indexOf( 'rounded' ) >= 0 ) classes += ' is-rounded';

		//sizes
		if ( param.indexOf( 'fullwidth' ) >= 0 ) classes += ' is-fullwidth';

		
		return classes;
	}
	
		
	
	componentDidMount(){

		document.body.addEventListener( 'click', this.handleClickOutside );
	}

	render() {
		
		const { 
			position,
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
		const idRes = id ? id : 'app-control-' + __.GUID.create();
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassUi = this.uiSwitch(uiRes);
		const wrapperClassTheme = theme === 'line' ? ' uix-controls--line' : '';
		const wrapperClassPosition = position === 'top' ? ' uix-controls__select--top' : '';
		
		
		
		// Get all options from option prop
		const selectOptions = __.validate.isJSON( options ) ? JSON.parse( options ) : {};
		const optionKeys = Object.keys(selectOptions);
		const optionValues = Object.values(selectOptions);
		
		
		// Generate list of options
		const selectOptionsList = optionKeys.map((selectOption, index) => {
		    return <option key={index} value={optionValues[index] as string}>{selectOption}</option>;
		});
		
		
		
		//Synchronize to the original select change event
		const defaultValIndex = value ? optionValues.indexOf( value ) : 0; //get index from default value
		const selectOptionsListPresentation = optionKeys.map((selectOption, index) => {
		    return <span role="option" className={index === defaultValIndex ? 'uix-controls__select__option is-active' : 'uix-controls__select__option'} key={index} data-value={optionValues[index]} onClick={this.handleClickItem}>{selectOption}</span>;
		});	

		
		return (
		  <>

			
				<div ref={this.wrapperRef} className={"uix-controls__select-wrapper" + wrapperClassPosition + wrapperClassDisabled + wrapperClassUi + wrapperClassTheme} id={idRes + "__wrapper"}>
					<div className={"uix-controls uix-controls__select" + wrapperClassPosition + wrapperClassDisabled + wrapperClassUi + wrapperClassTheme} style={{display:"none"}}>
						<label htmlFor={idRes}>
						  <select  
							  id={idRes}
							  name={nameRes}
							  defaultValue={value || ''}
							  disabled={disabled || null}
							  required={required || null}
							  {...attributes}
							>
								{selectOptionsList}
			                </select>
						</label>
						<span>Custom Select</span></div>
					<div className={"uix-controls uix-controls__select js-uix-new" + wrapperClassPosition + wrapperClassDisabled + wrapperClassUi + wrapperClassTheme}>
						<span 
							className="uix-controls__select-trigger"
							onClick={this.handleClick}
						>
							{optionKeys[defaultValIndex]}
						</span>

						{theme === 'line' ? <><ins className="uix-controls__bar"></ins><ins className="uix-controls__basic-bar"></ins></> : ''}
			
						<div role="presentation" className="uix-controls__select__option-container">
							<div>
								{selectOptionsListPresentation}
			                </div>
						</div>
					</div>
					<span className="uix-controls__select-label">
						{label || null}
						{required ? <><span className="uix-controls__im">*</span></> : ''}
					</span>
				</div>
			
	
		  </>
		)
	}
}

