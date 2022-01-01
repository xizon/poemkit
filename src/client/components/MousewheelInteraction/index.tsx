/* 
 *************************************
 * <!-- Mousewheel Interaction -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@/components/_plugins/_lib-bootstrap';
import '@/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@/components/_utils/styles/_all.scss';
import '@/components/_utils/styles/rtl/_all.scss';
import { __ } from '@/components/_utils/_all';


type MousewheelFnType = (arg1: any) => void;

type MousewheelInteractionProps = {
    /** Set a interval to fix an issue for mousewheel event is too fast. Amount of time measured in milliseconds. */
    interval?: number;
    /** The transition duration of each action. According to page transition animation changes.
     * Amount of time measured in milliseconds.
     */
    actionTransitionDuration?: number;
    /** This function is called whenever the data is updated, including initialization.
     *  Exposes the JSON format data about the Mousewheel as an argument.
     */
    refreshCallback?: MousewheelFnType | null;
};
type MousewheelInteractionState = false;


export default class MousewheelInteraction extends Component<MousewheelInteractionProps, MousewheelInteractionState> {


    quietPeriod: number;
    animationTime: number;
    startY: number;
    lastAnimation: number;

    constructor(props) {
        super(props);

	    //Determine the direction of scroll event
		//Fix an issue for mousewheel event is too fast.
		this.quietPeriod = this.props.interval ? this.props.interval : 500;
		this.animationTime = this.props.actionTransitionDuration ? this.props.actionTransitionDuration : 1000;//According to page transition animation changes
        
        //
        this.startY = 0;
        this.lastAnimation = 0;

        //
        this.actionInit = this.actionInit.bind(this);
        this.deviceWheelUpdate = this.deviceWheelUpdate.bind(this);
        
    }

    actionInit( dir ) {
        const timeNow = new Date().getTime();
        // Cancel scroll if currently animating or within quiet period
        if( timeNow - this.lastAnimation < this.quietPeriod + this.animationTime) {
            return;
        }

        if ( typeof(this.props.refreshCallback) === 'function' ) {
            this.props.refreshCallback({
                direction: dir,
                animationTime: this.animationTime
            });
        }

        this.lastAnimation = timeNow;

    }

    deviceWheelUpdate( e ){

        //Gets a value that indicates the amount that the mouse wheel has changed.
        //------------------------------------------
        let dir, delta, mobileDeltaY: any = null;
        
        const touches = e.touches;
        if ( touches && touches.length ) {
            mobileDeltaY = this.startY - touches[0].pageY;
        } else {
            delta = Math.max(-1, Math.min(1, (-e.deltaY)));
        }
        

        if ( mobileDeltaY != null ) {
            
            if ( mobileDeltaY >= 50 ) {
                //--- swipe up
                dir = 'up';
            }
            if ( mobileDeltaY <= -50 ) {
                //--- swipe down
                dir = 'down';
            
            }	
        } else {
            if( delta < 0 ) { 
                //scroll down
                dir = 'down';

            } else {
                //scroll up
                dir = 'up';
            }	
        }

        //Scroll initialize
        //------------------------------------------
        this.actionInit(dir);
    
        
    }
  
    touchStart( e ) {
        const touches = e.touches;
        if ( touches && touches.length ) {
            this.startY = touches[0].pageY;
        }
    }



    componentDidMount() {

        window.removeEventListener('wheel', this.deviceWheelUpdate);
        window.removeEventListener('touchstart', this.touchStart);
        window.removeEventListener('touchmove', this.deviceWheelUpdate);
		window.addEventListener( 'wheel', this.deviceWheelUpdate);
		window.addEventListener( 'touchstart', this.touchStart);
		window.addEventListener( 'touchmove', this.deviceWheelUpdate);
		
    }

    /** Remove the global list of events, especially as scroll and interval. */
    componentWillUnmount() {

        // Remove scroll events from window
        window.removeEventListener('wheel', this.deviceWheelUpdate);
        window.removeEventListener('touchstart', this.touchStart);
        window.removeEventListener('touchmove', this.deviceWheelUpdate);

       
    }


    render() {
        return <></>;
    }
}

