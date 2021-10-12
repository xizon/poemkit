/* 
 *************************************
 * <!-- Table Sorter-->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap';
import '@uixkit.react/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utils/styles/_all.scss';
import '@uixkit.react/components/_utils/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply this component styles --*/
import '@uixkit.react/components/TableSorter/styles/_style.scss';
import '@uixkit.react/components/TableSorter/styles/rtl/_style.scss';


/* Table Sorter Field
-------------------------------------------------*/
type TableSorterFieldProps = {
	cols?: number;
	content?: any;
};
type TableSorterFieldState = false;


class TableSorterField extends Component<TableSorterFieldProps, TableSorterFieldState> {
	constructor(props) {
		super(props);
	}
	render() {
		
		return (
		  <>
			<td colSpan={this.props.cols}>{this.props.content}</td>
		  </>
		)
	}
}



/* Table Sorter Row
-------------------------------------------------*/
type TableSorterRowProps = {
	data?: any[];
};
type TableSorterRowState = false;


class TableSorterRow extends Component<TableSorterRowProps, TableSorterRowState>  {
	constructor(props) {
		super(props);
	}
	render() {
		

		const fields = this.props.data!.map((el, i) => {
			return <TableSorterField key={"field" + i} cols={el.cols} content={el.content}  />
		});
												
		return (
		  <>
			<tr id={'app-table-sorter-field-tr' + __.GUID.create()}>
				{fields}
			</tr>
	
		  </>
		)
	}
}
		

/* Table Sorter Headers
-------------------------------------------------*/		
type TableSorterHeadersProps = {
	data: any[];
	clickEv?: React.MouseEventHandler<HTMLElement>;
};
type TableSorterHeadersState = false;

class TableSorterHeaders extends Component<TableSorterHeadersProps, TableSorterHeadersState>  {
	constructor(props) {
		super(props);
	}
	render() {
		if ( this.props.data ) {
			
			return (
			  <>

				<thead>
					<tr id={'app-table-sorter-header-tr' + __.GUID.create()}>
						{this.props.data!.map((item, i) => {
							return <th data-sort-type={item.type} data-table-row={i} key={"header" + i} onClick={this.props.clickEv}>{item.content}</th>;
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




/* Table Sorter Component 
-------------------------------------------------*/			
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

	private wrapperRef = React.createRef<HTMLDivElement>();

	inverse: boolean;


	constructor(props) {
		super(props);

		this.handleSortType = this.handleSortType.bind(this);
		this.inverse = false;
		
	}

	handleSortType(e) {
		e.preventDefault();

		const self = this;
		const wrapper = self.wrapperRef.current;
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
			__( wrapper ).find( 'tbody tr' ).addClass( 'js-uix-newsort' );

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
	
	componentDidMount(){
		
		const self = this;

		__( document ).ready( function() {

			const reactDomEl: any = self.wrapperRef.current;
			const $el = __( reactDomEl );
			
			//Add an identifier so that the mobile terminal can compare by row
			$el.find( 'tbody tr' ).each(function(this: any, index: number ) {
				__( this ).find( '> td' ).each( function(this: any, index: number ) {
					__( this ).data( 'table-row', index );
				});
			});



			//Filter functions
			$el.find( 'thead tr [data-sort-type]' ).each( function(this: any)  {	
				//add arrows
				if ( __( this ).find( '.uix-table-sorter' ).length == 0 && __( this ).data( 'sort-type' ) !== false ) {
					__( this ).css( 'cursor', 'pointer' );
					__( this ).wrapInner( '<span class="uix-table-sorter" style="pointer-events: none;" />' );
				}
			});
			

		});

		
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
			id,
			...attributes
		} = this.props;

		
		const _headers = data.hasOwnProperty( 'headers' ) ? data.headers : false;
		

		//Set the class names of different styles
		let classes = '';
		
		if ( bordered ) classes += ' uix-table--bordered';
		if ( noborder ) classes += ' uix-table--noborder';
		if ( horizontal ) classes += ' is-horizontal';
		if ( alternantRow ) classes += ' uix-table--alternant-row';
		if ( alternantCol ) classes += ' uix-table--alternant-col';
		if ( perLine ) classes += ' uix-table--per-line';
		if ( responsive && !responsiveWithScrollBar ) classes += ' is-responsive js-uix-table--responsive';
		if ( responsiveWithScrollBar && !responsive ) classes += ' js-uix-table--responsive-scrolled';


		
		return (
		  <>
			
			<div ref={this.wrapperRef} className={"uix-table" + classes + " js-uix-table-sorter"} id={id || 'app-table-sorter-' + __.GUID.create()} {...attributes}>
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


