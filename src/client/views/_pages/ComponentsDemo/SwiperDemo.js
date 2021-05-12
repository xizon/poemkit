import React from 'react';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import Swiper from '@uixkit.react/components/Swiper/index.js';


export default () => {

	
    return (
	  <>
		    

			<main id="uix-maincontent">
		
				{/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s uix-spacing--no-bottom">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h1 className="uix-t-c">
									Swiper 
									<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Swiper" target="_blank"><code><i className="fa fa-code" aria-hidden="true"></i></code></a>
								</h1>
							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>



			   {/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s">
					<div className="container">


							<div className="row">
								<div className="col-12">


									<Swiper />
		

								</div>     
							</div>
							{/*<!-- .row end -->*/}  


					</div>
					{/*<!-- .container end -->*/}



				</section>


			</main>

		
      </>
    );
};


