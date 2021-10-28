import React from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';
import DropdownMenu from '@uixkit.react/components/DropdownMenu/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@uixkit.react/pages/ComponentsDemo/_SidebarMenu.js';


const data1 = [
	{ label: "Option 1", value: "option-1" },
	{ label: "Option 2", value: "option-2" },
	{ label: "Option 3", value: "option-3" }
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
						<h1 className="uix-typo--h2">
							Dropdown Menu 
							<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/DropdownMenu" target="_blank"><span className="uix-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
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
						<h3 className="app-header-title">Dropdown Menu</h3>
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
		<section className="uix-spacing--s">
			<div className="container">
					<div className="row">
						<div className="col-12">

							<DropdownMenu 
							    btnIcon={<><i className="fa fa-cog" aria-hidden="true"></i> </>}
								name="app-ddmenu-1"
								options={[
									{ label: "Option 1", value: "option-1" },
									{ label: "Option 2", value: "option-2" },
									{ label: "Option 3", value: "option-3" }
								]}
							/>
							<br /><br />


							<DropdownMenu 
							    btnIcon={<><i className="fa fa-cog" aria-hidden="true"></i> </>}
							    name="app-ddmenu-2"
								defaultLabel="Click Me (contains callback function)" 
								options={[
									{ label: "Boy", value: "boy" },
									{ label: "Girl", value: "girl" }
								]}
								optionChangeCallback={(res) => console.log(res.value)}
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
							<h4>Dropdown Menu</h4>
							<div>
								<pre>import DropdownMenu from '@uixkit.react/components/DropdownMenu/index.tsx';</pre>
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
											<td><code>name</code></td>
											<td>string</td>
											<td>-</td>
											<td>Set a name for the form field for this component. Name is not deprecated when used with form fields.</td>
										</tr>
										<tr>
											<td><code>defaultLabel</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify a default label text</td>
										</tr>
										<tr>
											<td><code>options</code></td>
											<td>array</td>
											<td>-</td>
											<td>Specify data of Dropdown Menu as a JSON string format. Such as: <br /> <code className="text-wrap">{`[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"}]`}</code></td>
										</tr>
										<tr>
											<td><code>btnIcon</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Button Icon</td>
										</tr>
										<tr>
											<td><code>optionChangeCallback</code></td>
											<td>function | null</td>
											<td>-</td>
											<td>This function is called whenever the data is updated. Exposes the JSON format data about the option as an argument. You can use it like this: <br /><code className="text-wrap">{`(res) => console.log(res.value)`}</code></td>
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
											<td><code>label</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify the label text for each option</td>
										</tr>
										<tr>
											<td><code>value</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specify the value for each option</td>
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