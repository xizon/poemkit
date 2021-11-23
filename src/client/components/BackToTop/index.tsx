/* 
 *************************************
 * <!-- Back To Top -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/BackToTop/styles/_style.scss';


/*-- Apply Third-party animation plugins --*/
import TweenMax from '@poemkit/components/_plugins/_lib-gsap';


// Adapt the easing parameters of TweenMax
enum EasingList {
    linear = 'Linear.easeNone',
    easeIn = 'Power2.easeIn', 
    easeOut = 'Power2.easeOut', 
    easeInOut = 'Power2.easeInOut'
}


type BackToTopProps = {
    /** Speed of scrolling up. Amount of time measured in milliseconds. */
    speed?: number;
    /** Types of easing animation */
    easing: string;
	/** Button Icon */
	btnIcon?: React.ReactNode;
};
type BackToTopState = {
    isAtRange?: boolean;
};


export default class BackToTop extends Component<BackToTopProps, BackToTopState> {

    speed: number;
    ease: string;
    windowScrollUpdate: () => void;

    constructor(props) {
        super(props);

        
        this.ease = EasingList[this.props.easing];
        this.speed = this.props.speed ? this.props.speed/1000 : 0.5;
		this.state = {
			isAtRange: false
		};

        // Add a scroll event listener to window
        this.handleScrollEvent = this.handleScrollEvent.bind(this);
        this.windowScrollUpdate = __.throttle(this.handleScrollEvent, 5);

    }

    handleScrollEvent() {
        if (__( window ).scrollTop() < window.innerHeight/2) {
            this.setState({ isAtRange: false });
        } else {
            this.setState({ isAtRange: true });
        }
    }


    moveToTop(e) {
        e.preventDefault();

        const self = this;

        TweenMax.to( window, self.speed, {
            scrollTo: {
                y: 0, //y: "max" -->*/} vertical scroll to bottom
                autoKill: false
            },
            ease: self.ease
        });

    }

    componentDidMount() {

        const self = this;

        __( document ).ready( function() {

            // Move HTML templates to tag end body </body>
            Array.prototype.forEach.call(document.querySelectorAll('.poemkit-to-top:not(.is-loaded)'), function (node) {
                node.classList.add( 'is-loaded' );
                document.body.appendChild(node);
            });


            // Add function to the element that should be used as the scrollable area.
            window.removeEventListener('scroll', self.windowScrollUpdate);
            window.removeEventListener('touchmove', self.windowScrollUpdate);
            window.addEventListener('scroll', self.windowScrollUpdate);
            window.addEventListener('touchmove', self.windowScrollUpdate);
            self.windowScrollUpdate();


            //
            __( '.poemkit-to-top > button' ).off( 'click' ).on( 'click', function( this: any, e: any ) { 
                self.moveToTop(e);
            });
             

        });


    }


    /** Remove the global list of events, especially as scroll and interval. */
    componentWillUnmount() {
        //Hide other pages button of back-to-top
        Array.prototype.forEach.call( document.querySelectorAll( '.poemkit-to-top > button' ), function( el ) {
            el.classList.remove( 'is-active' );
        });

        // Remove scroll events from window
        window.removeEventListener('scroll', this.windowScrollUpdate);
        window.removeEventListener('touchmove', this.windowScrollUpdate);  

		// Kill all aniamtions
		TweenMax.killAll();

    }


    render() {

        const {
            btnIcon,
        } = this.props;


        return (
            <>
            <div className="poemkit-to-top">
                <button type="button" className={ this.state.isAtRange ? 'is-active' : ''}>
                    {btnIcon || <><i className="fa fa-arrow-up" aria-hidden="true"></i></>}
                </button>
            </div>

            </>
        )
    }
}

