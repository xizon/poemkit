import React from 'react';
import { __ } from '@/components/_utils/_all';
import { Button, ButtonGroup } from '@/components/Button/index.tsx';


//Create or Remove Sidebar Menu
import { SidebarMenu } from '@/pages/ComponentsDemo/_SidebarMenu.js';

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
							Button
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/Button" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
						<p>Traditionally displayed as shapes with a label.</p>
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
		<section className="poemkit-spacing--s">
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
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
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
		<section className="poemkit-spacing--s">
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
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
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
		<section className="poemkit-spacing--s">
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
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
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
		<section className="poemkit-spacing--s">
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
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
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
		<section className="poemkit-spacing--s">
			<div className="container">


					<div className="row">
						<div className="col-12">


							<Button border="thin" spacing="bottom" background="secondary fillwhite" size="small" href="#">Secondary Button</Button>

							<Button border="thin" spacing="bottom" background="secondary fillwhite" corners="rounded" size="small" href="#">Secondary Button</Button>

							<Button border="thin" spacing="bottom" background="secondary fillwhite" corners="pill" size="small" href="#">Secondary Button</Button>


							<br /> 


							<div className="poemkit-t-c" style={{background:"#333",padding:"1.5rem 0 0",marginTop:"1rem"}}>

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


						<article className="poemkit-spacing--s" itemProp="text">
							<h4>Button</h4>
							<div>
								<pre>import {'{Button}'} from '@/components/Button/index.tsx';</pre>
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
								<pre>import {'{ButtonGroup}'} from '@/components/Button/index.tsx';</pre>
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
			{/*<!-- .container end -->*/}
		</section>



		
      </>
    );
};