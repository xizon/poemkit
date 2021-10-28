/* 
 *************************************
 * <!-- Header -->
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
import '@uixkit.react/components/Header/styles/_style.scss';
import '@uixkit.react/components/Header/styles/rtl/_style.scss';


//get project config
import { rootDirectory } from '@uixkit.react/config/websiteConfig.js';


//get navigation
import Navigation from '@uixkit.react/components/Navigation/index';



type HeaderProps = {
	/** `true` will set the Header to overlay the top of the page. 
	 * The header is the element at the top of the web page. This element appears on every 
	 * single page of the site and usually contains a logo, a menu to access different sections 
	 * of the site, a search bar, and contact information. */
	headerOverlayEnabled: boolean | string | undefined;
	/** Specify data of Navigation List as a JSON string format. Please refer to the `data` attribute of the component <Navigation /> */
	menu?: any[any];
	/** Specify a LOGO via HTML Element */
	logo?: React.ReactNode;
};
type HeaderState = false;

export default class Header extends Component<HeaderProps, HeaderState> {

    windowScrollUpdate: () => void;
	windowResizeUpdate: () => void;
    
    constructor(props) {
        super(props);


        // Add a scroll event listener to window
        this.handleScrollEvent = this.handleScrollEvent.bind(this);
        this.windowScrollUpdate = __.throttle(this.handleScrollEvent, 5);

		// Add a resize event listener to window
		this.windowResizeUpdate = ()=>{};

    }

    handleScrollEvent() {
		const $el = __( '.uix-header__container, .uix-header__placeholder' );
		const scrolled = __( window ).scrollTop();

		if ( scrolled >= 220 ) {
			$el.addClass( 'is-fixed' );
		} else {
			$el.removeClass( 'is-fixed' );	
		}

    }

	componentDidMount() {
		
		const self = this;
	
		__( document ).ready( function() {
		
			__( 'body' ).loader({
				imagesSelector: 'body img',
				videosSelector: 'body video',
				startEvent: function() {
					console.log( '=> loading.' );
				},
				progressEvent: function(percent) {
					console.log( '=> progress: ' + percent + '%' );
				},
				endEvent: function() {
					console.log( '=> loaded!!!' );
					
					
					

					//Header initialize
					//------------------------------------------
					let	windowWidth = window.innerWidth;
					headerInit( windowWidth );
		
					function headerInit( w ) {
						
						const $headerPlaceholder = __( '.uix-header__placeholder.js-uix-header__placeholder-autoheight' );
			
						if ( w > 768 ) {
							$headerPlaceholder.css( 'height', __( '.uix-header__container' ).outerHeight( true ) + 'px' ); 
							__( 'body' ).removeClass( 'is-mobile' );
						} else {
							$headerPlaceholder.css( 'height', 0 ); 
							__( 'body' ).addClass( 'is-mobile' );
						}
		
					}	
					
					
					function windowUpdate() {
						// Check window width has actually changed and it's not just iOS triggering a resize event on scroll
						if ( window.innerWidth != windowWidth ) {
							
							// Update the window width for next time
							windowWidth = window.innerWidth;
		
							// Do stuff here
							headerInit( windowWidth );
		
		
						}
					}
					
					// Add function to the window that should be resized
					self.windowResizeUpdate = __.debounce(windowUpdate, 50) as unknown as () => void;
					window.removeEventListener('resize', self.windowResizeUpdate);
					window.addEventListener('resize', self.windowResizeUpdate);
					


					//Sticky Header Area
					//------------------------------------------
					// Add function to the element that should be used as the scrollable area.
					window.removeEventListener('scroll', self.windowScrollUpdate);
					window.removeEventListener('touchmove', self.windowScrollUpdate);
					window.addEventListener('scroll', self.windowScrollUpdate);
					window.addEventListener('touchmove', self.windowScrollUpdate);
					self.windowScrollUpdate();



				
				}
			});

		
		});

		
		
	}

    /** Remove the global list of events, especially as scroll and interval. */
    componentWillUnmount() {
		
        // Remove scroll events from window
        window.removeEventListener('scroll', this.windowScrollUpdate);
        window.removeEventListener('touchmove', this.windowScrollUpdate);  

		// Remove resize events from window
		window.removeEventListener('resize', this.windowResizeUpdate);


    }

	
	render() {
		
		const { 
			menu,
			headerOverlayEnabled,
			logo
		} = this.props;
		
		
		const _headerOverlayEnabled = headerOverlayEnabled == 'true' ? true : false;
		
		return (
		  <>


			
			{/*<!-- Header Area
			============================================= -->     */} 
			<header className={ _headerOverlayEnabled ? 'uix-header__container uix-header__container--overlay' : 'uix-header__container'}>

				 <div className="uix-header">
					 <div className="container">

							{logo ? <><div className="uix-brand">{logo}</div></> : null}
					
							<Navigation 
							    displayMobileNav={true}
								data={menu} 
								label="Uix Kit React" 
								mobileLogo={`${rootDirectory}/assets/images/logo-colorful.png`} 
								tools={<>
									<a className="uix-social-btn uix-social-btn--small uix-social-btn--circle uix-social-btn--thin" title="Follow us on Twitter" href="https://twitter.com/uiux_lab" target="_blank">
										<i className="fa fa-twitter"></i>
									</a>
									<a className="uix-social-btn uix-social-btn--small uix-social-btn--circle uix-social-btn--thin" title="Follow us on Facebook" href="https://www.facebook.com/uiuxlabhome" target="_blank">
										<i className="fa fa-facebook"></i>
									</a>
									<a className="uix-social-btn uix-social-btn--small uix-social-btn--circle uix-social-btn--thin" title="Fork on Github" href="https://github.com/xizon/uix-kit-react" target="_blank">
										<i className="fa fa-github"></i>
									</a>
							</>}/>	


					  </div>
					  {/*<!-- .container end -->*/}

					  <div className="uix-clearfix"></div>
				 </div>

			</header>  
			
           {headerOverlayEnabled === true ? (
              <></>
            ) : (
              <div className="uix-header__placeholder js-uix-header__placeholder-autoheight"></div>
            )}
			
	
		  </>
		)
	}
}

