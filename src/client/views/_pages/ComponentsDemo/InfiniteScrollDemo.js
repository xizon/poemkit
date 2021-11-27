import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import InfiniteScroll from '@poemkit/components/InfiniteScroll/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@poemkit/pages/ComponentsDemo/_SidebarMenu.js';

//get project config
import { API } from '@poemkit/config/websiteConfig.js';


const Item = ({ id, img, title, email }) => {
    return (
        <>
            <div className="row text-center text-md-left align-items-center">
                <div className="col-lg-2 col-md-2">
                    <img className="rounded mb-3" src={img} alt={title} />
                </div>
                <div className="col-lg-10 col-md-10 justify-content-center">
                    <h4 className="poemkit-spacing--no">{title} (ID:{id})</h4>
                    <span>Email: {email}</span>
                </div>

            </div>
            <hr />
        </>
    );
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
							Infinite Scroll
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/InfiniteScroll" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
						<p>This component creates a mechanism that shows data based on an endless scroll event and loads data only as needed to avoid critical performance issues.</p>
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
						<h3 className="app-header-title">Infinite Scroll Posts</h3>
						<p>Pull Down to refresh posts. An infinite-scroll that actually works.</p>
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

							<InfiniteScroll 
								api={API.RECEIVE_PAGE_LIST} 
								perPage={10}
								bottomOffset={0}
								loader={<><span>Loading...</span></>}
								endMessage={<><p className="poemkit-typo--color-sub poemkit-t-c">No content yet.</p></>}
								method="get"
								refreshCallback={(res) => console.log(res)}
								renderCallback={(res) => {
									return <Item key={"item" + res.id} id={res.id} img={res.avatar} title={`${res.name}`} email={res.email} />;
								}}	
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


						<article className="poemkit-spacing--s" itemProp="text">
							<h4>Infinite Scroll</h4>
							<div>
								<pre>import InfiniteScroll from '@poemkit/components/InfiniteScroll/index.tsx';</pre>
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
											<td><strong>(Required)</strong> API address to receive data.</td>
										</tr>
										<tr>
											<td><code>perPage</code></td>
											<td>number</td>
											<td>10</td>
											<td>The number of posts we want on the page before loading the next set.</td>
										</tr>
										<tr>
											<td><code>method</code></td>
											<td><code>get</code> | <code>post</code></td>
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
											<td><code>endMessage</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>This message is shown to the user when he has seen all the records.</td>
										</tr>
										<tr>
											<td><code>bottomOffset</code></td>
											<td>number</td>
											<td>0</td>
											<td>Set an offset to scroll to the bottom</td>
										</tr>
										<tr>
											<td><code>refreshCallback</code></td>
											<td>function | null</td>
											<td>-</td>
											<td>This function is called whenever the data is updated, including initialization. Exposes the JSON format data about the page number as an argument.</td>
										</tr>
										<tr>
											<td><code>renderCallback</code></td>
											<td>function | null</td>
											<td>-</td>
											<td>Use the return function to render the data. The output HTML template uses custom HTML string in the returned JSON format data as a placeholder. Exposes each item data as an argument. You can use it like this: <br /><code className="text-wrap">{`(res) => {return <div key={"item" + res.id}><img src={res.avatar} />{res.name}</div>;}`}</code></td>
										</tr>
									</tbody>
								</table>




							</div>

							{/*<!-- ++++++++ -->*/}

							<h4>Create Callback</h4>
							<p>A successful response returns the details of the callback such as Sample Request Body:</p>
							<div>
								<span>Page 1:</span>
								<pre className="mb-5"><div style={{backgroundColor:"#F6F6F6",borderRadius:"3px",padding:"1rem",wordBreak:"normal",whiteSpace:"pre-wrap"}}>{`{
    "page": 1,
    "per_page": 3,
    "total": 5,
    "total_pages": 2,
    "data": [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "name": "George",
            "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "name": "Janet",
            "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "name": "Emma",
            "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
        }
    ]
}`}
								</div></pre>
								<span>Page 2:</span>
								<pre><div style={{backgroundColor:"#F6F6F6",borderRadius:"3px",padding:"1rem",wordBreak:"normal",whiteSpace:"pre-wrap"}}>{`{
    "page": 2,
    "per_page": 3,
    "total": 5,
    "total_pages": 2,
    "data": [
        {
            "id": 4,
            "email": "george.bluth@reqres.in",
            "name": "George (Page 2)",
            "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
        },
        {
            "id": 5,
            "email": "janet.weaver@reqres.in",
            "name": "Janet (Page 2)",
            "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
        }
    ]
}`}
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