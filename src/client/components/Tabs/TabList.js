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

