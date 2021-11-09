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
import '@poemkit/components/Tabs/styles/_style.scss';


//
import TabList from '@poemkit/components/Tabs/TabList';
import TabPanel from '@poemkit/components/Tabs/TabPanel';


type TabsProps = {
	center?: boolean;
	fullwidth?: boolean;
	rotation?: boolean;
	rotationRadius?: number;
	rotationWrapperAngle?: number;
	/** -- */
	id?: string;
};
type TabsState = false;


export default class Tabs extends Component<TabsProps, TabsState> {

	private rootRef = React.createRef<HTMLDivElement>();

	uniqueID: string;
	rotationEnabled: boolean;
	lastAngel: number;
	rotationRadius: number;
	rotationWapperDeg: number;
	
	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();

		// for rotation tabs
		this.rotationEnabled = this.props.rotation || false;
		this.lastAngel = 0;
		this.rotationRadius = this.props.rotationRadius || 130,
		this.rotationWapperDeg = this.props.rotationWrapperAngle || 0;

		//
		this.handleClickItem = this.handleClickItem.bind(this);
		
	}

	handleClickItem(e) {
		e.preventDefault();
		this.itemInit(e.currentTarget, false);
	}


	itemInit(targetEl, itemsInit) {
	
		const reactDomWrapperEl: any = this.rootRef.current;
		const currentIndex = Array.prototype.slice.call(targetEl.parentElement.children).indexOf(targetEl);
		const $li               = reactDomWrapperEl.querySelectorAll( '.poemkit-tabs__nav ul > li' ),
	          $allContent       = reactDomWrapperEl.querySelectorAll( '.poemkit-tabs__content' ),
			  liWidth           = $li[0].offsetWidth, //including: padding + borders + v-scrollbars (if rendered)
			  liHeight          = $li[0].offsetHeight, //including: padding + borders + v-scrollbars (if rendered)
			  itemsTotal         = $li.length;


		//
		const tabID = targetEl.dataset.tab;

		Array.prototype.forEach.call($li, (node) => {
			node.classList.remove( 'is-active' );
		});

		Array.prototype.forEach.call($allContent, (node) => {
			node.classList.remove( 'is-active' );
		});
		
		targetEl.classList.add( 'is-active' );
		if ( tabID !== undefined ) document.getElementById( tabID )!.classList.add( 'is-active' );


		/*
		////////////////////////////////////////////////////////////
		////////////////////   Default Events   ////////////////////
		////////////////////////////////////////////////////////////
		*/

		if ( !this.rotationEnabled ) {
			if ( this.props.fullwidth ) {
				Array.prototype.forEach.call($li, (node) => {
					node.style.width = ( 100 / itemsTotal ) + '%'
				});
			}

			//sliding marker
			const translateX = currentIndex * 100,
				translateY = currentIndex * liHeight;

			if ( window.innerWidth <= 768 ) {
				reactDomWrapperEl.querySelector( '.poemkit-tabs__marker' ).style.transform = 'translateY( '+translateY+'px )';
			} else {
				reactDomWrapperEl.querySelector( '.poemkit-tabs__marker' ).style.transform = 'translateX( '+translateX+'% )';
			}
		}

		

		/*
		////////////////////////////////////////////////////////////
		//////////////////   Rotation Effect   /////////////////////
		////////////////////////////////////////////////////////////
		*/
		// angle = rad / ( Math.PI / 180 )  = rad * ( 180/Math.PI );
		// rad = Math.PI / 180 * 30 ;

		if ( this.rotationEnabled ) {

			const step = 2 * Math.PI / itemsTotal;
			const pad = reactDomWrapperEl.querySelector( '.poemkit-tabs__nav ul' ).clientWidth;	//including: padding
	
			if ( itemsInit ) {
				reactDomWrapperEl.querySelector( '.poemkit-tabs__nav' ).style.width = this.rotationRadius * 2 + 'px';
				reactDomWrapperEl.querySelector( '.poemkit-tabs__nav ul' ).style.width = this.rotationRadius * 2 + 'px';
				reactDomWrapperEl.querySelector( '.poemkit-tabs__nav ul' ).style.height = this.rotationRadius * 2 + 'px';
				reactDomWrapperEl.querySelector( '.poemkit-tabs__nav ul' ).style.transform = 'rotate('+this.rotationWapperDeg+'deg)';

				let angle = 0;
				let transitionDelay = 0;

				Array.prototype.forEach.call($li, (node) => {

					const x  = this.rotationRadius * Math.cos(angle) - liWidth / 2,
						y  = this.rotationRadius * Math.sin(angle) - liHeight / 2;

					node.style.transform = 'translate('+x+'px,'+( pad/2 + y )+'px)';
					//node.style.transition = 'all 1s ease';
					node.style.transitionDelay = transitionDelay + "s";
					node.querySelector( 'a' ).style.transform = 'rotate('+(-this.rotationWapperDeg)+'deg)';
		


					angle += step;
					transitionDelay += 0.15;

					// Update the angle after animated
					this.lastAngel = angle;

				});

			}

			this.changeAngleAnim(targetEl, this.rotationRadius, this.rotationWapperDeg);

			
		}//end rotation


	}


	changeAngleAnim(targetEl, rotationRadius, rotationWapperDeg) {

		const self = this;
		const reactDomWrapperEl: any = this.rootRef.current;
		const currentIndex = Array.prototype.slice.call(targetEl.parentElement.children).indexOf(targetEl);
		const $li               = reactDomWrapperEl.querySelectorAll( '.poemkit-tabs__nav ul > li' ),
			  liWidth           = $li[0].offsetWidth, //including: padding + borders + v-scrollbars (if rendered)
			  liHeight          = $li[0].offsetHeight, //including: padding + borders + v-scrollbars (if rendered)
			  itemsTotal         = $li.length;

		let curAngle = self.lastAngel;	

		const increase = Math.PI * 2 / itemsTotal,
				endAngle = currentIndex % itemsTotal * increase; 

		( function turn() {
			if (Math.abs(endAngle - curAngle) > 1 / 8) {
				const sign = endAngle > curAngle ? 1 : -1;
				curAngle = curAngle + sign / 8;

				// Update the angle after animated
				self.lastAngel = curAngle;

				setTimeout(turn, 20);
			} else {
				curAngle = endAngle;

				// Update the angle after animated
				self.lastAngel = curAngle;	
			}

			Array.prototype.forEach.call($li, (node, index) => {
				const x2 = Math.cos( - Math.PI / 2 + index * increase - curAngle) * rotationRadius - liWidth / 2,
					y2 = Math.sin( - Math.PI / 2 + index * increase - curAngle) * rotationRadius + liHeight;


				node.style.transform = 'translate('+x2+'px,'+y2+'px)';
				node.style.transition = 'none';
				node.style.transitionDelay = 0;
				node.querySelector( 'a' ).style.transform = 'rotate('+(-rotationWapperDeg)+'deg)';

			});


		})();	

	}


	componentDidMount() {
		
		// Initialize tabs
		const reactDomWrapperEl: any = this.rootRef.current;
		const $li = reactDomWrapperEl.querySelectorAll( '.poemkit-tabs__nav ul > li' );
		this.itemInit($li[0], true);
	}
	
	

	render() {
		
		const { 
			center,
			fullwidth,
			rotation,
			id,
			children // the contents of the TabList and TabPanel in a loop
		} = this.props;
		

		return (
		  <>
 
			
				<div 
				    ref={this.rootRef}
					id={id || this.uniqueID} 
					className={"poemkit-tabs" + (!center && !rotation && !fullwidth ? ' poemkit-tabs--normal' : '') + (center ? ' poemkit-tabs--center' : '') + (rotation ? ' poemkit-tabs--rotation' : '')} 
					>
					<div className="poemkit-tabs__nav">
						<ul role="tablist">
							
							{(() => {
								if ( children != null ) {
									let tabListIndex = 0;
									return (children as any[]).map((item, i) => {
										const childProps = { ...item.props };
										delete childProps.key;
		
										if ( item.key.indexOf( 'tab-list' ) >= 0 ) {
											tabListIndex++;
											return <TabList 
														key={item.key} 
														index={tabListIndex} 
														switchEv={this.handleClickItem}
														targetID={`${this.uniqueID}-tabs-show-${tabListIndex}`} 
														{...childProps} />;
										}
										
										
									});		
								}
							})()}

							
						</ul>
					</div>
					{/*<!-- /.poemkit-tabs__nav -->*/}

					{(() => {
						if ( children != null ) {
							let tabPanelIndex = 0;
							return (children as any[]).map((item, i) => {
								const childProps = { ...item.props };
								delete childProps.key;

								if ( item.key.indexOf( 'tab-panel' ) >= 0 ) {
									tabPanelIndex++;
									return <TabPanel 
												key={item.key} 
												targetID={`${this.uniqueID}-tabs-show-${tabPanelIndex}`} 
												{...childProps} />;
								}

								
								
							});		
						}
					})()}

				</div>
				{/*<!-- .poemkit-tabs end -->*/}     
			
	
		  </>
		)
	}
}

