import React, { Component } from 'react';

interface TabListProps extends React.ComponentPropsWithoutRef<any> {
	defaultActive?: string | boolean | undefined;
	targetID?: string;
	index?: number;
	/** Handling events for collapsing item */
	switchEv?: React.MouseEventHandler<HTMLElement>;
	/** -- */
	children: React.ReactNode;
};
type TabListState = false;


export default class TabList extends Component<TabListProps, TabListState> {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		
		const { 
            defaultActive,
			targetID,
			index,
			switchEv,
			children,
			...attributes
		} = this.props;
		
		const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ' is-active' : '';

		
		return (
		  <>
 
				<li onClick={switchEv} role="presentation" className={activedClassName} data-tab={targetID}>{index === 1 ? <><div className="poemkit-tabs__marker"></div></> : ''}<a href="#" {...attributes}>{children}</a></li>
	
		  </>
		)
	}
}

