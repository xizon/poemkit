/* 
 *************************************
 * <!-- Table Sorter-->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/TableSorter/styles/_style.scss';
import '@poemkit/components/TableSorter/styles/rtl/_style.scss';


//
import TableSorterRow from '@poemkit/components/TableSorter/TableSorterRow';
import TableSorterHeaders from '@poemkit/components/TableSorter/TableSorterHeaders';



type TableSorterProps = {
	data: any;
	bordered?: boolean;
	noborder?: boolean;
	horizontal?: boolean;
	alternantRow?: boolean;
	alternantCol?: boolean;
	perLine?: boolean;
	responsive?: boolean;
	responsiveWithScrollBar?: boolean;
	/** -- */
	id?: string;
};
type TableSorterState = false;

export default class TableSorter extends Component<TableSorterProps, TableSorterState> {

	private rootRef = React.createRef<HTMLDivElement>();

	inverse: boolean;
	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();

		this.handleSortType = this.handleSortType.bind(this);
		this.inverse = false;
		
	}

	handleSortType(e) {
		e.preventDefault();

		const self = this;
		const wrapper = self.rootRef.current;
		const el = __( e.target );

		const thType  = el.data( 'sort-type' );
		const curIndex = el.data( 'table-row' );
		const targetComparator = __( wrapper ).find( 'tbody [data-table-row="'+curIndex+'"]' );
		const root = __( wrapper ).find( 'tbody' );
	
		if ( thType === false ) return false;


		//sort of HTML elements
		const sortBy = function(a, b) {

			let txt1 = a.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase(),
				txt2 = b.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase();	

			//type of number
			if ( thType == 'number' ) {
				txt1 = Number( txt1.replace(/[^0-9.-]+/g, '' ) );
				txt2 = Number( txt2.replace(/[^0-9.-]+/g, '' ) );
			}

			//type of date
			if ( thType == 'date' ) {
				txt1 = new Date( txt1 );
				txt2 = new Date( txt2 );	
			}	

			//add filter class
			__( wrapper ).find( 'tbody tr' ).addClass( 'js-poemkit-newsort' );

			self.inverse = !self.inverse;

			return txt2<txt1 ? -1 : txt2>txt1 ? 1 : 0;
		}

		targetComparator.sort(sortBy);

		//console.log( 'targetComparator:', targetComparator );
		//console.log( 'inverse:', self.inverse );

		if ( !self.inverse ) targetComparator.reverse();


		root.empty();
		for (let i = 0; i < targetComparator.length; i++) {
			const curRow = targetComparator[i].parentNode;
			root[0].appendChild(curRow);
		}


	}
	
	
	render() {
		
		const { 
			data,
			bordered,
			noborder,
			horizontal,
			alternantRow,
			alternantCol,
			perLine,
			responsive,
			responsiveWithScrollBar,
			id
		} = this.props;

		
		const _headers = data.hasOwnProperty( 'headers' ) ? data.headers : false;
		

		//Set the class names of different styles
		let classes = '';
		
		if ( bordered ) classes += ' poemkit-table--bordered';
		if ( noborder ) classes += ' poemkit-table--noborder';
		if ( horizontal ) classes += ' is-horizontal';
		if ( alternantRow ) classes += ' poemkit-table--alternant-row';
		if ( alternantCol ) classes += ' poemkit-table--alternant-col';
		if ( perLine ) classes += ' poemkit-table--per-line';
		if ( responsive && !responsiveWithScrollBar ) classes += ' is-responsive js-poemkit-table--responsive';
		if ( responsiveWithScrollBar && !responsive ) classes += ' js-poemkit-table--responsive-scrolled';


		
		return (
		  <>
			
			<div ref={this.rootRef} className={"poemkit-table" + classes + " js-poemkit-table-sorter"} id={id || this.uniqueID}>
				<table>
			
			        <TableSorterHeaders data={_headers} clickEv={this.handleSortType} />
              
					<tbody>
			
						{data.hasOwnProperty( 'fields' ) ? data.fields.map((item, i) => {
							return <TableSorterRow key={"row" + i} data={item} />;
						}) : ""
						}
						
					</tbody>

				</table>           
			</div>

			
	
		  </>
		)
	}
}


