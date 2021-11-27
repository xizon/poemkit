import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import ImageShapes from '@poemkit/components/ImageShapes/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@poemkit/pages/ComponentsDemo/_SidebarMenu.js';

//get project config
import { rootDirectory } from '@poemkit/config/websiteConfig.js';


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
							Image Shapes 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/ImageShapes" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="15" viewBox="0 0 392.186 392.186"><g><g><g><path fill="#d2d2d2" d="M368.62,17.951H23.568C10.57,17.951,0,28.524,0,41.52v309.146c0,12.996,10.57,23.568,23.568,23.568h345.053c12.994,0,23.564-10.572,23.564-23.568V41.52C392.188,28.525,381.614,17.951,368.62,17.951z M297.56,57.528c0-4.806,3.896-8.703,8.701-8.703h8.703c4.808,0,8.701,3.896,8.701,8.703v9.863c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.805,0-8.701-3.896-8.701-8.702V57.528z M257.093,57.528c0-4.806,3.898-8.703,8.703-8.703h8.701c4.805,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.898,8.702-8.703,8.702h-8.701c-4.805,0-8.703-3.896-8.703-8.702V57.528z M363.903,345.951H28.282V102.235h335.621V345.951L363.903,345.951z M364.132,67.391c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.809,0-8.702-3.896-8.702-8.702v-9.863c0-4.806,3.896-8.703,8.702-8.703h8.703c4.806,0,8.701,3.896,8.701,8.703V67.391z"/><path fill="#d2d2d2" d="M84.185,233.284l63.084,29.336c1.631,0.755,3.367,1.138,5.162,1.138c2.338,0,4.617-0.664,6.598-1.924c3.547-2.267,5.666-6.13,5.666-10.334v-0.322c0-4.752-2.785-9.116-7.096-11.118l-39.455-18.332l39.455-18.334c4.311-2.004,7.096-6.367,7.096-11.117v-0.319c0-4.21-2.119-8.075-5.666-10.334c-1.961-1.253-4.246-1.916-6.605-1.916c-1.779,0-3.563,0.391-5.16,1.133l-63.08,29.333c-4.307,2.004-7.09,6.369-7.09,11.117v0.877C77.093,226.909,79.874,231.272,84.185,233.284z"/><path fill="#d2d2d2" d="M165.257,293.036c2.301,3.149,6.002,5.03,9.9,5.03h0.316c5.352,0,10.041-3.426,11.672-8.517L228.7,160.788c1.192-3.716,0.531-7.818-1.771-10.973c-2.301-3.15-6.002-5.03-9.901-5.03h-0.315c-5.354,0-10.048,3.425-11.679,8.516l-41.559,128.771C162.292,285.793,162.958,289.889,165.257,293.036z"/><path fill="#d2d2d2" d="M227.49,192.276c0,4.745,2.783,9.109,7.095,11.123l39.455,18.329l-39.455,18.33c-4.31,2.004-7.095,6.368-7.095,11.118v0.322c0,4.205,2.117,8.068,5.668,10.336c1.974,1.258,4.254,1.924,6.595,1.924c1.793,0,3.528-0.383,5.17-1.142l63.08-29.335c4.307-2.009,7.09-6.372,7.09-11.115v-0.877c0-4.748-2.783-9.113-7.094-11.117l-63.08-29.333c-1.591-0.74-3.373-1.131-5.152-1.131c-2.355,0-4.643,0.661-6.604,1.912c-3.551,2.263-5.67,6.127-5.67,10.337v0.318H227.49L227.49,192.276z"/></g></g></g></svg>Docs on GitHub</span></a>
						</h1>
						<p>Use SVG paths to create image of arbitrary shapes.</p>
					</div>
				</div>
				{/*<!-- .row end -->*/}

			</div>
			{/*<!-- .container end -->*/}

		</section>



		{/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
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
		
		
	
		{/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s">
			<div className="container poemkit-t-c">
					<div className="row">
						<div className="col-12 poemkit-trans">

							<ImageShapes
								containerWidth={200}
								containerHeight={200}
								imgExpectedWidth={400}
								path="M100,0L0,200c0,0,0,0,0,0h200c0,0,0,0,0,0L100,0C100,0,100,0,100,0z"
								src={`${rootDirectory}/assets/images/demo/horizontal-img.jpg`} />


							<ImageShapes
								containerWidth={200}
								containerHeight={200}
								imgExpectedWidth={400}
								path="M62.1,0h80.7c0,0,0,0,0,0L200,200c0,0,0,0,0,0H0c0,0,0,0,0,0L62.1,0C62.1,0,62.1,0,62.1,0z"
								src={`${rootDirectory}/assets/images/demo/horizontal-img.jpg`} />


							<ImageShapes
								containerWidth={200}
								containerHeight={200}
								imgExpectedWidth={400}
								path="M107,10l82.9,82.9c3.9,3.9,3.9,10.2,0,14.1l-82.9,43c-3.9,3.9-10.2,3.9-14.1,0l-83-43c-3.9-3.9-3.9-10.2,0-14.1L92.9,10C96.8,6.1,103.1,6.1,107,10z"
								src={`${rootDirectory}/assets/images/demo/horizontal-img.jpg`} />



							<hr />

							<ImageShapes
								containerWidth={300}
								containerHeight={300}
								imgExpectedWidth={300}
								path="M0,0l300,38.4c0,0,0,0,0,0v257.1c0,0,0,0,0,0L65.5,257.1c0,0,0,0,0,0V115.5c0,0,0,0,0,0L0,0C0,0,0,0,0,0z"
								src={`${rootDirectory}/assets/images/demo/avatar-r-1.jpg`} />



							<br />


							<ImageShapes
								containerWidth={300}
								containerHeight={300}
								imgExpectedWidth={100}
								path="M0,0l300,38.4c0,0,0,0,0,0v257.1c0,0,0,0,0,0L65.5,257.1c0,0,0,0,0,0V115.5c0,0,0,0,0,0L0,0C0,0,0,0,0,0z"
								src={`${rootDirectory}/assets/images/demo/avatar-r-1.jpg`} />


							<br />


							<ImageShapes
								containerWidth={500}
								containerHeight={200}
								imgExpectedWidth={600}
								path="M0,0C0,0,0,0,0,0c0.2,1.1,35,220.5,76.6,187.2c41.7-33.3,22.6,29.8,84.5-9.5s66.7,46.4,100-1.2s39.3,58.3,85.7,0s53.6,57.1,91.7,0c38-57,61.3-175.8,61.5-176.5c0,0,0,0,0,0H0z"
								src={`${rootDirectory}/assets/images/demo/avatar-r-1.jpg`} />



							<br />


							<ImageShapes
								containerWidth={200}
								containerHeight={50}
								imgExpectedWidth={1000}
								path="M2.8,0h163.3c0,0,0,0,0,0c0.1,0,70.6,24,0,50c0,0,0,0,0,0C165.7,49.3,0.8,25.1,0,25c0,0,0,0,0,0L2.8,0C2.8,0,2.8,0,2.8,0z"
								src={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x600.jpg`} />



							<br />


							<ImageShapes
								containerWidth={150}
								containerHeight={225}
								imgExpectedWidth={600}
								path="M144.4,0C144.4,0,144.4,0,144.4,0L0,0c0,0,0,0,0,0l16.2,211.5c0,0,0,0,0,0l16-91.4c0,0,0,0,0,0l4.1,91.4c0,0,0,0,0,0c0.4-1.8,19.3-96.8,19.3-92.1v89.8c0,0,0,0,0,0l18.1-85.7c0,0,0,0,0,0l5.3,87.9c0,0,0,0,0,0l15.2-87.3c0,0,0,0,0,0l7,87.3c0,0,0,0,0,0"
								src={`${rootDirectory}/assets/images/demo/vertical-img.jpg`} />


							<br />     


						</div>
						{/*<!-- .col-12 end -->*/}
					</div>
					{/*<!-- .row end -->*/}


			</div>
			{/*<!-- .container end -->*/}



		</section>


  
		{/*<!-- API 
		====================================================== -->*/}
		<section>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">API</h3>
						<hr />


						<article className="poemkit-spacing--s" itemProp="text">
							<h4>Image Shapes</h4>
							<div>
								<pre>import ImageShapes from '@poemkit/components/ImageShapes/index.tsx';</pre>
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
											<td><code>path</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a element path to create lines, curves, arcs, and more.</td>
										</tr>
										<tr>
											<td><code>src</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specifies the path to the image</td>
										</tr>
										<tr>
											<td><code>containerWidth</code></td>
											<td>number</td>
											<td>-</td>
											<td>Set a specified width for the container that it is not the size of the image. Measured in pixels</td>
										</tr>
										<tr>
											<td><code>containerHeight</code></td>
											<td>number</td>
											<td>-</td>
											<td>Set a specified height for the container that it is not the size of the image. Measured in pixels</td>
										</tr>
										<tr>
											<td><code>imgExpectedWidth</code></td>
											<td>number</td>
											<td>-</td>
											<td>Set a desired width value for the image</td>
										</tr>
									</tbody>
								</table>


							</div>

							{/*<!-- ++++++++ -->*/}

							<h4>Custom Image Shapes</h4>
							<p>Use <strong>Adobe Illustrator</strong> to make SVG file and copy its code. <strong>File &gt; Export &gt; Export for Screens</strong>.
								Note: SVG code must be a single path, the <code>containerWidth</code> and <code>containerHeight</code> attributes is the original size of the SVG graphics, <code>imgExpectedWidth</code> attribute is wanted the size of the displayed image which it cannot be smaller than the width of the SVG.</p>
							<div>
								<pre className="mb-5"><div style={{ backgroundColor: "#F6F6F6", borderRadius: "3px", padding: "1rem", wordBreak: "normal", whiteSpace: "pre-wrap" }}>{`<svg fill-rule="evenodd" clip-rule="evenodd" width="300px" height="300px" viewBox="0 0 300 300">
    <path fill="#191616" d="M105.1,18.4l154.2,184.3C259.3,202.7,49.7,208.7,105.1,18.4z"/>
</svg>`}
								</div></pre>
							</div>


							{/*<!-- ++++++++ -->*/}

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