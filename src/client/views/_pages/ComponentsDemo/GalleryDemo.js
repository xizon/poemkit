import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import Gallery from '@poemkit/components/Gallery/index.tsx';

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
							Gallery
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/Gallery" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
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
						<h3 className="app-header-title">1 Column</h3>
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

                <Gallery fixedColumns={1} data={[
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-1.jpg`},
												{"url":`${rootDirectory}/assets/images/demo/test-img-big-2.jpg`}
												]} />


			</div>
			{/*<!-- .container end -->*/}

		</section>   

			
		
		
		{/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">2 Columns</h3>
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

				<Gallery fixedColumns={2} data={[
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-1.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-2.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-3.jpg`}
												]} />

			</div>
			{/*<!-- .container end -->*/}

		</section>   

		
		
		{/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">3 Columns</h3>
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


				<Gallery fixedColumns={3} data={[
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-1.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-2.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-3.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-4.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-5.jpg`}
												]} />

			</div>
			{/*<!-- .container end -->*/}

		</section>   
		

		
		
		{/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">4 Columns</h3>
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


				<Gallery fixedColumns={4} data={[
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-1.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-2.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-3.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-4.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-5.jpg`}
												]} />


			</div>
			{/*<!-- .container end -->*/}

		</section>   
		
		
		
		
		{/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">5 Columns</h3>
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


				<Gallery fixedColumns={5} data={[
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-1.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-2.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-3.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-4.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-5.jpg`}
												]} />

			</div>
			{/*<!-- .container end -->*/}

		</section>   
		
		
		
		
		{/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">6 Columns</h3>
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


				<Gallery fixedColumns={6} data={[
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-1.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-2.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-3.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-4.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-5.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-3.jpg`}
												]} />


			</div>
			{/*<!-- .container end -->*/}

		</section>   
		
		
		
		{/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">7 Columns</h3>
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


				<Gallery fixedColumns={7} data={[
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-1.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-2.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-3.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-4.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-5.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-1.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-3.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-4.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-5.jpg`}	
												]} />

			</div>
			{/*<!-- .container end -->*/}

		</section>   
		
		
		
		
		{/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">8 Columns</h3>
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



				<Gallery fixedColumns={8} data={[
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-1.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-2.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-3.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-4.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-5.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-1.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-3.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-4.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-5.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-2.jpg`},
												{"title":"Image Title", "url":`${rootDirectory}/assets/images/demo/test-img-big-4.jpg`}
												]} />


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
							<h4>Gallery</h4>
							<div>
								<pre>import Gallery from '@poemkit/components/Gallery/index.tsx';</pre>
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
											<td><code>data</code></td>
											<td>array</td>
											<td>-</td>
											<td>Specify data of images as a JSON string format. Such as: <br /><code className="text-wrap">{`[{"title":"Image Title 1","url":"xxx.jpg"},{"title":"Image Title 2","url":"xxx.jpg"}]`}</code></td>
										</tr>
										<tr>
											<td><code>fixedColumns</code></td>
											<td>number</td>
											<td>1</td>
											<td>Set numbers of columns on a gallery page. The value range is an integer from <code>1</code> to <code>8</code></td>
										</tr>
									</tbody>
								</table>



							</div>



							<p>Array configuration properties of the <code>options</code>:</p>
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
											<td><code>title</code></td>
											<td>string | boolean</td>
											<td>-</td>
											<td>Specifies an alternate and title text for the image</td>
										</tr>
										<tr>
											<td><code>url</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specifies the path to the image</td>
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