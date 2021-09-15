import React, { Component } from 'react';

type ButtonGroupProps = {
	spacing?: string;
	fullwidth?: boolean;
	/** -- */
	children?: any;
};
type ButtonGroupState = false;

export default class ButtonGroup extends Component<ButtonGroupProps, ButtonGroupState> {
    constructor(props) {
        super(props);
    }

    /**
     * Set the class names of different styles
     */
	 styleTransferSpacing(param) {
		let classes = '';
		if (typeof(param) === 'undefined' || param === false) param = '';
		
		//margin
		if ( param.indexOf( 'bottom' ) >= 0 ) classes += ' uix-btn__margin--b';
		if ( param.indexOf( 'left' ) >= 0 ) classes += ' uix-btn__margin--l';
		if ( param.indexOf( 'right' ) >= 0 ) classes += ' uix-btn__margin--r';

		return classes;
	}
	

    render() {

        const {
			spacing,
			fullwidth,
            children
        } = this.props; 

		const _spacing = this.styleTransferSpacing(spacing);

		return (
            <>
			    <div className={"uix-btn__group" + _spacing + (fullwidth ? ' is-fullwidth' : '')}>{children}</div>
    
            </>
          )
    }
}