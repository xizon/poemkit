import React, { Component } from 'react';


/* Table Colgroup
-------------------------------------------------*/		
type TableColgroupProps = {
	data?: any[];
};
type TableColgroupState = false;


export default class TableColgroup extends Component<TableColgroupProps, TableColgroupState> {
	constructor(props) {
		super(props);
	}
	render() {
		
	
		const fieldPlaceholders = this.props.data!.map((el, i) => {
			return <col key={"colgroup-placeholder" + i}></col>;
		});
			
		
		return (
		  <>
			<colgroup>
			    <col></col>
				{fieldPlaceholders}
			</colgroup>
	
		  </>
		)
	}
}
	
