/* 
 *************************************
 * <!-- Table -->
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
import '@uixkit.react/components/Table/styles/_style';
import '@uixkit.react/components/Table/styles/rtl/_style';


/* Table Field
-------------------------------------------------*/
type TableFieldProps = {
	cols?: number;
	content?: any;
};
type TableFieldState = false;


class TableField extends Component<TableFieldProps, TableFieldState> {
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



/* Table Row
-------------------------------------------------*/
type TableRowProps = {
	data?: any[];
};
type TableRowState = false;


class TableRow extends Component<TableRowProps, TableRowState> {
	constructor(props) {
		super(props);
	}
	render() {
		

		const fields = this.props.data!.map((el, i) => {
			return <TableField key={"field" + i} cols={el.cols} content={el.content}  />
		});
												
		return (
		  <>
			<tr id={"app-table-field-tr" + __.GUID.create()}>
				{fields}
			</tr>
	
		  </>
		)
	}
}
		

/* Table Headers
-------------------------------------------------*/			
type TableHeadersProps = {
	data: any[];
};
type TableHeadersState = false;



class TableHeaders extends Component<TableHeadersProps, TableHeadersState> {
	constructor(props) {
		super(props);
	}
	render() {
		if ( this.props.data ) {
			
			return (
			  <>

				<thead>
					<tr id={"app-table-header-tr" + __.GUID.create()}>
						{this.props.data.map((item, i) => {
							return <th key={"header" + i}>{item}</th>;
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
	

/* Table Summaries
-------------------------------------------------*/		
type TableSummariesProps = {
	data: any[];
};
type TableSummariesState = false;


class TableSummaries extends Component<TableSummariesProps, TableSummariesState> {
	constructor(props) {
		super(props);
	}
	render() {
		if ( this.props.data ) {
			
			return (
			  <>

				<tfoot>
					<tr id={"app-table-summary-tr" + __.GUID.create()}>
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



/* Table Colgroup
-------------------------------------------------*/		
type TableColgroupProps = {
	data?: any[];
};
type TableColgroupState = false;


class TableColgroup extends Component<TableColgroupProps, TableColgroupState> {
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
	


/* Table Component 
-------------------------------------------------*/			
type TableProps = {
	className: string;
	data: any;
	/** -- */
	id?: string;
	attributes?: any;
};
type TableState = false;


export default class Table extends Component<TableProps, TableState> {
	constructor(props) {
		super(props);
	}
	
	componentDidMount(){
		
		
		__( document ).ready( function() {


			

			/*
			 ////////////////////////////////////////////////////////////
			 /////////////////////   Duplicate title    /////////////////
			 ////////////////////////////////////////////////////////////
			 */
			__( '.js-uix-table--responsive' ).each(function(this: any, index: number, curSelector: string ) {
				__( curSelector + ' thead th' ).each(function(this: any, index: number, curSelector: string ) {
					const data = __( this ).html().replace(/<span[^>]*>[\s\S]+<\/span>/g, '');
					if( __( this ).data( 'table' ) === null ) {
						__( this ).data( 'table', data );
					}
				});

				__( curSelector + ' tbody tr' ).each(function(this: any, index: number, trSelectors: string ) {
					__( trSelectors + '> td' ).each( function( this: any, index: number ) {
						const data = __( curSelector + ' thead th' ).eq(index).data( 'table' );
						__( this ).data( 'table', data );

					});

				});
	
			});
			


			/*
			 ////////////////////////////////////////////////////////////
			 /////////////////////  With scroll bars   //////////////////
			 ////////////////////////////////////////////////////////////
			 */
		
			let	windowWidth = window.innerWidth;
			tableDataScrolledInit( windowWidth );

			function tableDataScrolledInit( w ) {
				

					
				//Add an identifier so that the mobile terminal can compare by row
				__( '.js-uix-table--responsive-scrolled' ).each(function( this: any, index: number, curSelector: string ) {
					__( curSelector + ' tbody tr' ).each(function( index, tdSelectors ) {
						__( tdSelectors + '> td' ).each( function( this: any, index: number ) {
							__( curSelector + ' thead th' ).eq(index).data( 'table-row', index );
							__( this ).data( 'table-row', index );
						});
					});
				});
			

				if ( w <= 768 ) {



					//get maxHeight of per row
					__( '.js-uix-table--responsive-scrolled' ).each(function( this: any, index: number, curSelector: string ) {
					
						const len = __( curSelector + ' tbody tr' ).length;
						for (let i=0; i<len; i++ ) {
							const maxHeight = __( curSelector + ' [data-table-row="'+i+'"]' ).maxDimension().height;
							__( curSelector + ' [data-table-row="'+i+'"]' ).css({'height': maxHeight + 'px'});
						}
					});

				
				} else {
					__( '.js-uix-table--responsive-scrolled tbody td, .js-uix-table--responsive-scrolled thead th' ).removeAttr( 'style') ;
				}

			}	
			
			
			function windowUpdate() {
				// Check window width has actually changed and it's not just iOS triggering a resize event on scroll
				if ( window.innerWidth != windowWidth ) {
					
					// Update the window width for next time
					windowWidth = window.innerWidth;

					// Do stuff here
					tableDataScrolledInit( windowWidth );


				}
			}
			
			const debounceFunc = __.debounce(windowUpdate, 50);
			window.removeEventListener('resize', debounceFunc);
			window.addEventListener('resize', debounceFunc);
			
			

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
		const _summaries = data.hasOwnProperty( 'summaries' ) ? data.summaries : false;
		
		
		return (
		  <>
			
			<div className={className || ''} id={id || 'app-table-' + __.GUID.create()} {...attributes}>
				<table>
			
			        <TableHeaders data={_headers} />
                    <TableSummaries data={_summaries} />
					
				
					{data.hasOwnProperty( 'fields' ) && className.indexOf( 'uix-table--alternant-col' ) >= 0 ? <TableColgroup data={data.fields} />  : ""
					}
					

					<tbody>
			
						{data.hasOwnProperty( 'fields' ) ? data.fields.map((item, i) => {
							return <TableRow key={"row" + i} data={item} />;
						}) : ""
						}
						
					</tbody>

				</table>           
			</div>

			
	
		  </>
		)
	}
}

