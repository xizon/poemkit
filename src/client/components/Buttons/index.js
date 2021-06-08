/* 
 *************************************
 * <!-- Button -->
 *************************************
 */
import PropTypes from "prop-types";
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap.js';
import '@uixkit.react/components/_plugins/_lib-gsap.js';
import '@uixkit.react/components/_plugins/_lib-icons.js';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utilities/styles/_all.scss';
import '@uixkit.react/components/_utilities/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Buttons/styles/_style.scss';
import '@uixkit.react/components/Buttons/styles/rtl/_style.scss';



export default class Button extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		
		const { 
			href,
			target,
			className,
			id,
			type,
			children,
			...attributes
		} = this.props;

		
		return (
		  <>
			
           {href ? (
                <a tabIndex="0" href={href || '#'} className={className || ''} target={target || '_self'} id={id || 'app-btn-' + __.GUID.create()} {...attributes}>{children}</a>
            ) : (
			  <button className={className || ''} id={id ? id : 'app-btn-' + __.GUID.create() } type={type || 'button'} {...attributes}>{children}</button>
            )}	
	
		  </>
		)
	}
}


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	Button.propTypes = {
	    href: PropTypes.string,
		target: PropTypes.string,
		className: PropTypes.string.isRequired,
		id: PropTypes.string,
		type: PropTypes.string
	}

	
}


