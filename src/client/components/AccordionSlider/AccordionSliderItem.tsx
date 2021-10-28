import React, { Component } from 'react';


type AccordionSliderItemProps = {
	/** Set an item to activate by default */
	defaultActive?: string | boolean | undefined;
	/** The URL or color of the background image. */
	bg?: string;
	/** Handling events for collapsing item */
	boxToggleEv?: React.MouseEventHandler<HTMLElement>;
	/** Handling events when the animation execution is complete */
	boxAnimEndEv?: React.TransitionEventHandler<HTMLElement>;
	/** Handling events when the mouse leaves the element */
	boxAnimLeaveEv?: React.MouseEventHandler<HTMLElement>;
	/** One event type, such as `click` or `mouseover` */
	triggerType?: string;
};
type AccordionSliderItemState = false;


export default class AccordionSliderItem extends Component<AccordionSliderItemProps, AccordionSliderItemState> {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		
		const { 
            defaultActive,
			bg,
			boxToggleEv,
			boxAnimEndEv,
			boxAnimLeaveEv,
			triggerType,
			children
		} = this.props;


		const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ' is-active' : '';
		const bgAttrs = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif|svg|webp))/i.test(bg as string) ? {backgroundImage: `url(${bg})` } : {backgroundColor: `${bg}` }

		
		return (
		  <>

				{ triggerType === 'click' ? (
					<li 
					onClick={boxToggleEv} 
					onMouseLeave={boxAnimLeaveEv}
					onTransitionEnd={boxAnimEndEv} 
					style={bgAttrs}
					className={activedClassName}>
						<div className="uix-accordion-slider__content">
							{children}
						</div>
					</li>
				) : ''}

				{ triggerType === 'mouseover' ? (
					<li 
					onMouseOver={boxToggleEv} 
					onMouseLeave={boxAnimLeaveEv}
					onTransitionEnd={boxAnimEndEv} 
					style={bgAttrs}
					className={activedClassName}>
						<div className="uix-accordion-slider__content">
							{children}
						</div>
					</li>
				) : ''}		



		  </>
		)
	}
}

