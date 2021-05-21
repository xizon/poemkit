/* 
 *************************************
 * <!-- Table -->
 *************************************
 */
import PropTypes from "prop-types";
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/plugins/_lib-bootstrap.js';
import '@uixkit.react/plugins/_lib-gsap.js';
import '@uixkit.react/plugins/_lib-icons.js';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utilities/styles/_all.scss';
import '@uixkit.react/components/_utilities/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Table/styles/_style.scss';
import '@uixkit.react/components/Table/styles/rtl/_style.scss';


/* Table Field
-------------------------------------------------*/
class TableField extends Component {
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
class TableRow extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		

		const fields = this.props.data.map((el, i) => {
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
class TableHeaders extends Component {
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
class TableSummaries extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		if ( this.props.data ) {
			
			return (
			  <>

				<tfoot>
					<tr id={"app-table-summary-tr" + __.GUID.create()}>
						{this.props.data.map((item, i) => {
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
class TableColgroup extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		
	
		const fieldPlaceholders = this.props.data.map((el, i) => {
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
export default class Table extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount(){
		
		//
		__( document ).ready( function() {

			
			const $window          = __( window );
			let	windowWidth        = window.innerWidth,
				windowHeight       = window.innerHeight;

			/* 
			 ---------------------------
			 Duplicate title
			 ---------------------------
			 */
			__( '.js-uix-table--responsive' ).each(function( index, selectors ) {
				__( selectors + ' thead th' ).each(function( index, selectors ) {
					const data = __( this ).html().replace(/<span[^>]*>[\s\S]+<\/span>/g, '');
					if( __( this ).data( 'table' ) === null ) {
						__( this ).data( 'table', data );
					}
				});

				__( selectors + ' tbody tr' ).each(function( index, trSelectors ) {
					__( trSelectors + '> td' ).each( function( index ) {
						const data = __( selectors + ' thead th' ).eq(index).data( 'table' );
						__( this ).data( 'table', data );

					});

				});
	
			});
			

			/* 
			 ---------------------------
			 With scroll bars
			 ---------------------------
			 */
		
			tableDataScrolledInit( windowWidth );

			$window.off( 'resize' ).on( 'resize', function() {
				// Check window width has actually changed and it's not just iOS triggering a resize event on scroll
				if ( window.innerWidth != windowWidth ) {
					
					// Update the window width for next time
					windowWidth = window.innerWidth;

					// Do stuff here
					tableDataScrolledInit( windowWidth );


				}
			});


			function tableDataScrolledInit( w ) {
				

					
				//Add an identifier so that the mobile terminal can compare by row
				__( '.js-uix-table--responsive-scrolled' ).each(function( index, selectors ) {
					__( selectors + ' tbody tr' ).each(function( index, tdSelectors ) {
						__( tdSelectors + '> td' ).each( function( index ) {
							__( selectors + ' thead th' ).eq(index).data( 'table-row', index );
							__( this ).data( 'table-row', index );
						});
					});
				});
			

				if ( w <= 768 ) {



					//get maxHeight of per row
					__( '.js-uix-table--responsive-scrolled' ).each(function( index, selectors ) {
					
						const len = __( selectors + ' tbody tr' ).length;
						for (let i=0; i<len; i++ ) {
							const maxHeight = __( selectors + ' [data-table-row="'+i+'"]' ).maxDimension().height;
							__( selectors + ' [data-table-row="'+i+'"]' ).css({'height': maxHeight + 'px'});
						}
					});

				
				} else {
					__( '.js-uix-table--responsive-scrolled tbody td, .js-uix-table--responsive-scrolled thead th' ).removeAttr( 'style') ;
				}

			}	

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


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	Table.propTypes = {
		data: PropTypes.object.isRequired,
		id: PropTypes.string,
		className: PropTypes.string.isRequired
	}

	TableRow.propTypes = {
		data: PropTypes.array
	}
	
	TableColgroup.propTypes = {
		data: PropTypes.array
	}
	
	TableField.propTypes = {
		cols: PropTypes.number,
		content: PropTypes.any
	}
	
	TableHeaders.propTypes = {
		data: PropTypes.any.isRequired
	}
	
	TableSummaries.propTypes = {
		data: PropTypes.any.isRequired
	}
	
	
}


