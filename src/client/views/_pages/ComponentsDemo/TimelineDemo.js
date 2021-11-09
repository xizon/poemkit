import React from 'react';
import { __ } from '@poemkit/components/_utils/_all';
import Timeline from '@poemkit/components/Timeline/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@poemkit/pages/ComponentsDemo/_SidebarMenu.js';



const data = [
	{
		"url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURWtr9jEv/F4AAAAKSURBVAjXY2AAAAACAAHiIbwzAAAAAElFTkSuQmCC",
		"title": <>Timeline Title Here 1</>,
		"content": <><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p></>,
		"node": <>Feb 19</>
	},
	{
		"url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURWtr9jEv/F4AAAAKSURBVAjXY2AAAAACAAHiIbwzAAAAAElFTkSuQmCC",
		"title": <>Timeline Title Here 2</>,
		"content": <><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></>,
		"node": <>Jan 15</>
	},
	{
		"url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURWtr9jEv/F4AAAAKSURBVAjXY2AAAAACAAHiIbwzAAAAAElFTkSuQmCC",
		"title": <>Timeline Title Here 3</>,
		"content": <><p>Gaudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p></>,
		"node": <>Jan 8</>
	},
	{
		"url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURWtr9jEv/F4AAAAKSURBVAjXY2AAAAACAAHiIbwzAAAAAElFTkSuQmCC",
		"title": <>Timeline Title Here 4</>,
		"content": <><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p></>,
		"node": <>Jan 7</>
	},
	{
		"url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURWtr9jEv/F4AAAAKSURBVAjXY2AAAAACAAHiIbwzAAAAAElFTkSuQmCC",
		"title": <>Timeline Title Here 5</>,
		"content": <><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p></>,
		"node": <>Jan 5</>
	},
	{
		"url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURWtr9jEv/F4AAAAKSURBVAjXY2AAAAACAAHiIbwzAAAAAElFTkSuQmCC",
		"title": <>Timeline Title Here 6</>,
		"content": <><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></>,
		"node": <>Jan 3</>
	},
	{
		"url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURWtr9jEv/F4AAAAKSURBVAjXY2AAAAACAAHiIbwzAAAAAElFTkSuQmCC",
		"title": <>Timeline Title Here 7</>,
		"content": <><p>Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde</p></>,
		"node": <>Jan 1</>
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
							Timeline 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/Timeline" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="15" viewBox="0 0 392.186 392.186"><g><g><g><path fill="#d2d2d2" d="M368.62,17.951H23.568C10.57,17.951,0,28.524,0,41.52v309.146c0,12.996,10.57,23.568,23.568,23.568h345.053c12.994,0,23.564-10.572,23.564-23.568V41.52C392.188,28.525,381.614,17.951,368.62,17.951z M297.56,57.528c0-4.806,3.896-8.703,8.701-8.703h8.703c4.808,0,8.701,3.896,8.701,8.703v9.863c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.805,0-8.701-3.896-8.701-8.702V57.528z M257.093,57.528c0-4.806,3.898-8.703,8.703-8.703h8.701c4.805,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.898,8.702-8.703,8.702h-8.701c-4.805,0-8.703-3.896-8.703-8.702V57.528z M363.903,345.951H28.282V102.235h335.621V345.951L363.903,345.951z M364.132,67.391c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.809,0-8.702-3.896-8.702-8.702v-9.863c0-4.806,3.896-8.703,8.702-8.703h8.703c4.806,0,8.701,3.896,8.701,8.703V67.391z"/><path fill="#d2d2d2" d="M84.185,233.284l63.084,29.336c1.631,0.755,3.367,1.138,5.162,1.138c2.338,0,4.617-0.664,6.598-1.924c3.547-2.267,5.666-6.13,5.666-10.334v-0.322c0-4.752-2.785-9.116-7.096-11.118l-39.455-18.332l39.455-18.334c4.311-2.004,7.096-6.367,7.096-11.117v-0.319c0-4.21-2.119-8.075-5.666-10.334c-1.961-1.253-4.246-1.916-6.605-1.916c-1.779,0-3.563,0.391-5.16,1.133l-63.08,29.333c-4.307,2.004-7.09,6.369-7.09,11.117v0.877C77.093,226.909,79.874,231.272,84.185,233.284z"/><path fill="#d2d2d2" d="M165.257,293.036c2.301,3.149,6.002,5.03,9.9,5.03h0.316c5.352,0,10.041-3.426,11.672-8.517L228.7,160.788c1.192-3.716,0.531-7.818-1.771-10.973c-2.301-3.15-6.002-5.03-9.901-5.03h-0.315c-5.354,0-10.048,3.425-11.679,8.516l-41.559,128.771C162.292,285.793,162.958,289.889,165.257,293.036z"/><path fill="#d2d2d2" d="M227.49,192.276c0,4.745,2.783,9.109,7.095,11.123l39.455,18.329l-39.455,18.33c-4.31,2.004-7.095,6.368-7.095,11.118v0.322c0,4.205,2.117,8.068,5.668,10.336c1.974,1.258,4.254,1.924,6.595,1.924c1.793,0,3.528-0.383,5.17-1.142l63.08-29.335c4.307-2.009,7.09-6.372,7.09-11.115v-0.877c0-4.748-2.783-9.113-7.094-11.117l-63.08-29.333c-1.591-0.74-3.373-1.131-5.152-1.131c-2.355,0-4.643,0.661-6.604,1.912c-3.551,2.263-5.67,6.127-5.67,10.337v0.318H227.49L227.49,192.276z"/></g></g></g></svg>Docs on GitHub</span></a>
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
					<h3 className="app-header-title">Timeline (Vertical)</h3>
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

						<Timeline 
							speed={500} 
							easing="easeInOut" 
							direction="vertical"
							data={data}
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
					<h3 className="app-header-title">Timeline (Vertical & Centered)</h3>
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

						<Timeline 
							speed={500} 
							easing="easeInOut" 
							direction="vertical"
							centered={true}
							data={data}
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
					<h3 className="app-header-title">Timeline Interaction (Horizontal)</h3>
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

		<Timeline 
			interactiveEnabled={true} 
			speed={500} 
			easing="easeInOut" 
			direction="horizontal"
			data={data}
			arrowPrevIcon={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
			arrowNextIcon={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
		/>


	</section>




	{/*<!-- Content 
	====================================================== -->*/}
	<section>
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h3 className="app-header-title">Timeline Interaction (Horizontal & Centered)</h3>
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

		<Timeline 
			interactiveEnabled={true} 
			speed={500} 
			easing="easeInOut" 
			direction="horizontal"
			centered={true}
			data={data}
			arrowPrevIcon={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
			arrowNextIcon={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
		/>


	</section>





	{/*<!-- Content 
	====================================================== -->*/}
	<section>
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h3 className="app-header-title">Timeline Interaction (Horizontal & Only 1 Description Block Display)</h3>
					<p>Only one Item will be displayed each time you switch. Only available when <code>interactiveEnabled</code> is true.</p>
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


		<Timeline 
			interactiveEnabled={true} 
			focusEnabled={true} 
			speed={500} 
			easing="easeInOut" 
			direction="horizontal"
			data={data}
			arrowPrevIcon={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
			arrowNextIcon={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
		/>

	</section>



	{/*<!-- Content 
	====================================================== -->*/}
	<section className="poemkit-spacing--s">

		<Timeline 
			interactiveEnabled={true} 
			focusEnabled={true} 
			focusCenteredEnabled={true} 
			speed={500} 
			easing="easeInOut" 
			direction="horizontal"
			data={data}
			arrowPrevIcon={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
			arrowNextIcon={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
		/>


	</section>
	
	
	{/*<!-- Content 
	====================================================== -->*/}
	<section>
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h3 className="app-header-title">Timeline Interaction (Vertical & Only 1 Description Block Display)</h3>
					<p>Only one Item will be displayed each time you switch. Only available when <code>interactiveEnabled</code> is true.</p>
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

						
						<Timeline 
							interactiveEnabled={true} 
							focusEnabled={true} 
							speed={500} 
							easing="easeInOut" 
							direction="vertical"
							data={data}
							arrowPrevIcon={<><i className="fa fa-angle-up" aria-hidden="true"></i></>}
							arrowNextIcon={<><i className="fa fa-angle-down" aria-hidden="true"></i></>}
						/>



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

							
							<Timeline 
								interactiveEnabled={true} 
								focusEnabled={true} 
								speed={500} 
								easing="easeInOut" 
								direction="vertical"
								centered={true}
								data={data}
								arrowPrevIcon={<><i className="fa fa-angle-up" aria-hidden="true"></i></>}
								arrowNextIcon={<><i className="fa fa-angle-down" aria-hidden="true"></i></>}
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
							<h4>Timeline</h4>
							<div>
								<pre>import Timeline from '@poemkit/components/Timeline/index.tsx';</pre>
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
											<td><code>interactiveEnabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>If true, the click event will be used to control the display effect of the timeline.</td>
										</tr>
										<tr>
											<td><code>focusEnabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>With the focus effect enabled, only one Item will be displayed each time you switch. Only available when <code>interactiveEnabled</code> is true.</td>
										</tr>
										<tr>
											<td><code>focusCenteredEnabled</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Let the focus of the entire interaction always be displayed in the center. Only available when <code>focusEnabled</code> is true.</td>
										</tr>
										<tr>
											<td><code>speed</code></td>
											<td>number</td>
											<td>500</td>
											<td>Transition speed. This setting sets how long the transition animation lasts. Amount of time measured in milliseconds.</td>
										</tr>
										<tr>
											<td><code>easing</code></td>
											<td><code>linear</code> | <code>easeIn</code> | <code>easeOut</code> | <code>easeInOut</code></td>
											<td>-</td>
											<td>Types of easing animation</td>
										</tr>
										<tr>
											<td><code>direction</code></td>
											<td>string</td>
											<td>horizontal</td>
											<td>The direction of the component animation, the value can be <code>vertical</code> and <code>horizontal</code></td>
										</tr>
										<tr>
											<td><code>centered</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Centered vertical or horizontal timelines. In this layout, the timeline runs right down the center of the page, with branches coming off of alternate sides of the timeline. When <code>focusEnabled</code> is true, this setting is invalid.</td>
										</tr>
										<tr>
											<td><code>data</code></td>
											<td>array</td>
											<td>-</td>
											<td>Specify data of items as a JSON string format. Such as: <br /><code className="text-wrap">{`[{"url":"xxx.jpg","title":<>Title 1</>,"content":"<><p>content here</p></>","node":"<>Feb 19</>},{"url":"xxx.jpg","title":<>Title 1</>,"content":"<><p>content here</p></>","node":"<>Jan 2</>}]`}</code></td>
										</tr>
										<tr>
											<td><code>arrowPrevIcon</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Previous arrow icon</td>
										</tr>
										<tr>
											<td><code>arrowNextIcon</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Next arrow icon</td>
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
											<td><code>url</code></td>
											<td>string</td>
											<td>-</td>
											<td>Specifies the path to the image</td>
										</tr>
										<tr>
											<td><code>title</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Specifies a title for each item</td>
										</tr>
										<tr>
											<td><code>content</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Specifies a content for each item</td>
										</tr>
										<tr>
											<td><code>node</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Specifies a time-node for each item</td>
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