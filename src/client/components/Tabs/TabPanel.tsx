import React, { Component } from 'react';

type TabPanelProps = {
	defaultActive?: string | boolean | undefined;
	tabpanelClass?: string;
	targetID?: string;
};
type TabPanelState = false;



export default class TabPanel extends Component<TabPanelProps, TabPanelState> {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		
		const { 
			defaultActive,
			tabpanelClass,
			targetID,
			...attributes
		} = this.props;
		
		const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ' is-active' : '';

		
		return (
		  <>
 
				<div role="tabpanel" id={targetID} className={ tabpanelClass ? `uix-tabs__content ${tabpanelClass} ${activedClassName}` : `uix-tabs__content ${activedClassName}`} {...attributes}></div>
	
		  </>
		)
	}
}
