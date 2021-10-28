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
import '@uixkit.react/components/Accordion/styles/_style.scss';


//
import AccordionItem from '@uixkit.react/components/Accordion/AccordionItem';


type AccordionProps = {
	/** One event type, such as `click` or `mouseover` */
	triggerType?: string;
	/** Display the only first item of a list */
	displayTheFirstItem?: boolean;
	/** The number of milliseconds(ms) each iteration of the animation takes to complete */
	duration?: number;
	/** -- */
	id?: string;
};
type AccordionState = {
	showContent?: boolean;
	height?: number | string;
};


export default class Accordion extends Component<AccordionProps, AccordionState> {

	private rootRef = React.createRef<HTMLDivElement>();

	uniqueID: string;
	animOK: boolean;

	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
		this.animOK = false;
	
		this.handleClickItem = this.handleClickItem.bind(this);
		
	}

	handleClickItem(e) {
		e.preventDefault();
		//Prevents further propagation of the current event in the capturing and bubbling phases(if use `e.target`).
		e.stopPropagation();

		if ( this.animOK ) return;

		//
		const reactDomWrapperEl: any = this.rootRef.current;
		const reactDomEl: any = e.currentTarget;
		const animSpeed = this.props.duration || 200;
		const $li = reactDomWrapperEl.querySelectorAll( 'dl' );
		const $allContent = reactDomWrapperEl.querySelectorAll( 'dd' );
		const $curContent = reactDomEl.querySelector( 'dd' );
		

		if ( reactDomEl.getAttribute( 'aria-expanded' ) === 'false' || reactDomEl.getAttribute( 'aria-expanded' ) === null  ) {

			this.animOK = true;
			setTimeout( () => {
				this.animOK = false;
			}, animSpeed);

			//Hide other all sibling <dt> of the selected element
            Array.prototype.forEach.call($allContent, (node) => {
				if ( node.clientHeight > 0 ) {
					this.animateStyles(node, {
						startHeight  : node.scrollHeight,
						endHeight    : 0,
						speed        : animSpeed
					});				
				}

            });

			//to open
            Array.prototype.forEach.call($li, function (node) {
				node.classList.remove( 'is-active' );
				node.setAttribute( 'aria-expanded', false );
            });

			reactDomEl.classList.add( 'is-active' );
			reactDomEl.setAttribute( 'aria-expanded', true );
			// When the height of the element is 0, the value of `offsetHeight` and `clientHeight` will be 0
			this.animateStyles($curContent, {
				startHeight  : 0,
				endHeight    : $curContent.scrollHeight,
				speed        : animSpeed
			});
			
		} else {
			
			if ( e.type == 'click' ) {

				//to close
				reactDomEl.classList.remove( 'is-active' );
				reactDomEl.setAttribute( 'aria-expanded', false );
				this.animateStyles($curContent, {
					startHeight  : $curContent.scrollHeight,
					endHeight    : 0,
					speed        : animSpeed
				});
			}
			
		}
	}
	


	animateStyles( curElement, config ) {
		if ( typeof curElement === typeof undefined ) return;
		
		// Set a default configuration
		config = __.setDefaultOptions({
			"startHeight"  : 0,
			"endHeight"    : 0,
			"speed"        : 200, //ms
			"fps"          : 1000/60 // 60FPS
		}, config);

		//
		const _endHeight   = config.endHeight,
			  _speed       = config.speed,
			  _fps         = config.fps;

		let _startHeight = config.startHeight;
		let timer: any = null;
		const startTime = Date.now();
		const deltaHeight = curElement.clientHeight < _endHeight ? (_endHeight / _speed) * _fps : (_startHeight / _speed) * _fps;

		timer = setInterval( () => {
			const elapsed = Date.now() - startTime; //Work out the elapsed time
			
			//If the elapsed time is less than the speed (ms)
			if (elapsed < _speed) {
				if (curElement.clientHeight < _endHeight) {
					_startHeight = _startHeight + deltaHeight;
				} else {
					_startHeight = _startHeight - deltaHeight;
				}
				curElement.style.height = _startHeight + 'px';
			} else {
				curElement.style.height = _endHeight + 'px';
				clearInterval(timer);
			}
		},  _fps); 
			
	}

	render() {
		
		const { 
			triggerType,
			displayTheFirstItem,
			id,
			children // the contents of the AccordionList and AccordionPanel in a loop
		} = this.props;
		

		return (
		  <>


				<div
					ref={this.rootRef}
					id={id || this.uniqueID}
					className="uix-accordion"
					role="tablist">

					{( children != null ) ? (children as any[]).map((item, i) => {
						const childProps = { ...item.props };
						const _defaultActive = i === 0 && displayTheFirstItem ? true : false;
						return <AccordionItem
									key={"item" + i}
									defaultActive={_defaultActive}
									triggerType={triggerType || 'click'}
									boxToggleEv={this.handleClickItem}
									{...childProps}
									/>;						

					})
						: ""
					}



				</div>
				{/*<!-- .uix-accordion end -->*/}     
			
	
		  </>
		)
	}
}

