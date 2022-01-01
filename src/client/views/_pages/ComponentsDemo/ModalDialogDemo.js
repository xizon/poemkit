import React from 'react';
import { __ } from '@/components/_utils/_all';
import ModalDialog from '@/components/ModalDialog/index.tsx';

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
							Modal Dialog 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/ModalDialog" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
						<p>A modal dialog is a pop-window that forces the user to interact with it before they can go back to using the parent application.</p>
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
						<h3 className="app-header-title">Text or Images</h3>
						<p>Contains text or images information.</p>
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
							
							<ModalDialog 
							autoOpen={false}
							triggerTagName="a" 
							triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--primary" 
							triggerContent={<>
								Click Here to Open Modal
							</>}>
								<h2>Holy Crap!!!</h2>
								<p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p><p>p.s. Sorry for calling you a dingus earlier.</p>
							</ModalDialog>
							<br />

							<ModalDialog 
							fullscreen={true} 
							triggerTagName="a" 
							triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--primary" 
							triggerContent={<>
								Click Here to Open Modal (Fullscreen)
							</>}>
								<h2>Full Screen Here</h2>
								<p>p.s. Sorry for calling you a dingus earlier.</p>
							</ModalDialog>
							<br />


							<ModalDialog 
							width="300px"
							height="200px"
							triggerTagName="a" 
							triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--primary" 
							triggerContent={<>
								Click Here to Open Modal (Custom)
							</>}>
								<h2>Holy Crap!!!</h2>
								<p>p.s. Sorry for calling you a dingus earlier.</p>
							</ModalDialog>
							<br />


							<ModalDialog 
							lightbox={false}
							width="300px"
							height="200px"
							triggerTagName="a" 
							triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--primary" 
							triggerContent={<>
								Click Here to Open Modal (No mask)
							</>}>
								<h2>No Mask</h2>
								<p>Content here...</p>
							</ModalDialog>
							<br />


							<ModalDialog 
							autoOpen={true}
							autoClose={3000}
							width="600px"
							height="300px"
							triggerTagName="a" 
							triggerClassName="d-none" 
							triggerContent={<></>}>
								<h4>This window will automatically close after 3 seconds :)</h4>
								<p>You can click the button on the page to trigger the pop-up window.</p>
							</ModalDialog>
							<br />



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
						<h3 className="app-header-title">Video</h3>
						<p>Use the following HTML code to fire video.</p>
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

						<ModalDialog 
							enableVideo={true}
							triggerTagName="a" 
							triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--primary" 
							triggerContent={<>
								Click Here to Open MP4 file
							</>}>
								<video playsInline controls poster={`${rootDirectory}/assets/videos/480x270/demo.jpg`} src={`${rootDirectory}/assets/videos/480x270/demo.mp4`}></video>	
							</ModalDialog>
							<br />


							
							<ModalDialog 
							enableVideo={true}
							triggerTagName="a" 
							triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--primary" 
							triggerContent={<>
								Click Here to Open Youtube Video
							</>}>
								<iframe width="560" height="315" src="https://www.youtube.com/embed/ckYJBMfPtBs" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
							</ModalDialog>
							<br />



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
							<h4>Modal Dialog</h4>
							<div>
								<pre>import ModalDialog from '@/components/ModalDialog/index.tsx';</pre>
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
											<td><code>height</code></td>
											<td>number | string | boolean</td>
											<td>false</td>
											<td>Custom modal height whick need a unit string. Such as: <code>200px</code></td>
										</tr>
										<tr>
											<td><code>width</code></td>
											<td>number | string | boolean</td>
											<td>false</td>
											<td>Custom modal width whick need a unit string. Such as: <code>200px</code></td>
										</tr>
										<tr>
											<td><code>lightbox</code></td>
											<td>boolean</td>
											<td>true</td>
											<td>Whether to enable the lightbox effect</td>
										</tr>
										<tr>
											<td><code>closeOnlyBtn</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Disable mask to close the window</td>
										</tr>
										<tr>
											<td><code>fullscreen</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Toggles whether fullscreen should be enabled</td>
										</tr>
										<tr>
											<td><code>heading</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Set a window title</td>
										</tr>
										<tr>
											<td><code>triggerTagName</code></td>
											<td><code>a</code> | <code>button</code> | <code>div</code> | <code>span</code></td>
											<td>-</td>
											<td>Tag name of the trigger.</td>
										</tr>
										<tr>
											<td><code>triggerClassName</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify a class for this Node</td>
										</tr>
										<tr>
											<td><code>triggerContent</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Set a piece of text or HTML code for the trigger</td>
										</tr>
										<tr>
											<td><code>autoClose</code></td>
											<td>number | boolean</td>
											<td>false</td>
											<td>Specify auto-close time. This function is not enabled when this value is false. If the value is <code>2000</code>, it will automatically close after 2 seconds.</td>
										</tr>
										<tr>
											<td><code>autoOpen</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Automatically open the component, you can use it with the <code>autoClose</code> property at the same time</td>
										</tr>
										<tr>
											<td><code>enableVideo</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Adapt the video to the window. For example, the content of the component can be written as: <code className="text-wrap">&lt;iframe width="560" height="315" src="https://www.youtube.com/xxx" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen&gt;&lt;/iframe&gt;</code> <br /> or <br /><code className="text-wrap">&lt;video playsInline controls poster="/assets/videos/480x270/demo.jpg" src="/assets/videos/480x270/demo.mp4"&gt;&lt;/video&gt;</code></td>
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