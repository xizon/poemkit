import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { __ } from '@/components/_utils/_all';


function HookTopicId() {
	
	
	// The <Route> that rendered this component has a
	// path of `/nested-routes/:topicId`. The `:topicId` portion
	// of the URL indicates a placeholder that we can
	// get from `useParams()`.
	let { topicId } = useParams();
  
  	return topicId;
}


class NestedRoutesDetail extends Component {
	render() {

		return (
			<>
				<p>Detail for topic ID: <span style={{ background: "yellow", padding: "5px" }}><HookTopicId /></span></p>
			</>
		)


	}

}

export default NestedRoutesDetail;

