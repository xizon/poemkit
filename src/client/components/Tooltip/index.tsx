/* 
 *************************************
 * <!-- Tooltip -->
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
import '@poemkit/components/Tooltip/styles/_style.scss';
import '@poemkit/components/Tooltip/styles/rtl/_style.scss';


type TooltipProps = {
	/** The direction of the tip. Defaults to `top`. Possible values are: `top`, `top-right`, `top-left`, `bottom`, `bottom-right`, `bottom-left` */
	direction?: string;
    /** The size of the content area. Defaults to `auto`. Possible values are: `auto`, `large`, `medium`, `small` */
    size?: string;
    /** The number of milliseconds to determine hover intent, defaults to 200 */
    hoverDelay?: number;
    /** The number of milliseconds to determine hover-end intent, defaults to the hoverDelay value */
    mouseOutDelay?: number;
    /** Set a piece of text or HTML code for the show trigger */
    showTriggerContent?: React.ReactNode;
    /** Set a piece of text or HTML code for the hide trigger */
    hideTriggerContent?: React.ReactNode;
    /** -- */
    id?: string;
};
type TooltipState = {
    isShow?: boolean;
    hasBeenShown?: boolean;
};


export default class Tooltip extends Component<TooltipProps, TooltipState> {

    private tipdivRef = React.createRef<HTMLDivElement>();

    hoverDelay: number;
    mouseOutDelay: number;
    hoverTimeout: any;
    uniqueID: string;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();
        this.hoverDelay = this.props.hoverDelay ? this.props.hoverDelay : 200;
        this.mouseOutDelay = this.props.mouseOutDelay ? this.props.mouseOutDelay : this.hoverDelay;
        this.hoverTimeout = false;

        this.state = {
            hasBeenShown: false,
        };
        
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);


    }

    handleMouseEnter() {
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = setTimeout( () => {
            this.isShow();
        }, this.hoverDelay);
    }

    handleMouseLeave() {
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = setTimeout( () => {
            this.hideTip();
        }, this.mouseOutDelay);
    }

    isShow() {
        if (!this.state.hasBeenShown) {
            // this will render once, then fire componentDidUpdate, which will show the tip
            return this.setState({ hasBeenShown: true });
        }

        if (!this.state.isShow) {
            this.setState({ isShow: true }, () => {
                this.tipdivRef.current?.classList.add( 'is-active' );
            });
        }
    }

    hideTip() {

        if (this.state.isShow) {
            this.setState({ isShow: false }, () => {
                this.tipdivRef.current?.classList.remove( 'is-active' );
            });
        }
    }

    handleTouchStart( e ) {
        this.hideTip();
    }


    componentDidUpdate(prevProps, prevState) {
        if (!this.state.hasBeenShown) {
            this.setState({ hasBeenShown: true });

            return setTimeout(this.isShow, 0);
        }

        if (!prevState.hasBeenShown && this.state.hasBeenShown) {
            this.isShow();
        }
    }

    componentDidMount() {

        window.removeEventListener('touchstart', this.handleTouchStart);
		window.addEventListener( 'touchstart', this.handleTouchStart);
		
    }


    /** Remove the global list of events, especially as scroll and interval. */
    componentWillUnmount() {

        // Remove scroll events from window
        window.removeEventListener('touchstart', this.handleTouchStart);

        // Cancels a timeout previously established by calling setTimeout().
        clearTimeout(this.hoverTimeout);

    }


    render() {

        const {
            direction,
            size,
            showTriggerContent,
            hideTriggerContent,
            id
        } = this.props;


        return (
            <>


                <div
                    id={id || this.uniqueID}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    className="poemkit-tooltip">
                    <span data-microtip-position={direction || 'top'} data-microtip-size={size || 'auto'} role="tooltip" ref={this.tipdivRef}>
                        {showTriggerContent}
                    </span>
                    <div>{hideTriggerContent}</div>
                </div>


            </>
        )
    }
}

