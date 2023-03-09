import React from 'react';
import { 
    Route, 
    Redirect 
} from 'react-router-dom';


// The goal is to prevent the user to access any pages if is is not Logged In.
// Example: <PrivateRoute exact path="/dashboard" component={SignIn} />
export const PrivateRoute = ({ component: Component, ...attributes }) => (
	
	  <Route
		{...attributes}
		render={(props) => {
	 
			if (typeof(localStorage) !== 'undefined') {
				if ( localStorage.getItem('user') ) {
					return <Component {...props} />;
				} else {
					return <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />;
				}

			}
		}}
	  />
)