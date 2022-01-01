/* 
 *************************************
 * <!-- Show More Less -->
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

/*-- Apply this component styles --*/
import '@/components/ShowMoreLess/styles/_style.scss';



// Adapt the easing parameters of CSS3
enum EasingList {
    linear = 'linear',
    easeIn = 'ease-in', 
    easeOut = 'ease-out', 
    easeInOut = 'ease-in-out'
}


type ShowMoreLessProps = {
    /** Speed of scrolling up. Amount of time measured in milliseconds. */
    speed?: number;
    /** Types of easing animation */
    easing: string;
    /** Set a default height to hide the remaining content. Please include the length unit, such as `em`, `px` */
    defaultHeight?: string;
    /** /////  */
    /** Tag name of the trigger. Allowed values are: `a`, `button`, `div`, `span` */
    triggerTagName?: string;
    /** Specify a class for this Node. */
    triggerClassName?: string;
    /** Set a piece of text or HTML code for the show trigger */
    showTriggerContent?: React.ReactNode;
    /** Set a piece of text or HTML code for the hide trigger */
    hideTriggerContent?: React.ReactNode;
    /** -- */
    id?: string;
};
type ShowMoreLessState = {
    displayEnabled: boolean;
    height?: string | undefined | number;
};


export default class ShowMoreLess extends Component<ShowMoreLessProps, ShowMoreLessState> {

    private rootRef = React.createRef<HTMLDivElement>();

    speed: number;
    ease: string;
    initHeight: string;
    uniqueID: string;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();
        this.speed = this.props.speed ? this.props.speed/1000 : 0.5;
        this.ease = EasingList[this.props.easing];
        this.initHeight = this.props.defaultHeight ? this.props.defaultHeight : '8.5rem';

        this.state = {
            displayEnabled: false,
            height: this.initHeight
        };

        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.height === "auto" && this.state.height !== "auto") {
            // If the height value is `auto` when hiding the content, there needs to be a delay 
            // (at least 1 millisecond), otherwise, the transition effect of translate cannot be presented
            setTimeout(() => this.setState({ height: this.initHeight }), 1);
        }
    }


    handleToggle(e) {
        e.preventDefault();

        this.setState({
            displayEnabled: !this.state.displayEnabled,
            height: this.rootRef.current!.scrollHeight
        });
    }

    // Handling events when the animation execution is complete
    updateAfterTransition() {
        if (this.state.displayEnabled) {
            this.setState({ height: "auto" });
        }
    }


    createTrigger(tagName, classes, showContent, hideContent) {
        switch (tagName) {
            case 'a':
                return <a role="button" href="#" className={"poemkit-more-btn__link " + classes} onClick={this.handleToggle}>{!this.state.displayEnabled ? <span>{showContent}</span> : <span>{hideContent}</span>}</a>;

            case 'button':
                return <button type="button" className={"poemkit-more-btn__link " + classes} onClick={this.handleToggle}>{!this.state.displayEnabled ? <span>{showContent}</span> : <span>{hideContent}</span>}</button>;

            case 'div':
                return <div role="button" className={"poemkit-more-btn__link " + classes} onClick={this.handleToggle}>{!this.state.displayEnabled ? <span>{showContent}</span> : <span>{hideContent}</span>}</div>;

            case 'span':
                return <span role="button" className={"poemkit-more-btn__link " + classes} onClick={this.handleToggle}>{!this.state.displayEnabled ? <span>{showContent}</span> : <span>{hideContent}</span>}</span>;

        }
    }


    render() {

        const {
            triggerTagName,
            triggerClassName,
            showTriggerContent,
            hideTriggerContent,
            id,
            children
        } = this.props;


        return (
            <>

                <div
                    ref={this.rootRef}
                    id={id || this.uniqueID}
                    onTransitionEnd={() => this.updateAfterTransition()}
                    className={this.state.displayEnabled ? 'poemkit-more-btn is-active' : 'poemkit-more-btn'}
                    style={{
                        height: this.state.height,
                        overflow: "hidden",
                        transition: `all ${this.speed}s ${this.ease} 0s`,
                    }}
                    >
                    {children}
                </div>
                <div className="poemkit-more-btn__trigger">
                    {this.createTrigger(triggerTagName, triggerClassName, showTriggerContent, hideTriggerContent)}
                </div>


            </>
        )
    }
}

