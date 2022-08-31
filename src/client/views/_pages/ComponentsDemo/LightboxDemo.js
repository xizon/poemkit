import React from 'react';
import { __ } from '@/components/_utils/_all';
import Lightbox from '@/components/Lightbox/index.tsx';

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
							Lightbox 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/Lightbox" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
						<p>A lightbox is a type of popup used to emphasize a piece of content including images, HTML elements, and important announcements. This window appears on the top of your website (as a popup).</p>
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
						<h3 className="app-header-title">Display Images</h3>
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

						<Lightbox 
							src={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`}
							triggerTagName="a" 
							triggerClassName="d-inline-block" 
							triggerContent={<>
								<img height="120" className="rounded p-1 m-2 border border-primary" src={`${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`} alt="Click Me To Show Image" />
							</>} />

						<Lightbox 
							src={`[
								{"thumb":"${rootDirectory}/assets/images/demo/slide-1.jpg","large":"${rootDirectory}/assets/images/demo/slide-1.jpg"}, 
								{"thumb":"${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg","large":"${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg"}, 
								{"thumb":"${rootDirectory}/assets/images/demo/slide-3.jpg","large":"${rootDirectory}/assets/images/demo/slide-3.jpg"}
								]`}
							triggerTagName="a" 
							triggerClassName="d-inline-block" 
							triggerContent={<>
								<img height="120" className="rounded p-1 m-2 border border-primary" src={`${rootDirectory}/assets/images/demo/slide-1.jpg`} alt="Click Me To Show Multiple Image" />
							</>} />

						<Lightbox 
							fixed={false}
							src={`${rootDirectory}/assets/images/placeholder/800x2000.jpg`}
							triggerTagName="a" 
							triggerClassName="d-inline-block" 
							triggerContent={<>
								<img height="120" className="rounded p-1 m-2 border border-primary" src={`${rootDirectory}/assets/images/placeholder/800x2000.jpg`} alt="Click Me To Show Image (Not Fixed)" />
							</>} />



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
						<h3 className="app-header-title">Display HTML Code</h3>
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

							<Lightbox 
								triggerTagName="a" 
								triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--primary" 
								triggerContent={<>
									Click Me To Show HTML Code
								</>}
								htmlContent={<>
									<div className="text-start">
										<p>
											<h5>Title 1</h5>
										</p>
										<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <a href="https://example.com" target="_blank">This is link</a></p>

										<p>Nullam id dolor id nibh ultricies vehicula ut id elit. <a href="https://example.com" target="_blank">Curabitur blandit tempus porttitor</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Super/Duper/Long/NonBreaking/Path/Name/To/A/File/That/Is/Way/Deep/Down/In/Some/Mysterious/Remote/Desolate/Part/Of/The/Operating/System/To/A/File/That/Just/So/Happens/To/Be/Strangely/Named/Supercalifragilisticexpialidocious.txt</p>

									</div>
								</>} />
						  	<br />	
						
							<Lightbox 
								fixed={false}
								triggerTagName="a" 
								triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--primary" 
								triggerContent={<>
									Click Me To Show HTML Code (Not Fixed)
								</>}
								htmlContent={<>
									<div className="text-start">
										<p>
											<h5>Title 2</h5>
										</p>
										<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <a href="https://example.com" target="_blank">This is link</a></p>

										<p>Nullam id dolor id nibh ultricies vehicula ut id elit. <a href="https://example.com" target="_blank">Curabitur blandit tempus porttitor</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Super/Duper/Long/NonBreaking/Path/Name/To/A/File/That/Is/Way/Deep/Down/In/Some/Mysterious/Remote/Desolate/Part/Of/The/Operating/System/To/A/File/That/Just/So/Happens/To/Be/Strangely/Named/Supercalifragilisticexpialidocious.txt</p>
									</div>

								</>} />
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
						<h3 className="app-header-title">AJAX Request</h3>
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

							<Lightbox 
								fixed={false}
								ajax={`{"target":"#app-home-description","method":"GET","url":"${rootDirectory}/index"}`}
								triggerTagName="a" 
								triggerClassName="poemkit-btn poemkit-btn__border--thin poemkit-btn__margin--b poemkit-btn__size--s poemkit-btn__bg--primary" 
								triggerContent={<>
									Click Me To Add <strong>"Home"</strong> Elements
								</>} />



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
							<h4>Lightbox</h4>
							<div>
								<pre>import Lightbox from '@/components/Lightbox/index.tsx';</pre>
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
											<td><code>src</code></td>
											<td>boolean | string | array</td>
											<td>-</td>
											<td>The address of the image, you can use an array to lay out the image sequence, such as <br /><code className="text-wrap">{`[{"thumb":"path/1.jpg","large":"path/1.jpg"},{"thumb":"path/2.jpg","large":"path/2.jpg"}]`}</code></td>
										</tr>
										<tr>
											<td><code>fixed</code></td>
											<td>boolean</td>
											<td>true</td>
											<td>Whether to fix the pop-up window</td>
										</tr>
										<tr>
											<td><code>ajax</code></td>
											<td>boolean | JSON Object Literals</td>
											<td>0</td>
											<td>A set of key/value pairs that configure the Ajax request, such as <br /><code className="text-wrap">{`{"target":"#my-ajax-demo-target-button","method":"POST","url":"https://xxx.com"}`}</code></td>
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
											<td><code>htmlContent</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>A string of HTML to set as the content</td>
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