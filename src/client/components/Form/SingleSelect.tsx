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



type SingleSelectProps = {
	options: string;
	targetID?: string;
	theme?: string;
	ui?: string;
	value?: string;
	name?: string;
	required?: any;
	/** -- */
	id?: string;
};
type SingleSelectState = false;


export default class SingleSelect extends Component<SingleSelectProps, SingleSelectState> {

	//Refs are commonly assigned to an instance property when a component 
	//is constructed so they can be referenced throughout the component.
	private wrapperRef = React.createRef<HTMLDivElement>();
	private resRef = React.createRef<HTMLInputElement>();

	constructor(props) {
		super(props);
	
        this.handleClickItem = this.handleClickItem.bind(this);
		
	}

	
	targetStatus(s) {
		
		const _target = this.props.targetID ? __.removeFirstLastStr( this.props.targetID, ',' ) : '';
		const _targetArr = _target != '' ? _target.split( ',' ) : [];
	
		//hide all
		_targetArr.forEach(function(item,i){
			__( '#' + item ).hide();
		});
		
		
		//display target
		__( '#' + s ).show();
		
	}	
	
	

    /**
     * Change Event Here
	  * Prevents the triggering of multiple change events
     */
	handleClickItem(event) {
		event.preventDefault();
		
		const el = __( event.target );
		const root = ReactDOM.findDOMNode(this.wrapperRef.current);
		const resInput = ReactDOM.findDOMNode(this.resRef.current);
		
		const $singleSelWrapper = __( root ),
			  $items = $singleSelWrapper.find( 'span' ),
			  curVal = el.data( 'value' ),
			  switchID = el.data( 'switchid' );
		
		
		//update each item status
		$items.removeClass( 'is-active' ).attr( 'aria-checked', false );
		el.addClass( 'is-active' ).attr( 'aria-checked', true );

	
		//update input
		__( resInput ).val( curVal );
		
		
		//hide or display target
		this.targetStatus(switchID);
		

    }
	
		
    /**
     * Set the class names of different styles
     */
	uiSwitch(param) {
		
		let classes = '';
		

		//corners
		if ( param.indexOf( 'pill' ) >= 0 ) classes += ' is-pill';
		if ( param.indexOf( 'rounded' ) >= 0 ) classes += ' is-rounded';

		
		return classes;
	}
	
	
	componentDidMount(){
		
		if ( this.props.value ) {
			const root = ReactDOM.findDOMNode(this.wrapperRef.current);
			const $singleSelWrapper = __( root );

			//hide or display target
			this.targetStatus( $singleSelWrapper.find( 'span[data-value="'+this.props.value+'"]' ).data( 'switchid' ) );	
		}

		
	}
	
	
	

	render() {
		
		const { 
			targetID,
			theme,
			ui,
			options,
			required,
			value,
			name,
			id,
			...attributes
		} = this.props;
		
		
		const uiRes = typeof(ui) === 'undefined' ? '' : ui;
		const nameRes = typeof(name) === 'undefined' ? '' : name;
		const idRes = id ? id : 'app-control-' + __.GUID.create();
		const wrapperClassTheme = theme === 'line' ? ' uix-controls--line' : '';
		const wrapperClassUi = this.uiSwitch(uiRes);
		
		// Get all options from option prop
		const singleSelOptions = __.validate.isJSON( options ) ? JSON.parse( options ) : {};
		const optionKeys = Object.keys(singleSelOptions);
		const optionValues = Object.values(singleSelOptions);
		
		
		// Generate list of options
		const singleSelOptionsList = optionKeys.map((selectOption, index) => {
			
			//get current value
			let activeThisEl = optionValues[index] === value ? true : false;

			
			//get target
			const _target = targetID ? __.removeFirstLastStr( targetID, ',' ) : '';
			const _targetArr = _target != '' ? _target.split( ',' ) : [];

		    return (
			    <React.Fragment key={index}>
				    <span aria-checked={(activeThisEl ? 'true' : 'false')} role="radio" data-value={optionValues[index]} className={activeThisEl ? 'is-active' : ''} data-switchid={_targetArr[index]}  onClick={this.handleClickItem}>
				        {theme === 'line' ? <><ins className="uix-controls__bar"></ins><ins className="uix-controls__basic-bar"></ins></> : ''}
				        {selectOption}
				    </span>
				</React.Fragment>
			)
		});

		
		return (
		  <>

				<div ref={this.wrapperRef} className={"uix-controls uix-controls__single-sel" + wrapperClassUi + wrapperClassTheme} id={idRes + "__wrapper"}>
				  {singleSelOptionsList}
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

