import React from 'react';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import TableGrid from '@uixkit.react/components/TableGrid/index.js';


const data1 = {
	"headers": ["COLUMN TITLE 1","COLUMN TITLE 2","COLUMN TITLE 3"],
	"fields": [
		{
			"target": false, 
			 "data": [
			   {"cols": 1, "content": "Row Item Alpha" },
			   {"cols": 1, "content": "Row Item Alpha" },
			   {"cols": 1, "content": "Row Item Alpha"}
			] 
		},
		{
			"target": true, 
			 "data": [
			   {"cols": 1, "content": "Row Item Bravo" },
			   {"cols": 1, "content": "Row Item Bravo" },
			   {"cols": 1, "content": "Row Item Bravo"}
			] 
		},
		{
			"target": false, 
			 "data": [
			   {"cols": 1, "content": "Row Item Charlie" },
			   {"cols": 1, "content": "Row Item Charlie" },
			   {"cols": 1, "content": "Row Item Charlie"}
			] 
		},
		{
			"target": false, 
			 "data": [
			   {"cols": 1, "content": "Row Item Delta" },
			   {"cols": 1, "content": "Row Item Delta" },
			   {"cols": 1, "content": "Row Item Delta"}
			] 
		}
	]
};



export default () => {

	
    return (
	  <>
		    
		<main id="uix-maincontent">
		
				{/*<!-- Content 
				====================================================== -->*/}
				<section className="uix-spacing--s uix-spacing--no-bottom">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h1 className="uix-t-c">
									Table Grid
									<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/TableGrid" target="_blank"><code><i className="fa fa-code" aria-hidden="true"></i></code></a>
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
							<h3>Row Dropzone</h3>
							<p>Not applicable to tables with <code>&lt;table&gt;</code></p>

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

								<TableGrid className="uix-table-grid" data={data1} />
		

							</div>
						</div>
						{/*<!-- .row end -->*/}


				</div>
				{/*<!-- .container end -->*/}

			</section>          
            
            
            
		</main>
		
        

		
      </>
    );
};