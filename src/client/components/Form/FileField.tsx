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


declare global {
    interface Window { dropZoneTimeout: any; }
}


type FileFieldProps = {
	value?: string;
	label?: string | object;
	name?: string;
	required?: any;
	/** -- */
	id?: string;
};
type FileFieldState = false;



export default class FileField extends Component<FileFieldProps, FileFieldState> {
	
	private dropZoneRef = React.createRef<HTMLInputElement>();

	uniqueID: string;

	constructor(props) {
		super(props);
		
		this.uniqueID = 'app-' + __.GUID.create();
		
		this.handleDragOver = this.handleDragOver.bind(this);
        this.handleChange = this.handleChange.bind(this);
		
	}

	
	
	/**
	 * Bind a DragOver event to target modules.
	 *
	 */
    handleDragOver(event) {
		event.preventDefault();
		const $dropZone = __( this.dropZoneRef.current );
	
		const timeout = window.dropZoneTimeout;
		if (!timeout) {
			$dropZone.addClass( 'in' );
		} else {
			clearTimeout(timeout);
		}
		let found = false,
			$node = event.target;
		do {
			if ($node === $dropZone[0]) {
				found = true;
				break;
			}
			$node = $node.parentNode;
		} while ( $node != null );
		if (found) {
			$dropZone.addClass( 'hover' );
		} else {
			$dropZone.removeClass( 'hover' );
		}
		window.dropZoneTimeout = setTimeout(function() {
			window.dropZoneTimeout = null;
			$dropZone.removeClass( 'in hover' );
		}, 100 );	
		
    }
	
	
	
	/**
	 * Listen to changes on this control
	 *
	 */
    handleChange(event) {
		const el = __( event.target );
		const $input = el.get(0);
		
		if ( $input.files && $input.files[0] ) {
			const reader = new FileReader();
			reader.onload = function( e ) {
				const imgName = $input.files[0].name;
				$input.setAttribute( 'data-title', imgName );
				//console.log(e.target.result);
			}
			reader.readAsDataURL( $input.files[0] );
		}
		
	
    }
	
	
	componentDidMount() {

		document.removeEventListener('dragover', this.handleDragOver);
		document.addEventListener('dragover', this.handleDragOver);
	}

	/** Remove the global list of events, especially as scroll and interval. */
	componentWillUnmount() {

		// Remove scroll events from document
		document.removeEventListener('dragover', this.handleDragOver);

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
			
			
				<div className="poemkit-controls__file-field-container">  
					<div className="poemkit-controls__file-field-trigger">
					  <div>
						  <input 
			                  ref={this.dropZoneRef}
							  type="file"
			                  accept="image/*"
			                  data-title={value ? value : label || null}
							  id={idRes}
							  name={nameRes}
							  defaultValue={value || ''}
							  onChange={this.handleChange}
							  required={required || null}
							  {...attributes}
							/>
			
					  </div>
					</div>
				</div>
	
		  </>
		)
	}
}
