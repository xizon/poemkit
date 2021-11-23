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

type TagInputProps = {
	maxTags?: number;
	ui?: string;
	value?: string;
	name?: string;
	disabled?: any;
	required?: any;
	placeholder?: string;
	/** -- */
	id?: string;
};
type TagInputState = {
	userInput?: string;
	items?: any[];
	alreadyInItems?: boolean;
};


export default class TagInput extends Component<TagInputProps, TagInputState> {

	private rootRef = React.createRef<HTMLDivElement>();

	uniqueID: string;
	lastId: number;
	defaultTagsVal: any[];
	max: number;
	
	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();


		this.defaultTagsVal = [];
		this.lastId = -1;
		this.max = this.props.maxTags ? this.props.maxTags : 10;

		//get default value
		if ( this.props.value ) {
			this.props.value.trim().replace(/^\,|\,$/g, '').split(',').forEach( (item, index) => {
				this.defaultTagsVal.push({
					content: item,
					id: index
				});
			});
		}

		//
		this.state = {
			// What the user has entered
			userInput: '',
			items: this.props.value ? this.defaultTagsVal : [],
			alreadyInItems: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleKeypress = this.handleKeypress.bind(this);
		this.handleClick = this.handleClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

	}

	createAddedList() {

		const elements = this.state.items!.map((listitem, index) => (
			<li
				key={listitem.id}
				onClick={this.handleClick}
				data-item={listitem.id}
			>
				{listitem.content}
			</li>
		));

		return elements;
	}

	handleFocus() {
		this.rootRef.current?.classList.add( 'is-active' );
	}

	handleBlur() {
		this.rootRef.current?.classList.remove( 'is-active' );
	}
	
	handleClick(e) {
		const idToRemove = Number(e.target.dataset["item"]);
		const newArray = this.state.items!.filter((listitem) => { return listitem.id !== idToRemove });
		this.setState({ items: newArray });
	}
	handleKeypress(e) {
		
		if (e.key == "Enter") {
			e.preventDefault();

			const alreadyInItems = this.state.alreadyInItems;
			if (alreadyInItems) return false;
				
			//
			const newArray = this.state.items;
			const currentcontent = this.state.userInput!.trim();
			if (!currentcontent) {
				return;
			}
  
			//Limit the total number of tags added
			if ( this.max-1 < newArray!.length ) {
				return;
			}

			newArray!.push({
				content: currentcontent,
				id: ++this.lastId
			});

			this.setState({
				items: newArray,
				userInput: '',
			});
		}
	}

	handleChange(e) {

		const { items } = this.state;
		const userInput = e.currentTarget.value;
		let alreadyInItems = this.state.alreadyInItems;

		if (items && items.length > 0) {
			const alreadyIn = items.some(function (obj) {
				return obj.content.toLowerCase() == userInput.toLowerCase();
			});
			if (alreadyIn) {
				alreadyInItems = true;
			} else {
				alreadyInItems = false;
			}
  
		}
  
		this.setState({
			userInput: e.currentTarget.value,
			alreadyInItems: alreadyInItems
		});


	};


  
    /**
     * Set the class names of different styles
     */
	uiSwitch(param) {
		
		let classes = '';
		
		//corners
		if ( param.indexOf( 'pill' ) >= 0 ) classes += ' is-pill';
		if ( param.indexOf( 'rounded' ) >= 0 ) classes += ' is-rounded';
		
		//size
		if ( param.indexOf( 'fullwidth' ) >= 0 ) classes += ' is-fullwidth';
		
		return classes;
	}
	
	
	render() {
		
		const { 
			ui,
			disabled,
			required,
			placeholder,
			name,
			id
		} = this.props;
		
		
		const uiRes = typeof(ui) === 'undefined' ? '' : ui;
		const nameRes = typeof(name) === 'undefined' ? '' : name;
		const idRes = id || this.uniqueID;
		const wrapperClassDisabled = disabled ? ' is-disabled' : '';
		const wrapperClassUi = this.uiSwitch(uiRes);

		//
		const resArr: string[] = [];
		this.state.items!.forEach((listitem) => {
			resArr.push(listitem.content);
		});
		const resVal = resArr.join(',');

		return (
		  <>

			<div ref={this.rootRef} className={"poemkit-controls__tags-wrapper" + wrapperClassUi}>
				<div>
					<ul className="poemkit-controls__tags__list">
						{this.createAddedList()}
					</ul>

					<div className={"poemkit-controls__tags" + wrapperClassDisabled}>
						<input
							type="text"
							autoComplete="off"
							placeholder={placeholder || ''}
							value={this.state.userInput}
							disabled={disabled || null}
							onChange={this.handleChange}
							onKeyPress={this.handleKeypress}
							onFocus={this.handleFocus}
							onBlur={this.handleBlur}
						/>

					</div>
				</div>

				<input
					type="hidden"
					id={idRes}
					name={nameRes}
					defaultValue={resVal}
					required={required || null}
				/>

			</div>

		  </>
		)
	}
}


