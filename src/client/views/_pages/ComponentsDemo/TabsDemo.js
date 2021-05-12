import React from 'react';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import { Tabs, TabList, TabPanel } from '@uixkit.react/components/Tabs/index.js';


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
									Tabs 
									<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Tabs" target="_blank"><code><i className="fa fa-code" aria-hidden="true"></i></code></a>
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
								<h3>Tab Normal</h3>
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

									<Tabs type="normal">
										<TabList key="tab-list-1" defaultActive>Tab 1</TabList>
										<TabList key="tab-list-2">Tab 2</TabList>
										<TabList key="tab-list-3">Tab 3</TabList>

										<TabPanel key="tab-panel-1" defaultActive>
											<p>Hi, this is the first tab.</p>
										</TabPanel>
										<TabPanel key="tab-panel-2">
											<p>This is the 2nd tab.</p>
											<p>This is the 2nd tab.</p>
											<p>This is the 2nd tab.</p>
										</TabPanel>
										<TabPanel key="tab-panel-3">
											<p>And this is the 3rd tab.</p>
										</TabPanel>    
									</Tabs>	


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

									<Tabs type="center">
										<TabList key="tab-list-1" defaultActive>Tab 1</TabList>
										<TabList key="tab-list-2">Tab 2</TabList>
										<TabList key="tab-list-3">Tab 3</TabList>

										<TabPanel key="tab-panel-1" defaultActive>
											<p>Hi, this is the first tab.</p>
										</TabPanel>
										<TabPanel key="tab-panel-2">
											<p>This is the 2nd tab.</p>
											<p>This is the 2nd tab.</p>
											<p>This is the 2nd tab.</p>
										</TabPanel>
										<TabPanel key="tab-panel-3">
											<p>And this is the 3rd tab.</p>
										</TabPanel>    
									</Tabs>		


								</div>
							</div>
							{/*<!-- .row end -->*/}


					</div>
					{/*<!-- .container end -->*/}

				</section>




				<section className="uix-spacing--s">
					<div className="container">
							<div className="row">
								<div className="col-12">

									<Tabs type="fullwidth" data-fullwidth="1">
										<TabList key="tab-list-1" defaultActive>Tab 1</TabList>
										<TabList key="tab-list-2">Tab 2</TabList>
										<TabList key="tab-list-3">Tab 3</TabList>

										<TabPanel key="tab-panel-1" defaultActive>
											<p>Hi, this is the first tab.</p>
										</TabPanel>
										<TabPanel key="tab-panel-2">
											<p>This is the 2nd tab.</p>
											<p>This is the 2nd tab.</p>
											<p>This is the 2nd tab.</p>
										</TabPanel>
										<TabPanel key="tab-panel-3">
											<p>And this is the 3rd tab.</p>
										</TabPanel>    
									</Tabs>	



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
								<h3>Tab Rotation Effect 1</h3>
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
					<div className="container uix-t-c">
							<div className="row">
								<div className="col-12">

									<Tabs type="rotation" data-rotation="true" data-rotation-display="5" data-rotation-radius="130" data-rotation-wrapper-angle="0">
										<TabList key="tab-list-1" defaultActive>Tab 1</TabList>
										<TabList key="tab-list-2">Tab 2</TabList>
										<TabList key="tab-list-3">Tab 3</TabList>
										<TabList key="tab-list-4">Tab 4</TabList>
										<TabList key="tab-list-5">Tab 5</TabList>

										<TabPanel key="tab-panel-1" tabpanelClass="uix-outer-shadow--regular" style={{marginTop: '50px'}} defaultActive>
											<p>Hi, this is the first tab.</p>
										</TabPanel>
										<TabPanel key="tab-panel-2" tabpanelClass="uix-outer-shadow--regular" style={{marginTop: '50px'}}>
											<p>This is the 2nd tab.</p>
											<p>This is the 2nd tab.</p>
											<p>This is the 2nd tab.</p>
										</TabPanel>
										<TabPanel key="tab-panel-3" tabpanelClass="uix-outer-shadow--regular" style={{marginTop: '50px'}}>
											<p>And this is the 3rd tab.</p>
										</TabPanel>    
										<TabPanel key="tab-panel-3" tabpanelClass="uix-outer-shadow--regular" style={{marginTop: '50px'}}>
											<p>And this is the 4th tab.</p>
										</TabPanel> 
										<TabPanel key="tab-panel-3" tabpanelClass="uix-outer-shadow--regular" style={{marginTop: '50px'}}>
											<p>And this is the 5th tab.</p>
										</TabPanel> 
									</Tabs>	



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
								<h3>Tab Rotation Effect 2</h3>
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
					<div className="container uix-t-c">
							<div className="row">
								<div className="col-12">

									<Tabs type="rotation" data-rotation="true" data-rotation-display="4" data-rotation-radius="130" data-rotation-wrapper-angle="-45">
										<TabList key="tab-list-1" defaultActive>Tab 1</TabList>
										<TabList key="tab-list-2">Tab 2</TabList>
										<TabList key="tab-list-3">Tab 3</TabList>
										<TabList key="tab-list-4">Tab 4</TabList>

										<TabPanel key="tab-panel-1" tabpanelClass="uix-outer-shadow--regular" style={{marginTop: '50px'}} defaultActive>
											<p>Hi, this is the first tab.</p>
										</TabPanel>
										<TabPanel key="tab-panel-2" tabpanelClass="uix-outer-shadow--regular" style={{marginTop: '50px'}}>
											<p>This is the 2nd tab.</p>
											<p>This is the 2nd tab.</p>
											<p>This is the 2nd tab.</p>
										</TabPanel>
										<TabPanel key="tab-panel-3" tabpanelClass="uix-outer-shadow--regular" style={{marginTop: '50px'}}>
											<p>And this is the 3rd tab.</p>
										</TabPanel>    
										<TabPanel key="tab-panel-3" tabpanelClass="uix-outer-shadow--regular" style={{marginTop: '50px'}}>
											<p>And this is the 4th tab.</p>
										</TabPanel> 
									</Tabs>		



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