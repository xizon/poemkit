import React, { Component } from 'react';

type TabListProps = {
	defaultActive?: string | boolean | undefined;
	/** -- */
	children?: any;
};
type TabListState = false;


export default class TabList extends Component<TabListProps, TabListState> {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		
		const { 
            defaultActive,
			children,
			...attributes
		} = this.props;
		
		const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ' is-active' : '';
	
		
		return (
		  <>
 
				<li role="presentation" className={activedClassName} {...attributes}><a href="#">{children}</a></li>
	
		  </>
		)
	}
}

