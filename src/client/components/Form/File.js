import PropTypes from "prop-types";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/plugins/_lib-bootstrap.js';
import '@uixkit.react/plugins/_lib-gsap.js';
import '@uixkit.react/plugins/_lib-icons.js'; 

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utilities/styles/_all.scss';
import '@uixkit.react/components/_utilities/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Form/styles/_basic.scss';
import '@uixkit.react/components/Form/styles/_layout.scss';
import '@uixkit.react/components/Form/styles/_theme_material.scss';
import '@uixkit.react/components/Form/styles/rtl/_basic.scss';
import '@uixkit.react/components/Form/styles/rtl/_layout.scss';
import '@uixkit.react/components/Form/styles/rtl/_theme_material.scss';



export default class File extends Component {
	
	constructor(props) {
		super(props);
		
		//Refs are commonly assigned to an instance property when a component 
		//is constructed so they can be referenced throughout the component.
		this.fileRef = React.createRef();
		
        this.handleOnChange = this.handleOnChange.bind(this);
		
	}


    handleOnChange(event) {
		const el = __( event.target );
		const val = event.target.value;
		
		const $filePath = __( ReactDOM.findDOMNode(this.fileRef.current) );
		$filePath.html( val );
	
    }
	
	
	render() {
		
		const { 
			required,
			value,
			label,
			name,
			id,
			...attributes
		} = this.props;
		
		
		const nameRes = typeof(name) === 'undefined' ? ( typeof(label) !== 'undefined' ? __.toSlug( label ) : '' )  : name;
		const idRes = id ? id : 'app-control-' + __.GUID.create();
	
		return (
		  <>
			
			

				<div className="uix-controls__file-container">  
				  <input 
					  type="file"
			          id={idRes}
					  name={nameRes}
					  defaultValue={value || ''}
			          onChange={this.handleOnChange}
					  required={required || null}
                      {...attributes}
					/>
				  <label htmlFor={idRes} className="uix-controls__file-trigger">
					  <i className="fa fa-upload" aria-hidden="true"></i>{label || null}
					  {required ? <><span className="uix-controls__im">*</span></> : ''}
				  </label>
				</div>
			    <p ref={this.fileRef} className="uix-controls__file-return">{value || ''}</p>
	
		  </>
		)
	}
}


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	File.propTypes = {
		value: PropTypes.string,
		label: PropTypes.string,
		name: PropTypes.string,
		id: PropTypes.string,
		required: PropTypes.any	   
		
	}

}

