import React from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';
import Parallax from '@uixkit.react/components/Parallax/index.tsx';


//Create or Remove Sidebar Menu
import { SidebarMenu } from '@uixkit.react/pages/ComponentsDemo/_SidebarMenu.js';


//get project config
import { rootDirectory } from '@uixkit.react/config/websiteConfig.js';

export default () => {

	React.useEffect(() => { // Equivalent to componentDidMount and componentDidUpdate:
		
		__( document ).ready( function() {
			//Create sidebar menu
	        SidebarMenu();
		});  
	});



    return (
	  <>

		{/*<!-- Content 
		====================================================== -->*/}
		<section>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="uix-typo--h2">
						Parallax
							<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Parallax" target="_blank"><span className="uix-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="15" viewBox="0 0 392.186 392.186"><g><g><g><path fill="#d2d2d2" d="M368.62,17.951H23.568C10.57,17.951,0,28.524,0,41.52v309.146c0,12.996,10.57,23.568,23.568,23.568h345.053c12.994,0,23.564-10.572,23.564-23.568V41.52C392.188,28.525,381.614,17.951,368.62,17.951z M297.56,57.528c0-4.806,3.896-8.703,8.701-8.703h8.703c4.808,0,8.701,3.896,8.701,8.703v9.863c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.805,0-8.701-3.896-8.701-8.702V57.528z M257.093,57.528c0-4.806,3.898-8.703,8.703-8.703h8.701c4.805,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.898,8.702-8.703,8.702h-8.701c-4.805,0-8.703-3.896-8.703-8.702V57.528z M363.903,345.951H28.282V102.235h335.621V345.951L363.903,345.951z M364.132,67.391c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.809,0-8.702-3.896-8.702-8.702v-9.863c0-4.806,3.896-8.703,8.702-8.703h8.703c4.806,0,8.701,3.896,8.701,8.703V67.391z"/><path fill="#d2d2d2" d="M84.185,233.284l63.084,29.336c1.631,0.755,3.367,1.138,5.162,1.138c2.338,0,4.617-0.664,6.598-1.924c3.547-2.267,5.666-6.13,5.666-10.334v-0.322c0-4.752-2.785-9.116-7.096-11.118l-39.455-18.332l39.455-18.334c4.311-2.004,7.096-6.367,7.096-11.117v-0.319c0-4.21-2.119-8.075-5.666-10.334c-1.961-1.253-4.246-1.916-6.605-1.916c-1.779,0-3.563,0.391-5.16,1.133l-63.08,29.333c-4.307,2.004-7.09,6.369-7.09,11.117v0.877C77.093,226.909,79.874,231.272,84.185,233.284z"/><path fill="#d2d2d2" d="M165.257,293.036c2.301,3.149,6.002,5.03,9.9,5.03h0.316c5.352,0,10.041-3.426,11.672-8.517L228.7,160.788c1.192-3.716,0.531-7.818-1.771-10.973c-2.301-3.15-6.002-5.03-9.901-5.03h-0.315c-5.354,0-10.048,3.425-11.679,8.516l-41.559,128.771C162.292,285.793,162.958,289.889,165.257,293.036z"/><path fill="#d2d2d2" d="M227.49,192.276c0,4.745,2.783,9.109,7.095,11.123l39.455,18.329l-39.455,18.33c-4.31,2.004-7.095,6.368-7.095,11.118v0.322c0,4.205,2.117,8.068,5.668,10.336c1.974,1.258,4.254,1.924,6.595,1.924c1.793,0,3.528-0.383,5.17-1.142l63.08-29.335c4.307-2.009,7.09-6.372,7.09-11.115v-0.877c0-4.748-2.783-9.113-7.094-11.117l-63.08-29.333c-1.591-0.74-3.373-1.131-5.152-1.131c-2.355,0-4.643,0.661-6.604,1.912c-3.551,2.263-5.67,6.127-5.67,10.337v0.318H227.49L227.49,192.276z"/></g></g></g></svg>Docs on GitHub</span></a>
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
						<h3 className="app-header-title">Demos</h3>
						<hr />
					</div>
				</div>
				{/*<!-- .row end -->*/}

			</div>
			{/*<!-- .container end -->*/}

		</section>
		
		


		{/*<!-- Parallax & Overlay 
		============================================= -->*/} 
		<section>
			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`} heightClass="uix-height--100" fullyVisible={false} offsetTop={0} overlay={false} skew={0} speed={0.1}>
				<h2>Fulscreen + Vertically Centered Text</h2>
			</Parallax>
		</section>


		<section className="uix-spacing--s">
			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`} heightClass="uix-height--100" fullyVisible={false} offsetTop={150} overlay={false} skew={0} speed={0.2}>
				<h2>The top offset is 150px.</h2>
			</Parallax>
		</section>
			

		<section className="uix-spacing--s">

			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`} heightClass="uix-height--100" fullyVisible={false} offsetTop={150} overlay="rgba(0,0,0,.6)" skew={0} speed={0.4}>
				<Parallax parallaxElements={true} parallaxElementsTransition="all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s" speed={-0.4}>
					<div className="uix-typo--color-white">
						<h2>
							Fulscreen + Parallax Element
							<p className="uix-typo--h4">Has Overlay Background</p>
						</h2>
					</div>

				</Parallax>
			</Parallax>
		</section>



		<section className="uix-spacing--s">
			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`} heightClass="uix-height--30" fullyVisible={false} offsetTop={0} overlay={false} skew={0} speed={0.1}>
				<h2>Has class "uix-height--30"</h2>
			</Parallax>
		</section>



		<section className="uix-spacing--s">

			<div className="uix-height--30 uix-relative--inline uix-relative--inline-clip">
				<Parallax heightClass="mh-100" parallaxElements={true} parallaxElementsTransition="all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s"speed={-0.07}>
					<img src={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x600.jpg`} alt="" style={{marginTop: "-20px"}}/>
					<div className="uix-v-align--table uix-t-c uix-overlay uix-overlay--black uix-overlay--cover position-absolute uix-dir--top">
						<div>
							<h2 className="uix-spacing--no">Parallax only works on inline image 1920 x 600</h2>
						</div>
					</div>
				</Parallax>
			</div>
		</section>



		<section className="uix-spacing--s">
			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x309.jpg`} heightClass={null} fullyVisible={false} offsetTop={150} overlay="rgba(0,0,0,.6)" skew={0} speed={0.3}>
				<div className="row uix-typo--color-white">
					<div className="col-12">
						<h2>
							Small Image 1920 x 309
							<p className="uix-typo--h4">Has Overlay Background</p>
						</h2>
					</div>
				</div>
				{/*<!-- .row end -->*/}
			</Parallax>
		</section>



		<section className="uix-spacing--s">
			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x309.jpg`} heightClass={null} fullyVisible={false} offsetTop={0} overlay={false} skew={-3} speed={0.3}>
				<h2 className="uix-el--skew">Skew Parallax Effect</h2>
			</Parallax>
		</section>


		<section className="uix-spacing--s" style={{marginTop: "100px"}}>
			<Parallax parallaxElements={true} parallaxElementsTransition="all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s" speed={-0.7}>
				<div className="uix-height--30 is-mobile-still" style={{backgroundColor: "#d2ff52", background: "linear-gradient(to bottom, #d2ff52 0%,#91e842 100%)"}}>
					<div className="uix-v-align--absolute uix-t-c">
						<h2>Element Parallax</h2>
						<p>Background without parallax</p>
					</div>
				</div>

			</Parallax>
		</section>

		



		{/*<!-- API 
		====================================================== -->*/}
		<section className="uix-spacing--s uix-spacing--no-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">API</h3>
						<hr />


						<article className="uix-spacing--s" itemProp="text">
							<h4>Parallax</h4>
							<div>
								<pre>import Parallax from '@uixkit.react/components/Parallax/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped mb-5">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>parallaxElements</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Pure parallax scrolling effect without other embedded HTML elements</td>
										</tr>
										<tr>
											<td><code>parallaxElementsTransition</code></td>
											<td>string</td>
											<td>all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s</td>
											<td>Transition of parallax when <code>parallaxElements</code> is true</td>
										</tr>
										<tr>
											<td><code>img</code></td>
											<td>string</td>
											<td>-</td>
											<td>Background image URL</td>
										</tr>
										<tr>
											<td><code>heightClass</code></td>
											<td>string | <code>uix-height--100</code> | <code>uix-height--90</code> | <code>uix-height--80</code> | <code>uix-height--70</code> | <code>uix-height--60</code> | <code>uix-height--50</code> | <code>uix-height--40</code> | <code>uix-height--30</code> | <code>uix-height--20</code> | <code>uix-height--10</code></td>
											<td>-</td>
											<td>Class name of default height</td>
										</tr>
										<tr>
											<td><code>fullyVisible</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether to display all pictures, including the edges</td>
										</tr>
										<tr>
											<td><code>offsetTop</code></td>
											<td>number</td>
											<td>0</td>
											<td>Offset top of background</td>
										</tr>
										<tr>
											<td><code>overlay</code></td>
											<td>boolean | string</td>
											<td>false</td>
											<td>Background overlay. You can set it to the color value, for example <code>rgba(0,0,0,.6)</code></td>
										</tr>
										<tr>
											<td><code>skew</code></td>
											<td>number</td>
											<td>0</td>
											<td>Skew of background</td>
										</tr>
										<tr>
											<td><code>speed</code></td>
											<td>number</td>
											<td>0</td>
											<td>Speed of parallax animation</td>
										</tr>
									</tbody>
								</table>
	
							</div>



						</article>


					</div>
				</div>
				{/*<!-- .row end -->*/}


			</div>
			{/*<!-- .container end -->*/}
		</section>



		
      </>
    );
};