import React from 'react';
import { NavLink } from 'react-router-dom';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import Footer from '@uixkit.react/components/Footer/index.js';


export default ({ staticContext = {} }) => {
    staticContext.status = 200;
    
    return (
	  <>
		
		
            <main id="uix-maincontent">
		
				{/*
				<!-- Content   
				====================================================== -->	
				*/}
				<section className="uix-spacing--s">
					<div className="container">
							<div className="row">
								<div className="col-md-10 offset-md-1">
		
									<div className="uix-t-c"><img src="/assets/images/logo-colorful.png" alt="Uix Kit React" /></div>
									<p className="uix-t-c">
										A free web kits with React for fast web design and development via SSR. Using react, redux, router, axios and express. This project was bootstrapped with nodejs library. Project supports automatic deployments from a number of repository hosting services via pm2.
									</p>		
		
									<p className="uix-t-c">
										<NavLink to="/components-demo" style={{textDecoration: "underline"}}>
											<i className="fa fa-external-link" aria-hidden="true"></i> Click me to view components!
										</NavLink>
									</p>


								</div>
							</div>
							{/*<!-- .row end -->*/}


					</div>
					{/*<!-- .container end -->*/}
				</section>

            </main>
		
		    <Footer />
       
          
      </>
    );
};
