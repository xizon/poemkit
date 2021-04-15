/* 
 *************************************
 * <!-- Button -->
 *************************************
 */

import React, { Component, Fragment } from 'react';


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
import '@uixkit.react/components/_utilities/scss/_all.scss';
import '@uixkit.react/components/_utilities/scss/rtl/_all-rtl.scss';
import { __ } from '@uixkit.react/components/_utilities/js/_all.js';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Buttons/styles/index.scss';


const styles = {
    info: {
        backgroundColor: '#38c9ff',
        color: 'white'
    },
    success: {
        backgroundColor: '#16c900',
        color: 'white'
    },
    danger: {
        backgroundColor: '#ff2222',
        color: 'white'
    },
    warning: {
        backgroundColor: '#dfa22f',
        color: 'white'
    }
};


export default class Button extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		  <Fragment>
			  <button className='uix-button' type='button' style={styles[this.props.UixBtnBgColor] || styles['info']}>
				{this.props.UixBtnName || 'Default'}
			  </button>
		  </Fragment>
		)
	}
}



