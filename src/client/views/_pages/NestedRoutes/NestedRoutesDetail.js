import React, { Component, Fragment } from 'react';
import {
	useParams,
	useLocation
} from 'react-router-dom';

import customRoutesConfig from '@uixkit.react/router/RoutesConfig.js';


//Might have mismatching versions of React and the renderer (such as React DOM)
function HookScript() {
	
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
	
	return (
		<></>
	)

}


function HookTopicId() {
	
	
	// The <Route> that rendered this component has a
	// path of `/nested-routes/:topicId`. The `:topicId` portion
	// of the URL indicates a placeholder that we can
	// get from `useParams()`.
	let { topicId } = useParams();
  
  	return topicId;
}


//---
class NestedRoutesDetail extends Component {

  render() {
	
	return (
		<Fragment>
		
		    <HookScript />
		
			<p>Detail topicId: <span style={{background:"yellow",padding:"5px"}}><HookTopicId /></span></p>
		</Fragment>
	)  
	  
	  
  }
    
}

export default NestedRoutesDetail;

