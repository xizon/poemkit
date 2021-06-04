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



export default class DynamicFields extends Component {
	
	constructor(props) {
		super(props);
	
		//Refs are commonly assigned to an instance property when a component 
		//is constructed so they can be referenced throughout the component.
		this.wrapperRef = React.createRef();
		
		this.state = {
			values: [] 
		};
		
		this.handleOnClickAdd = this.handleOnClickAdd.bind(this);
		this.handleOnClickRemove = this.handleOnClickRemove.bind(this);
		
		
	}

	handleOnClickAdd(event){
		event.preventDefault();
		
		const root = ReactDOM.findDOMNode(this.wrapperRef.current);
		const curVal = this.state.values;
		
	
		//button status
		if ( curVal.length >= parseFloat(this.props.maxFields) ) {
			__( root ).find( '.uix-controls__dynamic-fields__addbtn' ).hide();
		}


		//
		this.setState(function(prevState) {
		  return {
			values: [...prevState.values, '']
		  };
		});
		
		
	}

	
	handleOnClickRemove(param) { // param is the argument you passed to the function
		
		const root = ReactDOM.findDOMNode(this.wrapperRef.current);
		const self = this;
		const curVal = this.state.values;
		
	
		//button status
		if ( curVal.length <= parseFloat(this.props.maxFields) ) {
			__( root ).find( '.uix-controls__dynamic-fields__addbtn' ).show();
		}
		
		
		//
		return function (event) { // e is the event object that returned
			event.preventDefault();
			
			let values = [...curVal];
			values.splice(param,1);
			//console.log(curVal); //["", "", "", ""]
			self.setState({ values });
		};
	}
	
	createUI(){
		return this.state.values.map((el, i) => 
		   <div key={i} className="uix-controls__dynamic-fields__tmpl__wrapper">
			  {this.props.tempHtmlString}

			  &nbsp;&nbsp;
			  <a href="#" className="uix-controls__dynamic-fields__removebtn" onClick={this.handleOnClickRemove(i)}><i className="fa fa-minus-circle" aria-hidden="true"></i></a> {this.props.removeLabel || ''}
		   </div>          
		)
	}


	render() {
		
		const { 
			removeLabel,
			addLabel,
			tempHtmlString,
			maxFields,
			id,
			...attributes
		} = this.props;
		

		const idRes = id ? id : 'app-control-' + __.GUID.create();

		
		return (
		  <>

				<div ref={this.wrapperRef} className="uix-controls__dynamic-fields-container" data-max-fields={maxFields || 10} id={idRes}>
					<div className="uix-controls__dynamic-fields__append">
			            {tempHtmlString}
			            {this.createUI()}
			       </div>
					<a href="#" className="uix-controls__dynamic-fields__addbtn" onClick={this.handleOnClickAdd}><i className="fa fa-plus-circle" aria-hidden="true"></i> {addLabel || 'Add new'}</a>

				</div>
			
		  </>
		)
	}
}


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	DynamicFields.propTypes = {
		removeLabel: PropTypes.string,
		addLabel: PropTypes.string,
		tempHtmlString: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		maxFields: PropTypes.string,
		id: PropTypes.string	   
		
	}

}

