import React, { Fragment } from 'react';
import Button from '@uixkit.react/components/Buttons/index.js';
import Footer from '@uixkit.react/components/Footer/index.js';

let spreadOperator = {
  UixBtnBgColor: 'info',
  UixBtnName: 'Spread Operator',
};


export default ({ staticContext = {} }) => {
    staticContext.status = 200;
    
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
		
									<h1>Components List</h1>
									<hr />

									<h3>Buttons</h3>
									<Button UixBtnBgColor='' UixBtnName=''/>
									<Button UixBtnBgColor='success' UixBtnName='success'/>
									<Button UixBtnBgColor='info' UixBtnName='info'/>
									<Button UixBtnBgColor='danger' UixBtnName='danger'/>
									<Button UixBtnBgColor='warning' UixBtnName='warning'/>
									<Button {...spreadOperator}/>

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