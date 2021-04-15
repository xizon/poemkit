/* 
 *************************************
 * <!-- Footer -->
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
import '@uixkit.react/components/_utilities/scss/rtl/_all-rtl.scss';
import { __ } from '@uixkit.react/components/_utilities/js/_all.js';


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


