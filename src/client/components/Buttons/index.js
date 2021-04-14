/* 
 *************************************
 * <!-- Button -->
 *************************************
 */

import React, { Component, Fragment } from 'react';


/*-- Apply Third-party plugins --*/
//1) Bootstrap
import '../_third-party-plugins/Bootstrap/scss/bootstrap.scss';  


//2) Fontawesome
import '../_third-party-plugins/FontAwesome/scss/fontawesome.scss';  
import '../_third-party-plugins/FontAwesome/scss/v4-shims.scss';  
import '../_third-party-plugins/FontAwesome/scss/solid.scss';  
import '../_third-party-plugins/FontAwesome/scss/brands.scss';  
import '../_third-party-plugins/FontAwesome/scss/regular.scss';  



/*-- Apply global scripts and styles --*/
import '../_utilities/scss/_all.scss';
import '../_utilities/scss/rtl/_all-rtl.scss';
import { __ } from '../_utilities/js/_all.js';

/*-- Apply this component styles --*/
import './styles/index.scss';


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



