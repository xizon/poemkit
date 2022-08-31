import React, { Component } from 'react';
import {
	Route, 
	Switch, 
	useRouteMatch,
} from 'react-router-dom';
import { __ } from '@/components/_utils/_all';
import Footer from '@/components/Footer/index.tsx';
import Authorized from '@/pages/Dashboard/Authorized.js';
import { PrivateRoute } from '@/router/PrivateRoute.js';


//manage the document head
import { Helmet } from "react-helmet";
import siteInfo from '@/helpers/site-info.js';
function SeoVars() {
	const {siteName, pageTitle} = siteInfo('/dashboard');
	return {
		"siteName": siteName,
		"bodyClasses": 'page dashboard',
		"pageTitle": pageTitle,
	}
}

function Seo() {
	const {siteName, bodyClasses, pageTitle} = SeoVars();
	return (
		<Helmet>
			<html lang="en-US" dir="ltr" />
			<title>{`${pageTitle} - ${siteName}`}</title>
			<body class={`${bodyClasses}`} />
		</Helmet>
	)
}


//Might have mismatching versions of React and the renderer (such as React DOM)
function HookContent() {
	
	// The `path` lets us build <Route> paths that are
	// relative to the parent route, while the `url` lets
	// us build relative links.
	let { path, url } = useRouteMatch();

	
	return (
		<>
		
			<h3>Dashboard</h3>

			<hr />
		
			  <Switch>
		        <PrivateRoute exact path="/dashboard" component={Authorized} />
			  </Switch>
		</>
	)

}


class Dashboard extends Component {
	
  render() {
	  
    return (
	  <>

		<main id="poemkit-maincontent">

			{/*<!-- Content 
			====================================================== -->*/}
			<section className="poemkit-spacing--s">
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
		<Seo />

          

      </>
    ); 
	  
  }
    
}

export default Dashboard;

