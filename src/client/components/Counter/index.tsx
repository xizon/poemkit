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
    constructor(props) {
        super(props);
    }


    componentDidMount() {


        __(document).ready(function () {


            __('[data-counter-number]').each(function (this: any, index: number) {

                const viewport = 1;
                const $el = __(this);

                //
                const scrollUpdate = function () {

                    const spyTop = $el[0].getBoundingClientRect().top;

                    //Prevent asynchronous loading of repeated calls
                    const actived = $el.data('activated');


                    if (spyTop < (window.innerHeight * viewport)) {

                        if (actived === null) {

                            countTo($el);

                            //Prevents front-end javascripts that are activated in the background to repeat loading.
                            $el.data('activated', 1);


                        }//endif actived


                    }

                };


                const throttleFunc = __.throttle(scrollUpdate, 5);
                window.removeEventListener('scroll', throttleFunc);
                window.removeEventListener('touchmove', throttleFunc);

                // Please do not use scroll's off method in each
                window.addEventListener('scroll', throttleFunc);
                window.addEventListener('touchmove', throttleFunc);


                throttleFunc();

            });






        });


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
            id,
            ...attributes
        } = this.props;

        return (
            <>

                <span
                    id={id || 'app-counter-' + __.GUID.create()}
                    data-counter-fixed={fixed || 0}
                    data-counter-start={start as number || 0}
                    data-counter-number={stop as number || 0}
                    data-counter-double-digits={doubleDigits}
                    data-counter-dilimiter={dilimiter}
                    data-counter-duration={speed || 200}
                    {...attributes}>{displayNumber}</span>


            </>
        )
    }
}

