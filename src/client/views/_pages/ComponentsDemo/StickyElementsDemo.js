import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import Sticky from '@poemkit/components/StickyElements/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@poemkit/pages/ComponentsDemo/_SidebarMenu.js';

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
							Sticky Elements 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/StickyElements" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
						<p>Sticky positioning can be thought of as a hybrid of relative and fixed positioning. It also returns the sticky element to its original non-sticky position when scrolling back above it.</p>
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
						<div className="col-12">

							<Sticky stopTrigger=".app-sticky-stoptrigger" stopTriggerOffset="%h/3">
								<h4 className="poemkit-t-l">Sticky Title Here</h4>
								<div style={{height:"500px",background:"#f2f2f2",marginBottom:"50px"}}></div>
							</Sticky>


						</div>
						{/*<!-- .col-12 end -->*/}
					</div>
					{/*<!-- .row end -->*/}


			</div>
			{/*<!-- .container end -->*/}
		</section>


		<div className="app-sticky-stoptrigger" style={{height:"500px"}}><span style={{display:"block",margin:"0 auto",height:"100%",width:"1px",background:"#000"}}></span></div>
		
  
		{/*<!-- API 
		====================================================== -->*/}
		<section>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">API</h3>
						<hr />


						<article className="poemkit-spacing--s" itemProp="text">
							<h4>Sticky Elements</h4>
							<div>
								<pre>import Sticky from '@poemkit/components/StickyElements/index.tsx';</pre>
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
											<td><code>stopTrigger</code></td>
											<td>string | boolean</td>
											<td>false</td>
											<td>Set a trigger to stop the sticky action, use the class name or ID, for example: <code>.app-sticky-stoptrigger</code>. Sticky state will be triggered when the top of the element is 0 pixels from the top of the scrollElement automatically.</td>
										</tr>
										<tr>
											<td><code>stopTriggerOffset</code></td>
											<td>string | boolean</td>
											<td>0</td>
											<td>Sticky state will be canceled trigger when the bottom of the element is <code>stopTriggerOffset</code> pixels from the bottom of the scroll element. You can use <code>%h</code> or <code>%w</code> to represent the height and width of the window, set this value with mathematical expressions, please do not bring any units. Such as: <code>%h/3</code>, <code>100/3</code>, <code>30*2</code>, <code>220</code></td>
										</tr>
									</tbody>
								</table>





							</div>

							<p className="mb-5">The elements you actually want to stick should be wrapped in the <code>&lt;Sticky /&gt;</code> tag. Set <code>stopTrigger</code> and <code>stopTriggerOffset</code> properties to turn off sticky. </p>

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