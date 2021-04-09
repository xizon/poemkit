import React, { Fragment } from 'react';
import Button from '../../../components/Buttons/index.js';
import Footer from '../../../components/Footer/index.js';

let spreadOperator = {
  ukrBtnBgColor: 'info',
  ukrBtnName: 'Spread Operator',
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
		
									<h1>Home!</h1>

									<h3>Buttons:</h3>
									<Button ukrBtnBgColor='' ukrBtnName=''/>
									<Button ukrBtnBgColor='success' ukrBtnName='success'/>
									<Button ukrBtnBgColor='info' ukrBtnName='info'/>
									<Button ukrBtnBgColor='danger' ukrBtnName='danger'/>
									<Button ukrBtnBgColor='warning' ukrBtnName='warning'/>
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