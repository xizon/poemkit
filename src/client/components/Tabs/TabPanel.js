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
		
		const activedClassName = typeof( defaultActive ) !== 'undefined' ? ' is-active' : '';

		
		return (
		  <>
 
				<div role="tabpanel" className={ tabpanelClass ? `uix-tabs__content ${tabpanelClass} ${activedClassName}` : `uix-tabs__content ${activedClassName}`} {...attributes}></div>
	
		  </>
		)
	}
}

