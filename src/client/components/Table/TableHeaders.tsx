import React, { Component } from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';

/* Table Headers
-------------------------------------------------*/			
type TableHeadersProps = {
	data: any[];
};
type TableHeadersState = false;



export default class TableHeaders extends Component<TableHeadersProps, TableHeadersState> {

	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
	}
	render() {
		if ( this.props.data ) {
			
			return (
			  <>

				<thead>
					<tr id={this.uniqueID}>
						{this.props.data.map((item, i) => {
							return <th key={"header" + i} data-table={item.replace(/<span[^>]*>[\s\S]+<\/span>/g, '')} data-table-row={i}>{item}</th>;
						})
						}
					</tr>
				</thead>

			  </>
			)	
		} else {
			return (
				<></>
			)
		}
	}
}
	