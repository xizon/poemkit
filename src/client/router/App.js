import React from 'react';
import {
	Route, 
	Switch, 
	NavLink,
	Redirect,
	useLocation
} from 'react-router-dom';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

import customRoutesConfig from '@uixkit.react/router/RoutesConfig.js';
import Header from '@uixkit.react/components/Header/index.js';


export default (props) => {
    
	
	//Click the route to trigger the event
    const theLocation = useLocation();
    React.useEffect(() => {
		
		//change page title
		//-------------
		let pageTitle = null;
		let pageNoMatchTitle = null;
		const breakException = {};
		const pathname = theLocation.pathname;

		
		//page: 404
		try {
			customRoutesConfig[0].routes.forEach((item, index) => {
				if ( item.status === 404 ) {
					pageNoMatchTitle = item.pageTitle;
					//
					throw breakException;
				}
			});
		} catch (e) {}	

		
		try {
			customRoutesConfig[0].routes.forEach((item, index) => {
				if ( item.path.indexOf( `/${pathname.replace(/^\/([^\/]*).*$/, '$1')}` ) < 0 && item.path != '/' ) {
					pageTitle = pageNoMatchTitle;
					//
					throw breakException;
				}
			});
		} catch (e) {}	

		
		
		//page: ...
		try {
			customRoutesConfig[0].routes.forEach((item, index) => {
				if ( item.path === pathname || 
					 ( item.path.indexOf( `/${pathname.replace(/^\/([^\/]*).*$/, '$1')}` ) >= 0 && item.path != '/' )
				   ) {
					pageTitle = item.pageTitle;
					//
					throw breakException;
					
				}
			});
		} catch (e) {}	


		//page: Components Demo
		if ( pathname.indexOf( 'components-demo/' ) >= 0 ) {
			let titleStr = pathname.split( '/' ).pop();
			pageTitle = __.lastUrlParamFormat( titleStr );	
		}

		

		// update page title
		// When the page is not the homepage (including all homepage addresses of 
		// the routing configuration), change the page title
		if ( 
			pageTitle !== null &&
			pathname !== '/' &&
			pathname !== '/index'
		) {
			document.title =  `${pageTitle} - ${customRoutesConfig[0].routes[0].pageTitle}`;
		} else {
			document.title =  `${pageTitle}`;
		}

        
    });
	

    return (
	  <>

		<Header headerOverlayEnabled="false" htmlString={
			<>
		
					<li className={props.location.pathname === '/index' || props.location.pathname === '' ? 'is-active' : ''}>
					  <NavLink to="/index" activeClassName="is-active">Home</NavLink>
					</li>
					<li className={props.location.pathname === '/todos' ? 'is-active' : ''}>
					  <NavLink to="/todos" activeClassName="is-active">Todos</NavLink>
					</li>
					<li className={props.location.pathname.indexOf( '/posts' ) >= 0 ? 'is-active' : ''}>
					  <NavLink to="/posts" activeClassName="is-active">Posts</NavLink>
					</li>
					<li className={props.location.pathname === '/errorpage' ? 'is-active' : ''}>
					  <NavLink to="/errorpage" activeClassName="is-active">404</NavLink>
					</li>
					<li className={props.location.pathname.indexOf( '/nested-routes' ) >= 0 ? 'is-active' : ''}>
					  <NavLink to="/nested-routes" activeClassName="is-active">Nested Routes</NavLink>
					</li>
	
			</>
		} />


        
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. 
                The express configuration associated with the file webpack.config.js
            */
			/*
			
			Directly display the content of the homepage component when there is no redirect.

			<Route
			  exact
			  path="/"
			  render={props => <Home {...props} />}
			/>
			*/
		     }
          <Switch>

		      {/* Set React Router Default Route Redirect to `/index` */}
              <Route
                exact
                path="/"
                render={(props) => {
                    return (
                      <Redirect to="/index" />
                    )
                }}
              />


              {/* Loop through an array to create routes in react router` */}
			  {
				customRoutesConfig[0].routes.map((item,index) => {
					
					return (
					  <Route
						key={index}
						path={item.path}
						exact={item.exact}
						component={item.component}
					  />
					);	

				})
		   	  }

          </Switch>




      </>
    );

};