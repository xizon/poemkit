/* 
 *************************************
 * <!-- Dropdown Menu -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@poemkit/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/DropdownMenu/styles/_style.scss';
import '@poemkit/components/DropdownMenu/styles/rtl/_style.scss';


//
import Option from '@poemkit/components/DropdownMenu/Option';

type OptionChangeFnType = (arg1: any) => void;

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
	/** Button Icon */
	btnIcon?: React.ReactNode;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
     optionChangeCallback?: OptionChangeFnType | null;
    /** -- */
    id?: string;
};

type DropdownMenuState = {
    selected?: any;
    opened?: boolean;
};



export default class DropdownMenu extends Component<DropdownMenuProps, DropdownMenuState> {

    uniqueID: string;

	constructor(props) {
		super(props);

        this.uniqueID = 'app-' + __.GUID.create();
        
		this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.state = {
			selected: null,
			opened: false
		};

	}

	handleClose(e) {

        if ( e.target.closest( '.poemkit-dropdown-menu' ) === null ) {
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

		if ( typeof(this.props.optionChangeCallback) === 'function' ) {
			this.props.optionChangeCallback({
				"value": option
			});
		}

	}

    componentDidMount() {
        document.removeEventListener('mousedown', this.handleClose);
        document.addEventListener('mousedown', this.handleClose);
    }


     /** Remove the global list of events, especially as scroll and interval. */
     componentWillUnmount() {
         
        // Remove URL change events from document
        document.removeEventListener('mousedown', this.handleClose);

    }

  
    render() {

        const {
            name,
            defaultLabel,
            options,
            btnIcon,
            id
        } = this.props;

        const cid = id || this.uniqueID;
        const selectedLabel = this.state.selected ? this.state.selected.label : (defaultLabel === undefined ? 'Select' : defaultLabel);

		const selectOptionsListPresentation = options?.map((selectOption, index) => {
		    return <Option key={index} option={selectOption} onSelect={this.handleSelect} />;
		});

        return (
            <>

                <div className={"poemkit-dropdown-menu" + (this.state.opened ? ' is-opened' : '')} id={cid} onClick={this.handleClick}>
                    <span>
                        {btnIcon || null}
                        <span>{selectedLabel}</span>
                    </span>
                    <input name={name || ''} type="hidden" value={this.state.selected?.value} />
                    <ul>
                        {selectOptionsListPresentation}
                    </ul>
                </div>

            </>
        )
    }
}

