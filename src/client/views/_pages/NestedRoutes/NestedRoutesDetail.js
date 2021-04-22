import React, { Component } from 'react';
import {
	useParams,
	useLocation
} from 'react-router-dom';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

import customRoutesConfig from '@uixkit.react/router/RoutesConfig.js';


//Might have mismatching versions of React and the renderer (such as React DOM)
function HookScript() {
	
	//Click the route to trigger the event
    const theLocation = useLocation();
    React.useEffect(() => {
		
		//output name
		//-------------
		let pageTitle = null;
		const breakException = {};
		const pathname = theLocation.pathname;

		let titleStr = pathname.split( '/' ).pop();
		titleStr = __.lastUrlParamFormat( titleStr );
		
		console.log( 'titleOutput: ', titleStr );
		
		__( '#app-topic-name' ).html( titleStr );


        
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
		<>
		
		    <HookScript />
		
			<p>Detail for topic ID: <span style={{background:"yellow",padding:"5px"}}><HookTopicId /></span><br />
		    Detail for topic Name: <span id="app-topic-name" style={{background:"yellow",padding:"5px"}}></span></p>
		</>
	)  
	  
	  
  }
    
}

export default NestedRoutesDetail;

