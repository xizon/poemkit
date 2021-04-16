import React, { Component, Fragment } from 'react';
import {
	Route, 
	Switch, 
	NavLink,
	useRouteMatch,
	useParams
} from 'react-router-dom';

import Footer from '@uixkit.react/components/Footer/index.js';

import NestedRoutesDetail from '@uixkit.react/pages/NestedRoutes/NestedRoutesDetail.js';



//Might have mismatching versions of React and the renderer (such as React DOM)
function HookContent() {
	
	// The `path` lets us build <Route> paths that are
	// relative to the parent route, while the `url` lets
	// us build relative links.
	let { path, url } = useRouteMatch();

	
	return (
		<Fragment>
		
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
		</Fragment>
	)

}


class NestedRoutes extends Component {
	
  render() {
	  
    return (
	  <Fragment>

		<div className="uix-header__placeholder js-uix-header__placeholder-autoheight"></div>

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

          

      </Fragment>
    ); 
	  
  }
    
}

export default NestedRoutes;

