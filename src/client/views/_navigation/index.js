import React, { Fragment } from 'react';
import {
	Route, 
	Switch, 
	NavLink,
	Redirect,
	useLocation
} from "react-router-dom";
import customRoutesConfig from '../../router/routes.js';

import './styles.scss';


export default props => {
    
	
	//Click the route to trigger the event
    const theLocation = useLocation();
    React.useEffect(() => {
		
		
		//console.log('props: ');
		//console.log(props);
		
		//change page title
		//-------------
		let pageTitle = customRoutesConfig[0].routes[0].pageTitle; //default title via Homepage
		let noMatchPageEnable = true;
		
		const pathname = theLocation.pathname;
		
		
		//page: ...
		customRoutesConfig[0].routes.forEach((item, index) => {

			if ( item.path === pathname ) {
				noMatchPageEnable = false;
				pageTitle = item.pageTitle;
				return true;
			}
		});
		
		
		//page: 404
		if ( noMatchPageEnable ) {
			customRoutesConfig[0].routes.forEach((item, index) => {
				if ( item.status === 404 ) {
					pageTitle = item.pageTitle;
					return true;
				}
			});	
		}

		
	
		//page: not post detail
		if ( pathname.indexOf( 'posts/' ) < 0 ) {
			document.title = pageTitle;
		}
		
		
        
    })
	

    return (
	  <Fragment>
          <nav>
              <ul>
                <li>
                  <NavLink to="/index">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/todos">Todos</NavLink>
                </li>
                <li>
                  <NavLink to="/posts">Posts</NavLink>
                </li>
                <li>
                  <NavLink to="/errorpage">404</NavLink>
                </li>
              </ul>

          </nav>

        
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
      </Fragment>
    );

};