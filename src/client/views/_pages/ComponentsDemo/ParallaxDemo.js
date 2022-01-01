import React from 'react';
import { __ } from '@/components/_utils/_all';
import Parallax from '@/components/Parallax/index.tsx';


//Create or Remove Sidebar Menu
import { SidebarMenu } from '@/pages/ComponentsDemo/_SidebarMenu.js';


//get project config
import { rootDirectory } from '@/config/websiteConfig.js';

export default () => {

	React.useEffect(() => { // Equivalent to componentDidMount and componentDidUpdate:
		
		__( document ).ready( () => {
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
						<h1 className="poemkit-typo--h2">
						Parallax
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/Parallax" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
						<p>Use the Parallax component to create the illusion of depth with layers of images. It allows the use of images or any mix of HTML elements.</p>
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
		
		


		{/*<!-- Parallax & Overlay 
		============================================= -->*/} 
		<section>
			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`} heightClass="poemkit-height--100" fullyVisible={false} offsetTop={0} overlay={false} skew={0} speed={0.1}>
				<h2>Fulscreen + Vertically Centered Text</h2>
			</Parallax>
		</section>


		<section className="poemkit-spacing--s">
			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`} heightClass="poemkit-height--100" fullyVisible={false} offsetTop={150} overlay={false} skew={0} speed={0.2}>
				<h2>The top offset is 150px.</h2>
			</Parallax>
		</section>
			

		<section className="poemkit-spacing--s">

			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`} heightClass="poemkit-height--100" fullyVisible={false} offsetTop={150} overlay="rgba(0,0,0,.6)" skew={0} speed={0.4}>
				<Parallax parallaxElements={true} parallaxElementsTransition="all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s" speed={-0.4}>
					<div className="poemkit-typo--color-white">
						<h2>
							Fulscreen + Parallax Element
							<p className="poemkit-typo--h4">Has Overlay Background</p>
						</h2>
					</div>

				</Parallax>
			</Parallax>
		</section>



		<section className="poemkit-spacing--s">
			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`} heightClass="poemkit-height--30" fullyVisible={false} offsetTop={0} overlay={false} skew={0} speed={0.1}>
				<h2>Has class "poemkit-height--30"</h2>
			</Parallax>
		</section>



		<section className="poemkit-spacing--s">

			<div className="poemkit-height--30 poemkit-relative--inline poemkit-relative--inline-clip">
				<Parallax heightClass="mh-100" parallaxElements={true} parallaxElementsTransition="all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s"speed={-0.07}>
					<img src={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x600.jpg`} alt="" style={{marginTop: "-20px"}}/>
					<div className="poemkit-v-align--table poemkit-t-c poemkit-overlay poemkit-overlay--black poemkit-overlay--cover position-absolute poemkit-dir--top">
						<div>
							<h2 className="poemkit-spacing--no">Parallax only works on inline image 1920 x 600</h2>
						</div>
					</div>
				</Parallax>
			</div>
		</section>



		<section className="poemkit-spacing--s">
			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x309.jpg`} heightClass={null} fullyVisible={false} offsetTop={150} overlay="rgba(0,0,0,.6)" skew={0} speed={0.3}>
				<div className="row poemkit-typo--color-white">
					<div className="col-12">
						<h2>
							Small Image 1920 x 309
							<p className="poemkit-typo--h4">Has Overlay Background</p>
						</h2>
					</div>
				</div>
				{/*<!-- .row end -->*/}
			</Parallax>
		</section>



		<section className="poemkit-spacing--s">
			<Parallax img={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x309.jpg`} heightClass={null} fullyVisible={false} offsetTop={0} overlay={false} skew={-3} speed={0.3}>
				<h2 className="poemkit-el--skew">Skew Parallax Effect</h2>
			</Parallax>
		</section>


		<section className="poemkit-spacing--s" style={{marginTop: "100px"}}>
			<Parallax parallaxElements={true} parallaxElementsTransition="all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s" speed={-0.7}>
				<div className="poemkit-height--30 is-mobile-still" style={{backgroundColor: "#d2ff52", background: "linear-gradient(to bottom, #d2ff52 0%,#91e842 100%)"}}>
					<div className="poemkit-v-align--absolute poemkit-t-c">
						<h2>Element Parallax</h2>
						<p>Background without parallax</p>
					</div>
				</div>

			</Parallax>
		</section>

		



		{/*<!-- API 
		====================================================== -->*/}
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">API</h3>
						<hr />


						<article className="poemkit-spacing--s" itemProp="text">
							<h4>Parallax</h4>
							<div>
								<pre>import Parallax from '@/components/Parallax/index.tsx';</pre>
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
											<td><strong>(Required)</strong> Pure parallax scrolling effect without other embedded HTML elements</td>
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
											<td>string | <code>poemkit-height--100</code> | <code>poemkit-height--90</code> | <code>poemkit-height--80</code> | <code>poemkit-height--70</code> | <code>poemkit-height--60</code> | <code>poemkit-height--50</code> | <code>poemkit-height--40</code> | <code>poemkit-height--30</code> | <code>poemkit-height--20</code> | <code>poemkit-height--10</code></td>
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
											<td>Speed of parallax animation. Recommended value: <code>-10.00</code> to <code>10.00</code></td>
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