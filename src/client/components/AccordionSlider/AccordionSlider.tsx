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
import '@uixkit.react/components/AccordionSlider/styles/_style.scss';


//
import AccordionSliderItem from '@uixkit.react/components/AccordionSlider/AccordionSliderItem';


type AccordionSliderProps = {
	/** One event type, such as `click` or `mouseenter` */
	triggerType?: string;
	/** Display the only first item of a list */
	displayTheFirstItem?: boolean;
	/** Reset the initial state when the mouse moves out of the component area */
	autoReset?: boolean;
	/** Display ratio measures the activated item's percentage of the component in the entire area */
	displayRatio?: string;
	/** The direction of the slider animation, if it is `horizontal`, it means changing the width, otherwise changing the height */
	direction?: string;
	/** The button that triggers the restoration of the initial state, represented by class, such as `.uix-accordion-img__close` */
	closeBtn?: string | boolean;
	/** -- */
	id?: string;
	children: any; /* required */
};
type AccordionSliderState = false;


export default class AccordionSlider extends Component<AccordionSliderProps, AccordionSliderState> {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount(){
		
		
		__( document ).ready( function() {

			

		
			__( '.uix-accordion-slider' ).each( function( this: any, index: number ) {
				const $this           = __( this );
				
				let	aEvent          = $this.data( 'event' ),
					outReset        = $this.data( 'out-reset' ),
					activeIndex     = $this.data( 'actived-item' ),
					offsetVal       = $this.data( 'offset' ),
					dir             = $this.data( 'direction' ),
					closeBtn        = $this.data( 'close-btn' ),
					$li             = $this.find( '> ul' ).children( 'li' ),
					total           = $li.length;
				
				
				
				if ( activeIndex === null ) {
					activeIndex = false;
				}			
				
				if ( aEvent === null ) {
					aEvent = 'click';
				}	
				
				if ( outReset === null ) {
					outReset = true;
				}	
				
				if ( offsetVal === null ) {
					offsetVal = '60%';
				}		
				
				//Initialize the width or height of each item
				itemInit();
				
				
	
				$li.on( aEvent, function( this: any, e: any ) {
					//Prevents further propagation of the current event in the capturing and bubbling phases.
					e.stopPropagation();
				
					
					//Apply click method to outer div but not inner div
					if ( e.target.className == 'uix-accordion-slider__content__info' || e.target.className == 'uix-accordion-slider__content' ) {
						
						if ( __( this ).hasClass( 'is-active' ) ) {
							__( this ).addClass( 'is-active' );
	
						} else {
							
							$li.addClass( 'active-sub' );
							__( this ).addClass( 'is-active' );
							__( this ).siblings().removeClass( 'is-active' );
	
							if ( dir == 'verticle' ) {
								$li.css( 'height', ( 100 - parseFloat( offsetVal ) )/(total - 1) + '%' );
								__( this ).css( 'height', offsetVal );	
							} else {
								$li.css( 'width', ( 100 - parseFloat( offsetVal ) )/(total - 1) + '%' );
								__( this ).css( 'width', offsetVal );	
							}
							
							
	
	
						}	
					}
				
				}); 
				
				if ( outReset ) {
					$this.on( 'mouseleave', function( this: any, e: any ) {
						itemInit();
					}); 	
				}
				
				if ( typeof closeBtn != typeof undefined && closeBtn != false && closeBtn != '' ) {
					__( closeBtn ).off( 'click' ).on( 'click', function( this: any, e: any ) {
						e.preventDefault();
						itemInit();
					}); 		
					
				}	
				
				/*
				 * Active the target item
				 *
				 * @param  {Number} index     - The index value of the item to be activated.
				 * @return {Void}
				 */
				function itemActiveItem( index ) {
					
					if ( index >= 0 ) {
						
	
						if ( dir == 'verticle' ) {
							$li.css( 'height', ( 100 - parseFloat( offsetVal ) )/(total - 1) + '%' );
							$li.eq( index ).css( 'height', offsetVal ).addClass( 'is-active' );	
						} else {
							$li.css( 'width', ( 100 - parseFloat( offsetVal ) )/(total - 1) + '%' );
							$li.eq( index ).css( 'width', offsetVal ).addClass( 'is-active' );	
						}
	
					}
	
				}
				
				itemActiveItem( parseFloat( activeIndex ) );
				
				
		
				/*
				 * Initialize the width or height of each item
				 *
				 * @return {Void}
				 */
				function itemInit() {
					
	
					if ( dir == 'verticle' ) {
						$li.removeClass( 'is-active active-sub' ).css( 'height', 100/total + '%' );
					} else {
						$li.removeClass( 'is-active active-sub' ).css( 'width', 100/total + '%' );
					}
					
				}
				
				
				
				
			});
			

		
		});

		
	}
	

	render() {
		
		const { 
			triggerType,
			displayTheFirstItem,
			autoReset,
			displayRatio,
			direction,
			closeBtn,
			id,
			children, // the contents of the AccordionSliderList and AccordionSliderPanel in a loop
			...attributes
		} = this.props;
		

		return (
		  <>

	 
				<div 
					id={id ? id : 'app-accordion-slider-' + __.GUID.create() } 
					className="uix-accordion-slider" 
					data-actived-item={displayTheFirstItem ? 0 : false}
					data-event={triggerType || 'click'}
					data-out-reset={ autoReset}
					data-offset={displayRatio || '60%'}
					data-direction={direction || 'horizontal'}
					data-close-btn={closeBtn || false}
					{...attributes}>

					<ul>

						{( children != null ) ? children.map((item, i) => {
							const childProps = { ...item.props };

							delete childProps.key;

							if ( i === 0 && displayTheFirstItem ) childProps.defaultActive = true;
							return <AccordionSliderItem key={"item" + i} {...childProps} />;

						})
							: ""
						}
					</ul>

				</div>
				{/*<!-- .uix-accordion-slider end -->*/}     
			
	
		  </>
		)
	}
}

