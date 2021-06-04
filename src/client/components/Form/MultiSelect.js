import PropTypes from "prop-types";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/plugins/_lib-bootstrap.js';
import '@uixkit.react/plugins/_lib-gsap.js';
import '@uixkit.react/plugins/_lib-icons.js'; 

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



export default class MultiSelect extends Component {
	
	constructor(props) {
		super(props);
	
		//Refs are commonly assigned to an instance property when a component 
		//is constructed so they can be referenced throughout the component.
		this.wrapperRef = React.createRef();
		this.resRef = React.createRef();
		
		
        this.handleOnClickItem = this.handleOnClickItem.bind(this);
		
	}


    /**
     * Change Event Here
	  * Prevents the triggering of multiple change events
     */
	handleOnClickItem(event) {
		event.preventDefault();
		
		const el = __( event.target );
		const root = ReactDOM.findDOMNode(this.wrapperRef.current);
		const resInput = ReactDOM.findDOMNode(this.resRef.current);
		
		const $multiSelWrapper = __( root ),
			  curVal = el.data( 'value' ),
			  tarVal = __.removeFirstLastStr( __( resInput ).val(), ',' ) + ',';
		
		let resVal = '';
	
		
		//update each item status
		if ( __( resInput ).val().indexOf( curVal ) < 0 ) {
			el.addClass( 'is-active' ).attr( 'aria-checked', true );
		} else {
			el.removeClass( 'is-active' ).attr( 'aria-checked', false );
		}	

		//update result for input
		if ( tarVal.indexOf( curVal + ',' ) < 0 ) {
			resVal = tarVal + curVal + ',';
		} else {
			resVal = tarVal.replace( curVal + ',', '' );
		}

		resVal = __.removeFirstLastStr( resVal, ',' );
		
		
		//resort result
		let resValNew = '';
		const _valArr = resVal != '' ? resVal.split( ',' ) : [];
		_valArr.sort();    
		_valArr.forEach(function(item,i){
			resValNew += item + ',';
		});
		resValNew = __.removeFirstLastStr( resValNew, ',' );

		
		
		//update input
		__( resInput ).val( resValNew );
		


    }
	
		

	render() {
		
		const { 
			theme,
			options,
			required,
			value,
			name,
			id,
			...attributes
		} = this.props;
		
		
		const nameRes = typeof(name) === 'undefined' ? '' : name;
		const idRes = id ? id : 'app-control-' + __.GUID.create();
		const wrapperClassTheme = theme === 'line' ? ' uix-controls--line' : '';
		
		// Get all options from option prop
		const multiSelOptions = __.validate.isJSON( options ) ? JSON.parse( options ) : {};
		const optionKeys = Object.keys(multiSelOptions);
		const optionValues = Object.values(multiSelOptions);
		
		
		// Generate list of options
		const multiSelOptionsList = optionKeys.map((selectOption, index) => {
			
			//get current value
			const _val = value ? __.removeFirstLastStr( value, ',' ) : '';
			const _valArr = _val != '' ? _val.split( ',' ) : [];
			let activeThisEl = false;
			_valArr.forEach(function(item,i){
				if ( optionValues[index] === item ) {
					activeThisEl = true;
				}
			});
			
		    return (
			    <React.Fragment key={index}>
				    <span aria-checked={(activeThisEl ? 'true' : 'false')} role="checkbox" data-value={optionValues[index]} className={activeThisEl ? 'is-active' : ''}  onClick={this.handleOnClickItem}>
				        {theme === 'line' ? <><ins className="uix-controls__bar"></ins><ins className="uix-controls__basic-bar"></ins></> : ''}
				        {selectOption}
				        <i className="fa fa-check no"></i>
				    </span>
				</React.Fragment>
			)
		});

		
		return (
		  <>

				<div ref={this.wrapperRef} className={"uix-controls uix-controls__multi-sel" + wrapperClassTheme} id={idRes + "__wrapper"}>
				  {multiSelOptionsList}

				</div>
				<input 
				  ref={this.resRef}
				  type="hidden"
				  id={idRes}
				  name={nameRes}
				  defaultValue={value || ''}
				  required={required || null}
				  {...attributes}
				/>
			
	
		  </>
		)
	}
}


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	MultiSelect.propTypes = { 
		theme: PropTypes.string,
		options: PropTypes.string.isRequired,
		value: PropTypes.string,
		name: PropTypes.string,
		id: PropTypes.string,
		required: PropTypes.any
	}

}


