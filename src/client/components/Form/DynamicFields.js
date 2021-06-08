import PropTypes from "prop-types";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


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



export default class DynamicFields extends Component {
	
	constructor(props) {
		super(props);
	
		//Refs are commonly assigned to an instance property when a component 
		//is constructed so they can be referenced throughout the component.
		this.wrapperRef = React.createRef();
		this.addBtnRef = React.createRef();
		
		this.state = {
			elVals: this.props.value ? [...Array( JSON.parse( '[' + this.props.value + ']' ).length-1 )].map(() => [""]) : [] 
		};
		
		this.handleClickAdd = this.handleClickAdd.bind(this);
		this.handleClickRemove = this.handleClickRemove.bind(this);
		
		
	}

	handleClickAdd(event){
		event.preventDefault();
		
		const root = ReactDOM.findDOMNode(this.wrapperRef.current);
		const curVal = this.state.elVals;
		
	
		//button status
		if ( curVal.length >= parseFloat(this.props.maxFields) && ReactDOM.findDOMNode(this.addBtnRef.current) != null ) {
			ReactDOM.findDOMNode(this.addBtnRef.current).style.display = 'none';
		}


		//
		this.setState(function(prevState) {
		  return {
			elVals: [...prevState.elVals, [""]]
		  };
		});
		
		
	}

	
	handleClickRemove(param) { // param is the argument you passed to the function
		
		const root = ReactDOM.findDOMNode(this.wrapperRef.current);
		const self = this;
		const curVal = this.state.elVals;
		
	
		//button status
		if ( curVal.length <= parseFloat(this.props.maxFields) && ReactDOM.findDOMNode(this.addBtnRef.current) != null ) {
			ReactDOM.findDOMNode(this.addBtnRef.current).style.display = 'inherit';
		}
		
		
		//
		return function (event) { // e is the event object that returned
			event.preventDefault();
			
			let elVals = [...curVal];
			elVals.splice(param,1);
			//console.log(curVal); //[[""],[""],[""],[""]]
			self.setState({ elVals });
		};
	}
	
	createUI(){
		return this.state.elVals.map((el, i) => 
		   <div key={i} className="uix-controls__dynamic-fields__tmpl__wrapper">
									 
				{el.map((data,index) => {
						return (
							<React.Fragment key={index}>
								{this.props.tempHtmlString}
							</React.Fragment>
						)
					})
				}

			  &nbsp;&nbsp;
			  <a href="#" className="uix-controls__dynamic-fields__removebtn" onClick={this.handleClickRemove(i)}><i className="fa fa-minus-circle" aria-hidden="true"></i></a> {this.props.removeLabel || ''}
		   </div>          
		)
	}

	componentDidMount(){

		const _val = this.props.value ? JSON.parse( '[' + this.props.value + ']' ) : [];
	
	
		
		//update values for all displayed controls
		const root = ReactDOM.findDOMNode(this.wrapperRef.current);
		const controls = __( root ).find( '.uix-controls__dynamic-fields__append' ).find( '[name]' );
		
		let n = 0;
		_val.map((data,index) => {

			data.map((item,i) => {

				//console.log(index + '===' + item + 'i: ' + i);
				if ( controls[n] ) controls[n].value = item;
				n++;

			})	

		});
		
		
			

	}
	
	

	render() {
		
		const { 
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
					<a ref={this.addBtnRef} href="#" className="uix-controls__dynamic-fields__addbtn" onClick={this.handleClickAdd}><i className="fa fa-plus-circle" aria-hidden="true"></i> {addLabel || 'Add new'}</a>

				</div>
			
		  </>
		)
	}
}


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	DynamicFields.propTypes = {
		value: PropTypes.string,
		removeLabel: PropTypes.string,
		addLabel: PropTypes.string,
		tempHtmlString: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		maxFields: PropTypes.string,
		id: PropTypes.string	   
		
	}

}

