import React, { Component } from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';


/* Table Grid Headers
-------------------------------------------------*/				
type TableGridHeadersProps = {
	data: any[];
};
type TableGridHeadersState = false;


export default class TableGridHeaders extends Component<TableGridHeadersProps, TableGridHeadersState> {

	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
	}
	render() {
		if ( this.props.data ) {
			
			return (
			  <>

				<div className="uix-table-grid__head" role="row" id={this.uniqueID}>
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