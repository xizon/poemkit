import React, { Component } from 'react';
import {
	Route, 
	Switch, 
	useRouteMatch,
} from 'react-router-dom';
import { __ } from '@uixkit.react/components/_utils/_all';
import Footer from '@uixkit.react/components/Footer/index.tsx';
import Authorized from '@uixkit.react/pages/Admin/Authorized.js';
import { PrivateRoute } from '@uixkit.react/router/PrivateRoute.js';



//Might have mismatching versions of React and the renderer (such as React DOM)
function HookContent() {
	
	// The `path` lets us build <Route> paths that are
	// relative to the parent route, while the `url` lets
	// us build relative links.
	let { path, url } = useRouteMatch();

	
	return (
		<>
		
			<h3>Admin Page</h3>

			<hr />
		
			  <Switch>
		        <PrivateRoute exact path="/admin" component={Authorized} />
			  </Switch>
		</>
	)

}


class Admin extends Component {
	
  render() {
	  
    return (
	  <>

		<main id="uix-maincontent">

			{/*
			<!-- Content   
			====================================================== -->	
			*/}
			<section className="uix-spacing--s">
				<div className="container">
						<div className="row">
							<div className="col-12">
		                         
		                         <HookContent />

							</div>
						</div>
						{/*<!-- .row end -->*/}


				</div>
				{/*<!-- .container end -->*/}
			</section>


		</main>

		<Footer />

          

      </>
    ); 
	  
  }
    
}

export default Admin;

