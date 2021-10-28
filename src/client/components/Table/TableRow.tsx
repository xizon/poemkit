import React, { Component } from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';

import TableField from '@uixkit.react/components/Table/TableField';

/* Table Row
-------------------------------------------------*/
type TableRowProps = {
	data?: any[];
	headerLabel?: any[];
};
type TableRowState = false;


export default class TableRow extends Component<TableRowProps, TableRowState> {

	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
	}
	render() {
		

		const fields = this.props.data!.map((el, i) => {
			let label = this.props.headerLabel![i];
			if ( label === undefined ) label = '';

			return <TableField key={"field" + i} columnHeader={label.replace(/<span[^>]*>[\s\S]+<\/span>/g, '')} cols={el.cols} content={el.content} index={i} />
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
		