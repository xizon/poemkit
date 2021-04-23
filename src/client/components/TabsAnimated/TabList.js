import PropTypes from "prop-types";
import React, { Component } from 'react';

export default class TabList extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		
		const { 
            defaultActive,
			...attributes
		} = this.props;
		
		const activedClassName = typeof( defaultActive ) !== 'undefined' ? ' is-active' : '';
	
		
		return (
		  <>
 
				<li role="presentation" className={activedClassName}><a href="#" {...attributes}></a></li>
	
		  </>
		)
	}
}



//Configure your application to run in "development" mode.
if ( process.env.npm_package_development == 'true' ) {
			
	TabList.propTypes = {
	    defaultActive: PropTypes.any
	}

	
}
