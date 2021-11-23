import React, { Component } from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import TableGridField from '@poemkit/components/TableGrid/TableGridField';


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


export default class TableGridRow extends Component<TableGridRowProps, TableGridRowState> {

	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
	}
	render() {
		
		const _fields = this.props.data!.data!;
		const _selected = this.props.data!.selected!;
		const rowClassName = _selected ? 'poemkit-table-grid__row is-drop-target' : 'poemkit-table-grid__row';

		
		const fields = _fields.map((el, i) => {
			return <TableGridField key={"field" + i} cols={el.cols} content={el.content}  />
		});
												
		return (
		  <>
			<div className={rowClassName} role="row" id={this.uniqueID}>
				{fields}
			</div>
	
		  </>
		)
	}
}
		