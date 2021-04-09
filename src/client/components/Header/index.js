/* 
 *************************************
 * <!-- Header -->
 *************************************
 */

import React, { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom";


/*-- Apply Third-party plugins --*/
//1) Bootstrap
import '../_third-party-plugins/Bootstrap/scss/bootstrap.scss';  


//2) Fontawesome
import '../_third-party-plugins/FontAwesome/scss/fontawesome.scss';  
import '../_third-party-plugins/FontAwesome/scss/v4-shims.scss';  
import '../_third-party-plugins/FontAwesome/scss/solid.scss';  
import '../_third-party-plugins/FontAwesome/scss/brands.scss';  
import '../_third-party-plugins/FontAwesome/scss/regular.scss';  



/*-- Apply global scripts and styles --*/
import '../_utilities/scss/_all.scss';
import '../_utilities/scss/rtl/_all-rtl.scss';
import { __ } from '../_utilities/js/_all.js';


export default class Header extends Component {

	componentDidMount(){
		
		//
		__( '.uix-header__container' ).addClass( 'js-heavyShadow' );
	}
	
	render() {
		
		const ukrMenuContent = this.props.ukrMenuContent ? this.props.ukrMenuContent : '';
		
		return (
		  <Fragment>
			
			{/*<!-- Header Area
			============================================= -->     */} 
			<header className="uix-header__container">

				 <div className="uix-header">
					 <div className="container">

							<div className="uix-brand">
								<NavLink to="/index"><img src="assets/images/logo.png" alt="Uix Kit" /></NavLink>                   
							</div>
							{/*<!-- .uix-brand end -->*/}



							{/* <!-- Navigation Start--> */}
							<nav className="uix-menu__container">

								   <div className="uix-menu__inner">

										<span className="uix-brand--mobile"><img src="assets/images/logo-colorful.png" alt="Site Name" /></span>
										<ul className="uix-menu">{ukrMenuContent}</ul>
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





					  </div>
					  {/*<!-- .container end -->*/}

					  <div className="uix-clearfix"></div>
				 </div>

			</header>  

		  </Fragment>
		)
	}
}


