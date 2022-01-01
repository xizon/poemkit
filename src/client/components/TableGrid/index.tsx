/* 
 *************************************
 * <!-- Table Grid -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@/components/_plugins/_lib-bootstrap';
import '@/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@/components/_utils/styles/_all.scss';
import '@/components/_utils/styles/rtl/_all.scss';
import { __ } from '@/components/_utils/_all';

/*-- Apply this component styles --*/
import '@/components/TableGrid/styles/_style.scss';


//
import TableGridRow from '@/components/TableGrid/TableGridRow';
import TableGridHeaders from '@/components/TableGrid/TableGridHeaders';



type TableGridProps = {
	data: any;
	/** -- */
	id?: string;
};
type TableGridState = false;



export default class TableGrid extends Component<TableGridProps, TableGridState> {

	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
	}
	

	render() {
		
		const { 
			data,
			id
		} = this.props;

		
		const _headers = data.hasOwnProperty( 'headers' ) ? data.headers : false;
	
		
		return (
		  <>
			
			<div className="poemkit-table-grid" id={id || this.uniqueID} role="grid">
		
                <TableGridHeaders data={_headers} />
					
				<div className="poemkit-table-grid__body" role="rowgroup">
					{data.hasOwnProperty( 'fields' ) ? data.fields.map((item, i) => {
						return <TableGridRow key={"row" + i} data={item} />;
					}) : ""
					}
				</div>
			</div>
		
			
	
		  </>
		)
	}
}
