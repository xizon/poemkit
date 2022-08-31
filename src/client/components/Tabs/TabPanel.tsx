import React, { Component } from 'react';


interface TabPanelProps extends React.ComponentPropsWithoutRef<"div"> {
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
 
				<div role="tabpanel" id={targetID} className={ tabpanelClass ? `poemkit-tabs__content ${tabpanelClass} ${activedClassName}` : `poemkit-tabs__content ${activedClassName}`} {...attributes}></div>
	
		  </>
		)
	}
}
