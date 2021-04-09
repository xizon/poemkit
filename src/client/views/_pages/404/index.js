import React, { Fragment } from 'react';
import Footer from '../../../components/Footer/index.js';

export default ({ staticContext = {} }) => {
    staticContext.status = 404;
    
    return (
	  <Fragment>
		
		    <div className="uix-header__placeholder js-uix-header__placeholder-autoheight"></div>
		
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