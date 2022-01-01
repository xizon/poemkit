import React from 'react';
import { __ } from '@/components/_utils/_all';
import { Grid, GridColumn } from '@/components/Grid/index.tsx';

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
							Grid 
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/Grid" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
						<p>This component is used to match different content module sections.</p>
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
						<h3 className="app-header-title">PoemKit Grid</h3>
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
			<section className="poemkit-spacing--s">
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
							<h3 className="app-header-title">No Gutter Column For PoemKit Grid</h3>
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
			<section className="poemkit-spacing--s">
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
							<h3 className="app-header-title">PoemKit Grid (No line breaks)</h3>
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
			<section className="poemkit-spacing--s">
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
			<section className="poemkit-spacing--s">
				<div className="container">

					<div style={{backgroundColor: "#000"}}>

						<GridColumn ratio="1/6">
							<div style={{ background: "blue", boxShadow: "inset 0px 0px 0px 1px rgba(0,0,0,.5)" }}>1/6</div>
						</GridColumn>
				
						<div className="poemkit-clearfix"></div>
						

						<div className="text-center">
							<GridColumn ratio="2/5" inline={true}>
								<div style={{background:"teal",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/5, Center alignment.</div>
							</GridColumn>		
						</div>

						<div className="poemkit-clearfix"></div>


						<GridColumn ratio="2/5" stackRatio="1/2" stackSize="md">
							<div style={{background:"green",boxShadow:"inset 0px 0px 0px 1px rgba(0,0,0,.5)"}}>2/5, The width becomes 50% on mobile.</div>
						</GridColumn>		
		
						<div className="poemkit-clearfix"></div>

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


							<article className="poemkit-spacing--s" itemProp="text">
								<h4>Grid</h4>
								<div>
									<pre>import {`{Grid}`} from '@/components/Grid/index.tsx';</pre>
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
									<pre>import {`{GridColumn}`} from '@/components/Grid/index.tsx';</pre>
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