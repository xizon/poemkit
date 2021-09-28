/* 
 *************************************
 * <!-- Scroll Reveal -->
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


interface ScrollRevealConfig {
	/** This attribute expands/contracts the active boundaries of the viewport when calculating element visibility. */
    viewport?: string | undefined;
	/** Starting config using JSON string format, will transition from these values. Follow the parameter style of GSAP 2+. */
    from?: object | undefined;
	/** Ending config using JSON string format, will transition from these values. Follow the parameter style of GSAP 2+. Can be a pure string, this style will be enabled when the viewport is specified, for example `.demo-sr-active` */
	to?: object | string | undefined;
	/** Accepts any valid GSAP 2+ easing, e.g. `Power2.easeOut`, etc. */
	ease?: string | undefined;
	/** This attribute controls how long animations take to complete. */
	duration?: number | undefined;
	/** This attribute is the time before reveal animations begin. */
	delay?: number | undefined;
	/** This attribute enables/disables elements returning to their initialized position when they leave the viewport. When true elements reveal each time they enter the viewport instead of once.
 */
	infinite?: boolean | undefined;
}

type ScrollRevealProps = {
	config: string | ScrollRevealConfig;
	/** -- */
	id?: string;
	children?: any;
};
type ScrollRevealState = false;



export default class ScrollReveal extends Component<ScrollRevealProps, ScrollRevealState> {
	constructor(props) {
		super(props);
	}

	
	componentDidMount(){
		
		__( document ).ready( function() {

		
			//From JSON config in data attribute in HTML

			__( '[data-uix-anim]' ).each( function( this: any, index: number, curSelector: string ) {


				let viewport;


				const $el = __( this );
				const tl = new TimelineMax({paused: true});


				//
				let config = $el.data( 'uix-anim' );
			
				if( config === null || config == '' || config === false ) {
					config = {
						"from"     : {"opacity":0,"x":70},
						"to"       : {"opacity":1,"x":0},
						"ease"     : "Power2.easeOut",
						"duration" : 0.4,
						"delay"    : 0,
						"infinite" : false,
						"viewport" : '100%' //A percentage of the viewport's height.
					};
				}


				//get attributes to tweenMax
				let fromCSS     = config.from,
					toCSS       = config.to,
					myEase      = config.ease,
					myDuration  = config.duration,
					myDelay     = config.delay,
					infinite    = config.infinite;

				//A percentage of the viewport's height.
				viewport = config.viewport;
				

				if ( viewport === null ) viewport = '100%';
				if ( myEase === null ) myEase = 'Power2.easeOut';
				if ( myDelay === null ) myDelay = 0;
				if ( myDuration === null ) myDuration = 0.4;
				if ( infinite === null ) infinite = false;
				
				


				//Conversion between percentage and decimal
				viewport = parseFloat( viewport ) / 100.0;

				//Make it go back and forth
				const reverse = ( infinite ) ? 1 : 0;

				//Set the initial state of the element
				TweenMax.set( $el, {
					css        : fromCSS
				});

				//
				const fromIsString = ( Object.prototype.toString.call( fromCSS ) == '[object String]' ) ? true : false;
				if( fromIsString ) {
					toCSS = toCSS.replace(/\./, '' );
				} else {
					tl.to( $el, myDuration, {
						css    : toCSS,
						ease   : myEase,
						delay  : myDelay
					});
					$el[0].animation = tl;
				}  



				//
				const scrollUpdate = function() {

					const spyTop = $el[0].getBoundingClientRect().top;

					//Prevent asynchronous loading of repeated calls
					const actived = $el.data( 'activated' );


					if ( spyTop < ( window.innerHeight * viewport ) ) {
						
						
						if( actived === null ) {


							if( fromIsString ) {
								//Add class when element becomes visible
								setTimeout( function() {
									$el.addClass( toCSS );
								}, myDelay*1000);


							} else {
								$el[0].animation.play();


								//Other animation
								///------------------------------------------


								//Image transition
								spyImageTrans( 'show' );


							}  



							//Prevents front-end javascripts that are activated in the background to repeat loading.
							$el.data( 'activated', 1 );



						}//endif actived


					} else {

						if ( actived != null && reverse === 1 ) {

						
							if( fromIsString ) {
								//Add class when element becomes visible
								$el.removeClass( toCSS );
							} else {
								$el[0].animation.reverse();


								//Other animation
								//------------------------------------------

								//Image transition
								spyImageTrans( 'hide' );


							}  

							$el.removeData( 'activated' );


						}//endif actived

					}  
				};


				const throttleFunc = __.throttle(scrollUpdate, 50);
				window.removeEventListener('scroll', throttleFunc);
				window.removeEventListener('touchmove', throttleFunc);
				
				// Please do not use scroll's off method in each
				window.addEventListener('scroll', throttleFunc);
				window.addEventListener('touchmove', throttleFunc);
				
				
				throttleFunc();
				

				 /*
				 * The transition effect of each group of images
				 *
				 * @return {Void}
				 * #Usage: 

					<ul data-uix-anim='{"viewport":"90%","from":{"y":0},"to":{"y":0},"ease":"Power2.easeOut","duration":0.8,"delay":0.2,"infinite":true}' data-img-ids='["[data-imgshow]"]'>
						<li data-imgshow="1"><img src={`${rootDirectory}/logo-1.jpg`} alt=""/></li>
						<li data-imgshow="1"><img src={`${rootDirectory}/logo-2.jpg`} alt=""/></li>
						<li data-imgshow="1"><img src={`${rootDirectory}/logo-3.jpg`} alt=""/></li>
						<li data-imgshow="1"><img src={`${rootDirectory}/logo-4.jpg`} alt=""/></li>
					<ul>


				 */ 
				function spyImageTrans( type ) {

					const _imgIds = $el.data( 'img-ids' );

					if ( _imgIds != null ) {
						//add
						if ( type == 'show' ) {
							_imgIds.forEach( function( element ) {
								__( element ).each( function( this: any, index: number )  {
									const $el = __( this );
									const t = setTimeout( function() {
										$el.addClass( 'is-active' );
									}, 50*index);
								});
							});

						} else {
							//remove 
							_imgIds.forEach( function( element ) {
								__( element ).removeClass( 'is-active' );
							});
						}

					} 

				}



			});//end each        


		});

		
	}
	
	render() {
		
		const { 
			config,
			children,
			...attributes
		} = this.props;

		
		return (
		  <>
			
			<div id={"app-scroll-reveal" + __.GUID.create()} data-uix-anim={config || '{"viewport":"80%","from":{"opacity":0,"y":150},"to":{"opacity":1,"y":0},"ease":"Power2.easeOut","duration":0.8,"delay":0,"infinite":true}'}{...attributes}>
			    {children}
			</div>
	
		  </>
		)
	}
}

