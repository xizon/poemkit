import React, { Component } from 'react';


type AccordionItemProps = {
	defaultActive?: string | boolean | undefined;
	title?: React.ReactNode;
	/** -- */
	children?: any;
};
type AccordionItemState = false;


export default class AccordionItem extends Component<AccordionItemProps, AccordionItemState> {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		
		const { 
            defaultActive,
			title,
			children,
			...attributes
		} = this.props;
		
		const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ' is-active' : '';
		const tabpanelHeight = activedClassName != '' ? 'auto' : 0;

		
		return (
		  <>

				<dl className={activedClassName} aria-expanded={defaultActive ? 'true' : 'false'} {...attributes}>
					<dt role="presentation"><a href="#">{title}</a></dt>
					<dd role="tabpanel" style={{height: tabpanelHeight}}>
						<div>
							{children}
						</div>
					</dd>

				</dl>

		  </>
		)
	}
}

