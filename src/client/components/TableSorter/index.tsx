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
import '@uixkit.react/components/_utils/styles/_all';
import '@uixkit.react/components/_utils/styles/rtl/_all';
import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply this component styles --*/
import '@uixkit.react/components/TableSorter/styles/_style';
import '@uixkit.react/components/TableSorter/styles/rtl/_style';


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
			<tr id={"app-table-sorter-field-tr" + __.GUID.create()}>
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
					<tr id={"app-table-sorter-header-tr" + __.GUID.create()}>
						{this.props.data!.map((item, i) => {
							return <th data-sort-type={item.type} key={"header" + i}>{item.content}</th>;
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
	className: string;
	/** -- */
	id?: string;
	attributes?: any;
};
type TableSorterState = false;

export default class TableSorter extends Component<TableSorterProps, TableSorterState> {
	constructor(props) {
		super(props);
	}
	
	componentDidMount(){
		
		
		__( document ).ready( function() {

			
			__( '.js-uix-table-sorter' ).each(function(this: any, index: number, curSelector: string ) {
			

				//Add an identifier so that the mobile terminal can compare by row
				__( curSelector + ' tbody tr' ).each(function(this: any, index: number, tdSelectors: string ) {
					__( tdSelectors + '> td' ).each( function(this: any, index: number ) {
						__( curSelector + ' thead th' ).eq(index).data( 'table-row', index );
						__( this ).data( 'table-row', index );
					});
				});



				//Filter functions
				__( curSelector + ' thead tr [data-sort-type]' ).each( function(this: any)  {
					//add arrows
					if ( __( this ).find( '.uix-table-sorter' ).length == 0 && __( this ).data( 'sort-type' ) !== false ) {
						__( this ).wrapInner( '<span class="uix-table-sorter" />' );
					}
				});


				//Click event
				let	inverse = false;
				__( curSelector + ' thead tr [data-sort-type]' ).off( 'click' ).on( 'click', function(this: any) {

					const thType  = __( this ).data( 'sort-type' );
					const curIndex = __( this ).index();
					const targetComparator = __( curSelector + ' tbody [data-table-row="'+curIndex+'"]' );
					const root = __( curSelector + ' tbody' );


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
						__( curSelector + ' tbody tr' ).addClass( 'js-uix-newsort' );

						inverse = !inverse;

						return txt2<txt1 ? -1 : txt2>txt1 ? 1 : 0;
					}

					targetComparator.sort(sortBy);

					//console.log( 'targetComparator:', targetComparator );
					//console.log( 'inverse:', inverse );

					if ( !inverse ) targetComparator.reverse();


					root.empty();
					for (let i = 0; i < targetComparator.length; i++) {
						const curRow = targetComparator[i].parentNode;
						root[0].appendChild(curRow);
					}


				});
	
				
				
			});
			

		});

		
	}
	
	
	
	render() {
		
		const { 
			data,
			className,
			id,
			...attributes
		} = this.props;

		
		const _headers = data.hasOwnProperty( 'headers' ) ? data.headers : false;
		
		
		return (
		  <>
			
			<div className={className || ''} id={id || 'app-table-sorter-' + __.GUID.create()} {...attributes}>
				<table>
			
			        <TableSorterHeaders data={_headers} />
              
		

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


