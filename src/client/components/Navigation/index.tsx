/* 
 *************************************
 * <!-- Navigation -->
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


//get project config
import { rootDirectory } from '@uixkit.react/config/websiteConfig.js';


type NavigationProps = {
	htmlString?: string | object;
};
type NavigationState = false;



export default class Navigation extends Component<NavigationProps, NavigationState> {

    windowScrollUpdate: () => void;
    
    constructor(props) {
        super(props);

        // Add a scroll event listener to window
        this.handleScrollEvent = this.handleScrollEvent.bind(this);
        this.windowScrollUpdate = __.throttle(this.handleScrollEvent, 5);

    }

    handleScrollEvent() {
		const $elMenuContainer = __( '.uix-menu__container:not(.is-mobile)' );
		const $elMobileToggle = __( '.admin-bar .uix-menu-mobile__toggle' );
		const scrolled = __( window ).scrollTop();

		// Primary Menu
		//Sticky primary navigation
		if ( scrolled >= 220 ) {
			$elMenuContainer.addClass( 'is-fixed' );
		} else {
			$elMenuContainer.removeClass( 'is-fixed' );	
		}

		// Mobile Menu
		//Show Toolbar when viewing site for WordPress
		if ( scrolled >= 46 ) {
			$elMobileToggle.addClass( 'is-fixed' );
		} else {
			$elMobileToggle.removeClass( 'is-fixed' );	
		}
    }


	componentDidMount(){
		
		const self = this;
		
		__( document ).ready( function() {


			/*
			 ////////////////////////////////////////////////////////////
			 /////////////////////  (1) Primary Menu ////////////////////
			 ////////////////////////////////////////////////////////////
			 */
			const ulForDesktop = '.uix-menu__container:not(.is-mobile) ul.uix-menu';

			
			// Menu Hover
			const mTop = 15;
			__( ulForDesktop + ' > li.multi-column > ul li ul' ).addClass( 'multi' );
			__( ulForDesktop + ' > li:not(.multi-column) ul' ).css( {'margin-top': mTop + 'px'}  );
			__( '.uix-menu__container:not(.is-mobile) li.multi-column > ul.sub-menu > li > ul' ).css( {'margin-top': mTop + 'px'} );
			__( ulForDesktop+' li.multi-column > ul' ).css( {'margin-top': mTop + 'px'}  );
			
			__( ulForDesktop + ' li' ).on( 'mouseenter', function(this: any){
			
				TweenMax.set( [__( this ).find( '> ul.sub-menu:not(.multi)' ),__( this ).find( '.uix-menu__arrow-mega' )], {
					css: {
						opacity    : 0,
						display    : 'block',
						marginTop  : mTop + 'px'
					},
					onComplete : function() {
			
						TweenMax.to( this.target, 0.3, {
							css: {
								opacity    : 1,
								marginTop  : 0
							},
							ease   : 'Power2.easeOut'
						});		
			
			
			
					}
				});				
			
			
			
			}).on( 'mouseleave' , function(this: any){
			
			
				TweenMax.to( [__( this ).find( '> ul.sub-menu:not(.multi)' ),__( this ).find( '.uix-menu__arrow-mega' )], 0.3, {
					css: {
						opacity    : 0,
						marginTop  : mTop + 'px'
					},
					onComplete : function() {
			
						TweenMax.set( this.target, {
							css: {
								display    : 'none',
							}
						});		
			
			
			
					}
				});				
			
			});
			
			
			
			// Add Sub-menu Arrow
			__( ulForDesktop + ' li' ).each( function( this: any )  {
				if ( __( this ).find( 'ul' ).length > 0 ) {
					__( this ).prepend( '<span class="uix-menu__arrow"></span>' );
				}
			
			} );	
				


			/*
			 ////////////////////////////////////////////////////////////
			 ////////////////   (2) Mega/Mobile Menu   //////////////////
			 ////////////////////////////////////////////////////////////
			 */

			 const $toggle = __( '.uix-menu-mobile__toggle' ),
			       $toggleBody = __( 'body' );	 

			 let windowWidth = window.innerWidth;

			// Using delay is for more accurate calculation
			setTimeout( function() {
				menuInit( windowWidth );
			}, 1000 ); 
			 
 
			 function menuInit( w ) {
				 

				// Mega Menu
				//------------------------------------------
				let $menuWrap  = __( '.uix-menu__container:not(.is-mobile)' ),
				maxWidth     = 1140, //The maximum width of the mega menu wrapper
				
				//This value is equal to the $nav-mega-li-w variable in the SCSS
				perDefaultW  = 270; //Default width of each column
				
				
				//New XL container for Bootstrap 4.x
				if ( w > 1430 ) maxWidth = 1278;
				
				//Full width container
				maxWidth = windowWidth - 15;
				
				
				
				// Remove the html tag for mega menu item
				$menuWrap.find('li.multi-column  > ul .multi-column-title').each(function ( this: any ) {
					const mega_old_item = __( this ).html();
					if (mega_old_item != '') {
						__( this ).html(mega_old_item.replace(/<[^>]+>/g, ''));
					}
				});
				
				
				if ( w > 768 ){
				
					$menuWrap.find( 'li.multi-column' ).each( function( this: any, index: number ) {
						const $rootLi       = __( this ),
							colTotal        = $rootLi.find( '> ul > li' ).length,
							$megaDiv        = $rootLi.find( '> ul.sub-menu' );

					    let megaDivWidth    = $megaDiv.width(),
							megaPerWidth    = null as unknown as number,
							rootLiLeft      = null as unknown as number;
						
						
						// Add mega arrow
						if ( $rootLi.find( '.uix-menu__arrow-mega' ).length < 1 ) $rootLi.prepend( '<span class="uix-menu__arrow-mega"></span>' );
						
				
						// Detecting if the right or left of the div is touching the browser window edge.
						if ( colTotal > 0 ) {
				
							rootLiLeft = __.cssProperty.getAbsoluteCoordinates( $megaDiv[0] ).left;
							
							
							//Determine the mega menu wrapper within document width, in order to limit the width of each column for mega menu
							if ( maxWidth > w ) maxWidth = w;
							
							
							if ( parseFloat(megaDivWidth + 20) > maxWidth ) {
				
								megaDivWidth    = maxWidth;
								megaPerWidth    = maxWidth/colTotal - 2.888;
								
								//Resetting the width of each column
								$megaDiv.find( '> li' ).css( {
									'width' : megaPerWidth + 'px'
								} );
								
								//Resetting the width of each <li> tag
								$megaDiv.find( '> li ul li' ).css( {
									'width' : megaPerWidth + 'px'
								} );
								
								
								if ( ! __( 'body' ).hasClass( 'rtl' ) ) {
									$megaDiv.css( {
										'margin-left' : ( - rootLiLeft ) + ( ( w - megaDivWidth )/2 ) + 'px'
									} );
								} else {
									$megaDiv.css( {
										'margin-right' : ( - rootLiLeft ) + ( ( w - megaDivWidth )/2 ) + 'px'
									} );
								}
				
								
								
								
							} else {
								
								//Resetting the width of each column
								$megaDiv.find( '> li' ).css( {
									'width' : perDefaultW + 'px'
								} );	
								
								//Resetting the width of each <li> tag
								$megaDiv.find( '> li ul li' ).css( {
									'width' : perDefaultW + 'px'
								} );
									
								
								
								const chkWidth = parseFloat( rootLiLeft  + megaDivWidth );
				
				
								if ( chkWidth > w ) {
									if ( ! __( 'body' ).hasClass( 'rtl' ) ) {
										$megaDiv.css( {
											'margin-left' : - ( chkWidth - w ) + 'px'
										} );
									} else {
										$megaDiv.css( {
											'margin-right' : - ( chkWidth - w ) + 'px'
										} );
									}	
									
									
									//If the CSS sets the offset of ul::before
									/*
									const megaDivOffset = megaDivWidth/2 - 0;
									
									if ( ! __( 'body' ).hasClass( 'rtl' ) ) {
										$megaDiv.css( {
											'margin-left' : - ( chkWidth - w ) + megaDivOffset + 'px'
										} );
									} else {
										$megaDiv.css( {
											'margin-right' : - ( chkWidth - w ) + megaDivOffset + 'px'
										} );
									}	
									*/
					
					
									
				
								}	
								
									
								
							}
							
						
				
						}
				
				
					} );	
				
				}// endif (w > 768)




				// Mobile Menu
				//------------------------------------------

				//clone the primary menu
				//----
				if ( __( '.uix-menu__container.is-mobile' ).length === 0 ) {
					const cloneHTML = __( '.uix-menu__container' ).clone();
					__( cloneHTML ).addClass( 'is-mobile' );
					__( 'body' ).appendTo( cloneHTML );
			
				}


				
					
				// Initialize mobile menu
				if ( w <= 768 ) {
				
					__( '.uix-menu__container.is-mobile .uix-menu > li' ).each( function( this: any )  {
						const $rootLi = __( this );

						if ( $rootLi.find( 'ul' ).length > 0 ) {
							if ( $rootLi.find( '.uix-menu__arrow-mobile' ).length < 1 ) $rootLi.prepend( '<em class="uix-menu__arrow-mobile"></em>' );
							
							$rootLi.find( 'ul ul' ).addClass( 'sub-sub' );
							$rootLi.find( ' > a' ).attr( 'href', 'javascript:void(0);' );
						}
					} );		
				}// endif (w <= 768)

 
			 }	
			 
			 
			 function windowUpdate() {
				 // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
				 if ( window.innerWidth != windowWidth ) {
					 
					 // Update the window width for next time
					 windowWidth = window.innerWidth;
 
					 // Do stuff here
					 __( 'body' ).removeClass( 'js-uix-menu-opened' );
					 $toggle.removeClass( 'is-opened' );

					 menuInit( windowWidth );
 
 
				 }
			 }
			 
			 const debounceFunc = __.debounce(windowUpdate, 50);
			 window.removeEventListener('resize', debounceFunc);
			 window.addEventListener('resize', debounceFunc);
			 
			 

			 

			// Mobile Menu
			//------------------------------------------
			$toggle.off( 'click' ).on( 'click', function (this: any, e: any) {
				e.preventDefault();

				//Prevents further propagation of the current event in the capturing and bubbling phases.
				e.stopPropagation();

				__( this ).toggleClass('is-opened');

				if (__( this ).hasClass('is-opened')) {

					//Add mobile brand
					const logoURL = __('.uix-brand--mobile img').attr('src');
					if (logoURL !== null && logoURL != '') {
						if (logoURL.indexOf('blank.gif') >= 0) __('.mobile-inner').css({ 'margin-top': '-70px' });
					}

					//Toggle effect
					$toggleBody.addClass('js-uix-menu-opened');
				} else {
					$toggleBody.removeClass('js-uix-menu-opened');
				}
			});


	
			
	
			//Mobile menu mask event
			__( '.uix-menu-mobile__mask' ).off( 'click' ).on( 'click', function() {
				$toggle.removeClass( 'is-opened' );
				$toggleBody.removeClass( 'js-uix-menu-opened' );
			});
	
	
	
			// Fires drop-menu event 
			__( '.uix-menu__container.is-mobile ul li > a' ).off( 'click' ).on( 'click', function(this: any, e: any ) {
				
			
				const $sub = __( this ).next();
			
				if ( $sub.length > 0 ) {
	
					e.preventDefault();
	
					
					//Its value is not a boolean but a string
					const expanded = ( __( this ).attr( 'aria-expanded' ) === true ) ? false : true;
	
					if ( expanded ) {
						//Hide other all sibling <ul> of the selected element
						const $e = __( this ).parent().siblings().find( '> a' );
	
						$e.removeClass( 'is-opened' ).attr( 'aria-expanded', false );
						$e.parent().find( '.uix-menu__arrow-mobile' ).removeClass( 'is-opened' );
						$e.parent().removeClass( 'is-opened' );
						
	
						__( this ).addClass( 'is-opened' ).attr( 'aria-expanded', true );
						__( this ).parent().find( '.uix-menu__arrow-mobile' ).addClass( 'is-opened' );
						__( this ).parent().addClass( 'is-opened' );
	
	
						TweenMax.to( $e.next(), 0.5, { height: 0 } );
	
						//to open
						// - temporarilty set height:auto
						// - tween from height:0
						TweenMax.set( $sub, { height: 'auto' } );
						TweenMax.from( $sub, 0.5, { height:0 } );	
	
	
					} else {
	
						__( this ).removeClass( 'is-opened' ).attr( 'aria-expanded', false );
						__( this ).parent().find( '.uix-menu__arrow-mobile' ).removeClass( 'is-opened' );
						__( this ).parent().removeClass( 'is-opened' );
	
						//to close
						TweenMax.to( $sub, 0.5, { height: 0 } );
	
					}
	
	
	
	
					return false;
				}//endif $sub.length

			});




			/*
			 ////////////////////////////////////////////////////////////
			 ////////////////////  (3) Sticky Menu   ////////////////////
			 ////////////////////////////////////////////////////////////
			 */
			 
			// Sticky primary navigation & WordPress Toolbar
            // Add function to the element that should be used as the scrollable area.
            window.removeEventListener('scroll', self.windowScrollUpdate);
            window.removeEventListener('touchmove', self.windowScrollUpdate);
            window.addEventListener('scroll', self.windowScrollUpdate);
            window.addEventListener('touchmove', self.windowScrollUpdate);
            self.windowScrollUpdate();


		});

		
	}
	
    /** Remove the global list of events, especially as scroll and interval. */
    componentWillUnmount() {
		
        // Remove scroll events from window
        window.removeEventListener('scroll', this.windowScrollUpdate);
        window.removeEventListener('touchmove', this.windowScrollUpdate);  

		// Kill all aniamtions
		TweenMax.killAll();

    }


	render() {
	

		const { 
			htmlString
		} = this.props;

	
		return (
		  <>
					
			{/* <!-- Mobile Menu Toggle Trigger--> */}
			<div className="uix-menu-mobile__toggle">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="uix-menu-mobile__mask"></div>
			

			{/* <!-- Navigation Start--> */}
			<nav className="uix-menu__container">

					<div className="uix-menu__inner">

						<span className="uix-brand--mobile"><img src={`${rootDirectory}/assets/images/logo-colorful.png`} alt="Uix Kit React" /></span>
						<ul className="uix-menu">{htmlString}</ul>
						<div className="uix-menu__right-box">
							<a className="uix-social-btn uix-social-btn--small uix-social-btn--circle uix-social-btn--thin" title="Follow us on Twitter" href="https://twitter.com/uiux_lab" target="_blank">
								<i className="fa fa-twitter"></i>
							</a>
							<a className="uix-social-btn uix-social-btn--small uix-social-btn--circle uix-social-btn--thin" title="Follow us on Facebook" href="https://www.facebook.com/uiuxlabhome" target="_blank">
								<i className="fa fa-facebook"></i>
							</a>
							<a className="uix-social-btn uix-social-btn--small uix-social-btn--circle uix-social-btn--thin" title="Fork on Github" href="https://github.com/xizon/uix-kit-react" target="_blank">
								<i className="fa fa-github"></i>
							</a>          
						</div>

					</div>
					{/* <!-- /.uix-menu__inner --> */}

			</nav>
			{/* <!-- .uix-menu__container end --> */}


		  </>
		)
	}
}



/*
Mega Menu Demo:


render() {
	
    return (
      <>
                
      <nav className="uix-menu__container">
        <div className="uix-menu__inner">
            <span className="uix-brand--mobile"><img src={`${rootDirectory}/assets/images/logo-colorful.png`}
                    alt="Uix Kit React" /></span>
            <ul className="uix-menu">
                <li className="multi-column current-menu-item is-active"><a href="#">Components</a>
                    <ul className="sub-menu">

                        <li>
                            <span className="multi-column-title">Mega Menu 1</span>
                            <ul className="sub-menu">
                                <li><a href="#">Menu Text</a></li>
                                <li><a href="#">Menu Text</a></li>
                                <li><a href="#">Menu Text</a></li>
                                <li><a href="#">Menu Text</a><span className="uix-bubble">new</span></li>
                            </ul>
                        </li>


                        <li>
                            <span className="multi-column-title">Mega Menu 2</span>
                            <ul className="sub-menu">
                                <li><a href="#">Menu Text</a></li>
                                <li><a href="#">Menu Text</a></li>
                            </ul>
                        </li>


                        <li>
                            <span className="multi-column-title">Mega Menu 3</span>
                            <ul className="sub-menu">
                                <li><a href="#">Menu Text</a></li>
                                <li><a href="#">Menu Text</a></li>
                            </ul>
                        </li>

                        <li>
                            <span className="multi-column-title">Mega Menu 4</span>
                            <ul className="sub-menu">
                                <li><a href="#">Menu Text</a></li>
                                <li><a href="#">Menu Text</a></li>
                            </ul>
                        </li>

                        <li>
                            <span className="multi-column-title">Mega Menu 5</span>
                            <ul className="sub-menu">
                                <li><a href="#">Menu Text</a></li>
                                <li><a href="#">Menu Text</a></li>
                            </ul>
                        </li>

                    </ul>

                </li>
                <li><a href="#">Menu</a>
                    <ul className="sub-menu">
                        <li><a href="#">Menu Text</a></li>
                        <li><a href="#">Menu Text</a></li>
                        <li><a href="#">Menu Text</a></li>
                    </ul>

                </li>
                <li><a href="typography.html">Menu</a></li>

            </ul>

        </div>

    </nav>


      </>
    )
}

*/