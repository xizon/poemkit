/* 
 *************************************
 * <!-- Button -->
 *************************************
 */

import React, { Component } from 'react';


/*-- Apply Third-party plugins --*/
//1) Bootstrap
import '@uixkit.react/plugins/Bootstrap/scss/bootstrap.scss';  


//2) Fontawesome
import '@uixkit.react/plugins/FontAwesome/scss/fontawesome.scss';  
import '@uixkit.react/plugins/FontAwesome/scss/v4-shims.scss';  
import '@uixkit.react/plugins/FontAwesome/scss/solid.scss';  
import '@uixkit.react/plugins/FontAwesome/scss/brands.scss';  
import '@uixkit.react/plugins/FontAwesome/scss/regular.scss';  



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
			...attributes
		} = this.props;

		
		return (
		  <>
			
           {href ? (
                <a tabIndex="0" href={href || '#'} className={className || ''} target={target || '_self'} id={id || 'app-btn-' + __.GUID.create()} {...attributes}></a>
            ) : (
			  <button className={className || ''} id={id ? id : 'app-btn-' + __.GUID.create() } type={type || 'button'} {...attributes}></button>
            )}	
	
		  </>
		)
	}
}



