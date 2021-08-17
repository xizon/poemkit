import React, { Component } from 'react';
import ReactDOM from 'react-dom';


/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap';
import '@uixkit.react/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utils/styles/_all.scss';
import '@uixkit.react/components/_utils/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Form/styles/_basic.scss';
import '@uixkit.react/components/Form/styles/_layout.scss';
import '@uixkit.react/components/Form/styles/_theme_material.scss';
import '@uixkit.react/components/Form/styles/rtl/_basic.scss';
import '@uixkit.react/components/Form/styles/rtl/_layout.scss';
import '@uixkit.react/components/Form/styles/rtl/_theme_material.scss';



type FileProps = {
	value?: string;
	label?: string | object;
	name?: string;
	required?: any;
	/** -- */
	id?: string;
	attributes?: any;
};
type FileState = false;


export default class File extends Component<FileProps, FileState>  {
	
	//Refs are commonly assigned to an instance property when a component 
	//is constructed so they can be referenced throughout the component.
	private fileRef = React.createRef<HTMLDivElement>();

	constructor(props) {
		super(props);
	
        this.handleChange = this.handleChange.bind(this);
		
	}

	
	/**
	 * Listen to changes on this control
	 *
	 */
    handleChange(event) {
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
			          onChange={this.handleChange}
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
