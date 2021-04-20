import React, { Fragment } from 'react';
import { __ } from '@uixkit.react/components/_utilities/js/_all.js';
import Footer from '@uixkit.react/components/Footer/index.js';

export default ({ staticContext = {} }) => {
    staticContext.status = 404;
    
    return (
	  <Fragment>
		
            <main id="uix-maincontent">
		
				{/*
				<!-- Content   
				====================================================== -->	
				*/}
				<section className="uix-spacing--s">
					<div className="container">
							<div className="row">
								<div className="col-12">
		
                					<h3>Page Not found</h3>
		
								</div>
							</div>
							{/*<!-- .row end -->*/}


					</div>
					{/*<!-- .container end -->*/}
				</section>
		

            </main>
		
		    <Footer />
       
        
      </Fragment>
    );
};