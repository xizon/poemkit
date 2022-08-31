/* 
 *************************************
 * <!-- Footer -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@/components/_plugins/_lib-bootstrap';
import '@/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@/components/_utils/styles/_all.scss';
import '@/components/_utils/styles/rtl/_all.scss';
import { __ } from '@/components/_utils/_all';

/*-- Apply this component styles --*/
import '@/components/Footer/styles/_style.scss';


export default class Footer extends Component<{}, {}> {

	render() {
		
	
		return (
		  <>
			
			{/*
			   <!-- Footer
				============================================= -->    
			*/}
			<footer className="poemkit-footer__container">
				<div className="poemkit-footer">

					<div className="container">
						<hr />

						<div className="row">
							<div className="col-lg-6 col-md-6 poemkit-t-l poemkit-t-c--md">
								Copyright &copy; PoemKit 2022.  |  All rights reserved. Created by <a href="https://uiux.cc">UIUX Lab</a>.
							</div>
							<div className="col-lg-6 col-md-6 poemkit-t-r poemkit-t-c--md">
								<div className="poemkit-footer__menu">
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
											<a href="https://github.com/xizon/poemkit" target="_blank">
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


