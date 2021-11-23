/* 
 *************************************
 * <!-- Header -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/Header/styles/_style.scss';
import '@poemkit/components/Header/styles/rtl/_style.scss';


//get project config
import { rootDirectory } from '@poemkit/config/websiteConfig.js';


//get navigation
import Navigation from '@poemkit/components/Navigation/index';



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
		const $el = __( '.poemkit-header__container, .poemkit-header__placeholder' );
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
						
						const $headerPlaceholder = __( '.poemkit-header__placeholder.js-poemkit-header__placeholder-autoheight' );
			
						if ( w > 768 ) {
							$headerPlaceholder.css( 'height', __( '.poemkit-header__container' ).outerHeight( true ) + 'px' ); 
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
			<header className={ _headerOverlayEnabled ? 'poemkit-header__container poemkit-header__container--overlay' : 'poemkit-header__container'}>

				 <div className="poemkit-header">
					 <div className="container">

							{logo ? <><div className="poemkit-brand">{logo}</div></> : null}
					
							<Navigation 
							    displayMobileNav={true}
								data={menu} 
								label="PoemKit" 
								mobileLogo={`${rootDirectory}/assets/images/logo-colorful.png`} 
								tools={<>
								    <a title="Fork on Github" href="https://github.com/xizon/poemkit" target="_blank" className="poemkit-btn poemkit-btn__border--thin poemkit-btn__bg--primary is-transparent is-rounded poemkit-btn__size--t poemkit-btn__icon poemkit-btn__icon--left"><span><i className="fa fa-github" aria-hidden="true"></i></span>Documentation</a>
							</>}/>	


					  </div>
					  {/*<!-- .container end -->*/}

					  <div className="poemkit-clearfix"></div>
				 </div>

			</header>  
			
           {headerOverlayEnabled === true ? (
              <></>
            ) : (
              <div className="poemkit-header__placeholder js-poemkit-header__placeholder-autoheight"></div>
            )}
			
	
		  </>
		)
	}
}

