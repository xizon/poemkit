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


type DynamicFieldsProps = {
	value?: string;
	removeLabel?: string;
	addLabel?: string;
	tempHtmlString?: any;
	maxFields?: any;
	/** -- */
	id?: string;
};
type DynamicFieldsState = {
	elVals: Array<any>;
};


export default class DynamicFields extends Component<DynamicFieldsProps, DynamicFieldsState> {

	private rootRef = React.createRef<HTMLDivElement>();
	private addBtnRef = React.createRef<HTMLAnchorElement>();

	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();

		this.state = {
			elVals: this.props.value ? [...Array( JSON.parse( '[' + this.props.value + ']' ).length-1 )].map(() => [""]) : [] 
		};
		
		this.handleClickAdd = this.handleClickAdd.bind(this);
		this.handleClickRemove = this.handleClickRemove.bind(this);
		
		
	}

	handleClickAdd(event){
		event.preventDefault();
		
		const root = this.rootRef.current;
		const curVal = this.state.elVals;
		
	
		//button status
		if ( curVal.length >= parseFloat(this.props.maxFields) && this.addBtnRef.current != null ) {
			this.addBtnRef.current.style.display = 'none';
		}


		//
		this.setState(function(prevState) {
		  return {
			elVals: [...prevState.elVals, [""]]
		  };
		});
		
		
	}

	
	handleClickRemove(param) { // param is the argument you passed to the function
		
		const curVal = this.state.elVals;
		
		//button status
		if ( curVal.length <= parseFloat(this.props.maxFields) && this.addBtnRef.current != null ) {
			this.addBtnRef.current.style.display = 'inherit';
		}
		
		
		//
		return (e) => { // e is the event object that returned
			e.preventDefault();
			
			let elVals = [...curVal];
			elVals.splice(param,1);
			//console.log(curVal); //[[""],[""],[""],[""]]
			this.setState({ elVals });
		};
	}
	
	createUI(){
		return this.state.elVals.map((el, i) => 
		   <div key={i} className="poemkit-controls__dynamic-fields__tmpl__wrapper">
									 
				{el.map((data,index) => {
						return (
							<React.Fragment key={index}>
								{this.props.tempHtmlString}
							</React.Fragment>
						)
					})
				}

			  &nbsp;&nbsp;
			  <a href="#" className="poemkit-controls__dynamic-fields__removebtn" onClick={this.handleClickRemove(i)}><i className="fa fa-minus-circle" aria-hidden="true"></i></a> {this.props.removeLabel || ''}
		   </div>          
		)
	}

	componentDidMount() {

		const _val = this.props.value ? JSON.parse( '[' + this.props.value + ']' ) : [];
	
	
		
		//update values for all displayed controls
		const root = this.rootRef.current;
		const controls = __( root ).find( '.poemkit-controls__dynamic-fields__append' ).find( '[name]' );
		
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
		

		const idRes = id || this.uniqueID;

		
		return (
		  <>

				<div ref={this.rootRef} className="poemkit-controls__dynamic-fields-container" data-max-fields={maxFields || 10} id={idRes}>
					<div className="poemkit-controls__dynamic-fields__append">
			            {tempHtmlString}
			            {this.createUI()}
			       </div>
					<a ref={this.addBtnRef} href="#" className="poemkit-controls__dynamic-fields__addbtn" onClick={this.handleClickAdd}><i className="fa fa-plus-circle" aria-hidden="true"></i> {addLabel || 'Add new'}</a>

				</div>
			
		  </>
		)
	}
}


