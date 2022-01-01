import React, { Component } from 'react';
import {
	Route, 
	Switch, 
	NavLink,
	useRouteMatch
} from 'react-router-dom';
import { __ } from '@/components/_utils/_all';
import Footer from '@/components/Footer/index.tsx';

import NestedRoutesDetail from '@/pages/NestedRoutes/NestedRoutesDetail.js';

//manage the document head
import { Helmet } from "react-helmet";
import siteInfo from '@/helpers/site-info.js';
function SeoVars() {
	const {siteName, baseURL, pageTitle} = siteInfo('/nested-routes');
	// if the value of `pageTitle` is `{{pageTitle}}`, the value 
	// of Redux store will be rendered asynchronously

	return {
		"siteName": siteName,
		"baseURL": baseURL,
		"imgURL": '',
		"bodyClasses": 'page',
		"pageTitle": pageTitle,
		"desc": pageTitle
	}
}

function Seo() {
	const {siteName, baseURL, imgURL, bodyClasses, pageTitle, desc} = SeoVars();
	return (
		<Helmet>
			<html lang="en-US" dir="ltr" />
			<title>{`${pageTitle} - ${siteName}`}</title>
			<body class={`${bodyClasses}`} />
			<meta name="description" content={`${desc}`}/>
			<meta property="og:title" content={`${pageTitle} - ${siteName}`}/>
			<meta property="og:url" content={`${baseURL}`}/>
			<meta property="og:description" content={`${desc}`}/>
			<meta property="og:type" content="website"/>
			<meta property="og:site_name" content={`${siteName}`}/>
			{imgURL === '' ? '' : <meta property="og:image" content={`${imgURL}`}/>}
			<link rel="canonical" href={`${baseURL}`}/>
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
		
			<h3>Nested Routes Page</h3>

			<div><NavLink data-route="true" to={`${url}/topic-one`} activeClassName="is-active">&gt; click here to display Topic One</NavLink></div>
			<div><NavLink data-route="true" to={`${url}/topic-two`} activeClassName="is-active">&gt; click here to display Topic Two</NavLink></div>
			<div><NavLink data-route="true" to={`${url}/topic-three`} activeClassName="is-active">&gt; click here to display Topic Three</NavLink></div>

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

export default NestedRoutes;

