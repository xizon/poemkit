import React from 'react';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import Video from '@uixkit.react/components/Video/index.js';


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
									Video 
									<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/master/src/client/components/Video" target="_blank"><code><i className="fa fa-code" aria-hidden="true"></i></code></a>
								</h1>
							</div>
						</div>
						{/*<!-- .row end -->*/}

					</div>
					{/*<!-- .container end -->*/}

				</section>

		
		
				{/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s uix-spacing--no-bottom">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Autoplay, No controls</h3>
								<p>Must be muted</p>
								<hr />


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
								<div className="col-md-6">

									<Video config='{"clickToPlay":false,"muted":true,"autoplay":true,"controls":[""],"loop":{"active":true},"fullscreen":{"enabled": false}}' data-poster="/assets/videos/480x270/demo.jpg" src="/assets/videos/480x270/demo.mp4" />
		
		

								</div>     


							</div>
							{/*<!-- .row end -->*/}  


					</div>
					{/*<!-- .container end -->*/}



				</section>


		
				{/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s uix-spacing--no-bottom">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Contains all controls</h3>
								<hr />


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
								<div className="col-md-6">

		
								    <Video config='{"muted":false,"autoplay":false,"controls":["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],"loop":{"active":false}}' src="/assets/videos/1440x1050/demo.mp4" />



		
		

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