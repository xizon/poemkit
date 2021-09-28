import React, { Component } from 'react';


type TabListProps = {
	defaultActive?: string | boolean | undefined;
};
type TabListState = false;


export default class TabList extends Component<TabListProps, TabListState> {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		
		const { 
            defaultActive,
			...attributes
		} = this.props;
		
		const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ' is-active' : '';

		
		return (
		  <>
 
				<li role="presentation" className={activedClassName}><a href="#" {...attributes}></a></li>
	
		  </>
		)
	}
}

