import React, { Component } from 'react';


type AccordionSliderItemProps = {
	defaultActive?: string | boolean | undefined;
	bg?: string;
	/** -- */
	children?: any;
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
			children,
			...attributes
		} = this.props;


		
		const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ' is-active' : '';
		const bgAttrs = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif|svg|webp))/i.test(bg as string) ? {backgroundImage: `url(${bg})` } : {backgroundColor: `${bg}` }

		
		return (
		  <>

				<li style={bgAttrs} className={activedClassName} {...attributes}>
					<div className="uix-accordion-slider__content">
						{children}
					</div>
				</li>

		  </>
		)
	}
}

