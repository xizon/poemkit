import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@poemkit/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/Button/styles/_style.scss';
import '@poemkit/components/Button/styles/rtl/_style.scss';


type ButtonProps = {
	status?: string;
	border?: string;
	background?: string;
	spacing?: string;
	corners?: string;
	size?: string;
	iconPosition?: string;
	icon?: React.ReactNode;
	href?: string;
	target?: string;
	/** -- */
	id?: string;
};
type ButtonState = false;



export default class Button extends Component<ButtonProps, ButtonState> {

	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
	}



	/**
	 * Set the class names of different styles
	 */
	styleTransferStatus(param) {
		let classes = '';
		if (typeof(param) === 'undefined' || param === false) param = '';
		
		//status
		if ( param.indexOf( 'disabled' ) >= 0 ) classes += ' is-disabled';
		if ( param.indexOf( 'waiting' ) >= 0 ) classes += ' is-waiting';
		

		return classes;
	}
	styleTransferBorder(param) {
		let classes = '';
		if (typeof(param) === 'undefined' || param === false) param = '';
		
		//border
		if ( param.indexOf( 'thin' ) >= 0 ) classes += ' poemkit-btn__border--thin';
		if ( param.indexOf( 'medium' ) >= 0 ) classes += ' poemkit-btn__border--medium';
		if ( param.indexOf( 'thick' ) >= 0 ) classes += ' poemkit-btn__border--thick';
		if ( param.indexOf( 'white' ) >= 0 ) classes += ' poemkit-btn__border--white';

		return classes;
	}
	styleTransferBackground(param) {
		let classes = '';
		if (typeof(param) === 'undefined' || param === false) param = '';

		//background
		if ( param.indexOf( 'primary' ) >= 0 ) classes += ' poemkit-btn__bg--primary';
		if ( param.indexOf( 'secondary' ) >= 0 ) classes += ' poemkit-btn__bg--secondary';
		if ( param.indexOf( 'hyperlink' ) >= 0 ) classes += ' poemkit-btn__bg--hyperlink';
		if ( param.indexOf( 'hyperlink2' ) >= 0 ) classes += ' poemkit-btn__bg--hyperlink2';
		if ( param.indexOf( 'transparent' ) >= 0 ) classes += ' is-transparent';
		if ( param.indexOf( 'fillwhite' ) >= 0 ) classes += ' is-fill-white';

		return classes;
	}
	styleTransferSpacing(param) {
		let classes = '';
		if (typeof(param) === 'undefined' || param === false) param = '';

		//margin
		if ( param.indexOf( 'bottom' ) >= 0 ) classes += ' poemkit-btn__margin--b';
		if ( param.indexOf( 'left' ) >= 0 ) classes += ' poemkit-btn__margin--l';
		if ( param.indexOf( 'right' ) >= 0 ) classes += ' poemkit-btn__margin--r';

		return classes;
	}
	styleTransferCorners(param) {
		let classes = '';
		if (typeof(param) === 'undefined' || param === false) param = '';

		//corners
		if ( param.indexOf( 'pill' ) >= 0 ) classes += ' is-pill';
		if ( param.indexOf( 'rounded' ) >= 0 ) classes += ' is-rounded';

		return classes;
	}
	styleTransferSize(param) {
		let classes = '';
		if (typeof(param) === 'undefined' || param === false) param = '';

		//size
		if ( param.indexOf( 'fullwidth' ) >= 0 ) classes += ' is-fullwidth';
		if ( param.indexOf( 'tiny' ) >= 0 ) classes += ' poemkit-btn__size--t';
		if ( param.indexOf( 'small' ) >= 0 ) classes += ' poemkit-btn__size--s';
		if ( param.indexOf( 'medium' ) >= 0 ) classes += ' poemkit-btn__size--m';
		if ( param.indexOf( 'large' ) >= 0 ) classes += ' poemkit-btn__size--l';

		return classes;
	}


	render() {
		
		const { 
			status,
			border,
			background,
			spacing,
			corners,
			size,
			iconPosition,
			icon,
			href,
			target,
			id,
			children,
			...attributes
		} = this.props;


		const _status = this.styleTransferStatus(status);
		const _border = this.styleTransferBorder(border);
		const _background = this.styleTransferBackground(background);
		const _spacing = this.styleTransferSpacing(spacing);
		const _corners = this.styleTransferCorners(corners);
		const _size = this.styleTransferSize(size);


		 //button icon
		let _iconPosition =  '';
		if (iconPosition === 'left') _iconPosition = ' poemkit-btn__icon poemkit-btn__icon--left';
		if (iconPosition === 'right') _iconPosition = ' poemkit-btn__icon poemkit-btn__icon--right';

		const _icon = icon || '';	 

		return (
		  <>
			
           {href ? (
                <a tabIndex={0} href={href || '#'} className={"poemkit-btn" + _status + _border + _background + _spacing + _corners + _size + _iconPosition} target={target || '_self'} id={id || this.uniqueID} {...attributes}>{_icon !== '' ? <><span>{_icon}</span></> : ''}{children}</a>
            ) : (
			  <button className={"poemkit-btn" + _status + _border + _background + _spacing + _corners + _size + _iconPosition} id={id || this.uniqueID} type="button" {...attributes}>{_icon !== '' ? <><span>{_icon}</span></> : ''}{children}</button>
            )}	
	
		  </>
		)
	}
}
