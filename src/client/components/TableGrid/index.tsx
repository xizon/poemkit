/* 
 *************************************
 * <!-- Table Grid -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap';
import '@uixkit.react/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utils/styles/_all.scss';
import '@uixkit.react/components/_utils/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply this component styles --*/
import '@uixkit.react/components/TableGrid/styles/_style.scss';


/* Table Grid Field
-------------------------------------------------*/
type TableGridFieldProps = {
	cols?: number;
	content?: any;
};
type TableGridFieldState = false;



class TableGridField extends Component<TableGridFieldProps, TableGridFieldState> {
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
interface TableGridRowConfig {
    data: any[] | undefined;
    selected: string | undefined;
}

type TableGridRowProps = {
	data?: TableGridRowConfig;
};
type TableGridRowState = false;


class TableGridRow extends Component<TableGridRowProps, TableGridRowState> {
	constructor(props) {
		super(props);
	}
	render() {
		
		const _fields = this.props.data!.data!;
		const _selected = this.props.data!.selected!;
		const rowClasses = _selected ? 'uix-table-grid__row is-drop-target' : 'uix-table-grid__row';

		
		const fields = _fields.map((el, i) => {
			return <TableGridField key={"field" + i} cols={el.cols} content={el.content}  />
		});
												
		return (
		  <>
			<div className={rowClasses} role="row" id={'app-table-grid-field-row' + __.GUID.create()}>
				{fields}
			</div>
	
		  </>
		)
	}
}
		

/* Table Grid Headers
-------------------------------------------------*/				
type TableGridHeadersProps = {
	data: any[];
};
type TableGridHeadersState = false;


class TableGridHeaders extends Component<TableGridHeadersProps, TableGridHeadersState> {
	constructor(props) {
		super(props);
	}
	render() {
		if ( this.props.data ) {
			
			return (
			  <>

				<div className="uix-table-grid__head" role="row" id={'app-table-grid-columnheader' + __.GUID.create()}>
					{this.props.data!.map((item, i) => {
						return <div key={"columnheader" + i} className="uix-table-grid__head-cell" style={{flex:1}} role="columnheader" tabIndex={0}>{item}</div>;
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
type TableGridProps = {
	data: any;
	/** -- */
	id?: string;
};
type TableGridState = false;



export default class TableGrid extends Component<TableGridProps, TableGridState> {
	constructor(props) {
		super(props);
	}
	

	render() {
		
		const { 
			data,
			id,
			...attributes
		} = this.props;

		
		const _headers = data.hasOwnProperty( 'headers' ) ? data.headers : false;
	
		
		return (
		  <>
			
			<div className="uix-table-grid" id={id || 'app-table-grid-' + __.GUID.create()} {...attributes} role="grid">
		
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
