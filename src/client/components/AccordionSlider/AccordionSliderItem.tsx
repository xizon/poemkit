import React, { Component } from 'react';


type AccordionSliderItemProps = {
	/** Set an item to activate by default */
	defaultActive?: string | boolean | undefined;
	/** The URL or color of the background image. */
	bg?: string;
	/** Handling events for collapsing item */
	boxToggleEv?: React.MouseEventHandler<HTMLElement>;
	/** Handling events when the animation execution is complete */
	elAnimEndEv?: React.TransitionEventHandler<HTMLElement>;
	/** Handling events when the mouse leaves the element */
	elAnimLeaveEv?: React.MouseEventHandler<HTMLElement>;
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
			elAnimEndEv,
			elAnimLeaveEv,
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
					onMouseLeave={elAnimLeaveEv}
					onTransitionEnd={elAnimEndEv} 
					style={bgAttrs}
					className={activedClassName}>
						<div className="poemkit-accordion-slider__content">
							{children}
						</div>
					</li>
				) : ''}

				{ triggerType === 'mouseover' ? (
					<li 
					onClick={(e) => e.preventDefault()}
					onMouseOver={boxToggleEv} 
					onMouseLeave={elAnimLeaveEv}
					onTransitionEnd={elAnimEndEv} 
					style={bgAttrs}
					className={activedClassName}>
						<div className="poemkit-accordion-slider__content">
							{children}
						</div>
					</li>
				) : ''}		



		  </>
		)
	}
}

