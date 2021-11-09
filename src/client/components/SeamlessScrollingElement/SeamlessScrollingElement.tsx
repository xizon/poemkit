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
import '@poemkit/components/SeamlessScrollingElement/styles/_style.scss';


//
import SeamlessScrollingElementItem from '@poemkit/components/SeamlessScrollingElement/SeamlessScrollingElementItem';


// Adapt the easing parameters of TweenMax
enum EasingList {
    linear = 'Linear.easeNone',
    easeIn = 'Power2.easeIn',
    easeOut = 'Power2.easeOut',
    easeInOut = 'Power2.easeInOut'
}


type SeamlessScrollingElementProps = {
    /** The separation distance between each item in pixels. */
    gap?: number;
    /** Speed of animation. Amount of time measured in milliseconds. */
    speed?: number;
    /** -- */
    id?: string;
};
type SeamlessScrollingElementState = false;


export default class SeamlessScrollingElement extends Component<SeamlessScrollingElementProps, SeamlessScrollingElementState> {

    private rootRef = React.createRef<HTMLDivElement>();

    tl: any;
    uniqueID: string;
    constructor(props) {
        super(props);


        this.uniqueID = 'app-' + __.GUID.create();

        this.tl = new TimelineMax({
            repeat: -1,
            paused: true
        });

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(e) {
        this.tl.pause();
    }

    handleMouseLeave(e) {
        this.tl.play();
    }


    componentDidMount() {

        const root: any = this.rootRef.current;
        const speed = this.props.speed ? this.props.speed : 3000;
        const wrapperWidth = root.clientWidth;
        const gap = this.props.gap ? this.props.gap : 20;
        const $list = root.firstElementChild; // whitespace nodes might interfere with using `firstChild`
        const $itemsOriginal = $list.children;
        const itemsTotal = $itemsOriginal.length;

        //original width (including: padding)
        //------------------------------------------
        const itemsWidthOriginal: any[number] = [];
        Array.prototype.forEach.call($list.children, function (node, index) {
            itemsWidthOriginal.push((node.clientWidth + gap) as never);
        });
        const allWidthOriginal = itemsWidthOriginal.reduce(function (previousValue, currentValue, currentIndex, array) {
            let newVal = previousValue + currentValue;
            return newVal;
        } as never);


        //clone elements in order to complement content area
        //------------------------------------------
        const loopTimes = Math.ceil(wrapperWidth / allWidthOriginal);

        for (let i = 0; i < loopTimes; i++) {
            const $clonedtems = $list.cloneNode(true).querySelectorAll('li'); //do not use `children`
            Array.prototype.some.call($clonedtems, function (node, index) {
                $list.appendChild(node);
                if (index === itemsTotal - 1) return true;
            });
        }


        //calculate the total width
        //------------------------------------------
        const $items = root.getElementsByTagName('li');
        const itemsWidth: any[number] = [];
        const itemPos: any[number] = [];
        Array.prototype.forEach.call($items, function (node, index) {
            itemsWidth.push((node.clientWidth + gap) as never);
        });


        itemPos.push(0, itemsWidth[0]);
        const allWidth = itemsWidth.reduce(function (previousValue, currentValue, currentIndex, array) {
            let newVal = previousValue + currentValue;
            itemPos.push(newVal as never)
            return newVal;
        } as never);
        itemPos.pop();

        // console.log('itemsWidth: ', itemsWidth);
        // console.log('itemPos: ', itemPos);
        // console.log('allWidth: ', allWidth);


        //initially colorize each box and position in a row
        //------------------------------------------
        TweenMax.set($items, {
            x: function (i) {
                return itemPos[i];
            }
        });


        this.tl.to($items, speed / 1000, {
            ease: EasingList.linear,
            x: "-=" + allWidthOriginal, //move each box "allWidthOriginal" to left
            modifiers: {
                x: function (x, target) {
                    return x % allWidth; //force x value to be between 0 and "allWidth" using modulus
                }
            }
        })
        .progress(1)
        .progress(0)
        .play();

    }


    /** Remove the global list of events, especially as scroll and interval. */
    componentWillUnmount() {

        // Kill all aniamtions
        this.tl.kill();
        TweenMax.killAll();
    }


    render() {

        const {
            id,
            children
        } = this.props;


        return (
            <>

                <div
                    ref={this.rootRef}
                    id={id || this.uniqueID}
                    className="poemkit-seamless-scrolling"
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    <ul>
                        {(children != null) ? (children as any[]).map((item, i) => {
                            const childProps = { ...item.props };
                            return <SeamlessScrollingElementItem
                                key={"item" + i}
                                {...childProps}
                            />;

                        })
                            : ""
                        }

                    </ul>
                </div>


            </>
        )
    }
}

