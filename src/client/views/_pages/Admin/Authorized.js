import React, { Component } from 'react';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import Footer from '@uixkit.react/components/Footer/index.js';

class Authorized extends Component {
	
  render() {
	  
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
							<div className="col-12">
		                         
		                         <p>You need to be authorized after successful login to see this information.</p>
		
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
	  
  }
    
}

export default Authorized;

