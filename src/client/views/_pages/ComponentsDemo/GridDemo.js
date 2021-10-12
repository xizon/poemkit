import React from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';
import { Grid, GridColumn } from '@uixkit.react/components/Grid/index.tsx';

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
							Grid 
							<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Grid" target="_blank"><span className="uix-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="15" viewBox="0 0 392.186 392.186"><g><g><g><path fill="#d2d2d2" d="M368.62,17.951H23.568C10.57,17.951,0,28.524,0,41.52v309.146c0,12.996,10.57,23.568,23.568,23.568h345.053c12.994,0,23.564-10.572,23.564-23.568V41.52C392.188,28.525,381.614,17.951,368.62,17.951z M297.56,57.528c0-4.806,3.896-8.703,8.701-8.703h8.703c4.808,0,8.701,3.896,8.701,8.703v9.863c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.805,0-8.701-3.896-8.701-8.702V57.528z M257.093,57.528c0-4.806,3.898-8.703,8.703-8.703h8.701c4.805,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.898,8.702-8.703,8.702h-8.701c-4.805,0-8.703-3.896-8.703-8.702V57.528z M363.903,345.951H28.282V102.235h335.621V345.951L363.903,345.951z M364.132,67.391c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.809,0-8.702-3.896-8.702-8.702v-9.863c0-4.806,3.896-8.703,8.702-8.703h8.703c4.806,0,8.701,3.896,8.701,8.703V67.391z"/><path fill="#d2d2d2" d="M84.185,233.284l63.084,29.336c1.631,0.755,3.367,1.138,5.162,1.138c2.338,0,4.617-0.664,6.598-1.924c3.547-2.267,5.666-6.13,5.666-10.334v-0.322c0-4.752-2.785-9.116-7.096-11.118l-39.455-18.332l39.455-18.334c4.311-2.004,7.096-6.367,7.096-11.117v-0.319c0-4.21-2.119-8.075-5.666-10.334c-1.961-1.253-4.246-1.916-6.605-1.916c-1.779,0-3.563,0.391-5.16,1.133l-63.08,29.333c-4.307,2.004-7.09,6.369-7.09,11.117v0.877C77.093,226.909,79.874,231.272,84.185,233.284z"/><path fill="#d2d2d2" d="M165.257,293.036c2.301,3.149,6.002,5.03,9.9,5.03h0.316c5.352,0,10.041-3.426,11.672-8.517L228.7,160.788c1.192-3.716,0.531-7.818-1.771-10.973c-2.301-3.15-6.002-5.03-9.901-5.03h-0.315c-5.354,0-10.048,3.425-11.679,8.516l-41.559,128.771C162.292,285.793,162.958,289.889,165.257,293.036z"/><path fill="#d2d2d2" d="M227.49,192.276c0,4.745,2.783,9.109,7.095,11.123l39.455,18.329l-39.455,18.33c-4.31,2.004-7.095,6.368-7.095,11.118v0.322c0,4.205,2.117,8.068,5.668,10.336c1.974,1.258,4.254,1.924,6.595,1.924c1.793,0,3.528-0.383,5.17-1.142l63.08-29.335c4.307-2.009,7.09-6.372,7.09-11.115v-0.877c0-4.748-2.783-9.113-7.094-11.117l-63.08-29.333c-1.591-0.74-3.373-1.131-5.152-1.131c-2.355,0-4.643,0.661-6.604,1.912c-3.551,2.263-5.67,6.127-5.67,10.337v0.318H227.49L227.49,192.276z"/></g></g></g></svg>Docs on GitHub</span></a>
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
						<h3 className="app-header-title">Uix Grid</h3>
						<p>
							It can be used for fluid layout for multiple projects and <strong>Bootstrap</strong> grid system. Its biggest feature is its support for <strong>loop</strong> lists.
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

					<div style={{backgroundColor: "#000"}}>


						<Grid equalWidth={true}>
							<GridColumn>
								<div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5 (equal width)</div>
							</GridColumn>
							<GridColumn>
								<div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5 (equal width)</div>
							</GridColumn>
							<GridColumn>
								<div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5 (equal width)</div>
							</GridColumn>
							<GridColumn>
								<div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5 (equal width)</div>
							</GridColumn>
							<GridColumn>
								<div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5 (equal width)</div>
							</GridColumn>		
						</Grid>




						<Grid>
							<GridColumn ratio="1/6">
								<div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
							</GridColumn>	
							<GridColumn ratio="1/6">
								<div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
							</GridColumn>						
						</Grid>

					

						<Grid>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols)</div>
							</GridColumn>					
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols)</div>
							</GridColumn>	
						</Grid>

					

						<Grid loop={true}>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
							    <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
							    <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
							    <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
							    <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
							</GridColumn>	
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
							    <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
							    <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
							    <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
							    <div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (min 2 cols & loop)</div>
							</GridColumn>	
						</Grid>


						<Grid loop={true}>
							<GridColumn ratio="1/6">
								<div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
							</GridColumn>	
							<GridColumn ratio="1/6">
								<div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6 (loop)</div>
							</GridColumn>		
						</Grid>


					
						<Grid>
							<GridColumn ratio="1/4">
								<div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
							</GridColumn>			
						</Grid>



						<Grid loop={true}>
							<GridColumn ratio="1/4">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
							</GridColumn>			
							<GridColumn ratio="1/4">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
							</GridColumn>	
							<GridColumn ratio="1/4">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (loop)</div>
							</GridColumn>		
						</Grid>



						<Grid>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{background:"lime",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{background:"lime",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{background:"lime",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{background:"lime",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols)</div>
							</GridColumn>			
						</Grid>



						<Grid loop={true}>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4 (min 2 cols & loop)</div>
							</GridColumn>	
						</Grid>
					

					
						<Grid>
							<GridColumn ratio="1/3">
								<div style={{background:"yellow",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{background:"yellow",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{background:"yellow",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3</div>
							</GridColumn>		
						</Grid>


						<Grid loop={true}>
							<GridColumn ratio="1/3">
								<div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{background:"red",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3 (loop)</div>
							</GridColumn>
						</Grid>

						<Grid loop={true}>
							<GridColumn ratio="1/2">
								<div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/2">
								<div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/2">
								<div style={{background:"purple",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2 (loop)</div>
							</GridColumn>
						</Grid>
			

						<Grid>
							<GridColumn ratio="1/2">
								<div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2</div>
							</GridColumn>
							<GridColumn ratio="1/2">
								<div style={{background:"fuchsia",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2</div>
							</GridColumn>
						</Grid>



						<Grid>
							<GridColumn ratio="2/3">
								<div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/3</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{background:"orange",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3</div>
							</GridColumn>
						</Grid>

					
						<Grid>
							<GridColumn ratio="3/4">
								<div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>3/4</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{background:"blue",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
							</GridColumn>
						</Grid>

						

						<Grid>
							<GridColumn ratio="4/5">
								<div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>4/5</div>
							</GridColumn>
							<GridColumn ratio="1/5">
								<div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5</div>
							</GridColumn>
						</Grid>


						<Grid>
							<GridColumn ratio="3/5">
								<div style={{background:"aqua",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>3/5</div>
							</GridColumn>
							<GridColumn ratio="2/5">
								<div style={{background:"aqua",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/5</div>
							</GridColumn>
						</Grid>



						<Grid>
							<GridColumn ratio="1/4">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
							</GridColumn>
							<GridColumn ratio="1/2">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2</div> 
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
							</GridColumn>
						</Grid>




						<Grid>
							<GridColumn ratio="1/3">
								<div style={{background:"aqua",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/3</div>
							</GridColumn>
							<GridColumn ratio="1/2">
								<div style={{background:"aqua",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/2</div> 
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{background:"aqua",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/6</div>
							</GridColumn>
						</Grid>


						<Grid>
							<GridColumn ratio="1/5">
								<div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5</div>
							</GridColumn>
							<GridColumn ratio="2/5">
								<div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/5</div> 
							</GridColumn>
							<GridColumn ratio="2/5">
								<div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/5</div> 
							</GridColumn>
						</Grid>	


						<Grid>
							<GridColumn ratio="2/3">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/3</div>
							</GridColumn>
							<GridColumn ratio="1/5">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5</div> 
							</GridColumn>
							<GridColumn ratio="1/5">
								<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/5</div>
							</GridColumn>
						</Grid>				


					


					</div>



				</div>
				{/*<!-- .container end -->*/}

			</section>   



			{/*<!-- Content 
			====================================================== -->*/}
			<section>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="app-header-title">No Gutter Column For Uix Grid</h3>
							<p>
								Set the <code>noGutters</code> attribute of <code>&lt;Grid&gt;</code> markup.<code>true</code> will remove all the columns spacing.
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

					<div style={{ backgroundColor: "#000" }}>


						<Grid noGutters={true} equalWidth={true}>
							<GridColumn>
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
							</GridColumn>
							<GridColumn>
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
							</GridColumn>
							<GridColumn>
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
							</GridColumn>
							<GridColumn>
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
							</GridColumn>
							<GridColumn>
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
							</GridColumn>
						</Grid>




						<Grid noGutters={true}>
							<GridColumn ratio="1/6">
								<div style={{ background: "purple", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "purple", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "purple", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "purple", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "purple", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "purple", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6</div>
							</GridColumn>
						</Grid>



						<Grid noGutters={true}>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols)</div>
							</GridColumn>
						</Grid>



						<Grid noGutters={true} loop={true}>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "orange", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "orange", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "orange", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "orange", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "orange", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "orange", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "orange", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6" stackRatio="1/2" stackSize="md">
								<div style={{ background: "orange", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (min 2 cols & loop)</div>
							</GridColumn>
						</Grid>


						<Grid noGutters={true} loop={true}>
							<GridColumn ratio="1/6">
								<div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6 (loop)</div>
							</GridColumn>
						</Grid>



						<Grid noGutters={true}>
							<GridColumn ratio="1/4">
								<div style={{ background: "teal", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "teal", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "teal", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "teal", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4</div>
							</GridColumn>
						</Grid>



						<Grid noGutters={true} loop={true}>
							<GridColumn ratio="1/4">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (loop)</div>
							</GridColumn>
						</Grid>



						<Grid noGutters={true}>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{ background: "lime", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{ background: "lime", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{ background: "lime", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (min 2 cols)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{ background: "lime", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (min 2 cols)</div>
							</GridColumn>
						</Grid>



						<Grid noGutters={true} loop={true}>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{ background: "olive", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{ background: "olive", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{ background: "olive", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{ background: "olive", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (min 2 cols & loop)</div>
							</GridColumn>
							<GridColumn ratio="1/4" stackRatio="1/2" stackSize="md">
								<div style={{ background: "olive", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4 (min 2 cols & loop)</div>
							</GridColumn>
						</Grid>



						<Grid noGutters={true}>
							<GridColumn ratio="1/3">
								<div style={{ background: "yellow", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/3</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{ background: "yellow", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/3</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{ background: "yellow", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/3</div>
							</GridColumn>
						</Grid>


						<Grid noGutters={true} loop={true}>
							<GridColumn ratio="1/3">
								<div style={{ background: "red", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{ background: "red", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{ background: "red", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{ background: "red", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{ background: "red", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{ background: "red", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{ background: "red", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/3 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{ background: "red", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/3 (loop)</div>
							</GridColumn>
						</Grid>

						<Grid noGutters={true} loop={true}>
							<GridColumn ratio="1/2">
								<div style={{ background: "purple", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/2 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/2">
								<div style={{ background: "purple", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/2 (loop)</div>
							</GridColumn>
							<GridColumn ratio="1/2">
								<div style={{ background: "purple", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/2 (loop)</div>
							</GridColumn>
						</Grid>


						<Grid noGutters={true}>
							<GridColumn ratio="1/2">
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/2</div>
							</GridColumn>
							<GridColumn ratio="1/2">
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/2</div>
							</GridColumn>
						</Grid>



						<Grid noGutters={true}>
							<GridColumn ratio="2/3">
								<div style={{ background: "orange", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>2/3</div>
							</GridColumn>
							<GridColumn ratio="1/3">
								<div style={{ background: "orange", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/3</div>
							</GridColumn>
						</Grid>


						<Grid noGutters={true}>
							<GridColumn ratio="3/4">
								<div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>3/4</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4</div>
							</GridColumn>
						</Grid>



						<Grid noGutters={true}>
							<GridColumn ratio="4/5">
								<div style={{ background: "teal", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>4/5</div>
							</GridColumn>
							<GridColumn ratio="1/5">
								<div style={{ background: "teal", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5</div>
							</GridColumn>
						</Grid>


						<Grid noGutters={true}>
							<GridColumn ratio="3/5">
								<div style={{ background: "aqua", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>3/5</div>
							</GridColumn>
							<GridColumn ratio="2/5">
								<div style={{ background: "aqua", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>2/5</div>
							</GridColumn>
						</Grid>



						<Grid noGutters={true}>
							<GridColumn ratio="1/4">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4</div>
							</GridColumn>
							<GridColumn ratio="1/2">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/2</div>
							</GridColumn>
							<GridColumn ratio="1/4">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/4</div>
							</GridColumn>
						</Grid>




						<Grid noGutters={true}>
							<GridColumn ratio="1/3">
								<div style={{ background: "aqua", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/3</div>
							</GridColumn>
							<GridColumn ratio="1/2">
								<div style={{ background: "aqua", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/2</div>
							</GridColumn>
							<GridColumn ratio="1/6">
								<div style={{ background: "aqua", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6</div>
							</GridColumn>
						</Grid>


						<Grid noGutters={true}>
							<GridColumn ratio="1/5">
								<div style={{ background: "teal", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5</div>
							</GridColumn>
							<GridColumn ratio="2/5">
								<div style={{ background: "teal", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>2/5</div>
							</GridColumn>
							<GridColumn ratio="2/5">
								<div style={{ background: "teal", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>2/5</div>
							</GridColumn>
						</Grid>


						<Grid noGutters={true}>
							<GridColumn ratio="2/3">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>2/3</div>
							</GridColumn>
							<GridColumn ratio="1/5">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5</div>
							</GridColumn>
							<GridColumn ratio="1/5">
								<div style={{ background: "green", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5</div>
							</GridColumn>
						</Grid>





					</div>



				</div>
				{/*<!-- .container end -->*/}

			</section>





			{/*<!-- Content 
			====================================================== -->*/}
			<section>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="app-header-title">Uix Grid (No line breaks)</h3>
							<p>
							Set the <code>noBreak</code> attribute of <code>&lt;Grid&gt;</code> markup.<code>true</code> will prevent the columns from automatically wrapping across multiple lines. <em>Please simulate mobile viewing after zooming out your viewport.</em>
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

					<div style={{backgroundColor: "#000"}}>



						<Grid noBreak={true} equalWidth={true}>
							<GridColumn>
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
							</GridColumn>
							<GridColumn>
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
							</GridColumn>
							<GridColumn>
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
							</GridColumn>
							<GridColumn>
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
							</GridColumn>
							<GridColumn>
								<div style={{ background: "fuchsia", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/5 (equal width)</div>
							</GridColumn>
						</Grid>


						<Grid noBreak={true}>
							<GridColumn ratio="3/4">
								<div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>3/4</div>
							</GridColumn>		
							<GridColumn ratio="1/4">
								<div style={{background:"olive",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>1/4</div>
							</GridColumn>			

						</Grid>


					</div>



				</div>
				{/*<!-- .container end -->*/}

			</section>   




			{/*<!-- Content 
			====================================================== -->*/}
			<section>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="app-header-title">Inline Block</h3>
							<p>
								Only use <code>&lt;GridColumn&gt;</code>markup without using<code>&lt;Grid&gt;</code> to wrap them.
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

					<div style={{backgroundColor: "#000"}}>

						<GridColumn ratio="1/6">
							<div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6</div>
						</GridColumn>
				
						<div className="uix-clearfix"></div>
						

						<div className="text-center">
							<GridColumn ratio="2/5" inline={true}>
								<div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/5, Center alignment.</div>
							</GridColumn>		
						</div>

						<div className="uix-clearfix"></div>


						<GridColumn ratio="2/5" stackRatio="1/2" stackSize="md">
							<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/5, The width becomes 50% on mobile.</div>
						</GridColumn>		
		
						<div className="uix-clearfix"></div>

					</div>



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
								<h4>Grid</h4>
								<div>
									<pre>import {`{Grid}`} from '@uixkit.react/components/Grid/index.tsx';</pre>
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
												<td><code>noBreak</code></td>
												<td>boolean</td>
												<td>false</td>
												<td>Permanent non-breaking all columns</td>
											</tr>
											<tr>
												<td><code>noGutters</code></td>
												<td>boolean</td>
												<td>false</td>
												<td>Remove column spacing</td>
											</tr>
											<tr>
												<td><code>equalWidth</code></td>
												<td>boolean</td>
												<td>false</td>
												<td>Per-column will be the same width automatically</td>
											</tr>
											<tr>
												<td><code>loop</code></td>
												<td>boolean</td>
												<td>false</td>
												<td>Multi-line layout correction</td>
											</tr>
										</tbody>
									</table>

								
								</div>
	
								<h4>GridColumn</h4>
								<div>
									<pre>import {`{GridColumn}`} from '@uixkit.react/components/Grid/index.tsx';</pre>
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
												<td><code>ratio</code></td>
												<td><code>1/1</code> | <code>1/2</code> | <code>1/3</code> | <code>2/3</code> | <code>1/4</code> |
													<code>3/4</code> | <code>1/5</code> | <code>2/5</code> | <code>3/5</code> | <code>4/5</code> |
													<code>1/6</code> | boolean
												</td>
												<td>-</td>
												<td>The ratio of each column</td>
											</tr>
											<tr>
												<td><code>stackRatio</code></td>
												<td><code>1/1</code> | <code>1/2</code> | <code>1/3</code> | <code>2/3</code> | <code>1/4</code> |
													<code>3/4</code> | <code>1/5</code> | <code>2/5</code> | <code>3/5</code> | <code>4/5</code> |
													<code>1/6</code> | boolean
												</td>
												<td>-</td>
												<td>The ratio of stacked breakpoints. <br /> You can set breakpoints for the <code>stackSize</code>
													and <code>stackRatio</code> props that starts out stacked before becoming horizontal with at the
													small breakpoint. Setting it to a breakpoint (<code>sm, md, lg, xl</code>) of the
													<code>stackSize</code> prop will set the <code>&lt;GridColumn&gt;...&lt;/Grid&gt;</code>as fluid
													until the specified breakpoint
												</td>
											</tr>
											<tr>
												<td><code>stackSize</code></td>
												<td><code>sm</code> | <code>md</code> | <code>lg</code> | <code>xl</code> | boolean</td>
												<td>-</td>
												<td>The size of stacked breakpoints</td>
											</tr>
											<tr>
												<td><code>inline</code></td>
												<td>boolean</td>
												<td>false</td>
												<td>This attribute will make the column in a separate block, there is no float, and its centering
													can be controlled</td>
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