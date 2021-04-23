/* 
 *************************************
 * <!-- Footer -->
 *************************************
 */
import PropTypes from "prop-types";
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/plugins/_all.js';  

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utilities/styles/_all.scss';
import '@uixkit.react/components/_utilities/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utilities/_all.js';


export default class Footer extends Component {

	render() {
		
	
		return (
		  <>
			
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


		  </>
		)
	}
}


