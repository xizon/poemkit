import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@/components/_plugins/_lib-bootstrap';
import '@/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@/components/_utils/styles/_all.scss';
import '@/components/_utils/styles/rtl/_all.scss';
import { __ } from '@/components/_utils/_all';

/*-- Apply this component styles --*/
import '@/components/AccordionSlider/styles/_style.scss';


//
import AccordionSliderItem from '@/components/AccordionSlider/AccordionSliderItem';


type AccordionSliderProps = {
	/** One event type, such as `click` or `mouseover` */
	triggerType?: string;
	/** Display the only first item of a list */
	displayTheFirstItem?: boolean;
	/** Reset the initial state when the mouse moves out of the component area */
	autoReset?: boolean;
	/** Display ratio measures the activated item's percentage of the component in the entire area */
	displayRatio?: string;
	/** The direction of the component animation, if it is `horizontal`, it means changing the width, otherwise changing the height */
	direction?: string;
	/** The button that triggers the restoration of the initial state, represented by class, such as `.poemkit-accordion-img__close` */
	closeBtn?: string | boolean;
	/** The number of milliseconds(ms) each iteration of the animation takes to complete */
	duration?: number;
	/** -- */
	id?: string;
	children: React.ReactNode;
};
type AccordionSliderState = false;


export default class AccordionSlider extends Component<AccordionSliderProps, AccordionSliderState> {

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

		// only for desktop
		if ( window.innerWidth > 768 ) {

			e.preventDefault();
			//Prevents further propagation of the current event in the capturing and bubbling phases(if use `e.target`).
			e.stopPropagation();

			if ( this.animOK ) return;

			//
			const reactDomWrapperEl: any = this.rootRef.current;
			const reactDomEl: any = e.currentTarget;
			const animSpeed = this.props.duration || 200;
			const $li = reactDomWrapperEl.querySelectorAll( 'ul > li' );
			const total = $li.length;
			const offsetVal = this.props.displayRatio || '60%';
			const dir = this.props.direction || 'horizontal';
			

			//Apply click method to outer div but not inner div
			if ( e.target.className == 'poemkit-accordion-slider__content__info' || e.target.className == 'poemkit-accordion-slider__content' ) {
				
				this.animOK = true;
				setTimeout( () => {
					this.animOK = false;
				}, animSpeed);


				//set other all sibling <li> of the selected element
				Array.prototype.forEach.call($li, (node) => {
					node.classList.add( 'active-sub' );
					if ( node.clientHeight > 0 ) {
						this.animateStyles(node, {
							direction        : dir,
							startPercentage  : 100 / total,
							endPercentage    : (100 - parseFloat(offsetVal)) / (total-1),
							speed            : animSpeed
						});				
					}	
				});
					

				//
				reactDomEl.classList.add( 'is-active' );
				this.animateStyles(reactDomEl, {
					direction        : dir,
					startPercentage  : 100 / total,
					endPercentage    : parseFloat(offsetVal),
					speed            : animSpeed
				});


			}

		}

		
	}

	// Initialize the width or height of each item
	handleResetItems() {

		// only for desktop
		if ( window.innerWidth > 768 ) {

			const reactDomWrapperEl: any = this.rootRef.current;
			const $li = reactDomWrapperEl.querySelectorAll( 'ul > li' );
			const total = $li.length;
			const animSpeed = this.props.duration || 200;

			Array.prototype.forEach.call($li, (node) => {
				node.classList.remove( 'is-active', 'active-sub' );
				this.animateStyles(node, {
					direction        : this.props.direction,
					startPercentage  : this.props.direction === 'verticle' ? (node.scrollHeight / reactDomWrapperEl.clientHeight) * 100 : (node.scrollWidth / reactDomWrapperEl.clientWidth) * 100,
					endPercentage    : 100 / total,
					speed            : animSpeed
				});
			});

		}


	}

	animateStyles( curElement, config ) {
		if ( typeof curElement === typeof undefined ) return;
		
		// Set a default configuration
		config = __.setDefaultOptions({
			"direction"        : "horizontal", // `horizontal` or `verticle`
			"startPercentage"  : 0,
			"endPercentage"    : 0,
			"speed"            : 200, //ms
			"fps"              : 1000/60 // 60FPS
		}, config);
	
		//
		const _direction       = config.direction,
			  _endPercentage   = config.endPercentage,
			  _speed           = config.speed,
			  _fps             = config.fps;
	
		let _startPercentage = config.startPercentage;
		let timer: any = null;
		const startTime = Date.now();
		const deltaPercentage = config.startPercentage < _endPercentage ? (_endPercentage / _speed) * _fps : (_startPercentage / _speed) * _fps;
	
		timer = setInterval( () => {
			const elapsed = Date.now() - startTime; //Work out the elapsed time
			
			//If the elapsed time is less than the speed (ms)
			if (elapsed < _speed) {
				if (config.startPercentage < _endPercentage) {
					_startPercentage = _startPercentage + deltaPercentage;
				} else {
					_startPercentage = _startPercentage - deltaPercentage;
				}
				if (_direction === 'horizontal') {
					curElement.style.width = _startPercentage + '%';
				} else {
					curElement.style.height = _startPercentage + '%';
				}
				
			} else {
				if (_direction === 'horizontal') {
					curElement.style.width = _endPercentage + '%';
				} else {
					curElement.style.height = _endPercentage + '%';
				}
				
				clearInterval(timer);
			}
		},  _fps); 
			
	}



    componentDidMount() {
		//Initialize the width or height of each item
		this.handleResetItems();

		//auto close
		const closeBtn = this.props.closeBtn || false;
		if ( closeBtn !== null && closeBtn != false && closeBtn != '' ) {
			__( closeBtn ).off( 'click' ).on( 'click', (e) => {
				e.preventDefault();
				this.handleResetItems();
			}); 		
			
		}			
    }


	render() {
		
		const { 
			triggerType,
			displayTheFirstItem,
			autoReset,
			id,
			children // the contents of the AccordionSliderList and AccordionSliderPanel in a loop
		} = this.props;
		

		return (
		  <>

	 
				<div 
				    ref={this.rootRef}
					id={id || this.uniqueID}
					className="poemkit-accordion-slider">
					<ul>

						{( children != null ) ? (children as any[]).map((item, i) => {
							const childProps = { ...item.props };
							const _defaultActive = i === 0 && displayTheFirstItem ? true : false;
							return <AccordionSliderItem
										key={"item" + i}
										defaultActive={_defaultActive}
										triggerType={triggerType || 'click'}
										boxToggleEv={this.handleClickItem}
										elAnimLeaveEv={autoReset ? ()=>{this.handleResetItems();} : ()=>{} }
										{...childProps}
										/>;		

						})
							: ""
						}
					</ul>

				</div>
				{/*<!-- .poemkit-accordion-slider end -->*/}     
			
	
		  </>
		)
	}
}

