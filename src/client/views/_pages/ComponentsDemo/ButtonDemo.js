import React from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';
import { Button, ButtonGroup } from '@uixkit.react/components/Button/index.tsx';


//Create or Remove Sidebar Menu
import { SidebarMenu } from '@uixkit.react/pages/ComponentsDemo/_SidebarMenu.js';

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
							Button
							<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Button" target="_blank"><span className="uix-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="15" viewBox="0 0 392.186 392.186"><g><g><g><path fill="#d2d2d2" d="M368.62,17.951H23.568C10.57,17.951,0,28.524,0,41.52v309.146c0,12.996,10.57,23.568,23.568,23.568h345.053c12.994,0,23.564-10.572,23.564-23.568V41.52C392.188,28.525,381.614,17.951,368.62,17.951z M297.56,57.528c0-4.806,3.896-8.703,8.701-8.703h8.703c4.808,0,8.701,3.896,8.701,8.703v9.863c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.805,0-8.701-3.896-8.701-8.702V57.528z M257.093,57.528c0-4.806,3.898-8.703,8.703-8.703h8.701c4.805,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.898,8.702-8.703,8.702h-8.701c-4.805,0-8.703-3.896-8.703-8.702V57.528z M363.903,345.951H28.282V102.235h335.621V345.951L363.903,345.951z M364.132,67.391c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.809,0-8.702-3.896-8.702-8.702v-9.863c0-4.806,3.896-8.703,8.702-8.703h8.703c4.806,0,8.701,3.896,8.701,8.703V67.391z"/><path fill="#d2d2d2" d="M84.185,233.284l63.084,29.336c1.631,0.755,3.367,1.138,5.162,1.138c2.338,0,4.617-0.664,6.598-1.924c3.547-2.267,5.666-6.13,5.666-10.334v-0.322c0-4.752-2.785-9.116-7.096-11.118l-39.455-18.332l39.455-18.334c4.311-2.004,7.096-6.367,7.096-11.117v-0.319c0-4.21-2.119-8.075-5.666-10.334c-1.961-1.253-4.246-1.916-6.605-1.916c-1.779,0-3.563,0.391-5.16,1.133l-63.08,29.333c-4.307,2.004-7.09,6.369-7.09,11.117v0.877C77.093,226.909,79.874,231.272,84.185,233.284z"/><path fill="#d2d2d2" d="M165.257,293.036c2.301,3.149,6.002,5.03,9.9,5.03h0.316c5.352,0,10.041-3.426,11.672-8.517L228.7,160.788c1.192-3.716,0.531-7.818-1.771-10.973c-2.301-3.15-6.002-5.03-9.901-5.03h-0.315c-5.354,0-10.048,3.425-11.679,8.516l-41.559,128.771C162.292,285.793,162.958,289.889,165.257,293.036z"/><path fill="#d2d2d2" d="M227.49,192.276c0,4.745,2.783,9.109,7.095,11.123l39.455,18.329l-39.455,18.33c-4.31,2.004-7.095,6.368-7.095,11.118v0.322c0,4.205,2.117,8.068,5.668,10.336c1.974,1.258,4.254,1.924,6.595,1.924c1.793,0,3.528-0.383,5.17-1.142l63.08-29.335c4.307-2.009,7.09-6.372,7.09-11.115v-0.877c0-4.748-2.783-9.113-7.094-11.117l-63.08-29.333c-1.591-0.74-3.373-1.131-5.152-1.131c-2.355,0-4.643,0.661-6.604,1.912c-3.551,2.263-5.67,6.127-5.67,10.337v0.318H227.49L227.49,192.276z"/></g></g></g></svg>Docs on GitHub</span></a>
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
						<h3 className="app-header-title">Click Event</h3>
						<p>
								Add onClick event to the button.

							</p>
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
						<div className="col-12" id="my-ajax-demo-target-button">


							<Button border="thin" spacing="bottom" background="primary" corners="pill" size="medium" id="app-btn-1" href="#" data-title="button" onClick={(e) => {e.preventDefault(); alert( e.target.id );} }>Click me to view ID!</Button>

							<br />
							<Button border="thin" spacing="bottom" background="primary" corners="pill" size="medium" id="app-btn-2" href="#" onClick={(e) => {e.preventDefault(); __( '#app-btn-2' ).width( '50%' );} }>Click me to change the width!</Button>



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
						<h3 className="app-header-title">Button</h3>
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


							<Button border="thin" spacing="bottom" background="hyperlink" size="tiny" href="#">Tiny</Button>

							<Button border="thin" spacing="bottom" background="hyperlink" size="small" href="#">Small</Button>


							<Button border="thin" spacing="bottom" background="hyperlink" size="medium" href="#">Medium</Button>

							<Button border="thin" spacing="bottom" background="hyperlink" size="large" href="#">Large</Button>

							<br />  

							<Button border="thin" spacing="bottom" background="hyperlink2" size="tiny" href="#">Tiny</Button>

							<Button border="thin" spacing="bottom" background="hyperlink2" size="small" href="#">Small</Button>


							<Button border="thin" spacing="bottom" background="hyperlink2" size="medium" href="#">Medium</Button>

							<Button border="thin" spacing="bottom" background="hyperlink2" size="large" href="#">Large</Button>

							<br />      


							<Button border="thin" spacing="bottom" background="primary" size="tiny" href="#" ><i className="fa fa-bullhorn" aria-hidden="true"></i>Tiny</Button>

							<Button border="thin" spacing="bottom" background="primary" size="small" href="#"><i className="fa fa-bullhorn" aria-hidden="true"></i>Small</Button>


							<Button border="thin" spacing="bottom" background="primary" size="medium" href="#"><i className="fa fa-cogs" aria-hidden="true"></i>Medium</Button>

							<Button border="thin" spacing="bottom" background="primary" size="large" href="#"><i className="fa fa-flask" aria-hidden="true"></i>Large</Button>

							<br />

							<Button border="thin" spacing="bottom" background="primary" size="tiny" href="#">Tiny<i className="fa fa-bullhorn" aria-hidden="true"></i></Button>

							<Button border="thin" spacing="bottom" background="primary" size="small" href="#">Small<i className="fa fa-bullhorn" aria-hidden="true"></i></Button>


							<Button border="thin" spacing="bottom" background="primary" size="medium" href="#">Medium<i className="fa fa-cogs" aria-hidden="true"></i></Button>

							<Button border="thin" spacing="bottom" background="primary" size="large" href="#">Large<i className="fa fa-flask" aria-hidden="true"></i></Button>

							<br />


							<Button border="thin" spacing="bottom" background="primary" size="small" icon={<><i className="fa fa-bullhorn" aria-hidden="true"></i></>} iconPosition="right" href="#">Icon Right</Button>


							<Button border="thin" spacing="bottom" background="primary" size="small" icon={<><i className="fa fa-cogs" aria-hidden="true"></i></>} iconPosition="left" href="#">Icon Left</Button>


							<Button border="thin" spacing="bottom" background="primary transparent" corners="pill" size="small" icon={<><i className="fa fa-bullhorn" aria-hidden="true"></i></>} iconPosition="left" href="#">Icon Left</Button>


							<Button border="thin" spacing="bottom" background="primary transparent" corners="pill" size="small" icon={<><i className="fa fa-cogs" aria-hidden="true"></i></>} iconPosition="right" href="#">Icon Right</Button>


							<br />

							<Button status="disabled" border="thin" spacing="bottom" background="primary" size="tiny" href="#">Tiny</Button>

							<Button status="disabled" border="thin" spacing="bottom" background="primary" size="small" href="#">Small</Button>


							<Button status="disabled" border="thin" spacing="bottom" background="primary" size="medium" href="#">Medium</Button>

							<Button status="disabled" border="thin" spacing="bottom" background="primary" size="large" href="#">Large</Button>

							<br />


							<Button status="waiting" border="thin" spacing="bottom" background="primary" size="tiny" href="#">Tiny</Button>

							<Button status="waiting" border="thin" spacing="bottom" background="primary" size="small" href="#">Small</Button>


							<Button status="waiting" border="thin" spacing="bottom" background="primary" size="medium" href="#">Medium</Button>

							<Button status="waiting" border="thin" spacing="bottom" background="primary" size="large" href="#">Large</Button>

							<br />

							<Button border="thin" spacing="bottom" background="primary" corners="pill" size="tiny" href="#">Tiny</Button>


							<Button border="thin" spacing="bottom" background="primary" corners="pill" size="small" href="#">Small</Button>


							<Button border="thin" spacing="bottom" background="primary" corners="pill" size="medium" href="#">Medium</Button>

							<Button border="thin" spacing="bottom" background="primary" corners="pill" size="large" href="#">Large</Button>



							<br />


							<Button border="thin" spacing="bottom" background="primary" corners="rounded" size="tiny" href="#">Tiny</Button>



							<Button border="thin" spacing="bottom" background="primary" corners="rounded" size="small" href="#">Small</Button>


							<Button border="thin" spacing="bottom" background="primary" corners="rounded" size="medium" href="#">Medium</Button>

							<Button border="thin" spacing="bottom" background="primary" corners="rounded" size="large" href="#">Large</Button>


							<br />


							<Button border="thin" spacing="bottom" background="primary transparent" corners="pill" size="tiny" href="#">Tiny Radius</Button>


							<Button border="thin" spacing="bottom" background="primary transparent" corners="pill" size="small" href="#">Small Radius</Button>


							<Button border="thin" spacing="bottom" background="primary transparent" corners="pill" size="medium" href="#">Medium Radius</Button>

							<Button border="thin" spacing="bottom" background="primary transparent" corners="pill" size="large" href="#">Large Radius</Button>



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
						<h3 className="app-header-title">Full Width</h3>
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


							<Button border="thin" spacing="bottom" background="primary" size="tiny fullwidth" href="#">Tiny Full Width</Button>


							<Button border="thin" spacing="bottom" background="primary" size="small fullwidth" href="#">Small Full Width</Button>

							<br />

							<Button border="thin" spacing="bottom" background="primary" size="medium fullwidth" href="#">Medium Full Width</Button>

							<br />

							<Button border="thin" spacing="bottom" background="primary" size="large fullwidth" href="#">Large Full Width</Button>

							<br />

							<Button border="thin" spacing="bottom" background="primary" corners="pill" size="tiny fullwidth" href="#">Tiny Full Width Radius</Button>

							<Button border="thin" spacing="bottom" background="primary" corners="pill" size="small fullwidth" href="#">Small Full Width Radius</Button>

							<br />

							<Button border="thin" spacing="bottom" background="primary" corners="pill" size="medium fullwidth" href="#">Medium Full Width Radius</Button>

							<br />

							<Button border="thin" spacing="bottom" background="primary" corners="pill" size="large fullwidth" href="#">Large Full Width Radius ( More Text )</Button>


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
						<h3 className="app-header-title">Button Group</h3>
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


							<ButtonGroup spacing="bottom">
								<Button border="thin" background="primary transparent" corners="pill" size="small" href="#">Group</Button>


								<Button border="thin" background="primary transparent" corners="pill" size="small" href="#">Group</Button>

								<Button border="thin" background="primary transparent" corners="pill" size="small" href="#">Group</Button>
							</ButtonGroup>

							 <br />


							 <ButtonGroup spacing="bottom">
								<Button border="thin" background="primary" size="small" href="#">Group</Button>


								<Button border="thin" background="primary" size="small" href="#">Group</Button>

								<Button border="thin" background="primary" size="small" href="#">Group</Button>
							</ButtonGroup>




							<hr />



							<ButtonGroup spacing="bottom" fullwidth={true}>
								<Button border="thin" background="primary transparent" corners="pill" size="small" href="#">Group</Button>


								<Button border="thin" background="primary transparent" corners="pill" size="small" href="#">Group</Button>

								<Button border="thin" background="primary transparent" corners="pill" size="small" href="#">Group</Button>
							</ButtonGroup>

							 <br />


							 <ButtonGroup spacing="bottom" fullwidth={true}>
								<Button border="thin" background="primary" size="small" href="#">Group</Button>

								<Button border="thin" background="primary" size="small" href="#">Group</Button>

								<Button border="thin" background="primary" size="small" href="#">Group</Button>
							</ButtonGroup>



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
						<h3 className="app-header-title">Secondary Button</h3>
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


							<Button border="thin" spacing="bottom" background="secondary fillwhite" size="small" href="#">Secondary Button</Button>

							<Button border="thin" spacing="bottom" background="secondary fillwhite" corners="rounded" size="small" href="#">Secondary Button</Button>

							<Button border="thin" spacing="bottom" background="secondary fillwhite" corners="pill" size="small" href="#">Secondary Button</Button>


							<br /> 


							<div className="uix-t-c" style={{background:"#333",padding:"1.5rem 0 0",marginTop:"1rem"}}>

								<Button border="thin" spacing="bottom" background="secondary fillwhite" size="small" href="#">White Button</Button>

								<Button border="thin" spacing="bottom" background="secondary" size="small" href="#">White Button</Button>

								<br />

								<Button border="thin" spacing="bottom" background="secondary fillwhite" corners="pill" size="small" href="#">White Button</Button>

								<Button border="thin" spacing="bottom" background="secondary" corners="pill" size="small" href="#">White Button</Button>


								<br />

								<Button border="thin" spacing="bottom" background="secondary fillwhite" size="small" icon={<><i className="fa fa-bullhorn" aria-hidden="true"></i></>} iconPosition="right" href="#">Icon Right</Button>


								<Button border="thin" spacing="bottom" background="secondary fillwhite" size="small" icon={<><i className="fa fa-cogs" aria-hidden="true"></i></>} iconPosition="left" href="#">Icon Left</Button>


								<br />

								<Button border="thin" spacing="bottom" background="secondary" size="small" icon={<><i className="fa fa-bullhorn" aria-hidden="true"></i></>} iconPosition="right" href="#">Icon Right</Button>


								<Button border="thin" spacing="bottom" background="secondary" size="small" icon={<><i className="fa fa-cogs" aria-hidden="true"></i></>} iconPosition="left" href="#">Icon Left</Button>

								<br />



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


						<article className="uix-spacing--s" itemProp="text">
							<h4>Button</h4>
							<div>
								<pre>import {'{Button}'} from '@uixkit.react/components/Button/index.tsx';</pre>
							</div>
							<div className="table-responsive-md">
								<table className="table table-bordered table-striped">
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
											<td><code>href</code></td>
											<td>string</td>
											<td>-</td>
											<td>Providing a href will render an  element. Otherwise, it will be a  element</td>
										</tr>
										<tr>
											<td><code>status</code></td>
											<td><code>disabled</code> | <code>waiting</code></td>
											<td>-</td>
											<td>The state of the button</td>
										</tr>
										<tr>
											<td><code>border</code></td>
											<td><code>thin</code> | <code>medium</code> | <code>thick</code> | <code>white</code></td>
											<td>-</td>
											<td>The thickness and style of the border</td>
										</tr>
										<tr>
											<td><code>background</code></td>
											<td><code>primary</code> | <code>secondary</code> | <code>hyperlink</code> | <code>hyperlink2</code> | <code>transparent</code> | <code>fillwhite</code></td>
											<td>-</td>
											<td>background color</td>
										</tr>
										<tr>
											<td><code>spacing</code></td>
											<td><code>bottom</code> | <code>left</code> | <code>right</code></td>
											<td>-</td>
											<td>To create space around buttons</td>
										</tr>
										<tr>
											<td><code>corners</code></td>
											<td><code>pill</code> | <code>rounded</code></td>
											<td>-</td>
											<td>Add rounded corners to button</td>
										</tr>
										<tr>
											<td><code>size</code></td>
											<td><code>fullwidth</code> | <code>tiny</code> | <code>small</code> | <code>medium</code> | <code>large</code></td>
											<td>-</td>
											<td>Set the size of button</td>
										</tr>
										<tr>
											<td><code>iconPosition</code></td>
											<td><code>left</code> | <code>right</code></td>
											<td>-</td>
											<td>Set the icon position</td>
										</tr>
										<tr>
											<td><code>icon</code></td>
											<td>ReactNode</td>
											<td>-</td>
											<td>Set the icon component of button</td>
										</tr>
										<tr>
											<td><code>target</code></td>
											<td>string</td>
											<td>_self</td>
											<td>The target attribute specifies where to open the linked document</td>
										</tr>
										<tr>
											<td><code>onClick</code></td>
											<td>function</td>
											<td>-</td>
											<td>Set the handler to handle click event</td>
										</tr>
									</tbody>
								</table>


							</div>

							<p className="mb-5">It accepts all props(include data-* attributes) which native buttons support.</p>

							<h4>ButtonGroup</h4>
							<div>
								<pre>import {'{ButtonGroup}'} from '@uixkit.react/components/Button/index.tsx';</pre>
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
											<td><code>fullwidth</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>The button group has an automatic set width of 100%</td>
										</tr>
										<tr>
											<td><code>spacing</code></td>
											<td><code>bottom</code> | <code>left</code> | <code>right</code></td>
											<td>-</td>
											<td>To create space around group</td>
										</tr>
									</tbody>
								</table>

							</div>


						</article>


					</div>
				</div>
				{/*
				<!-- .row end -->*/}


			</div>
			{/*
			<!-- .container end -->*/}
		</section>



		
      </>
    );
};