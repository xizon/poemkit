import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import Tooltip from '@poemkit/components/Tooltip/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@poemkit/pages/ComponentsDemo/_SidebarMenu.js';


//get project config
import { rootDirectory } from '@poemkit/config/websiteConfig.js';

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
						<h1 className="poemkit-typo--h2">
							Tooltip 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/Tooltip" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="15" viewBox="0 0 392.186 392.186"><g><g><g><path fill="#d2d2d2" d="M368.62,17.951H23.568C10.57,17.951,0,28.524,0,41.52v309.146c0,12.996,10.57,23.568,23.568,23.568h345.053c12.994,0,23.564-10.572,23.564-23.568V41.52C392.188,28.525,381.614,17.951,368.62,17.951z M297.56,57.528c0-4.806,3.896-8.703,8.701-8.703h8.703c4.808,0,8.701,3.896,8.701,8.703v9.863c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.805,0-8.701-3.896-8.701-8.702V57.528z M257.093,57.528c0-4.806,3.898-8.703,8.703-8.703h8.701c4.805,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.898,8.702-8.703,8.702h-8.701c-4.805,0-8.703-3.896-8.703-8.702V57.528z M363.903,345.951H28.282V102.235h335.621V345.951L363.903,345.951z M364.132,67.391c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.809,0-8.702-3.896-8.702-8.702v-9.863c0-4.806,3.896-8.703,8.702-8.703h8.703c4.806,0,8.701,3.896,8.701,8.703V67.391z"/><path fill="#d2d2d2" d="M84.185,233.284l63.084,29.336c1.631,0.755,3.367,1.138,5.162,1.138c2.338,0,4.617-0.664,6.598-1.924c3.547-2.267,5.666-6.13,5.666-10.334v-0.322c0-4.752-2.785-9.116-7.096-11.118l-39.455-18.332l39.455-18.334c4.311-2.004,7.096-6.367,7.096-11.117v-0.319c0-4.21-2.119-8.075-5.666-10.334c-1.961-1.253-4.246-1.916-6.605-1.916c-1.779,0-3.563,0.391-5.16,1.133l-63.08,29.333c-4.307,2.004-7.09,6.369-7.09,11.117v0.877C77.093,226.909,79.874,231.272,84.185,233.284z"/><path fill="#d2d2d2" d="M165.257,293.036c2.301,3.149,6.002,5.03,9.9,5.03h0.316c5.352,0,10.041-3.426,11.672-8.517L228.7,160.788c1.192-3.716,0.531-7.818-1.771-10.973c-2.301-3.15-6.002-5.03-9.901-5.03h-0.315c-5.354,0-10.048,3.425-11.679,8.516l-41.559,128.771C162.292,285.793,162.958,289.889,165.257,293.036z"/><path fill="#d2d2d2" d="M227.49,192.276c0,4.745,2.783,9.109,7.095,11.123l39.455,18.329l-39.455,18.33c-4.31,2.004-7.095,6.368-7.095,11.118v0.322c0,4.205,2.117,8.068,5.668,10.336c1.974,1.258,4.254,1.924,6.595,1.924c1.793,0,3.528-0.383,5.17-1.142l63.08-29.335c4.307-2.009,7.09-6.372,7.09-11.115v-0.877c0-4.748-2.783-9.113-7.094-11.117l-63.08-29.333c-1.591-0.74-3.373-1.131-5.152-1.131c-2.355,0-4.643,0.661-6.604,1.912c-3.551,2.263-5.67,6.127-5.67,10.337v0.318H227.49L227.49,192.276z"/></g></g></g></svg>Docs on GitHub</span></a>
						</h1>
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
						<p>Please move your mouse pointer over an element.</p>
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
			<div className="container">


				<div className="row">
					<div className="col-12">

						
						<Tooltip
							hoverDelay={300}
							direction="top"
							size="auto"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Top (auto width, 300 microseconds delay)</>}
							hideTriggerContent={<><div className="poemkit-t-l">Hi, there. I am here.</div></>}
						/>
						
						&nbsp;&nbsp;&nbsp;&nbsp;
						
						<Tooltip
							hoverDelay={300}
							direction="top"
							size="auto"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Top (auto width, 300 microseconds delay)</>}
							hideTriggerContent={<><div className="poemkit-t-l">Hi.</div></>}
						/>
						
						&nbsp;&nbsp;&nbsp;&nbsp;

						<Tooltip
							hoverDelay={0}
							direction="top"
							size="large"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Top (large size, no delay)</>}
							hideTriggerContent={<><div className="poemkit-t-l">An underlying front-end system that makes it easy to extend and modify core files.</div></>}
						/>


						<hr />

						<Tooltip
							hoverDelay={0}
							direction="top-right"
							size="large"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Top Right</>}
							hideTriggerContent={<><div className="poemkit-t-l">An underlying front-end system that makes it easy to extend and modify core files.</div></>} 
						/>

						<hr />

						<Tooltip
							hoverDelay={0}
							direction="top-left"
							size="large"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Top Left</>}
							hideTriggerContent={<><div className="poemkit-t-l">An underlying front-end system that makes it easy to extend and modify core files.</div></>}
						/>

						<hr />

						<Tooltip
							hoverDelay={0}
							direction="bottom"
							size="large"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Bottom</>}
							hideTriggerContent={<><div className="poemkit-t-l">An underlying front-end system that makes it easy to extend and modify core files.</div></>}
						/>

						<hr />



						<Tooltip
							hoverDelay={0}
							direction="bottom-right"
							size="large"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Bottom Right</>}
							hideTriggerContent={<><div className="poemkit-t-l">An underlying front-end system that makes it easy to extend and modify core files.</div></>}
						/>


						<hr />


						<Tooltip
							hoverDelay={0}
							direction="bottom-left"
							size="large"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Bottom Left</>}
							hideTriggerContent={<><div className="poemkit-t-l">An underlying front-end system that makes it easy to extend and modify core files.</div></>}
						/>

						<hr />



						<Tooltip
							hoverDelay={0}
							direction="left"
							size="small"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Left (Size: small)</>}
							hideTriggerContent={<><div className="poemkit-t-c">Centered text</div></>}
						/>


						<hr />

						<Tooltip
							hoverDelay={0}
							direction="right"
							size="small"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Right (Size: small)</>}
							hideTriggerContent={<><div className="poemkit-t-c">Centered text</div></>}
						/>

						<hr />



						<Tooltip
							hoverDelay={0}
							direction="left"
							size="medium"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Left (Size: medium)</>}
							hideTriggerContent={<><div className="poemkit-t-c">Centered text</div></>}
						/>


						<hr />



						<Tooltip
							hoverDelay={0}
							direction="right"
							size="medium"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Right (Size: medium)</>}
							hideTriggerContent={<><div className="poemkit-t-c">Centered text</div></>}
						/>

						<hr />

						<Tooltip
							hoverDelay={0}
							direction="left"
							size="large"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Left (Size: large)</>}
							hideTriggerContent={<><div className="poemkit-t-c">Centered text</div></>}
						/>

						<hr />

						<Tooltip
							hoverDelay={0}
							direction="right"
							size="large"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Right (Size: large)</>}
							hideTriggerContent={<><div className="poemkit-t-c">Centered text</div></>}
						/>	

						<hr />


						<Tooltip
							hoverDelay={0}
							direction="right"
							size="large"
							showTriggerContent={<><i className="fa fa-question-circle" aria-hidden="true"></i> Image (Size: large)</>}
							hideTriggerContent={<><div className="poemkit-t-c"><img src={`${rootDirectory}/assets/images/demo/qr-code.png`} alt="" /><br />Centered image</div></>}
						/>	
							

					</div>
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
							<h4>Tooltip</h4>
							<div>
								<pre>import Tooltip from '@poemkit/components/Tooltip/index.tsx';</pre>
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
											<td><code>direction</code></td>
											<td><code>top</code> | <code>top-right</code> | <code>top-left</code> | <code>bottom</code> | <code>bottom-right</code> | <code>bottom-left</code></td>
											<td>top</td>
											<td>The direction of the tip. Defaults to <code>top</code>.</td>
										</tr>
										<tr>
											<td><code>size</code></td>
											<td><code>auto</code> | <code>large</code> | <code>medium</code> | <code>small</code></td>
											<td>auto</td>
											<td>The size of the content area. Defaults to <code>auto</code>.</td>
										</tr>
										<tr>
											<td><code>hoverDelay</code></td>
											<td>number</td>
											<td>200</td>
											<td>The number of milliseconds to determine hover intent</td>
										</tr>
										<tr>
											<td><code>mouseOutDelay</code></td>
											<td>number</td>
											<td>-</td>
											<td>The number of milliseconds to determine hover-end intent, defaults to the hoverDelay value</td>
										</tr>
										<tr>
											<td><code>showTriggerContent</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Set a piece of text or HTML code for the show trigger</td>
										</tr>
										<tr>
											<td><code>hideTriggerContent</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Set a piece of text or HTML code for the hide trigger</td>
										</tr>
									</tbody>
								</table>


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