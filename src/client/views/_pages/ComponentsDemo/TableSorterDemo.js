import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import TableSorter from '@poemkit/components/TableSorter/index.tsx';


//Create or Remove Sidebar Menu
import { SidebarMenu } from '@poemkit/pages/ComponentsDemo/_SidebarMenu.js';


const data1 = {
	"headers": [
		{"type": false, "content": "Index" },
	    {"type": "number", "content": "Money" },
		{"type": "text", "content": "Name" },
		{"type": "number", "content": "No." },
		{"type": "date", "content": "Date1" },
		{"type": "date", "content": "Date2" }
	],
	"fields": [
		[
			{"cols": 1, "content": "1" },
			{"cols": 1, "content": "$55.134" },
			{"cols": 1, "content": "David Lin" },
			{"cols": 1, "content": "3453434"},
			{"cols": 1, "content": "2012-09-25T12:10:46+00:00"},
			{"cols": 1, "content": "May 22, 2003"}
			
		],
		[
			{"cols": 1, "content": "2" },
			{"cols": 1, "content": "$255.12" },
			{"cols": 1, "content": "Co Cheey" },
			{"cols": 1, "content": "-2324.343"},
			{"cols": 1, "content": "2013-09-10T12:10:46+00:00"},
			{"cols": 1, "content": "September 13, 2013"}
		],	
		[
			{"cols": 1, "content": "3" },
			{"cols": 1, "content": "$21.134" },
			{"cols": 1, "content": "Foristin" },
			{"cols": 1, "content": "-34789.34"},
			{"cols": 1, "content": "2018-09-24T12:10:46+00:00"},
			{"cols": 1, "content": "January 2, 2019"}
		],	
		[
			{"cols": 1, "content": "4" },
			{"cols": 1, "content": "$3454.134" },
			{"cols": 1, "content": "Alice" },
			{"cols": 1, "content": "+224.5"},
			{"cols": 1, "content": "2011-09-21T12:10:46+00:00"},
			{"cols": 1, "content": "December 1, 2018"}
		],	
		[
			{"cols": 1, "content": "5" },
			{"cols": 1, "content": "$224.0" },
			{"cols": 1, "content": "Wooli" },
			{"cols": 1, "content": "+33.6"},
			{"cols": 1, "content": "2011-02-26T12:10:46+00:00"},
			{"cols": 1, "content": "July 22, 2017"}
		],	
		[
			{"cols": 1, "content": "6" },
			{"cols": 1, "content": "$356.2" },
			{"cols": 1, "content": "Spiter Low" },
			{"cols": 1, "content": "278.23487"},
			{"cols": 1, "content": "2019-01-01T12:10:46+00:00"},
			{"cols": 1, "content": "July 28, 2017"}
		]
		
	]
};


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
							Table Sorter
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/TableSorter" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
						<p>This component turns a standard HTML table with THEAD and TBODY tags into a sortable table without page refreshes.</p>
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
						<h3 className="app-header-title">Table Sorter</h3>
						<p>Users can filter and limit the data displayed within a long data table.</p>
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


							<TableSorter horizontal={true} alternantRow={true} data={data1} />


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
							<h4>Table Sorter</h4>
							<div>
								<pre>import TableSorter from '@poemkit/components/TableSorter/index.tsx';</pre>
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
											<td>Specify data of Table as a JSON string format. Such as: <br /><strong>usage:</strong><br /><code className="text-wrap">{`{"headers": [{"type": false, "content": "Index" },{"type": "number", "content": "Money" },{"type": "text", "content": "Name" },{"type": "number", "content": "No." },{"type": "date", "content": "Date1" },{"type": "date", "content": "Date2" }],"fields":[[{"cols":1,"content":"1"},{"cols":1,"content":"$55.134"},{"cols":1,"content":"David Lin"},{"cols":1,"content":"3453434"},{"cols":1,"content":"2012-09-25T12:10:46+00:00"},{"cols":1,"content":"May 22, 2003"}],[{"cols":1,"content":"2"},{"cols":1,"content":"$255.12"},{"cols":1,"content":"Co Cheey"},{"cols":1,"content":"-2324.343"},{"cols":1,"content":"2013-09-10T12:10:46+00:00"},{"cols":1,"content":"September 13, 2013"}]]}`}</code></td>
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
											<td>Create responsive tables up to a particular breakpoint. This property allows scroll bars to be created automatically in the table. <br /><strong>Only one of the <code>responsive</code> and <code>responsiveWithScrollBar</code> properties is allowed, and both are invalid if set to true.</strong></td>
										</tr>
									</tbody>
								</table>
							</div>



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
											<td>Table rows and columns. The key <code>cols</code> identifies the column (change the value if the column is merged). The key <code>content</code> to place the content of each cell. Eg. <code className="text-wrap">{`[[{"cols":1,"content":"1"},{"cols":1,"content":"$55.134"},{"cols":1,"content":"David Lin"},{"cols":1,"content":"3453434"},{"cols":1,"content":"2012-09-25T12:10:46+00:00"},{"cols":1,"content":"May 22, 2003"}],[{"cols":1,"content":"2"},{"cols":1,"content":"$255.12"},{"cols":1,"content":"Co Cheey"},{"cols":1,"content":"-2324.343"},{"cols":1,"content":"2013-09-10T12:10:46+00:00"},{"cols":1,"content":"September 13, 2013"}]]`}</code></td>
										</tr>
										<tr>
											<td><code>headers</code></td>
											<td>array</td>
											<td>-</td>
											<td>Defines a header cell in an HTML table. The key <code>type</code> is used to specify the type of sorting for each column (Type of sorted values: <code>false</code>, <code>'number'</code>, <code>'text'</code> or <code>'date'</code>). The key <code>content</code> is the value of each field. Eg. <code className="text-wrap">{`[{"type": false, "content": "Index" },{"type": "number", "content": "Money" },{"type": "text", "content": "Name" },{"type": "number", "content": "No." },{"type": "date", "content": "Date1" },{"type": "date", "content": "Date2" }]`}</code></td>
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