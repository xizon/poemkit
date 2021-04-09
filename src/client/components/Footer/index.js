/* 
 *************************************
 * <!-- Footer -->
 *************************************
 */

import React, { Component, Fragment } from 'react';


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


export default class Footer extends Component {

	render() {
		
	
		return (
		  <Fragment>
			
			{/*
			   <!-- Footer
				============================================= -->    
			*/}
			<footer className="uix-footer__container">
				<div className="uix-footer">

					<div className="container">
						<hr />

						<div className="row">
							<div className="col-lg-6 col-md-6 uix-t-l uix-t-c--md">
								Copyright &copy; Uix Kit React 2021.  |  All rights reserved. Created by <a href="https://uiux.cc">UIUX Lab</a>.
							</div>
							<div className="col-lg-6 col-md-6 uix-t-r uix-t-c--md">
								<div className="uix-footer__menu">
									<ul>
										<li>
											<a href="https://uiux.cc" target="_blank">
												UIUX Lab
											</a>
										</li>
										<li>
											<a href="https://opensource.org/licenses/MIT" target="_blank">
												Licenses
											</a>
										</li>
										<li>
											<a href="https://github.com/xizon/uix-kit-react" target="_blank">
												Download
											</a>
										</li>

									</ul>
								</div>

							</div>
						</div>

					</div>
					{/*<!-- .container  end -->*/}

				</div>
			</footer>


		  </Fragment>
		)
	}
}


