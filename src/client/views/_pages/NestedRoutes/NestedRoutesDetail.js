import React, { Fragment } from 'react';
import {
	useParams,
	useLocation
} from "react-router-dom";

import customRoutesConfig from '../../../router/RoutesConfig.js';


/* Convert Allowance class component to functional component */ 
const NestedRoutesDetail = () => {

	
	//Click the route to trigger the event
    const theLocation = useLocation();
    React.useEffect(() => {
		
		//change page title
		//-------------
		let pageTitle = null;
		const breakException = {};
		const pathname = theLocation.pathname;

		
		//page: Nested Routes detail
		if ( pathname.indexOf( 'nested-routes/' ) >= 0 ) {
			try {
				customRoutesConfig[0].routes.forEach((item, index) => {
					if (  pathname.indexOf( item.path ) >= 0 ) {
						pageTitle = item.pageTitle;
						//
						throw breakException;

					}
				});
			} catch (e) {}	


		}


		//update page title
		if ( pageTitle !== null ) document.title = pageTitle;

        
    });
	
	
	// The <Route> that rendered this component has a
	// path of `/nested-routes/:topicId`. The `:topicId` portion
	// of the URL indicates a placeholder that we can
	// get from `useParams()`.
	let { topicId } = useParams();

	return (
		<Fragment>
			<p>Detail topicId: <span style={{background:"yellow",padding:"5px"}}>{topicId}</span></p>
		</Fragment>
	)
};

export default NestedRoutesDetail;

