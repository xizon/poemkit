import React from 'react';
import { __ } from '@/components/_utils/_all';
import MultilevelDropdownMenu from '@/components/MultilevelDropdownMenu/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@/pages/ComponentsDemo/_SidebarMenu.js';

const menuListData = [{
	title: "Top level 1",
	link: "#",
	children: [
		{
			title: "Sub level 1_1",
			link: "#",
			children: [{
				title: "Sub Sub Level 1_1",
				link: "#",
				children: [{
					title: "Sub Sub Sub Level 1_1",
					link: "#"
				}]
			}]
		},
		{
			title: "Sub level 1_2",
			link: "#"
		}]
},
{
	title: "Top level 2",
	link: "https://example.com"
},
{
	title: "Top level 3",
	link: "https://www.bing.com",
	children: [
		{
			title: "Sub level 3_1",
			link: "#"
		},
		{
			title: "Sub level 3_2",
			link: "#"
		},
		{
			title: "Sub level 3_3",
			link: "#"
		}]
},
{
	title: "Top level 4",
	link: "#",
	children: [
		{
			title: "Sub level 4_1",
			link: "#"
		},
		{
			title: "Sub level 4_2",
			link: "#"
		}]
},
{
	title: "Top level 5",
	link: "#"
},
{
	title: "Top level 6",
	link: "#"
}
];


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
							Multiple-Level Dropdown Menu 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/MultilevelDropdownMenu" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
						<p>This component creates the data for the multi-level dependent drop down list.</p>
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
						<p>Click the hyperlink to display the drop-down menu</p>
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

							<MultilevelDropdownMenu data={menuListData} />


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
							<h4>Multiple-Level Dropdown Menu</h4>
							<div>
								<pre>import MultilevelDropdownMenu from '@/components/MultilevelDropdownMenu/index.tsx';</pre>
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
											<td>Specify data of Cascading DropDown List as a JSON string format. Such as: <br /><code className="text-wrap">{`[{"title":"Top level 1","link":"#","children":[{"title":"Sub level 1","link":"#","children":[{"title":"Sub Sub Level 1","link":"#"}]}]},{"title":"Top level 2","link":"https://example.com"}]`}</code></td>
										</tr>
									</tbody>
								</table>

							</div>


							<p>Array configuration properties of the <code>data</code>:</p>
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
											<td>string</td>
											<td>-</td>
											<td>The title attribute is used to provide the label text of the hyperlink</td>
										</tr>
										<tr>
											<td><code>link</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify a URL address.</td>
										</tr>
										<tr>
											<td><code>children</code></td>
											<td>array</td>
											<td>-</td>
											<td>Specify a set of sub-navigation, the key value of each item still uses <code>title</code> and <code>link</code> Eg. <code className="text-wrap">{`[{"title":"Sub Sub Level 1","link":"#"},{"title":"Sub Sub Level 2","link":"#"}]`}</code></td>
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