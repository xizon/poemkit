import React, { Component } from 'react';
import { __ } from '@/components/_utils/_all';


/* Table Sorter Headers
-------------------------------------------------*/		
type TableSorterHeadersProps = {
	data: any[];
	clickEv?: React.MouseEventHandler<HTMLElement>;
};
type TableSorterHeadersState = false;

export default class TableSorterHeaders extends Component<TableSorterHeadersProps, TableSorterHeadersState>  {

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
						{this.props.data!.map((item, i) => {
							return <th data-sort-type={item.type} data-table-row={i} key={"header" + i} onClick={this.props.clickEv} style={item.type ? {cursor:"pointer"} : {}}>{item.type ? <><span className="poemkit-table-sorter" style={{pointerEvents:"none"}}>{item.content}</span></> : <>{item.content}</> }</th>;
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

