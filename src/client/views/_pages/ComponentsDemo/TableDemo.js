import React from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';
import Table from '@uixkit.react/components/Table/index.tsx';


//Create or Remove Sidebar Menu
import { SidebarMenu } from '@uixkit.react/pages/ComponentsDemo/_SidebarMenu.js';

const data1 = {
	"fields": [
		[
		   {"cols": 1, "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "Because that’s all Steve Job’ needed for a salary."}
		],
		[
		   {"cols": 1, "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "Pictures are worth a thousand words, right? So Tom x 1,000."}
		],	
		[
		   {"cols": 1, "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "With hair like that?! Enough said…"}
		]
	]
};

const data2 = {
	"headers": ["No.","Name",""],
	"fields": [
		[
		   {"cols": 1, "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "Because that’s all Steve Job’ needed for a salary."}
		],
		[
		   {"cols": 1, "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "Pictures are worth a thousand words, right? So Tom x 1,000."}
		],	
		[
		   {"cols": 1, "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "With hair like that?! Enough said…"}
		]
	],
	"summaries": ["Text 1","Text 2","Text 3"],
};

const data3 = {
	"headers": ["No.","Name","Email"],
	"fields": [
		[
		   {"cols": 1, "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "aaa@gmail.com"}
		],
		[
		   {"cols": 1, "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "bbb@gmail.com"}
		],	
		[
		   {"cols": 1, "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "ccc@gmail.com"}
		],	
		[
		   {"cols": 1, "content": "04" },
		   {"cols": 1, "content": "Dr. Wolverine Longer Text Test" },
		   {"cols": 1, "content": "ddd@gmail.com"}
		],	
		[
		   {"cols": 1, "content": "05" },
		   {"cols": 1, "content": "Foristin" },
		   {"cols": 1, "content": "eee@gmail.com"}
		]
	]
};


const data4 = {
	"headers": ["No.","Name","Email","Phone"],
	"fields": [
		[
		   {"cols": 1, "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "aaa@gmail.com"},
		   {"cols": 1, "content": "767 929 1212"}
		],
		[
		   {"cols": 1, "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "bbb@gmail.com"},
		   {"cols": 1, "content": "188 928 9999"}
		],	
		[
		   {"cols": 1, "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "ccc@gmail.com"},
		   {"cols": 1, "content": "188 928 2324"}
		],	
		[
		   {"cols": 1, "content": <><strong style={{background:"yellow"}}>A table cell that spans <span style={{color:"red"}}>1</span> columns</strong></> },
		   {"cols": 3, "content": <><strong style={{background:"yellow"}}>A table cell that spans <span style={{color:"red"}}>3</span> columns</strong></> }
		],	
		[
		   {"cols": 4, "content": <><strong style={{background:"yellow"}}>A table cell that spans <span style={{color:"red"}}>4</span> columns</strong></> }
		]	
	]
};


const data5 = {
	"fields": [
		[
		    {"cols": 1, "content": "Jan" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],
		[
		    {"cols": 1, "content": "Feb" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],	
		[
		    {"cols": 1, "content": "Mar" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],	
		[
		    {"cols": 1, "content": "Apr" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],	
		[
		    {"cols": 1, "content": "May" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],	
		[
		    {"cols": 1, "content": "Jun" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		]
	]
};


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
							Table 
							<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Table" target="_blank"><span className="uix-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="15" viewBox="0 0 392.186 392.186"><g><g><g><path fill="#d2d2d2" d="M368.62,17.951H23.568C10.57,17.951,0,28.524,0,41.52v309.146c0,12.996,10.57,23.568,23.568,23.568h345.053c12.994,0,23.564-10.572,23.564-23.568V41.52C392.188,28.525,381.614,17.951,368.62,17.951z M297.56,57.528c0-4.806,3.896-8.703,8.701-8.703h8.703c4.808,0,8.701,3.896,8.701,8.703v9.863c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.805,0-8.701-3.896-8.701-8.702V57.528z M257.093,57.528c0-4.806,3.898-8.703,8.703-8.703h8.701c4.805,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.898,8.702-8.703,8.702h-8.701c-4.805,0-8.703-3.896-8.703-8.702V57.528z M363.903,345.951H28.282V102.235h335.621V345.951L363.903,345.951z M364.132,67.391c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.809,0-8.702-3.896-8.702-8.702v-9.863c0-4.806,3.896-8.703,8.702-8.703h8.703c4.806,0,8.701,3.896,8.701,8.703V67.391z"/><path fill="#d2d2d2" d="M84.185,233.284l63.084,29.336c1.631,0.755,3.367,1.138,5.162,1.138c2.338,0,4.617-0.664,6.598-1.924c3.547-2.267,5.666-6.13,5.666-10.334v-0.322c0-4.752-2.785-9.116-7.096-11.118l-39.455-18.332l39.455-18.334c4.311-2.004,7.096-6.367,7.096-11.117v-0.319c0-4.21-2.119-8.075-5.666-10.334c-1.961-1.253-4.246-1.916-6.605-1.916c-1.779,0-3.563,0.391-5.16,1.133l-63.08,29.333c-4.307,2.004-7.09,6.369-7.09,11.117v0.877C77.093,226.909,79.874,231.272,84.185,233.284z"/><path fill="#d2d2d2" d="M165.257,293.036c2.301,3.149,6.002,5.03,9.9,5.03h0.316c5.352,0,10.041-3.426,11.672-8.517L228.7,160.788c1.192-3.716,0.531-7.818-1.771-10.973c-2.301-3.15-6.002-5.03-9.901-5.03h-0.315c-5.354,0-10.048,3.425-11.679,8.516l-41.559,128.771C162.292,285.793,162.958,289.889,165.257,293.036z"/><path fill="#d2d2d2" d="M227.49,192.276c0,4.745,2.783,9.109,7.095,11.123l39.455,18.329l-39.455,18.33c-4.31,2.004-7.095,6.368-7.095,11.118v0.322c0,4.205,2.117,8.068,5.668,10.336c1.974,1.258,4.254,1.924,6.595,1.924c1.793,0,3.528-0.383,5.17-1.142l63.08-29.335c4.307-2.009,7.09-6.372,7.09-11.115v-0.877c0-4.748-2.783-9.113-7.094-11.117l-63.08-29.333c-1.591-0.74-3.373-1.131-5.152-1.131c-2.355,0-4.643,0.661-6.604,1.912c-3.551,2.263-5.67,6.127-5.67,10.337v0.318H227.49L227.49,192.276z"/></g></g></g></svg>Docs on GitHub</span></a>
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
						<h3 className="app-header-title">Table Series</h3>
						<p>Provides some common styles of table.</p>
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

			


							<Table bordered={true} data={data1} />

							{/*<!-- //////////////////  -->*/}<br /><br />

							<Table data={data2} />

							{/*<!-- //////////////////  -->*/}<br /><br />

							<Table horizontal={true} data={data3} />

							{/*<!-- //////////////////  -->*/}<br /><br />

							<Table noborder={true} horizontal={true} data={data3} />	

							{/*<!-- //////////////////  -->*/}<br /><br />

							<Table horizontal={true} alternantRow={true} data={data3} />

							{/*<!-- //////////////////  -->*/}<br /><br />

							<Table perLine={true} data={data3} />

							{/*<!-- //////////////////  -->*/}<br /><br />

							<Table perLine={true} data={data4} />

							{/*<!-- //////////////////  -->*/}<br /><br />

							<Table alternantCol={true} data={data5} />


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
						<h3 className="app-header-title">Responsive Table</h3>
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

							<Table noborder={true} horizontal={true} responsive={true} data={data3} />

							{/*<!-- //////////////////  -->*/}<br /><br />

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
						<h3 className="app-header-title">Responsive Table with Scroll Bars</h3>
						<p>The scroll bar is displayed when the response is triggered.</p>
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

							<Table bordered={true} responsiveWithScrollBar={true} data={data3} />

							{/*<!-- //////////////////  -->*/}<br /><br />


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
							<h4>Table</h4>
							<div>
								<pre>import Table from '@uixkit.react/components/Table/index.tsx';</pre>
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
											<td>JSON Object Literals</td>
											<td>-</td>
											<td>Specify data of Table as a JSON string format. Such as: <br /><strong>usage 1:</strong><br /><code className="text-wrap">{`{"fields":[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }]]}`}</code> <br /><strong>usage 2:</strong><br /><code className="text-wrap">{`{"headers": ["No.","Name"],"fields":[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }]]}`}</code> <br /><strong>usage 3:</strong><br /><code className="text-wrap">{`{"fields":[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }],[{"cols": 4, "content": <><strong style={{background:"yellow"}}>A table cell that spans <span style={{color:"red"}}>4</span> columns</strong></> }]]}`}</code></td>
										</tr>
										<tr>
											<td><code>bordered</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Adds borders on all sides of the table and cells</td>
										</tr>
										<tr>
											<td><code>noborder</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Removes all borders on the table and cells, including table header</td>
										</tr>
										<tr>
											<td><code>horizontal</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Use the horizontal split effect for each row. Includes a header cell(&lt;th&gt; tag) with this attribute.</td>
										</tr>
										<tr>
											<td><code>alternantRow</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Apply alternating row color in dynamically created table</td>
										</tr>
										<tr>
											<td><code>alternantCol</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Apply alternating column color in dynamically created table</td>
										</tr>
										<tr>
											<td><code>perLine</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Only use the horizontal splitting effect for each row.</td>
										</tr>
										<tr>
											<td><code>responsive</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Create responsive tables up to a particular breakpoint.</td>
										</tr>
										<tr>
											<td><code>responsiveWithScrollBar</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Create responsive tables up to a particular breakpoint. This property allows scroll bars to be created automatically in the table.
												<br />
												<strong>Only one of the <code>responsive</code> and <code>responsiveWithScrollBar</code> properties is allowed, and both are invalid if set to true.</strong>

											</td>
										</tr>
									</tbody>
								</table>

								<p>JSON configuration properties of the <code>data</code>:</p>
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
												<td><code>fields</code></td>
												<td>array</td>
												<td>-</td>
												<td>Table rows and columns. The key <code>cols</code> identifies the column (change the value if the column is merged). The key <code>content</code> to place the content of each cell. Eg. <code className="text-wrap">{`[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }]]`}</code></td>
											</tr>
											<tr>
												<td><code>headers</code></td>
												<td>array</td>
												<td>-</td>
												<td>Defines a header cell in an HTML table. Eg. <code className="text-wrap">["No.","Name"]</code></td>
											</tr>
										</tbody>
									</table>
								</div>


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