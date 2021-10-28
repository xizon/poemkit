import React from 'react';
import {
	Route, 
	Switch, 
	NavLink,
	Redirect,
	useLocation
} from 'react-router-dom';
import { __ } from '@uixkit.react/components/_utils/_all';

import customRoutesConfig from '@uixkit.react/router/RoutesConfig.js';
import Header from '@uixkit.react/components/Header/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@uixkit.react/pages/ComponentsDemo/_SidebarMenu.js';


//get project config
import { rootDirectory } from '@uixkit.react/config/websiteConfig.js';


export default (props) => {
    
	
	//Click the route to trigger the event
    const theLocation = useLocation();
    React.useEffect(() => {
		

		//Remove sidebar menu
		//------------------------------------------
		SidebarMenu();

		
		//change page title
		//------------------------------------------
		let pageTitle = null;
		let pageNoMatchTitle = null;
		const breakException = {};
		let pathname = theLocation.pathname;
	
		//
		pathname = pathname.replace(`${rootDirectory}`, '')
		
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
				
				const _path = item.path.replace(`${rootDirectory}`, '');
				if ( _path.indexOf( `/${pathname.replace(/^\/([^\/]*).*$/, '$1')}` ) < 0 && _path != "/" ) {
					pageTitle = pageNoMatchTitle;
					//
					throw breakException;
				}
			});
		} catch (e) {}	

		
		
		//page: ...
		try {
			customRoutesConfig[0].routes.forEach((item, index) => {
				const _path = item.path.replace(`${rootDirectory}`, '');
				
				/*
				console.log( '_path: ', _path );
				console.log( 'pathname: ', pathname );
				console.log( 'check: ', `/${pathname.replace(/^\/([^\/]*).*$/, '$1')}` );
				*/
				
				
				if ( _path === pathname || 
					 ( _path.indexOf( `/${pathname.replace(/^\/([^\/]*).*$/, '$1')}` ) >= 0 && _path != "/" )
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
			pathname !== "/" &&
			pathname !== "/index"
		) {
			document.title =  `${pageTitle} - ${customRoutesConfig[0].routes[0].pageTitle}`;
		} else {
			document.title =  `${pageTitle}`;
		}

        
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
		if ( typeof(document) !== 'undefined' && document.querySelector( '.uix-menu-mobile__toggle' ) !== null ) {
			document.body.classList.remove( 'js-uix-menu-opened' );
			document.querySelector( '.uix-menu-mobile__toggle' ).classList.remove( 'is-active' );
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
				<li onTouchStart={mobileClickEv()} className={urlChk("/member") ? 'is-active' : ''}>
					<NavLink data-route="true" to="/member" activeClassName="is-active">Member</NavLink>
				</li>
			</>,
			"link": "#",
			"mega": false
		},
		{
			"title": <>
				<li onTouchStart={mobileClickEv()} className={urlChk("/admin") ? 'is-active' : ''}>
					<NavLink data-route="true" to="/admin" activeClassName="is-active">Admin</NavLink>
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
			logo={<><NavLink data-route="true" to="/index" activeClassName="is-active"><img src={`${rootDirectory}/assets/images/logo.png`} alt="Uix Kit React" /></NavLink></>}
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