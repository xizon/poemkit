import React, { Component } from 'react';
import {
	Route, 
	Switch, 
	NavLink,
	useRouteMatch,
	useParams
} from 'react-router-dom';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import Footer from '@uixkit.react/components/Footer/index.js';

import NestedRoutesDetail from '@uixkit.react/pages/NestedRoutes/NestedRoutesDetail.js';



//Might have mismatching versions of React and the renderer (such as React DOM)
function HookContent() {
	
	// The `path` lets us build <Route> paths that are
	// relative to the parent route, while the `url` lets
	// us build relative links.
	let { path, url } = useRouteMatch();

	
	return (
		<>
		
			<h3>Nested Routes Page</h3>

			<div><NavLink to={`${url}/topic-one`} activeClassName="is-active">&gt; click here to display Topic One</NavLink></div>
			<div><NavLink to={`${url}/topic-two`} activeClassName="is-active">&gt; click here to display Topic Two</NavLink></div>
			<div><NavLink to={`${url}/topic-three`} activeClassName="is-active">&gt; click here to display Topic Three</NavLink></div>

			<hr />

			 <h5>Content:</h5>

			  <Switch>
				<Route exact path={path}>
				  <p>None.</p>
				</Route>
				<Route path={`${path}/:topicId`}>
				  <NestedRoutesDetail />
				</Route>
			  </Switch>
		</>
	)

}


class NestedRoutes extends Component {
	
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

export default NestedRoutes;

