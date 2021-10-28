import React from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';
import Pagination from '@uixkit.react/components/Pagination/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@uixkit.react/pages/ComponentsDemo/_SidebarMenu.js';


function gotoPageNumber( number ) {
	//`number` comes from the public parameter thrown by the component `<Pagination />`
	alert( `page number: ${number}` );
	
}


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
						<h1 className="uix-typo--h2">
							Pagination 
							<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Pagination" target="_blank"><span className="uix-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
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
						<h3 className="app-header-title">Basic</h3>
						<hr />


					</div>
				</div>
				{/*<!-- .row end -->*/}

			</div>
			{/*<!-- .container end -->*/}

		</section>




	   {/*<!-- Content  
		====================================================== -->*/}
		<section className="uix-spacing--s">
			<div className="container">
					<div className="row">
						<div className="col-12">

							<Pagination
								gotoPageClickEvent={gotoPageNumber}
								pageRangeDisplayed={3}
								activePage={2}
								totalPages={5}
								previousLabel="prev"
								nextLabel="next"
								firstLabel="first"
								lastLabel="last"
							/>		

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
						<h3 className="app-header-title">Custom Icon</h3>
						<hr />


					</div>
				</div>
				{/*<!-- .row end -->*/}

			</div>
			{/*<!-- .container end -->*/}

		</section>




	   {/*<!-- Content  
		====================================================== -->*/}
		<section className="uix-spacing--s">
			<div className="container">
					<div className="row">
						<div className="col-12">

							<Pagination
								gotoPageClickEvent={gotoPageNumber}
								pageRangeDisplayed={3}
								activePage={2}
								totalPages={3}
								onlyPrevNext={true}
								previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
								nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
							/>	
                            <br />

							<Pagination
								gotoPageClickEvent={gotoPageNumber}
								pageRangeDisplayed={3}
								activePage={2}
								totalPages={3}
								onlyPrevNext={true}
								previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
								nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
								previousClass="previous uix-f-l"
								nextClass="next uix-f-r"
							/>	
					
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
						<h3 className="app-header-title">Centered Buttons</h3>
						<hr />


					</div>
				</div>
				{/*<!-- .row end -->*/}

			</div>
			{/*<!-- .container end -->*/}

		</section>




	   {/*<!-- Content  
		====================================================== -->*/}
		<section className="uix-spacing--s">
			<div className="container">
					<div className="row">
						<div className="col-12">

							<Pagination
								gotoPageClickEvent={gotoPageNumber}
								pageRangeDisplayed={3}
								activePage={1}
								totalPages={5}
								previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
								nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
								firstLabel={<><i className="fa fa-angle-double-left" aria-hidden="true"></i></>}
								lastLabel={<><i className="fa fa-angle-double-right" aria-hidden="true"></i></>}
								align="center"
							/>	
							<br />


							<Pagination
								gotoPageClickEvent={gotoPageNumber}
								pageRangeDisplayed={3}
								activePage={5}
								totalPages={5}
								previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
								nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
								firstLabel={<><i className="fa fa-angle-double-left" aria-hidden="true"></i></>}
								lastLabel={<><i className="fa fa-angle-double-right" aria-hidden="true"></i></>}
								align="center"
							/>	

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
						<h3 className="app-header-title">Use Ellipsis</h3>
						<hr />


					</div>
				</div>
				{/*<!-- .row end -->*/}

			</div>
			{/*<!-- .container end -->*/}

		</section>




	   {/*<!-- Content  
		====================================================== -->*/}
		<section className="uix-spacing--s">
			<div className="container">
					<div className="row">
						<div className="col-12">

							<Pagination
								gotoPageClickEvent={gotoPageNumber}
								pageRangeDisplayed={10}
								activePage={1}
								totalPages={1999}
								previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
								nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
								firstLabel={<><i className="fa fa-angle-double-left" aria-hidden="true"></i></>}
								lastLabel={<><i className="fa fa-angle-double-right" aria-hidden="true"></i></>}
								align="center"
								breakLabel="..."
							/>	
							<br />
							

							<Pagination
								gotoPageClickEvent={gotoPageNumber}
								pageRangeDisplayed={10}
								activePage={1996}
								totalPages={1999}
								previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
								nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
								align="center"
								breakLabel="..."
							/>	
							<br />


							<Pagination
								gotoPageClickEvent={gotoPageNumber}
								pageRangeDisplayed={10}
								activePage={1996}
								totalPages={2006}
								previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
								nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
								align="center"
								breakLabel="..."
							/>	
							<br />			


							<Pagination
								gotoPageClickEvent={gotoPageNumber}
								pageRangeDisplayed={10}
								activePage={1997}
								totalPages={1999}
								previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
								nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
								align="center"
								breakLabel="..."
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


						<article className="uix-spacing--s" itemProp="text">
							<h4>Pagination</h4>
							<div>
								<pre>import Pagination from '@uixkit.react/components/Pagination/index.tsx';</pre>
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
											<td><code>pageRangeDisplayed</code></td>
											<td>number</td>
											<td>3</td>
											<td><strong>(Required)</strong> The range of pages displayed</td>
										</tr>
										<tr>
											<td><code>activePage</code></td>
											<td>number</td>
											<td>-</td>
											<td><strong>(Required)</strong> The currently selected page number.</td>
										</tr>
										<tr>
											<td><code>totalPages</code></td>
											<td>number</td>
											<td>-</td>
											<td><strong>(Required)</strong> The total number of pages</td>
										</tr>
										<tr>
											<td><code>gotoPageClickEvent</code></td>
											<td>function</td>
											<td>-</td>
											<td>The method to call when a page is clicked. Exposes the current page number as an argument.</td>
										</tr>
										<tr>
											<td><code>previousLabel</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Label for the previous button</td>
										</tr>
										<tr>
											<td><code>nextLabel</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Label for the next button</td>
										</tr>
										<tr>
											<td><code>firstLabel</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Label for the first button</td>
										</tr>
										<tr>
											<td><code>lastLabel</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Label for the last button</td>
										</tr>
										<tr>
											<td><code>breakLabel</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Label for ellipsis</td>
										</tr>
										<tr>
											<td><code>align</code></td>
											<td>null | '' | <code>left</code> | <code>right</code> | <code>center</code></td>
											<td>-</td>
											<td>Set the alignment of the control</td>
										</tr>
										<tr>
											<td><code>onlyPrevNext</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Only display the previous and next buttons</td>
										</tr>
										<tr>
											<td><code>activeClass</code></td>
											<td>string</td>
											<td>is-active</td>
											<td>The classname for the active page</td>
										</tr>
										<tr>
											<td><code>previousClass</code></td>
											<td>string</td>
											<td>prev</td>
											<td>The classname on tag li of the previous button</td>
										</tr>
										<tr>
											<td><code>nextClass</code></td>
											<td>string</td>
											<td>next</td>
											<td>The classname on tag li of the next button</td>
										</tr>
										<tr>
											<td><code>firstClass</code></td>
											<td>string</td>
											<td>first</td>
											<td>The classname on tag li of the first button</td>
										</tr>
										<tr>
											<td><code>lastClass</code></td>
											<td>string</td>
											<td>last</td>
											<td>The classname on tag li of the last button</td>
										</tr>
										<tr>
											<td><code>disabledClass</code></td>
											<td>string</td>
											<td>is-disabled</td>
											<td>The classname for disabled buttons</td>
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