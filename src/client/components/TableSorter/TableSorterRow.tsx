import React, { Component } from 'react';
import { __ } from '@/components/_utils/_all';
import TableSorterField from '@/components/TableSorter/TableSorterField';


/* Table Sorter Row
-------------------------------------------------*/
type TableSorterRowProps = {
	data?: any[];
};
type TableSorterRowState = false;


export default class TableSorterRow extends Component<TableSorterRowProps, TableSorterRowState>  {

	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
	}
	render() {
		

		const fields = this.props.data!.map((el, i) => {
			return <TableSorterField key={"field" + i} index={i} cols={el.cols} content={el.content}  />
		});
												
		return (
		  <>
			<tr id={this.uniqueID}>
				{fields}
			</tr>
	
		  </>
		)
	}
}