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


//
import TableRow from '@uixkit.react/components/Table/TableRow';
import TableHeaders from '@uixkit.react/components/Table/TableHeaders';
import TableSummaries from '@uixkit.react/components/Table/TableSummaries';
import TableColgroup from '@uixkit.react/components/Table/TableColgroup';


	
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

	private rootRef = React.createRef<HTMLDivElement>();

	windowResizeUpdate: () => void;
	uniqueID: string;

	constructor(props) {
		super(props);

		// Add a resize event listener to window
		this.windowResizeUpdate = ()=>{};

		this.uniqueID = 'app-' + __.GUID.create();
	}
	
	componentDidMount() {

		const self = this;
		
		__( document ).ready( function() {

			const reactDomEl: any = self.rootRef.current;
			const $el = __( reactDomEl );			

	
			/*
			 ////////////////////////////////////////////////////////////
			 /////////////////////  With scroll bars   //////////////////
			 ////////////////////////////////////////////////////////////
			 */
		
			if ( $el.hasClass( 'js-uix-table--responsive-scrolled' ) ) {

				let	windowWidth = window.innerWidth;
				tableDataScrolledInit( windowWidth );

				function tableDataScrolledInit( w ) {
					
					if ( w <= 768 ) {

						//get maxHeight of per row
						const $tr = $el.find( 'tbody > tr' );
						for (let i=0; i<$tr.length; i++ ) {
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
				
				// Add function to the window that should be resized
				self.windowResizeUpdate = __.debounce(windowUpdate, 50) as unknown as () => void;
				window.removeEventListener('resize', self.windowResizeUpdate);
				window.addEventListener('resize', self.windowResizeUpdate);

			 }



		});

		
	}

 
     /** Remove the global list of events, especially as scroll and interval. */
     componentWillUnmount() {
		 
	   // Remove resize events from window
	   window.removeEventListener('resize', this.windowResizeUpdate);   

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
			
			<div ref={this.rootRef} className={"uix-table" + classes} id={id || this.uniqueID}>
				<table>
			
			        <TableHeaders data={_headers} />
                    <TableSummaries data={_summaries} />
					
				
					{data.hasOwnProperty( 'fields' ) && alternantCol ? <TableColgroup data={data.fields} />  : ""
					}
					

					<tbody>
			
						{data.hasOwnProperty( 'fields' ) ? data.fields.map((item, i) => {
							return <TableRow key={"row" + i} headerLabel={_headers} data={item} />;
						}) : ""
						}
						
					</tbody>

				</table>           
			</div>

			
	
		  </>
		)
	}
}

