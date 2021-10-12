/* 
 *************************************
 * <!-- Progress Bar -->
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
import '@uixkit.react/components/ProgressBar/styles/_style.scss';


type ProgressBarProps = {
    /** Set a shape that circle, annulus or rectangle shaped progress bar. */
    shape?: string;
    /** Set a unit that is percentage for progress bar. */
    unit?: string;
    /** Set a percentage you want to show */
    value?: number;
    /** Reference to div element which presents the text label for progress bar. Returns empty if text is not defined. */
    label?: React.ReactNode;
    /** Whether to display percentage */
    displayPercentage?: boolean;
    /** -- */
    id?: string;
};
type ProgressBarState = false;


export default class ProgressBar extends Component<ProgressBarProps, ProgressBarState> {

    private wrapperRef = React.createRef<HTMLDivElement>();

    windowScrollUpdate: () => void;
    
    constructor(props) {
        super(props);

        // Add a scroll event listener to window
        this.handleScrollEvent = this.handleScrollEvent.bind(this);
        this.windowScrollUpdate = __.throttle(this.handleScrollEvent, 5);

    }

    handleScrollEvent() {

        const reactDomEl: any = this.wrapperRef.current;
        const viewport = 1;

        //
        const spyTop = reactDomEl.getBoundingClientRect().top;

        //Prevent asynchronous loading of repeated calls
        const actived = reactDomEl.dataset.activated;


        if (spyTop < (window.innerHeight * viewport)) {

            if (actived === undefined) {


                let	percent      = reactDomEl.dataset.progressbarPercent,
                    unit         = reactDomEl.dataset.progressbarUnit;

                if ( percent === undefined ) percent = 0;
                if ( unit === undefined ) unit = '%';


                //Radial Progress Bar
                
                if ( reactDomEl.classList.contains( 'uix-progressbar--circle' ) ) {
                    reactDomEl.querySelector( '.uix-progressbar__track' ).innerHTML = '<span>'+percent+'<em className="uix-progressbar__unit">'+unit+'</em></span>';
                    reactDomEl.classList.add( 'uix-progressbar--progress-' + percent )
                } 


                //Rectangle Progress Bar
                if ( reactDomEl.classList.contains( 'uix-progressbar--rectangle' ) ) {
                    reactDomEl.querySelector( '.uix-progressbar__bar > span' ).innerHTML = percent+'<em className="uix-progressbar__unit">'+unit+'</em>';
                    reactDomEl.classList.add( 'uix-progressbar--progress-' + percent )
                } 


                //Prevents front-end javascripts that are activated in the background to repeat loading.
                reactDomEl.dataset.activated = 1;


            }//endif actived


        }

    }


    componentDidMount() {

        const self = this;

        __(document).ready(function () {

            // Add function to the element that should be used as the scrollable area.
            window.removeEventListener('scroll', self.windowScrollUpdate);
            window.removeEventListener('touchmove', self.windowScrollUpdate);
            window.addEventListener('scroll', self.windowScrollUpdate);
            window.addEventListener('touchmove', self.windowScrollUpdate);
            self.windowScrollUpdate();

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
            shape,
            unit,
            value,
            label,
            displayPercentage,
            id,
        } = this.props;


        let shapeClassName = '';
        if ( shape === 'annulus') {
            shapeClassName = 'uix-progressbar--circle is-transparent';
        } else if ( shape=== 'circle' ) {
            shapeClassName = 'uix-progressbar--circle';
        } else if ( shape=== 'rectangle' ) {
            shapeClassName = 'uix-progressbar--rectangle';
        }


        return (
            <>
            
                <div 
                ref={this.wrapperRef}
                id={id || 'app-progress-bar-' + __.GUID.create()}
                className={`${shapeClassName} uix-progressbar--progress-0`} 
                data-progressbar-percent={value || 0} 
                data-progressbar-unit={unit}> 
                    { shape === 'rectangle' ? (<>
                        { label ? <><div className="uix-progressbar__title">{label}</div></> : '' }
                        <div className="uix-progressbar__bar">
                            <div className="uix-progressbar__track"></div>
                            <span>0<em className="uix-progressbar__unit">%</em></span>
                        </div>
                    </>) : (<>
                        <span className="uix-progressbar__track">
                            { displayPercentage ? <><span>0<em className="uix-progressbar__unit">{unit || ''}</em></span></> : '' }
                        </span>
                        <div className="uix-progressbar__pie">
                            <div className="uix-progressbar__pie--left-side uix-progressbar__pie--half-circle"></div>
                            <div className="uix-progressbar__pie--right-side uix-progressbar__pie--half-circle"></div>
                        </div>
                        { label ? <><div className="uix-progressbar__title">{label}</div></> : '' }
                    </>)}
                    
                </div>   


            </>
        )
    }
}

