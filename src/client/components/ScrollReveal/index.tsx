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
};
type ScrollRevealState = false;



export default class ScrollReveal extends Component<ScrollRevealProps, ScrollRevealState> {

	private rootRef = React.createRef<HTMLDivElement>();

	windowScrollUpdate: () => void;
	tl: any;
	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();

		this.tl = new TimelineMax({paused: true});

        // Add a scroll event listener to window
        this.handleScrollEvent = this.handleScrollEvent.bind(this);
		this.windowScrollUpdate = __.throttle(this.handleScrollEvent, 5);     


    }

	getAnimConfiguration() {
		const reactDomEl: any = this.rootRef.current;

		let config = reactDomEl.dataset.uixAnim;
		config = __.validate.isJSON( config ) ? JSON.parse( config ) : {};

		// Set a default configuration
		config = __.setDefaultOptions({
			"from"     : {"opacity":0,"x":70},
			"to"       : {"opacity":1,"x":0},
			"ease"     : "Power2.easeOut",
			"duration" : 0.4,
			"delay"    : 0,
			"infinite" : false,
			"viewport" : '100%' //A percentage of the viewport's height.
		}, config);
	
		return config;
	}

	handleScrollEvent() {
 
		const self = this;
		
		//
		const reactDomEl: any = self.rootRef.current;
		const config = self.getAnimConfiguration();
	
		//
		//get attributes to tweenMax
		let fromCSS     = config.from,
			toCSS       = config.to,
			myDelay     = config.delay,
			infinite    = config.infinite,
			viewport    = config.viewport;
	

		//Conversion between percentage and decimal
		viewport = parseFloat( viewport ) / 100.0;
	
		//Make it go back and forth
		const reverse = ( infinite ) ? true : false;

		//Determine whether to use Animation or Class
		const tweenAnimEnabled = ( Object.prototype.toString.call( fromCSS ) == '[object String]' ) ? false : true;
	

		//
		const spyTop = reactDomEl.getBoundingClientRect().top;
	
		//Prevent asynchronous loading of repeated calls
		const actived = reactDomEl.dataset.activated;


		if( !tweenAnimEnabled ) {
			toCSS = toCSS.replace(/\./, '' );
		}


		/*
		////////////////////////////////////////////////////////////
		/////////////////   Play/Reverse animation  ////////////////
		////////////////////////////////////////////////////////////
		*/
		if( tweenAnimEnabled ) {

			if ( spyTop < ( window.innerHeight * viewport ) ) {
				if( actived === undefined ) {

					//console.log( 'play()', ' | spyTop: ', spyTop );
					self.tl.play();
					
					//Image transition
					self.spyImageTrans( 'show', reactDomEl );

					//Prevents front-end javascripts that are activated in the background to repeat loading.
					reactDomEl.dataset.activated = 1;
				}
			} else {

				if ( actived !== undefined && reverse ) {
					
					//console.log( 'reverse()', ' | spyTop: ', spyTop );
					self.tl.reverse();

					//Image transition
					self.spyImageTrans( 'hide', reactDomEl );	

					//Prevents front-end javascripts that are activated in the background to repeat loading.
					delete reactDomEl.dataset.activated;
				}

			}  
		}//endif tweenAnimEnabled




		/*
		////////////////////////////////////////////////////////////
		///////////////////   Add/Remoove class  ///////////////////
		////////////////////////////////////////////////////////////
		*/
		if( !tweenAnimEnabled ) {

			if ( spyTop < ( window.innerHeight * viewport ) ) {
				if( actived === undefined ) {

					//Add class when element becomes visible
					setTimeout( function() {
						reactDomEl.classList.add( toCSS );

						//Image transition
						self.spyImageTrans( 'show', reactDomEl );

					}, myDelay*1000);
					
					//Image transition
					self.spyImageTrans( 'show', reactDomEl );

					//Prevents front-end javascripts that are activated in the background to repeat loading.
					reactDomEl.dataset.activated = 1;
				}
			} else {

				if ( actived !== undefined && reverse ) {
					
					//Remove class when element becomes invisible
					reactDomEl.classList.remove( toCSS );

					//Image transition
					self.spyImageTrans( 'hide', reactDomEl );	

					//Prevents front-end javascripts that are activated in the background to repeat loading.
					delete reactDomEl.dataset.activated;
				}

			}  
		}//endif tweenAnimEnabled






	}

	/*
	* The transition effect of each group of images
	*
	* @return {Void}
	* #Usage: 

	<ul data-uix-anim='{"viewport":"90%","from":{"y":0},"to":{"y":0},"ease":"Power2.easeOut","duration":0.8,"delay":0.2,"infinite":true}' data-img-ids='["[data-imgshow]"]'>
		<li data-imgshow="1"><img src={`logo-1.jpg`} alt=""/></li>
		<li data-imgshow="1"><img src={`logo-2.jpg`} alt=""/></li>
		<li data-imgshow="1"><img src={`logo-3.jpg`} alt=""/></li>
	<ul>


	*/ 
	spyImageTrans( type, el ) {

		const _imgIds = el.dataset.imgIds;

		if ( _imgIds !== undefined ) {
			//add
			if ( type == 'show' ) {
				_imgIds.forEach( function( element, index ) {
					element.forEach( function( item ) {
						const t = setTimeout( function() {
							item.classList.add( 'is-active' );
						}, 50*index);
					});
				});

			} else {
				//remove 
				_imgIds.forEach( function( element ) {
					element.classList.remove( 'is-active' );
				});
			}

		} 

	}

	componentDidMount() {

		/*
			!!!important:
			Remember not to use `#${yourcid}` directly, the target of TweenMax will not be found. Please use `#${self.rootRef.current.id}`
		*/
		const reactDomEl: any = this.rootRef.current;
		const config = this.getAnimConfiguration();

	
		//
		//get attributes to tweenMax
		let fromCSS     = config.from,
			toCSS       = config.to,
			myEase      = config.ease,
			myDuration  = config.duration,
			myDelay     = config.delay;
	

			this.tl.to( reactDomEl, myDuration, {
			css    : toCSS,
			ease   : myEase,
			delay  : myDelay
		});



		//Initialize the default style
		TweenMax.set( reactDomEl, {
			css : fromCSS
		});

		

		// Add function to the element that should be used as the scrollable area.
		window.removeEventListener('scroll', this.windowScrollUpdate);
		window.removeEventListener('touchmove', this.windowScrollUpdate);
		window.addEventListener('scroll', this.windowScrollUpdate);
		window.addEventListener('touchmove', this.windowScrollUpdate);

        // Prevent calculation errors caused by unloaded completion
        __( document ).ready( () => {
            this.windowScrollUpdate();
        });

		
	}

    /** Remove the global list of events, especially as scroll and interval. */
    componentWillUnmount() {
		
        // Remove scroll events from window
        window.removeEventListener('scroll', this.windowScrollUpdate);
        window.removeEventListener('touchmove', this.windowScrollUpdate);  

    }


	
	render() {
		
		const { 
			config,
			id,
			children,
			...attributes
		} = this.props;

		
		return (
		  <>
			
			<div 
			ref={this.rootRef} 
			id={id || this.uniqueID}
			data-uix-anim={config || '{"viewport":"80%","from":{"opacity":0,"y":150},"to":{"opacity":1,"y":0},"ease":"Power2.easeOut","duration":0.8,"delay":0,"infinite":true}'}
			{...attributes}>
			    {children}
			</div>
	
		  </>
		)
	}
}

