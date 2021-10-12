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
import '@uixkit.react/components/_utils/styles/_all.scss';
import '@uixkit.react/components/_utils/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Table/styles/_style.scss';
import '@uixkit.react/components/Table/styles/rtl/_style.scss';


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
			<tr id={'app-table-field-tr' + __.GUID.create()}>
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
					<tr id={'app-table-header-tr' + __.GUID.create()}>
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
					<tr id={'app-table-summary-tr' + __.GUID.create()}>
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
type TableState = false;


export default class Table extends Component<TableProps, TableState> {

	private wrapperRef = React.createRef<HTMLDivElement>();

	constructor(props) {
		super(props);
	}
	
	componentDidMount(){

		const self = this;
		
		__( document ).ready( function() {

			const reactDomEl: any = self.wrapperRef.current;
			const $el = __( reactDomEl );			

		
			/*
			 ////////////////////////////////////////////////////////////
			 /////////////////////   Duplicate title    /////////////////
			 ////////////////////////////////////////////////////////////
			 */
			if ( $el.hasClass( 'js-uix-table--responsive' ) ) {
				const $th = $el.find( 'thead th' );
				const $tr = $el.find( 'tbody > tr' );
				const thArr:string[] = [];
				
				$th.each(function ( this: any  ) {
					const data = __( this ).html().replace(/<span[^>]*>[\s\S]+<\/span>/g, '');
					thArr.push(data);
					if (__( this ).data('table') === null) {
						__( this ).data('table', data);
					}
				});
				
				$tr.each(function ( this: any ) {
					const $td = __( this ).find( '> td' );
					$td.each(function ( this: any, tdIndex: number ) {
						__( this ).data('table', thArr[tdIndex]);
					});
				
				});
			}


			/*
			 ////////////////////////////////////////////////////////////
			 /////////////////////  With scroll bars   //////////////////
			 ////////////////////////////////////////////////////////////
			 */
		
			if ( $el.hasClass( 'js-uix-table--responsive-scrolled' ) ) {

				let	windowWidth = window.innerWidth;
				tableDataScrolledInit( windowWidth );

				function tableDataScrolledInit( w ) {
					

					//Add an identifier so that the mobile terminal can compare by row
					const $th = $el.find( 'thead th' );
					const $tr = $el.find( 'tbody > tr' );

					$tr.each(function( this: any ) {
						const $td = __( this ).find( '> td' );
						$td.each( function( this: any, tdIndex: number ) {
							$th.eq(tdIndex).data( 'table-row', tdIndex );
							__( this ).data( 'table-row', tdIndex );
						});
					});
				
				
					if ( w <= 768 ) {

						//get maxHeight of per row
						const $tr = $el.find( 'tbody > tr' );
						const len = $tr.length;
						for (let i=0; i<len; i++ ) {
							const maxHeight = $el.find( '[data-table-row="'+i+'"]' ).maxDimension().height;
							$el.find( '[data-table-row="'+i+'"]' ).css({'height': maxHeight + 'px'});
						}
				
				
					
					} else {
						$el.find( 'tbody td, thead th' ).removeAttr( 'style');
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

			 }



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
		const _summaries = data.hasOwnProperty( 'summaries' ) ? data.summaries : false;


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
			
			<div ref={this.wrapperRef} className={"uix-table" + classes} id={id || 'app-table-' + __.GUID.create()} {...attributes}>
				<table>
			
			        <TableHeaders data={_headers} />
                    <TableSummaries data={_summaries} />
					
				
					{data.hasOwnProperty( 'fields' ) && alternantCol ? <TableColgroup data={data.fields} />  : ""
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

