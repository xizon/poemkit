/* 
 *************************************
 * <!-- Button -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap';
import '@uixkit.react/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utils/styles/_all.scss';
import '@uixkit.react/components/_utils/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Button/styles/_style.scss';
import '@uixkit.react/components/Button/styles/rtl/_style.scss';


type ButtonProps = {
	className: string;
	href?: string;
	target?: string;
	/** -- */
	id?: string;
	children?: any;
	attributes?: any;
};
type ButtonState = false;



export default class Button extends Component<ButtonProps, ButtonState> {
	constructor(props) {
		super(props);
	}
	render() {
		
		const { 
			href,
			target,
			className,
			id,
			children,
			...attributes
		} = this.props;

		
		return (
		  <>
			
           {href ? (
                <a tabIndex={0} href={href || '#'} className={className || ''} target={target || '_self'} id={id || 'app-btn-' + __.GUID.create()} {...attributes}>{children}</a>
            ) : (
			  <button className={className || ''} id={id ? id : 'app-btn-' + __.GUID.create() } type="button" {...attributes}>{children}</button>
            )}	
	
		  </>
		)
	}
}
