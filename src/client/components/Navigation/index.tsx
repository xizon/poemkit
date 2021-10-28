/* 
 *************************************
 * <!-- Navigation -->
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
import '@uixkit.react/components/Navigation/styles/_primary-navigation.scss';
import '@uixkit.react/components/Navigation/styles/_mobile-menu.scss';
import '@uixkit.react/components/Navigation/styles/rtl/_primary-navigation.scss';
import '@uixkit.react/components/Navigation/styles/rtl/_mobile-menu.scss';


//
import MenuList from '@uixkit.react/components/Navigation/MenuList';


type NavigationProps = {
    /** Specify data of Cascading DropDown List as a JSON string format. 
     * Such as: `[{"title":<><li><NavLink data-route="true" to="/components-demo">Route Link</NavLink></li></>,"link":"#","mega":false},{"title":"Top level 1","link":"#","mega":false},{"title":"Top level 2","link":"#","mega":false,"children":[{"title":"Sub level 2","link":"#","mega":false,"children":[{"title":"Sub Sub Level 2","link":"#","mega":false}]}]},{"title":"Mega Menu","link":"#","mega":{"columnLists":[{"heading":"Mega Menu 1","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]},{"heading":"Mega Menu 2","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]},{"heading":"Mega Menu 3","list":[{"title":"Menu Text","link":"#"},{"title":"Menu Text","link":"#"}]}]}},{"title":"Top level 3","link":"https://example.com","mega":false}]` */
	 data?: any[any];
	 /** Set navigation to the left or right */
	 position?: string;
	 /** Set the trailing tool in the way of HTML Element, which can be a social button or other. */
	 tools?: React.ReactNode;
	 /** Specify a LOGO address for mobile navigation */
	 mobileLogo?: string; 
	 /** Specify a navigation label */
	 label?: string;
	 /** Whether to enable mobile navigation */
	 displayMobileNav?: boolean;
	 
};
type NavigationState = false;


export default class Navigation extends Component<NavigationProps, NavigationState> {

	private mobileToggleRef = React.createRef<HTMLDivElement>();
	private mobileMaskRef = React.createRef<HTMLDivElement>();

    windowScrollUpdate: () => void;
	
    constructor(props) {
        super(props);

        // Add a scroll event listener to window
        this.handleScrollEvent = this.handleScrollEvent.bind(this);
        this.windowScrollUpdate = __.throttle(this.handleScrollEvent, 5);

		// for mobile
		this.handleClickMobileToggle = this.handleClickMobileToggle.bind(this);
		this.handleClickMobileClose = this.handleClickMobileClose.bind(this);
    
		
    }

    handleScrollEvent() {
		const $elMenuContainer = __( '.uix-menu__container:not(.is-mobile)' );
		const $elMobileToggle = __( '.admin-bar .uix-menu-mobile__toggle' );
		const scrolled = __( window ).scrollTop();

		// Primary Menu
		//Sticky primary navigation
		if ( scrolled >= 220 ) {
			$elMenuContainer.addClass( 'is-fixed' );
		} else {
			$elMenuContainer.removeClass( 'is-fixed' );	
		}

		// Mobile Menu
		//Show Toolbar when viewing site for WordPress
		if ( scrolled >= 46 ) {
			$elMobileToggle.addClass( 'is-fixed' );
		} else {
			$elMobileToggle.removeClass( 'is-fixed' );	
		}
    }

	

	handleClickMobileToggle(e) {
		e.preventDefault();
		
		//Prevents further propagation of the current event in the capturing and bubbling phases.
		e.stopPropagation();
		
		const el = e.currentTarget;
		el.classList.toggle( 'is-active' );

		if ( el.classList.contains( 'is-active' ) ) {
			document.body.classList.add( 'js-uix-menu-opened' );
		} else {
			document.body.classList.remove( 'js-uix-menu-opened' );
		}
	}

	handleClickMobileClose() {
		this.mobileToggleRef.current!.classList.remove( 'is-active' );
		document.body.classList.remove( 'js-uix-menu-opened' );
	}



	componentDidMount() {

        // Add function to the element that should be used as the scrollable area.
        window.removeEventListener('scroll', this.windowScrollUpdate);
        window.removeEventListener('touchmove', this.windowScrollUpdate);
        window.addEventListener('scroll', this.windowScrollUpdate);
        window.addEventListener('touchmove', this.windowScrollUpdate);
        
        // Prevent calculation errors caused by unloaded completion
        __( document ).ready( () => {
            this.windowScrollUpdate();
        });


	}

	
    /** Remove the global list of events, especially as scroll and interval. */
    componentWillUnmount() {
		
        // Remove scroll events from window
        window.removeEventListener('scroll', this.windowScrollUpdate);
        window.removeEventListener('touchmove', this.windowScrollUpdate);  

    }


	createMenu(mobileEnabled) {
		
		const { 
			data,
			position,
			tools,
			mobileLogo,
			label,
			displayMobileNav
		} = this.props;


		return (
			<>
				<nav 
				className={mobileEnabled ? 'uix-menu__container is-mobile' : 'uix-menu__container'} 
				ref={(node) => {
					if (node) {
						if ( position === 'left' ) node.style.setProperty("float", "left", "important");
						if ( !displayMobileNav ) node.style.setProperty("display", "block", "important");
					}
				}}>

					<div className="uix-menu__inner">

						{mobileLogo ? <><span className="uix-brand--mobile"><img src={mobileLogo} alt={label as string} /></span></> : ''}
						<MenuList menuListData={data} mobile={mobileEnabled} />
						{tools ? <><div className="uix-menu__right-box">{tools}</div></> : ''}
						
					</div>
				</nav>
			</>
		);

	}


	render() {
	
		const { 
			displayMobileNav
		} = this.props;


		return (
		  <>
					
			{/* <!-- Mobile Menu Toggle Trigger--> */}
			{displayMobileNav ? (
				<>
					<div ref={this.mobileToggleRef} className="uix-menu-mobile__toggle" onClick={this.handleClickMobileToggle}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div ref={this.mobileMaskRef} className="uix-menu-mobile__mask" onClick={this.handleClickMobileClose}></div>
				</>
			) : ''}

			{/* <!-- Navigation Start--> */}
			{this.createMenu(false)}
			
			{/* <!-- Mobile Navigation Start--> */}
			{displayMobileNav ? this.createMenu(true) : null}

		  </>
		)
	}
}
