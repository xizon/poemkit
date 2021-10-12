import React from 'react';
import { Route, Redirect } from 'react-router-dom';


// The goal is to prevent the user to access any pages if is is not Logged In.
// Example: <PrivateRoute exact path="/admin" component={Member} />
export const PrivateRoute = ({ component: Component, ...attributes }) => (
	
	  <Route
		{...attributes}
		render={(props) => {
	 
			if (typeof(localStorage) !== 'undefined') {
				if ( localStorage.getItem('user') ) {
					return <Component {...props} />;
				} else {
					return <Redirect to={{ pathname: '/member', state: { from: props.location } }} />;
				}

			}
		}}
	  />
)