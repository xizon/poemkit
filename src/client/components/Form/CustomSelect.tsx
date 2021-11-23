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

type OptionChangeFnType = (arg1: any) => void;

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
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
	 optionChangeCallback?: OptionChangeFnType | null;
	/** -- */
	id?: string;
};
type CustomSelectState = false;


export default class CustomSelect extends Component<CustomSelectProps, CustomSelectState> {
	
	private rootRef = React.createRef<HTMLDivElement>();

	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
	
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
				event.target.className.indexOf( 'poemkit-controls__select-trigger' ) < 0 && 
				event.target.className.indexOf( 'poemkit-controls__select__option' ) < 0
			)
		   ) {
			__( '.poemkit-controls__select.js-poemkit-new' ).removeClass( 'is-opened' );
		}
    }
	

    /**
     * Show Selector
     */
    handleClick(event) {
		event.preventDefault();
		
		const root = this.rootRef.current;
		const $selectWrapper = __( root ),
			$selectCurWrapper = $selectWrapper.find( '.poemkit-controls__select.js-poemkit-new' );

		$selectCurWrapper.addClass( 'is-opened' );

    }
	

    /**
     * Change Event Here
	  * Prevents the triggering of multiple change events
     */
	handleClickItem(event) {
		event.preventDefault();
		
		const el = __( event.target );
		const root = this.rootRef.current;
		
		const $selectWrapper  = __( root ),
			$selectCurWrapper = $selectWrapper.find( '.poemkit-controls__select.js-poemkit-new' ),
			curVal            = el.data( 'value' );

		//Close the selector
		$selectCurWrapper.removeClass( 'is-opened' );

		//Set the selector text
		$selectCurWrapper.find( '.poemkit-controls__select-trigger' ).html( el.html() );

		//Activate this option
		$selectCurWrapper.find( '.poemkit-controls__select__option' ).removeClass( 'is-active' );
		el.addClass( 'is-active' );

		
		//Change <select>'s option and trigger events
		$selectWrapper.find( 'select' )[0].value = curVal;
		$selectWrapper.find( 'select' )[0].dispatchEvent(new Event('change'));
		
		//callback
		if ( typeof(this.props.optionChangeCallback) === 'function' ) {
			this.props.optionChangeCallback({
				"value": curVal
			});
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
	
		
	
	componentDidMount() {

		document.removeEventListener('click', this.handleClickOutside);
		document.addEventListener('click', this.handleClickOutside);
	}


	/** Remove the global list of events, especially as scroll and interval. */
	componentWillUnmount() {

		// Remove scroll events from document
		document.removeEventListener('click', this.handleClickOutside);

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
		const idRes = id || this.uniqueID;
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassUi = this.uiSwitch(uiRes);
		const wrapperClassTheme = theme === 'line' ? ' poemkit-controls--line' : '';
		const wrapperClassPosition = position === 'top' ? ' poemkit-controls__select--top' : '';
		

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
		    return <span role="option" className={index === defaultValIndex ? 'poemkit-controls__select__option is-active' : 'poemkit-controls__select__option'} key={index} data-value={optionValues[index]} onClick={this.handleClickItem}>{selectOption}</span>;
		});	

		
		return (
		  <>

			
				<div ref={this.rootRef} className={"poemkit-controls__select-wrapper" + wrapperClassPosition + wrapperClassDisabled + wrapperClassUi + wrapperClassTheme} id={idRes + "__wrapper"}>
					<div className={"poemkit-controls poemkit-controls__select" + wrapperClassPosition + wrapperClassDisabled + wrapperClassUi + wrapperClassTheme} style={{display:"none"}}>
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
					<div className={"poemkit-controls poemkit-controls__select js-poemkit-new" + wrapperClassPosition + wrapperClassDisabled + wrapperClassUi + wrapperClassTheme}>
						<span 
							className="poemkit-controls__select-trigger"
							onClick={this.handleClick}
						>
							{optionKeys[defaultValIndex]}
						</span>

						{theme === 'line' ? <><ins className="poemkit-controls__bar"></ins><ins className="poemkit-controls__basic-bar"></ins></> : ''}
			
						<div role="presentation" className="poemkit-controls__select__option-container">
							<div>
								{selectOptionsListPresentation}
			                </div>
						</div>
					</div>
					<span className="poemkit-controls__select-label">
						{label || null}
						{required ? <><span className="poemkit-controls__im">*</span></> : ''}
					</span>
				</div>
			
	
		  </>
		)
	}
}

