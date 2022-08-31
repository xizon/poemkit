import React, { Component } from 'react';

interface TabPanelProps extends React.ComponentPropsWithoutRef<"div"> {
	defaultActive?: string | boolean | undefined;
	tabpanelClass?: string;
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
			...attributes
		} = this.props;
		
		const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ' is-active' : '';

		
		return (
		  <>
 
				<div role="tabpanel" className={ tabpanelClass ? `poemkit-tabs__content ${tabpanelClass} ${activedClassName}` : `poemkit-tabs__content ${activedClassName}`} {...attributes}></div>
	
		  </>
		)
	}
}

