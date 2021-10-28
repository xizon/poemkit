import React, { Component } from 'react';

/* Table Field
-------------------------------------------------*/
type TableFieldProps = {
	cols?: number;
	content?: any;
	columnHeader?: string;
	index?: number;
};
type TableFieldState = false;


export default class TableField extends Component<TableFieldProps, TableFieldState> {
	constructor(props) {
		super(props);
	}
	render() {
		
		return (
		  <>
			<td colSpan={this.props.cols} data-table={this.props.columnHeader} data-table-row={this.props.index}>{this.props.content}</td>
		  </>
		)
	}
}

