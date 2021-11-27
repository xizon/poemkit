import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import { AccordionSlider, AccordionSliderItem } from '@poemkit/components/AccordionSlider/index.tsx';

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
							AccordionSlider Slider 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/AccordionSliderSlider" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
						<p>This component combines the functionality of an accordion with that of a slider.</p>
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
						<h3 className="app-header-title">Accordion Slider 1</h3>
						<p>Show hidden divs on mouse event.</p>
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


							<AccordionSlider triggerType="mouseover" displayTheFirstItem={true} autoReset={true} displayRatio="50%" direction="horizontal" closeBtn={false}>
								<AccordionSliderItem bg={`${rootDirectory}/assets/images/demo/test-img-big-1.jpg`}>
									<h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
									<p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
								</AccordionSliderItem>
								<AccordionSliderItem bg={`${rootDirectory}/assets/images/demo/test-img-big-2.jpg`}>
									<h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
									<p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
								</AccordionSliderItem>
								<AccordionSliderItem bg={`${rootDirectory}/assets/images/demo/test-img-big-4.jpg`}>
									<h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
									<p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
								</AccordionSliderItem>
							</AccordionSlider>


						</div>
					</div>
					{/*<!-- .row end -->*/}


			</div>
			{/*<!-- .container end -->*/}

		</section>



		{/*<!-- Content 
		====================================================== -->*/}
		<section>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">Accordion Slider 2</h3>
						<p>Click the item to show it. Hidden divs when you click the close button.</p>
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


							<AccordionSlider triggerType="click" displayTheFirstItem={false} autoReset={false} displayRatio="60%" direction="horizontal" closeBtn=".poemkit-accordion-slider__close">
								<AccordionSliderItem bg={`${rootDirectory}/assets/images/demo/test-img-big-1.jpg`}>
									<h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
									<p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
									<a className="poemkit-accordion-slider__close" href="#">Close</a>
								</AccordionSliderItem>
								<AccordionSliderItem bg={`${rootDirectory}/assets/images/demo/test-img-big-2.jpg`}>
									<h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
									<p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
									<a className="poemkit-accordion-slider__close" href="#">Close</a>
								</AccordionSliderItem>
								<AccordionSliderItem bg={`${rootDirectory}/assets/images/demo/test-img-big-4.jpg`}>
									<h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
									<p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
									<a className="poemkit-accordion-slider__close" href="#">Close</a>
								</AccordionSliderItem>
								<AccordionSliderItem bg={`${rootDirectory}/assets/images/demo/test-img-big-5.jpg`}>
									<h3 className="poemkit-typo--color-white">Lorem Ipsum</h3>
									<p className="poemkit-typo--color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
									<a className="poemkit-accordion-slider__close" href="#">Close</a>
								</AccordionSliderItem>
							</AccordionSlider>


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
							<h4>Accordion Slider</h4>
							<div>
								<pre>import {`{AccordionSlider}`} from '@poemkit/components/AccordionSlider/index.tsx';</pre>
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
											<td><code>triggerType</code></td>
											<td><code>click</code> | <code>mouseover</code></td>
											<td>click</td>
											<td>One event type</td>
										</tr>
										<tr>
											<td><code>displayTheFirstItem</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Display the only first item of a list</td>
										</tr>
										<tr>
											<td><code>autoReset</code></td>
											<td>boolean</td>
											<td>true</td>
											<td>Reset the initial state when the mouse moves out of the component area</td>
										</tr>
										<tr>
											<td><code>displayRatio</code></td>
											<td>string</td>
											<td>60%</td>
											<td>Display ratio measures the activated item's percentage of the component in the entire area</td>
										</tr>
										<tr>
											<td><code>direction</code></td>
											<td><code>horizontal</code> | <code>verticle</code></td>
											<td>horizontal</td>
											<td>The direction of the component animation, if it is <code>horizontal</code>, it means changing the width, otherwise changing the height</td>
										</tr>
										<tr>
											<td><code>closeBtn</code></td>
											<td>string | boolean</td>
											<td>false</td>
											<td>The button that triggers the restoration of the initial state, represented by class, such as <code>.poemkit-accordion-img__close</code></td>
										</tr>
										<tr>
											<td><code>duration</code></td>
											<td>number</td>
											<td>200</td>
											<td>The number of milliseconds(ms) each iteration of the animation takes to complete</td>
										</tr>
									</tbody>
								</table>




							</div>

							{/*<!-- ++++++++ -->*/}
							<h4>Accordion Slider Item</h4>
							<div>
								<pre>import {`{AccordionSliderItem}`} from '@poemkit/components/AccordionSlider/index.tsx';</pre>
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
											<td><code>defaultActive</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Set an item to activate by default</td>
										</tr>
										<tr>
											<td><code>bg</code></td>
											<td>string</td>
											<td>-</td>
											<td>The URL or color of the background image. Eg. <code>http://example/demo.jpg</code>, <code>#f60</code></td>
										</tr>
										<tr>
											<td><code>boxToggleEv</code></td>
											<td>function</td>
											<td>-</td>
											<td>Handling events for collapsing item</td>
										</tr>
										<tr>
											<td><code>elAnimEndEv</code></td>
											<td>function</td>
											<td>-</td>
											<td>Handling events when the animation execution is complete</td>
										</tr>
										<tr>
											<td><code>elAnimLeaveEv</code></td>
											<td>function</td>
											<td>-</td>
											<td>Handling events when the mouse leaves the element</td>
										</tr>
										<tr>
											<td><code>triggerType</code></td>
											<td><code>click</code> | <code>mouseover</code></td>
											<td>click</td>
											<td>One event type</td>
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