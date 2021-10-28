import React, { Component } from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';


/* Table Summaries
-------------------------------------------------*/		
type TableSummariesProps = {
	data: any[];
};
type TableSummariesState = false;


export default class TableSummaries extends Component<TableSummariesProps, TableSummariesState> {

	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
	}
	render() {
		if ( this.props.data ) {
			
			return (
			  <>

				<tfoot>
					<tr id={this.uniqueID}>
						{this.props.data!.map((item, i) => {
							return <th key={"summary" + i}>{item}</th>;
						})
						}
					</tr>
				</tfoot>

			  </>
			)	
		} else {
			return (
				<></>
			)
		}
	}
}
