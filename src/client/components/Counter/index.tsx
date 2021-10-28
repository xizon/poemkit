/* 
 *************************************
 * <!-- Counter -->
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


type CounterProps = {
    /** The number the element should start at */
    start?: number;
    /** The number the element should end at */
    stop?: number;
    /** Formats a number using fixed-point notation. */
    fixed?: number;
    /** How long it should take to count between the target numbers */
    speed?: number;
    /** The number of decimal places to show */
    dilimiter?: boolean;
    /** Two digits are used by default, if it is a number `2` it should be displayed `02` */
    doubleDigits?: boolean;
    /** String displayed by default */
    displayNumber?: string | number;
    /** -- */
    id?: string;
};
type CounterState = false;


// CountTo Effect
import { countTo } from '@uixkit.react/components/Counter/count-to';


export default class Counter extends Component<CounterProps, CounterState> {

    private rootRef = React.createRef<HTMLDivElement>();
    
    windowScrollUpdate: () => void;
    uniqueID: string;
    
    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();

        // Add a scroll event listener to window
        this.handleScrollEvent = this.handleScrollEvent.bind(this);
        this.windowScrollUpdate = __.throttle(this.handleScrollEvent, 5);

    }

    handleScrollEvent() {

        const reactDomEl: any = this.rootRef.current;
        const viewport = 1;
        const spyTop = reactDomEl.getBoundingClientRect().top;

        //Prevent asynchronous loading of repeated calls
        const actived = reactDomEl.dataset.activated;
         

        if (spyTop < (window.innerHeight * viewport)) {

            if (actived === undefined) {

                countTo( reactDomEl, {
                    from: reactDomEl.dataset.counterStart,
                    to: reactDomEl.dataset.counterNumber,
                    fixed: reactDomEl.dataset.counterFixed,
                    speed: reactDomEl.dataset.counterDuration,
                    refreshInterval: reactDomEl.dataset.counterRefreshInterval,
                    dilimiter: reactDomEl.dataset.counterDilimiter,
                    doubleDigits: reactDomEl.dataset.counterDoubleDigits,
                    onUpdate: null,
                    onComplete: null     
                });

                //Prevents front-end javascripts that are activated in the background to repeat loading.
                reactDomEl.dataset.activated = 1;


            }//endif actived


        }

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


    render() {

        const {
            start,
            stop,
            fixed,
            speed,
            dilimiter,
            doubleDigits,
            displayNumber,
            id
        } = this.props;

        return (
            <>

                <span
                    ref={this.rootRef}
                    id={id || this.uniqueID}
                    data-counter-fixed={fixed || 0}
                    data-counter-start={start as number || 0}
                    data-counter-number={stop as number || 0}
                    data-counter-double-digits={doubleDigits}
                    data-counter-dilimiter={dilimiter}
                    data-counter-duration={speed || 200}
                    >{displayNumber}</span>


            </>
        )
    }
}

