import React from 'react';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import { TabsAnimated, TabList, TabPanel } from '@uixkit.react/components/TabsAnimated/index.js';


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
									Tabs Animated
									<a className="uix-typo--h3 align-middle" href="https://github.com/xizon/uix-kit-react/tree/master/src/client/components/TabsAnimated" target="_blank"><code><i className="fa fa-code" aria-hidden="true"></i></code></a>
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
								<h3>Tab Animated Normal</h3>
								<p>The most basic style allows you to set transition animation</p>
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

									<TabsAnimated>
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
									</TabsAnimated>	


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