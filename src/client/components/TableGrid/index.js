/* 
 *************************************
 * <!-- Table Grid -->
 *************************************
 */
import PropTypes from "prop-types";
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap.js';
import '@uixkit.react/components/_plugins/_lib-gsap.js';
import '@uixkit.react/components/_plugins/_lib-icons.js';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utilities/styles/_all.scss';
import '@uixkit.react/components/_utilities/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

/*-- Apply this component styles --*/
import '@uixkit.react/components/TableGrid/styles/_style.scss';


/* Table Grid Field
-------------------------------------------------*/
class TableGridField extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		
		return (
		  <>
			<div className="uix-table-grid__row-cell" style={{flex: this.props.cols}} role="gridcell">{this.props.content}</div>
		  </>
		)
	}
}



/* Table Grid Row
-------------------------------------------------*/
class TableGridRow extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		
		const _fields = this.props.data.data;
		const _target = this.props.data.target;
		const rowClasses = _target ? 'uix-table-grid__row is-drop-target' : 'uix-table-grid__row';

		
		const fields = _fields.map((el, i) => {
			return <TableGridField key={"field" + i} cols={el.cols} content={el.content}  />
		});
												
		return (
		  <>
			<div className={rowClasses} role="row" id={"app-table-grid-field-row" + __.GUID.create()}>
				{fields}
			</div>
	
		  </>
		)
	}
}
		

/* Table Grid Headers
-------------------------------------------------*/										  
class TableGridHeaders extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		if ( this.props.data ) {
			
			return (
			  <>

				<div className="uix-table-grid__head" role="row" id={"app-table-grid-columnheader" + __.GUID.create()}>
					{this.props.data.map((item, i) => {
						return <div key={"columnheader" + i} className="uix-table-grid__head-cell" style={{flex:1}} role="columnheader" tabIndex="0">{item}</div>;
					})
					}
				</div>

			  </>
			)	
		} else {
			return (
				<></>
			)
		}
	}
}


/* Table Grid Grid Component 
-------------------------------------------------*/								 
export default class TableGrid extends Component {
	constructor(props) {
		super(props);
	}
	

	render() {
		
		const { 
			data,
			className,
			id,
			...attributes
		} = this.props;

		
		const _headers = data.hasOwnProperty( 'headers' ) ? data.headers : false;
	
		
		return (
		  <>
			
			<div className={className || ''} id={id || 'app-table-grid-' + __.GUID.create()} {...attributes} role="grid">
		
                <TableGridHeaders data={_headers} />
					
				<div className="uix-table-grid__body" role="rowgroup">
					{data.hasOwnProperty( 'fields' ) ? data.fields.map((item, i) => {
						return <TableGridRow key={"row" + i} data={item} />;
					}) : ""
					}
				</div>
			</div>
		
			
	
		  </>
		)
	}
}


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	TableGrid.propTypes = {
		data: PropTypes.object.isRequired,
		id: PropTypes.string,
		className: PropTypes.string.isRequired
	}

	TableGridRow.propTypes = {
		data: PropTypes.object
	}
	
	
	TableGridField.propTypes = {
		cols: PropTypes.number,
		content: PropTypes.any
	}
	
	TableGridHeaders.propTypes = {
		data: PropTypes.any.isRequired
	}
	
	
}


