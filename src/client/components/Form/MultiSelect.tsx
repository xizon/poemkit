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



type MultiSelectProps = {
	options: string;
	theme?: string;
	value?: string;
	name?: string;
	required?: any;
	/** -- */
	id?: string;
};
type MultiSelectState = false;


export default class MultiSelect extends Component<MultiSelectProps, MultiSelectState> {
	
	private rootRef = React.createRef<HTMLDivElement>();
	private resRef = React.createRef<HTMLInputElement>();
	
	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
	
        this.handleClickItem = this.handleClickItem.bind(this);
		
	}


    /**
     * Change Event Here
	  * Prevents the triggering of multiple change events
     */
	handleClickItem(event) {
		event.preventDefault();
		
		const el = __( event.target );
		const root = this.rootRef.current;
		const resInput = this.resRef.current;
		
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
		const idRes = id || this.uniqueID;
		const wrapperClassTheme = theme === 'line' ? ' poemkit-controls--line' : '';
		
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
				    <span aria-checked={(activeThisEl ? 'true' : 'false')} role="checkbox" data-value={optionValues[index]} className={activeThisEl ? 'is-active' : ''}  onClick={this.handleClickItem}>
				        {theme === 'line' ? <><ins className="poemkit-controls__bar"></ins><ins className="poemkit-controls__basic-bar"></ins></> : ''}
				        {selectOption}
				        <i className="fa fa-check no"></i>
				    </span>
				</React.Fragment>
			)
		});

		
		return (
		  <>

				<div ref={this.rootRef} className={"poemkit-controls poemkit-controls__multi-sel" + wrapperClassTheme} id={idRes + "__wrapper"}>
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
