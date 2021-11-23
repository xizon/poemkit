import React, { Component } from 'react';


/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/Form/styles/_basic.scss';
import '@poemkit/components/Form/styles/_layout.scss';
import '@poemkit/components/Form/styles/_theme_material.scss';
import '@poemkit/components/Form/styles/rtl/_basic.scss';
import '@poemkit/components/Form/styles/rtl/_layout.scss';
import '@poemkit/components/Form/styles/rtl/_theme_material.scss';



type FileProps = {
	value?: string;
	label?: string | object;
	name?: string;
	required?: any;
	/** -- */
	id?: string;
};
type FileState = false;


export default class File extends Component<FileProps, FileState>  {
	
	private fileRef = React.createRef<HTMLDivElement>();

	uniqueID: string;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
	
        this.handleChange = this.handleChange.bind(this);
		
	}

	
	/**
	 * Listen to changes on this control
	 *
	 */
    handleChange(event) {
		const val = event.target.value;
		
		const $filePath = __( this.fileRef.current );
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
		const idRes = id || this.uniqueID;
	
		return (
		  <>
			
			

				<div className="poemkit-controls__file-container">  
				  <input 
					  type="file"
			          id={idRes}
					  name={nameRes}
					  defaultValue={value || ''}
			          onChange={this.handleChange}
					  required={required || null}
                      {...attributes}
					/>
				  <label htmlFor={idRes} className="poemkit-controls__file-trigger">
					  <i className="fa fa-upload" aria-hidden="true"></i>{label || null}
					  {required ? <><span className="poemkit-controls__im">*</span></> : ''}
				  </label>
				</div>
			    <p ref={this.fileRef} className="poemkit-controls__file-return">{value || ''}</p>
	
		  </>
		)
	}
}
