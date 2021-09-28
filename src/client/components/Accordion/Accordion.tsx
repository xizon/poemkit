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
import '@uixkit.react/components/Accordion/styles/_style.scss';


//
import AccordionItem from '@uixkit.react/components/Accordion/AccordionItem';


type AccordionProps = {
	/** One event type, such as `click` or `mouseenter` */
	triggerType?: string;
	/** Display the only first item of a list */
	displayTheFirstItem?: boolean;
	/** -- */
	id?: string;
	children: any; /* required */
};
type AccordionState = false;


export default class Accordion extends Component<AccordionProps, AccordionState> {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount(){
		
		
		__( document ).ready( function() {

			
			__( '.uix-accordion' ).each( function(this: any, index: number) {
				const $this           = __( this );
			
				const $li = $this.children( 'dl' );

				let	aEvent          = $this.data( 'event' );
				
	
				const openItem = function( obj ) {

					//to open
					// - temporarilty set height:auto
					// - tween from height:0
					TweenMax.set( obj, { height: 'auto' } );
					TweenMax.from( obj, 0.5, { height:0 } );		
				};
				
				if ( aEvent === null ) {
					aEvent = 'click';
				}	
		
				//Initialize accordion items
				$li.each( function(this: any, index: number ) {
					__( this ).find( 'a' ).attr( 'href', 'javascript:' );
				});

	
				$li.off( aEvent ).on( aEvent, function( this: any, e: any ) {


					//Prevents further propagation of the current event in the capturing and bubbling phases.
					e.stopPropagation();
					
				
					//Its value is not a boolean but a string
					const expanded = ( __( this ).attr( 'aria-expanded' ) === true ) ? false : true,
						  $content = __( this ).find( 'dd' );
					
					if ( expanded ) {
						//Hide other all sibling <dt> of the selected element
						const $e = __( this ).siblings();
						$e.removeClass( 'is-active' ).attr( 'aria-expanded', false );
						
						__( this ).addClass( 'is-active' ).attr( 'aria-expanded', true );
						
						TweenMax.to( $e.find( 'dd' ), 0.5, { 
							height: 0
						} );
						
						//to open
						openItem( $content );
	
	
						
					} else {
						if ( e.type == 'click' ) {
							__( this ).removeClass( 'is-active' ).attr( 'aria-expanded', false );
							
							//to close
							TweenMax.to( $content, 0.5, { height: 0 } );
	
						}
						
					}
					
	
				}); 
							
				
				
			});

		
		});

		
	}
	

	render() {
		
		const { 
			triggerType,
			displayTheFirstItem,
			id,
			children, // the contents of the AccordionList and AccordionPanel in a loop
			...attributes
		} = this.props;
		

		return (
		  <>

	 
				<div 
					id={id ? id : 'app-accordion-' + __.GUID.create() } 
					className="uix-accordion" 
					data-event={triggerType || 'click'}
					data-first-show={displayTheFirstItem}
					role="tablist"
					{...attributes}>

					{( children != null ) ? children.map((item, i) => {
						const childProps = { ...item.props };

						delete childProps.key;

						if ( i === 0 && displayTheFirstItem ) childProps.defaultActive = true;
						return <AccordionItem key={"item" + i} {...childProps} />;

					})
						: ""
					}


				</div>
				{/*<!-- .uix-accordion end -->*/}     
			
	
		  </>
		)
	}
}

