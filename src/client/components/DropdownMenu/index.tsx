/* 
 *************************************
 * <!-- Dropdown Menu -->
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
import '@uixkit.react/components/DropdownMenu/styles/_style.scss';
import '@uixkit.react/components/DropdownMenu/styles/rtl/_style.scss';


//
import Option from '@uixkit.react/components/DropdownMenu/Option';


interface OptionConfig {
	value?: string | undefined;
	label?: string | undefined;
}

type DropdownMenuProps = {
    /** Set a name for the form field for this component  */
    name?: string;
    /** Specify a default label text */
    defaultLabel?: string;
    /** Specify data of Dropdown Menu as a JSON string format. 
     * Such as: `[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"}]` */
    options?: OptionConfig[];
    /** -- */
    id?: string;
};

type DropdownMenuState = {
    selected?: any;
    opened?: boolean;
};



export default class DropdownMenu extends Component<DropdownMenuProps, DropdownMenuState> {
	constructor(props) {
		super(props);
        
		this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.state = {
			selected: null,
			opened: false
		};

	}

	handleClose(e) {

        if ( e.target.closest( '.uix-dropdown-menu' ) === null ) {
            this.setState({
                opened: false
            });
        }
	}  

	handleClick() {
		this.setState({
			opened: !this.state.opened
		});
	}

	handleSelect(option) {
		this.setState({
			selected: option,
			opened: false
		});
	}

    componentDidMount() {
        document.body.removeEventListener('mousedown', this.handleClose);
        document.body.addEventListener('mousedown', this.handleClose);
    }

  
    render() {

        const {
            name,
            defaultLabel,
            options,
            id,
            ...attributes
        } = this.props;

        const cid = id || 'app-dropdown-menu-' + __.GUID.create();
        const selectedLabel = this.state.selected ? this.state.selected.label : (defaultLabel === undefined ? 'Select' : defaultLabel);

		const selectOptionsListPresentation = options?.map((selectOption, index) => {
		    return <Option key={index} option={selectOption} onSelect={this.handleSelect} />;
		});

        return (
            <>

                <div className={"uix-dropdown-menu" + (this.state.opened ? ' is-opened' : '')} id={cid} {...attributes} onClick={this.handleClick}>
                    <span><i className="fa fa-cog" aria-hidden="true"></i> <span>{selectedLabel}</span></span>
                    <input name={name || ''} type="hidden" value={this.state.selected?.value} />
                    <ul>
                        {selectOptionsListPresentation}
                    </ul>
                </div>

            </>
        )
    }
}

