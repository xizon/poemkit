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
import '@uixkit.react/components/_utils/styles/_all';
import '@uixkit.react/components/_utils/styles/rtl/_all';
import { __ } from '@uixkit.react/components/_utils/_all';

//get project config
import { rootDirectory } from '@uixkit.react/config/websiteConfig.js';


//get navigation
import Navigation from '@uixkit.react/components/Navigation/index';


type HeaderProps = {
	headerOverlayEnabled: boolean | string | undefined;
	htmlString?: string | object;
};
type HeaderState = false;

export default class Header extends Component<HeaderProps, HeaderState> {

	componentDidMount(){
		
	
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
					
					const debounceFunc = __.debounce(windowUpdate, 50);
					window.removeEventListener('resize', debounceFunc);
					window.addEventListener('resize', debounceFunc);
					


					//Sticky Header Area
					//------------------------------------------
					const $el = __( '.uix-header__container, .uix-header__placeholder' );
					const scrollUpdate = function() {

						const scrolled = __( window ).scrollTop();
		
						if ( scrolled >= 220 ) {
							$el.addClass( 'is-fixed' );
						} else {
							$el.removeClass( 'is-fixed' );	
						}
		
		
					};
		
		
					const throttleFunc = __.throttle(scrollUpdate, 50);
					window.removeEventListener('scroll', throttleFunc);
					window.removeEventListener('touchmove', throttleFunc);
					
					// Please do not use scroll's off method in each
					window.addEventListener('scroll', throttleFunc);
					window.addEventListener('touchmove', throttleFunc);
					
					
					throttleFunc();
					



				
				}
			});

		
		});

		
		
	}
	
	render() {
		
		const { 
			htmlString,
			headerOverlayEnabled,
		} = this.props;
		
		
		const _headerOverlayEnabled = headerOverlayEnabled == 'true' ? true : false;
		
		return (
		  <>


			
			{/*<!-- Header Area
			============================================= -->     */} 
			<header className={ _headerOverlayEnabled ? 'uix-header__container uix-header__container--overlay' : 'uix-header__container'}>

				 <div className="uix-header">
					 <div className="container">

			
							<div className="uix-brand">
								<a href={`${rootDirectory}/index`}><img src={`${rootDirectory}/assets/images/logo.png`} alt="Uix Kit React" /></a>             
							</div>
							{/*<!-- .uix-brand end -->*/}

							<Navigation htmlString={htmlString} />


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

