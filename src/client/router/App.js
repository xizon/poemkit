import React from 'react';
import {
	Route, 
	Switch, 
	NavLink,
	Redirect,
	useLocation
} from 'react-router-dom';

import customRoutesConfig from '@/router/RoutesConfig.js';
import Header from '@/components/Header/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@/pages/ComponentsDemo/_SidebarMenu.js';


//get project config
import { rootDirectory } from '@/config/websiteConfig.js';


export default (props) => {
    
	
	//Click the route to trigger the event
    const theLocation = useLocation();
    React.useEffect(() => {
		
		//Remove sidebar menu
		SidebarMenu();
    });
	
	//
	const urlChk = function( str ) {
		if ( str.indexOf( '#' ) >= 0 ) {
			return theLocation.hash.indexOf( str ) >= 0 ? true : false;
		} else {
			return theLocation.pathname.indexOf( str ) >= 0 ? true : false;
		}
	};


	const mobileClickEv = function() {
		//close navigation mask
		if ( typeof(document) !== 'undefined' && document.querySelector( '.poemkit-menu-mobile__toggle' ) !== null ) {
			document.body.classList.remove( 'js-poemkit-menu-opened' );
			document.querySelector( '.poemkit-menu-mobile__toggle' ).classList.remove( 'is-active' );
		}
		
	}

	const menuListData = [
		{
			"title": <>
				<li onTouchStart={mobileClickEv()} className={props.location.pathname === "/index" || props.location.pathname === '' ? 'is-active' : ''}>
					<NavLink data-route="true" to="/index" activeClassName="is-active">Home</NavLink>
				</li>
			</>,
			"link": "#",
			"mega": false
		},
		{
			"title": <>
				<li onTouchStart={mobileClickEv()} className={urlChk("/components-demo") ? 'is-active' : ''}>
					<NavLink data-route="true" to="/components-demo" activeClassName="is-active">Components</NavLink>
				</li>
			</>,
			"link": "#",
			"mega": false
		},
		{
			"title": <>
				<li onTouchStart={mobileClickEv()} className={urlChk("/posts") && !urlChk("/posts-pagination") ? 'is-active' : ''}>
					<NavLink data-route="true" to="/posts" activeClassName="is-active">Posts</NavLink>
				</li>
			</>,
			"link": "#",
			"mega": false
		},
		{
			"title": <>
				<li onTouchStart={mobileClickEv()} className={urlChk("/posts-pagination") ? 'is-active' : ''}>
					<NavLink data-route="true" to="/posts-pagination/1" activeClassName="is-active">Posts Pagination</NavLink>
				</li>
			</>,
			"link": "#",
			"mega": false
		},
		{
			"title": <>
				<li onTouchStart={mobileClickEv()} className={urlChk("/errorpage") ? 'is-active' : ''}>
					<NavLink data-route="true" to="/errorpage" activeClassName="is-active">404</NavLink>
				</li>
			</>,
			"link": "#",
			"mega": false
		},
		{
			"title": <>
				<li onTouchStart={mobileClickEv()} className={urlChk("/nested-routes") ? 'is-active' : ''}>
					<NavLink data-route="true" to="/nested-routes" activeClassName="is-active">Nested Routes</NavLink>
				</li>
			</>,
			"link": "#",
			"mega": false
		},
		{
			"title": <>
				<li onTouchStart={mobileClickEv()} className={urlChk("/sign-in") ? 'is-active' : ''}>
					<NavLink data-route="true" to="/sign-in" activeClassName="is-active">Sign In</NavLink>
				</li>
			</>,
			"link": "#",
			"mega": false
		},
		{
			"title": <>
				<li onTouchStart={mobileClickEv()} className={urlChk("/dashboard") ? 'is-active' : ''}>
					<NavLink data-route="true" to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
				</li>
			</>,
			"link": "#",
			"mega": false
		}
	];
	

    return (
	  <>

		<Header 
			headerOverlayEnabled="false" 
			menu={menuListData} 
			logo={<><NavLink data-route="true" to="/index" activeClassName="is-active"><img src={`${rootDirectory}/assets/images/logo.png`} alt="PoemKit" /></NavLink></>}
		/>

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