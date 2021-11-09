import React, { Component } from 'react';


type AccordionItemProps = {
	/** Set an item to activate by default */
	defaultActive?: string | boolean | undefined;
	/** Specify a title */
	title?: React.ReactNode;
	/** Handling events for collapsing item */
	boxToggleEv?: React.MouseEventHandler<HTMLElement>;
	/** Handling events when the animation execution is complete */
	elAnimEndEv?: React.TransitionEventHandler<HTMLElement>;
	/** One event type, such as `click` or `mouseover` */
	triggerType?: string;
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
			boxToggleEv,
			elAnimEndEv,
			triggerType,
			children
		} = this.props;
		
		const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ' is-active' : '';

		
		return (
		  <>

				{ triggerType === 'click' ? (
					<dl 
					onClick={boxToggleEv} 
					onTransitionEnd={elAnimEndEv} 
					className={activedClassName} 
					aria-expanded={defaultActive ? 'true' : 'false'}>
						<dt role="presentation"><a href="#">{title}</a></dt>
						<dd role="tabpanel" 
							style={{
								height: defaultActive ? 'auto' : '0px'
							}}>
							<div>
								{children}
							</div>
						</dd>

					</dl>
				) : ''}

				{ triggerType === 'mouseover' ? (
					<dl 
					onClick={(e) => e.preventDefault()}
					onMouseOver={boxToggleEv} 
					onTransitionEnd={elAnimEndEv} 
					className={activedClassName} 
					aria-expanded={defaultActive ? 'true' : 'false'}>
						<dt role="presentation"><a href="#">{title}</a></dt>
						<dd role="tabpanel" 
							style={{
								height: defaultActive ? 'auto' : '0px'
							}}>
							<div>
								{children}
							</div>
						</dd>

					</dl>
				) : ''}		


		  </>
		)
	}
}

