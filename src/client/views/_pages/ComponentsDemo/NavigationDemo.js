import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import Navigation from '@poemkit/components/Navigation/index.tsx';
import { NavLink } from 'react-router-dom';


//Create or Remove Sidebar Menu
import { SidebarMenu } from '@poemkit/pages/ComponentsDemo/_SidebarMenu.js';

const menuListData = [
	{
		"title": <><li><NavLink data-route="true" to="/components-demo">Route Link</NavLink></li></>,
		"link": "#",
		"mega": false
	},
	{
		"title": "Top level 1",
		"link": "#",
		"mega": false
	},
	{
		"title": "Top level 2",
		"link": "#",
		"mega": false,
		"children": [
			{
				"title": "Sub level 2",
				"link": "#",
				"mega": false,
				"children": [
					{
						"title": "Sub Sub Level 2",
						"link": "#",
						"mega": false
					}
				]
			}
		]
	},
	{
		"title": "Mega Menu",
		"link": "#",
		"mega": {
			"columnLists": [
				{
					"heading": "Mega Menu 1",
					"list": [
						{ "title": "Menu Text", "link": "#" },
						{ "title": "Menu Text", "link": "#" }
					]
				},
				{
					"heading": "Mega Menu 2",
					"list": [
						{ "title": "Menu Text", "link": "#" },
						{ "title": "Menu Text", "link": "#" }
					]
				},
				{
					"heading": "Mega Menu 3",
					"list": [
						{ "title": "Menu Text", "link": "#" },
						{ "title": "Menu Text", "link": "#" }
					]
				}
			]
		}
	},
	{
		"title": "Top level 3",
		"link": "https://example.com",
		"mega": false
	}
];


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
							Navigation 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/Navigation" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
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
						<h3 className="app-header-title">Horizontal</h3>
						<p>Support mobile device access (If the displayMobileNav property is <code>true</code>).</p>
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

							<div style={{position:"relative",zIndex:1,border:"1px solid #ddd",borderRadius:"8px",background:"#f9f9f9",display:"flex",flex:"0 0 100%"}}>
								<Navigation data={menuListData} position="left"/>
							</div>
							
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
						<h3 className="app-header-title">Vertical</h3>
						<p>Support mobile device access (If the displayMobileNav property is <code>true</code>).</p>
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

							<div style={{position:"relative",zIndex:1,border:"1px solid #ddd",borderRadius:"8px",background:"#f9f9f9",display:"flex",flex:"0 0 100%"}}>
								<Navigation data={menuListData} position="left" direction="vertical"/>
							</div>
							
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
							<h4>Navigation</h4>
							<div>
								<pre>import Navigation from '@poemkit/components/Navigation/index.tsx';</pre>
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
											<td>Specify data of Navigation List as a JSON string format. Such as: <br /><code className="text-wrap">{`[{"title":&lt;&gt;&lt;li&gt;&lt;NavLink data-route="true" to="/components-demo"&gt;Route Link&lt;/NavLink&gt;&lt;/li&gt;&lt;/&gt;,"link":"#","mega":false},{"title":"Top level 1","link":"#","mega":false},{"title":"Top level 2","link":"#","mega":false,"children":[{"title":"Sub level 2","link":"#","mega":false,"children":[{"title":"Sub Sub Level 2","link":"#","mega":false}]}]},{"title":"Mega Menu","link":"#","mega":{"columnLists":[{"heading":"Mega Menu 1","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]},{"heading":"Mega Menu 2","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]},{"heading":"Mega Menu 3","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]}]}},{"title":"Top level 3","link":"https://example.com","mega":false}]`}</code></td>
										</tr>
										<tr>
											<td><code>position</code></td>
											<td>null | <code>left</code> | <code>right</code></td>
											<td>null</td>
											<td>Set navigation to the left or right. If the value is <code>left</code>, it is forced to be left.</td>
										</tr>
										<tr>
											<td><code>tools</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Set the trailing tool in the way of HTML Element, which can be a social button or other.</td>
										</tr>
										<tr>
											<td><code>mobileLogo</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify a LOGO address for mobile navigation.</td>
										</tr>

										<tr>
											<td><code>label</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify a navigation label.</td>
										</tr>
										<tr>
											<td><code>displayMobileNav</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Whether to enable mobile navigation.</td>
										</tr>
										<tr>
											<td><code>direction</code></td>
											<td>null | <code>vertical</code> | <code>horizontal</code></td>
											<td>horizontal</td>
											<td>The navigation direction.</td>
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
											<td>string | ReactNode</td>
											<td>-</td>
											<td>The title attribute is used to provide the label text of the hyperlink. <br />It supports ReactNode <strong>(Top-level element only)</strong> type and can be used for Route Link, such as: <br /><code className="text-wrap">&lt;&gt;&lt;li&gt;&lt;NavLink data-route="true" to="/components-demo"&gt;Route Link&lt;/NavLink&gt;&lt;/li&gt;&lt;/&gt;</code></td>
										</tr>
										<tr>
											<td><code>link</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify a URL address.</td>
										</tr>
										<tr>
											<td><code>mega</code></td>
											<td>boolean | JSON Object Literals</td>
											<td>-</td>
											<td><strong>(Top-level element only)</strong> Configure Mega Menu, disable when the value is <code>false</code>. <br />Refer to the following configuration as a JSON string format: <br /><code className="text-wrap">{`{"columnLists":[{"heading":"Mega Menu 1","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]},{"heading":"Mega Menu 2","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]},{"heading":"Mega Menu 3","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]}]}`}</code></td>
										</tr>
										<tr>
											<td><code>children</code></td>
											<td>array</td>
											<td>-</td>
											<td>Specify a set of sub-navigation, the key value of each item still uses <code>title</code>, <code>link</code> and <code>mega</code> (The <code>mega</code> attribute can be omitted). Eg.<br /> <code className="text-wrap">{`[{"title":"Sub level 2","link":"#","mega":false,"children":[{"title":"Sub Sub Level 2","link":"#","mega":false}]}]`}</code></td>
										</tr>
									</tbody>
								</table>


							</div>



							<p>JSON configuration properties of the <code>mega</code>:</p>
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
											<td><code>columnLists</code></td>
											<td>array</td>
											<td>-</td>
											<td>Root node of mega.</td>
										</tr>
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
											<td><code>heading</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify the title label for each column navigation.</td>
										</tr>
										<tr>
											<td><code>list</code></td>
											<td>array</td>
											<td>-</td>
											<td>A collection of items for each column navigation. the key value of each item still uses <code>title</code> and <code>link</code>. Eg. <br /><code className="text-wrap">{`[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]`}</code></td>
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