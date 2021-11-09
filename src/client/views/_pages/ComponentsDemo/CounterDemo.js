import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import Counter from '@poemkit/components/Counter/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@poemkit/pages/ComponentsDemo/_SidebarMenu.js';

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
							Counter 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/Counter" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
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
						<h3 className="app-header-title">Counter</h3>
						<p>Scroll the page down to preview</p>
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

							<div className="row">
								<div className="col-lg-3 col-md-3">
									<h3 className="poemkit-spacing--no poemkit-outer-shadow--regular">
										<Counter displayNumber="00" start={0} stop={23} fixed={1} speed={200} dilimiter={false} doubleDigits={false} />
									</h3>
								</div>
								<div className="col-lg-3 col-md-3">
									<h3 className="poemkit-spacing--no poemkit-outer-shadow--regular">
										<Counter displayNumber="00" start={0} stop={30} fixed={1} speed={200} dilimiter={false} doubleDigits={false} />
									</h3>
								</div>
								<div className="col-lg-3 col-md-3">
									<h3 className="poemkit-spacing--no poemkit-outer-shadow--regular">
										<Counter displayNumber="00" start={0} stop={6} fixed={1} speed={200} dilimiter={false} doubleDigits={false} />
									</h3>
								</div>
								<div className="col-lg-3 col-md-3">
									<h3 className="poemkit-spacing--no poemkit-outer-shadow--regular">
										<Counter displayNumber="00" start={0} stop={3454} fixed={1} speed={200} dilimiter={false} doubleDigits={false} />
									</h3>
								</div>                 
							</div>
							{/*<!-- .row end -->*/}


						</div>
						{/*<!-- .col-12 end -->*/}
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

							<div className="row">
								<div className="col-lg-3 col-md-3">
									<h3 className="poemkit-spacing--no poemkit-outer-shadow--regular">
										<Counter displayNumber="00" start={0} stop={1023} fixed={0} speed={200} dilimiter={true} doubleDigits={true} />
									</h3>
								</div>
								<div className="col-lg-3 col-md-3">
									<h3 className="poemkit-spacing--no poemkit-outer-shadow--regular">
										<Counter displayNumber="00" start={0} stop={2230} fixed={0} speed={200} dilimiter={true} doubleDigits={true} />
									</h3>
								</div>
								<div className="col-lg-3 col-md-3">
									<h3 className="poemkit-spacing--no poemkit-outer-shadow--regular">
										<Counter displayNumber="00" start={0} stop={156} fixed={0} speed={200} dilimiter={true} doubleDigits={true} />
									</h3>
								</div>
								<div className="col-lg-3 col-md-3">
									<h3 className="poemkit-spacing--no poemkit-outer-shadow--regular">
										<Counter displayNumber="00" start={0} stop={1344} fixed={0} speed={200} dilimiter={true} doubleDigits={true} />
									</h3>
								</div>                 
							</div>
							{/*<!-- .row end -->*/}

						</div>
						{/*<!-- .col-12 end -->*/}
					</div>
					{/*<!-- .row end -->*/}


			</div>
			{/*<!-- .container end -->*/}



		</section>


		<div style={{height:"600px"}}><span style={{display:"block",margin:"0 auto",height:"100%",width:"1px",background:"#000"}}></span></div>


		{/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s">
			<div className="container poemkit-t-c">
					<div className="row">
						<div className="col-12">

							<div className="row">
								<div className="col-lg-3 col-md-3">
									<h3 className="poemkit-spacing--no poemkit-outer-shadow--regular">
										<Counter displayNumber="00" start={0} stop={55} fixed={2} speed={200} dilimiter={true} doubleDigits={true} />
									</h3>
								</div>
								<div className="col-lg-3 col-md-3">
									<h3 className="poemkit-spacing--no poemkit-outer-shadow--regular">
										<Counter displayNumber="00" start={0} stop={1245} fixed={2} speed={200} dilimiter={true} doubleDigits={true} />
									</h3>
								</div>
								<div className="col-lg-3 col-md-3">
									<h3 className="poemkit-spacing--no poemkit-outer-shadow--regular">
										<Counter displayNumber="00" start={0} stop={556} fixed={2} speed={200} dilimiter={true} doubleDigits={true} />
									</h3>
								</div>
								<div className="col-lg-3 col-md-3">
									<h3 className="poemkit-spacing--no poemkit-outer-shadow--regular">
										<Counter displayNumber="00" start={0} stop={8} fixed={2} speed={200} dilimiter={true} doubleDigits={true} />
									</h3>
								</div>                 
							</div>
							{/*<!-- .row end -->*/}

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
							<h4>Counter</h4>
							<div>
								<pre>import Counter from '@poemkit/components/Counter/index.tsx';</pre>
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
											<td><code>start</code></td>
											<td>number</td>
											<td>0</td>
											<td>The number the element should start at</td>
										</tr>
										<tr>
											<td><code>stop</code></td>
											<td>number</td>
											<td>0</td>
											<td>The number the element should end at</td>
										</tr>
										<tr>
											<td><code>fixed</code></td>
											<td>number</td>
											<td>0</td>
											<td>Formats a number using fixed-point notation.</td>
										</tr>
										<tr>
											<td><code>speed</code></td>
											<td>number</td>
											<td>200</td>
											<td>How long it should take to count between the target numbers. Amount of time measured in milliseconds.</td>
										</tr>
										<tr>
											<td><code>dilimiter</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>The number of decimal places to show</td>
										</tr>
										<tr>
											<td><code>doubleDigits</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Two digits are used by default, if it is a number <code>2</code> it should be displayed <code>02</code></td>
										</tr>
										<tr>
											<td><code>displayNumber</code></td>
											<td>string | number</td>
											<td>-</td>
											<td>String displayed by default</td>
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