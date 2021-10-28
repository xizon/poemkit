import React, { Component } from 'react';


/* Table Grid Field
-------------------------------------------------*/
type TableGridFieldProps = {
	cols?: number;
	content?: any;
};
type TableGridFieldState = false;


export default class TableGridField extends Component<TableGridFieldProps, TableGridFieldState> {
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