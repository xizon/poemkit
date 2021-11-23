import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import ScrollReveal from '@poemkit/components/ScrollReveal/index.tsx';


//Create or Remove Sidebar Menu
import { SidebarMenu } from '@poemkit/pages/ComponentsDemo/_SidebarMenu.js';

//get project config
import { rootDirectory } from '@poemkit/config/websiteConfig.js';

export default () => {

	
   React.useEffect(() => { // Equivalent to componentDidMount and componentDidUpdate:

		__( document ).ready( function() {
			
			//Create sidebar menu
			SidebarMenu();

			//Add some class in order to use ScrollReveal
			if ( document.querySelector( '#app-demo-sr-style') === null ) {
				const $style = document.createElement("style");
				$style.id = 'app-demo-sr-style';
				document.head.appendChild($style);
				$style.innerHTML = `
					.demo-sr-active {
						transition: all 1s ease;
						transform: scale(0.7);
					}
				`;  
			}

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
						<h1 className="poemkit-typo--h2">
							Scroll Reveal 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/ScrollReveal" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
					</div>
				</div>
				{/*<!-- .row end -->*/}

			</div>
			{/*<!-- .container end -->*/}

		</section>




		{/*<!-- Content   
		====================================================== -->*/}
		<section className="poemkit-spacing--s">
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
		



		{/*<!-- Scroll Reveal
		============================================= -->*/} 
		<ScrollReveal className="poemkit-spacing--s poemkit-height--50 poemkit-el--transparent" config='{"viewport":"100%","from":{"opacity":0,"x":100},"to":{"opacity":1,"x":0},"ease":"Power2.easeOut","duration":0.8,"delay":0,"infinite":false}' style={{background:"#e6e6e6"}}>
			<div className="poemkit-v-align--relative poemkit-t-c">
				<h3>Moving the element when going left</h3>
			</div>
		</ScrollReveal> 



		<ScrollReveal className="poemkit-spacing--s poemkit-height--50 poemkit-el--transparent" config='{"viewport":"100%","from":{"opacity":0,"scale":0.5,"transform":"translateX(50px) rotate(30deg)"},"to":{"opacity":1,"scale":1,"transform":"translateX(0) rotate(0deg)"},"ease":"Power2.easeOut","duration":0.8,"delay":0.5,"infinite":false}' style={{background:"#ACABA3"}}>
			<div className="poemkit-v-align--relative poemkit-t-c">
				<h3>Flipping the element when going left</h3>

			</div>
		</ScrollReveal>


		<ScrollReveal className="poemkit-spacing--s poemkit-height--50 poemkit-el--transparent" config='{"viewport":"80%","from":{"opacity":0,"y":150},"to":{"opacity":1,"y":0},"ease":"Power2.easeOut","duration":0.8,"delay":0,"infinite":true}' style={{background:"#C7BAAF"}}>
			<div className="poemkit-v-align--relative poemkit-t-c">
				<h3>Infinite loop animation</h3>

			</div>
		</ScrollReveal>


		<ScrollReveal className="poemkit-spacing--s poemkit-height--50 poemkit-el--transparent" config='{"viewport":"100%","from":{"opacity":0,"y":150},"to":{"opacity":1,"y":0},"ease":"Power2.easeOut","duration":0.8,"delay":0,"infinite":false}' style={{background:"#AB9799"}}>
			<div className="poemkit-v-align--relative poemkit-t-c">
				<h3>Moving the element when going top</h3>

			</div>
		</ScrollReveal>



		<ScrollReveal className="poemkit-spacing--s poemkit-height--50" config='{"viewport":"100%","from":"","to":".demo-sr-active","infinite":true}' style={{background:"#91707A"}}>
			<div className="poemkit-v-align--relative poemkit-t-c">
				<h3>Add class <code>.demo-sr-active</code> when element becomes visible</h3>

			</div>
		</ScrollReveal>




		<ScrollReveal className="poemkit-spacing--s poemkit-height--50 poemkit-el--zoom" config='{"viewport":"100%","from":{"scale":0},"to":{"scale":1},"ease":"Power2.easeOut","duration":0.8,"delay":0,"infinite":false}' style={{background:"#805965"}}>
			<div className="poemkit-v-align--relative poemkit-t-c">
				<h3>Scale effect</h3>

			</div>
		</ScrollReveal>


		<div className="poemkit-spacing--s">
			<ScrollReveal className="d-inline-block poemkit-sr-image-anim poemkit-sr-image-anim--x" config='{"viewport":"50%","from":"","to":".is-active","infinite":false}'>
				<img src={`${rootDirectory}/assets/images/demo/test-img-big-1.jpg`} style={{maxWidth:"500px"}} alt="" />
			</ScrollReveal>
		</div>



		<div className="poemkit-spacing--s">
			<ScrollReveal className="d-inline-block poemkit-sr-image-anim poemkit-sr-image-anim--y" config='{"viewport":"50%","from":"","to":".is-active","infinite":false}'>
				<img src={`${rootDirectory}/assets/images/demo/test-img-big-2.jpg`} style={{maxWidth:"500px"}} alt="" />
			</ScrollReveal>
		</div>



		<div className="poemkit-spacing--s">
			<ScrollReveal className="d-inline-block poemkit-sr-image-anim poemkit-sr-image-anim--z" config='{"viewport":"50%","from":"","to":".is-active","infinite":false}'>
				<img src={`${rootDirectory}/assets/images/demo/test-img-big-3.jpg`} style={{maxWidth:"500px"}} alt="" />
			</ScrollReveal>
		</div>


		{/*<!-- API 
		====================================================== -->*/}
			<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="app-header-title">API</h3>
							<hr />


							<article className="poemkit-spacing--s" itemProp="text">
								<h4>Scroll Reveal</h4>
								<div>
									<pre>import ScrollReveal from '@poemkit/components/ScrollReveal/index.tsx';</pre>
								</div>

								<div className="table-responsive-md">
									<table className="table table-bordered table-striped">
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
												<td><code>config</code></td>
												<td>JSON Object Literals</td>
												<td>-</td>
												<td><strong>(Required)</strong> Detailed animation parameters, using JSON string format.
													<br /><strong>default value:</strong><br />
													<code className="text-wrap">{`{"from": {"opacity":0,"x":70},"to":{"opacity":1,"x":0},"ease":"Power2.easeOut","duration": 0.4,"delay": 0,"infinite" : false,"viewport" : '100%'}`}</code>
													<br /><strong>other:</strong><br />
													<code className="text-wrap">{`{"viewport":"100%","from":{"opacity":0,"x":100},"to":{"opacity":1,"x":0},"ease":"Power2.easeOut","duration":0.8,"delay":0,"infinite":false}`}</code>
													<br /><code className="text-wrap">{`{"viewport":"100%","from":"","to":".demo-sr-active","infinite":true}`}</code>
												</td>
											</tr>
										</tbody>
									</table>

								</div>

								<p className="mb-5">It accepts all props(include data-* attributes) which native div support.</p>

								<p>JSON configuration properties of the <code>config</code>:</p>
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
												<td><code>viewport</code></td>
												<td>string</td>
												<td>100%</td>
												<td>This attribute expands/contracts the active boundaries of the viewport when calculating element visibility. The default value is <code>100%</code>.  <code>20%</code> means 20% of an element must be visible for its reveal to occur.</td>
											</tr>
											<tr>
												<td><code>from</code></td>
												<td>JSON Object Literals</td>
												<td>{`{"opacity":0,"x":70}`}</td>
												<td>Starting config using JSON string format, will transition from these values. Follow the parameter style of GSAP 2+. Eg. <code className="text-wrap">{`{"opacity":0,"scale":0.5,"transform":"translateX(50px) rotate(30deg)"}`}</code></td>
											</tr>
											<tr>
												<td><code>to</code></td>
												<td>JSON Object Literals | string</td>
												<td>{`{"opacity":1,"x":0}`}</td>
												<td>Ending config using JSON string format, will transition from these values. Follow the parameter style of GSAP 2+. Eg. <code className="text-wrap">{`{"opacity":1,"scale":1,"transform":"translateX(0) rotate(0deg)"}`}</code> <br />Can be a pure string, this style will be enabled when the viewport is specified, for example <code>.demo-sr-active</code></td>
											</tr>
											<tr>
												<td><code>ease</code></td>
												<td>string</td>
												<td>Power2.easeOut</td>
												<td>Accepts any valid GSAP 2+ easing, e.g. <code>Power2.easeOut</code>, etc.</td>
											</tr>
											<tr>
												<td><code>duration</code></td>
												<td>number</td>
												<td>0.4</td>
												<td>This attribute controls how long animations take to complete.</td>
											</tr>
											<tr>
												<td><code>delay</code></td>
												<td>number</td>
												<td>0</td>
												<td>This attribute is the time before reveal animations begin.</td>
											</tr>
											<tr>
												<td><code>infinite</code></td>
												<td>boolean</td>
												<td>false</td>
												<td>This attribute enables/disables elements returning to their initialized position when they leave the viewport. When true elements reveal each time they enter the viewport instead of once.</td>
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