/* 
 *************************************
 * <!-- Table Sorter-->
 *************************************
 */
import PropTypes from "prop-types";
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap.js';
import '@uixkit.react/components/_plugins/_lib-gsap.js';
import '@uixkit.react/components/_plugins/_lib-icons.js';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utilities/styles/_all.scss';
import '@uixkit.react/components/_utilities/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

/*-- Apply this component styles --*/
import '@uixkit.react/components/TableSorter/styles/_style.scss';
import '@uixkit.react/components/TableSorter/styles/rtl/_style.scss';


/* Table Sorter Field
-------------------------------------------------*/
class TableSorterField extends Component {
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
class TableSorterRow extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		

		const fields = this.props.data.map((el, i) => {
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
class TableSorterHeaders extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		if ( this.props.data ) {
			
			return (
			  <>

				<thead>
					<tr id={"app-table-sorter-header-tr" + __.GUID.create()}>
						{this.props.data.map((item, i) => {
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
export default class TableSorter extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount(){
		
		
		__( document ).ready( function() {

			
			__( '.js-uix-table-sorter' ).each(function( index, selectors ) {
			

				//Add an identifier so that the mobile terminal can compare by row
				__( selectors + ' tbody tr' ).each(function( index, tdSelectors ) {
					__( tdSelectors + '> td' ).each( function( index ) {
						__( selectors + ' thead th' ).eq(index).data( 'table-row', index );
						__( this ).data( 'table-row', index );
					});
				});



				//Filter functions
				__( selectors + ' thead tr [data-sort-type]' ).each( function()  {
					//add arrows
					if ( __( this ).find( '.uix-table-sorter' ).length == 0 && __( this ).data( 'sort-type' ) !== false ) {
						__( this ).wrapInner( '<span class="uix-table-sorter" />' );
					}
				});


				//Click event
				let	inverse = false;
				__( selectors + ' thead tr [data-sort-type]' ).off( 'click' ).on( 'click', function() {

					const thType  = __( this ).data( 'sort-type' );
					const curIndex = __( this ).index();
					const targetComparator = __( selectors + ' tbody [data-table-row="'+curIndex+'"]' );
					const root = __( selectors + ' tbody' );


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
						__( selectors + ' tbody tr' ).addClass( 'js-uix-newsort' );

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


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	TableSorter.propTypes = {
		data: PropTypes.object.isRequired,
		id: PropTypes.string,
		className: PropTypes.string.isRequired
	}

	TableSorterRow.propTypes = {
		data: PropTypes.array
	}

	TableSorterField.propTypes = {
		cols: PropTypes.number,
		content: PropTypes.any
	}
	
	TableSorterHeaders.propTypes = {
		data: PropTypes.any.isRequired
	}
	
	
}


