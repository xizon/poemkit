import PropTypes from "prop-types";
import React, { Component } from 'react';

export default class TabPanel extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		
		const { 
			defaultActive,
			tabpanelClass,
			...attributes
		} = this.props;
		
		const activedClassName = typeof(defaultActive) !== 'undefined' ? ' is-active' : '';

		
		return (
		  <>
 
				<div role="tabpanel" className={ tabpanelClass ? `uix-tabs__content ${tabpanelClass} ${activedClassName}` : `uix-tabs__content ${activedClassName}`} {...attributes}></div>
	
		  </>
		)
	}
}



//Configure your application to run in "development" mode.
if ( process.env.npm_package_development == 'true' ) {
			
	TabPanel.propTypes = {
	    defaultActive: PropTypes.any,
		tabpanelClass: PropTypes.string
	}

	
}

