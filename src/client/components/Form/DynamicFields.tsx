import React, { Component } from 'react';
import ReactDOM from 'react-dom';


/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap';
import '@uixkit.react/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utils/styles/_all';
import '@uixkit.react/components/_utils/styles/rtl/_all';
import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Form/styles/_basic';
import '@uixkit.react/components/Form/styles/_layout';
import '@uixkit.react/components/Form/styles/_theme_material';
import '@uixkit.react/components/Form/styles/rtl/_basic';
import '@uixkit.react/components/Form/styles/rtl/_layout';
import '@uixkit.react/components/Form/styles/rtl/_theme_material';


type DynamicFieldsProps = {
	value?: string;
	removeLabel?: string;
	addLabel?: string;
	tempHtmlString?: string | object;
	maxFields?: any;
	/** -- */
	id?: string;
};
type DynamicFieldsState = {
	elVals: Array<any>;
};


export default class DynamicFields extends Component<DynamicFieldsProps, DynamicFieldsState> {

	
	//Refs are commonly assigned to an instance property when a component 
	//is constructed so they can be referenced throughout the component.
	private wrapperRef = React.createRef<HTMLDivElement>();
	private addBtnRef = React.createRef<HTMLAnchorElement>();

	constructor(props) {
		super(props);
	
	
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
			id
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


