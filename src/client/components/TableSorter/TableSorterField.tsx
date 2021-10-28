import React, { Component } from 'react';


/* Table Sorter Field
-------------------------------------------------*/
type TableSorterFieldProps = {
	cols?: number;
	content?: any;
	index?: number;
};
type TableSorterFieldState = false;


export default class TableSorterField extends Component<TableSorterFieldProps, TableSorterFieldState> {
	constructor(props) {
		super(props);
	}
	render() {
		
		return (
		  <>
			<td colSpan={this.props.cols} data-table-row={this.props.index}>{this.props.content}</td>
		  </>
		)
	}
}