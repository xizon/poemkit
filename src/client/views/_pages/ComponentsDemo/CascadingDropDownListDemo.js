import React from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';
import CascadingDropDownList from '@uixkit.react/components/CascadingDropDownList/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@uixkit.react/pages/ComponentsDemo/_SidebarMenu.js';

//get project config
import { API } from '@uixkit.react/config/websiteConfig.js';


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
							Cascading DropDown List
							<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/CascadingDropDownList" target="_blank"><span className="uix-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
					</div>
				</div>
				{/*<!-- .row end -->*/}

			</div>
			{/*<!-- .container end -->*/}

		</section>



		{/*<!-- Content   
		====================================================== -->*/}
		<section className="uix-spacing--s uix-spacing--no-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">Dynamic Drop Down List from JSON</h3>
						<p>Create a dynamic dropdown form that loads its data via JSON data. Support infinite recursion.</p>
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

							<CascadingDropDownList 
							    depth={2}
						     	name="dd-menu-name-1"
								api={API.RECEIVE_DROPDOWN_LIST} 
								loader={<><span><i className="fa fa-spinner fa-spin"></i></span></>}
								method="get"
								triggerTagName="a" 
								triggerClassName="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--secondary is-pill is-fill-white" 
								triggerContent={<>
								  Select
								</>}
							/>
							<br /><br />


							<CascadingDropDownList 
							    depth={1}
							    name="dd-menu-name-2"
								api={API.RECEIVE_DROPDOWN_LIST} 
								loader={<><span><i className="fa fa-spinner fa-spin"></i></span></>}
								method="get"
								value="2_2_1"
								triggerTagName="a" 
								triggerClassName="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--secondary is-pill is-fill-white" 
								triggerContent={<>
								  Select
								</>}
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
							<h4>Cascading DropDown List</h4>
							<div>
								<pre>import CascadingDropDownList from '@uixkit.react/components/CascadingDropDownList/index.tsx';</pre>
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
											<td><code>api</code></td>
											<td>string</td>
											<td>-</td>
											<td><strong>(Required)</strong>API address to receive data</td>
										</tr>
										<tr>
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a name for the form field for this component</td>
										</tr>
										<tr>
											<td><code>depth</code></td>
											<td>number</td>
											<td>1</td>
											<td>Set the depth value of the control to control the display of the pop-up layer appear above. Please set it when multiple controls are used at the same time.</td>
										</tr>
										<tr>
											<td><code>method</code></td>
											<td>string</td>
											<td>post</td>
											<td>Request method to be used when making the request.</td>
										</tr>
										<tr>
											<td><code>loader</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Set a loader component to show while the component waits for the next load of data. e.g. <code>&lt;span&gt;Loading...&lt;/span&gt;</code> or any fancy loader element</td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a default value</td>
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
									</tbody>
								</table>



							</div>

							{/*<!-- ++++++++ -->*/}

							<h4>Create Callback</h4>
							<p>A successful response returns the details of the callback such as Sample Request Body:</p>
							<div>
								<pre className="mb-5"><div style={{backgroundColor:"#f9f2f4",borderRadius:"3px",padding:"1rem",wordBreak:"normal",whiteSpace:"pre-wrap"}}>{`[
    {
        "id": 1, 
        "name": "Text 1", 
        "children": [
            {
                "id": "1_1", 
                "name": "Text 1_1", 
                "children": [
                    {
                        "id": "1_1_1", 
                        "name": "Text 1_1_1"
                    },
                    {
                        "id": "1_1_2", 
                        "name": "Text 1_1_2"
                    },
                    {
                        "id": "1_1_3", 
                        "name": "Text 1_1_3"
                    }
                ]
            }, 
            {
                "id": "1_2", 
                "name": "Text 1_2", 
                "children": [
                    {
                        "id": "1_2_1", 
                        "name": "Text 1_2_1", 
                        "children": [
                            {
                                "id": "1_2_1_1", 
                                "name": "Text 1_2_1_1"
                            },
                            {
                                "id": "1_2_1_2", 
                                "name": "Text 1_2_1_2"
                            }
                        ]
                    }
                ]
            }
        ]
    }, 
    {
        "id": 2, 
        "name": "Text 2", 
        "children": [
            {
                "id": "2_1", 
                "name": "Text 2_1", 
                "children": [
                    {
                        "id": "2_1_1", 
                        "name": "Text 2_1_1"
                    }
                ]
            }, 
            {
                "id": "2_2", 
                "name": "Text 2_2", 
                "children": [
                    {
                        "id": "2_2_1", 
                        "name": "Text 2_2_1"
                    }
                ]
            }
        ]
    }, 
	{
		"id": 3, 
		"name": "Text 3", 
		"children": [
			{
				"id": "3_1", 
				"name": "Text 3_1"
			}, 
			{
				"id": "3_2", 
				"name": "Text 3_2"
			}, 
			{
				"id": "3_3", 
				"name": "Text 3_3"
			}
		]
	},
    {
        "id": 4, 
        "name": "Text 4"
    },
    {
        "id": 5, 
        "name": "Text 5"
    },
    {
        "id": 6, 
        "name": "Text 6"
    }
]`}
								</div></pre>
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