/* 
 *************************************
 * <!-- Header -->
 *************************************
 */

import React, { Component, Fragment } from 'react';


/*-- Apply Third-party plugins --*/
//1) Bootstrap
import '@uixkit.react/plugins/Bootstrap/scss/bootstrap.scss';  


//2) Fontawesome
import '@uixkit.react/plugins/FontAwesome/scss/fontawesome.scss';  
import '@uixkit.react/plugins/FontAwesome/scss/v4-shims.scss';  
import '@uixkit.react/plugins/FontAwesome/scss/solid.scss';  
import '@uixkit.react/plugins/FontAwesome/scss/brands.scss';  
import '@uixkit.react/plugins/FontAwesome/scss/regular.scss';  



/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utilities/scss/_all.scss';
import '@uixkit.react/components/_utilities/scss-rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utilities/js/_all.js';



export default class Header extends Component {

	componentDidMount(){
		
		//
		__( document ).ready( function() {
		
			__( 'body' ).imagesloaded({
				startEvent: function() {
					console.log( '=> loading.' );
				},
				progressEvent: function(percent) {
					console.log( '=> progress: ' + percent + '%' );
				},
				endEvent: function() {
					console.log( '=> loaded!!!' );
					
					
					__( '.uix-header__container' ).addClass( 'js-heavyShadow' );

				}
			});

		
		});

		
		
	}
	
	render() {
		
		const htmlString = this.props.htmlString ? this.props.htmlString : '';
		const headerOverlayEnable = this.props.headerOverlayEnable == 'true' ? true : false;
		
		return (
		  <Fragment>
			
			{/*<!-- Header Area
			============================================= -->     */} 
			<header className={ headerOverlayEnable ? 'uix-header__container uix-header__container--overlay' : 'uix-header__container'}>

				 <div className="uix-header">
					 <div className="container">

			
							<div className="uix-brand">
								<a href="/index"><img src="/assets/images/logo.png" alt="Uix Kit React" /></a>             
							</div>
							{/*<!-- .uix-brand end -->*/}



							{/* <!-- Navigation Start--> */}
							<nav className="uix-menu__container">

								   <div className="uix-menu__inner">

										<span className="uix-brand--mobile"><img src="/assets/images/logo-colorful.png" alt="Uix Kit React" /></span>
										<ul className="uix-menu">{htmlString}</ul>
										<div className="uix-menu__right-box">
											<a className="uix-social-btn uix-social-btn--small uix-social-btn--circle uix-social-btn--thin uix-social-btn--white" title="Follow us on Twitter" href="https://twitter.com/uiux_lab" target="_blank">
												<i className="fa fa-twitter"></i>
											</a>
											<a className="uix-social-btn uix-social-btn--small uix-social-btn--circle uix-social-btn--thin uix-social-btn--white" title="Follow us on Facebook" href="https://www.facebook.com/uiuxlabhome" target="_blank">
												<i className="fa fa-facebook"></i>
											</a>
											<a className="uix-social-btn uix-social-btn--small uix-social-btn--circle uix-social-btn--thin uix-social-btn--white" title="Fork on Github" href="https://github.com/xizon/uix-kit-react" target="_blank">
												<i className="fa fa-github"></i>
											</a>          
										</div>

								   </div>
									{/* <!-- /.uix-menu__inner --> */}

							</nav>
							{/* <!-- .uix-menu__container end --> */}





					  </div>
					  {/*<!-- .container end -->*/}

					  <div className="uix-clearfix"></div>
				 </div>

			</header>  
			
           {headerOverlayEnable === true ? (
              <></>
            ) : (
              <div className="uix-header__placeholder js-uix-header__placeholder-autoheight"></div>
            )}
			
	
		  </Fragment>
		)
	}
}


