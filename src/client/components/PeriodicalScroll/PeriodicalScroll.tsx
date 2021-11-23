import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/PeriodicalScroll/styles/_style.scss';

/*-- Apply Third-party animation plugins --*/
import TweenMax, { TimelineMax } from '@poemkit/components/_plugins/_lib-gsap';

//
import PeriodicalScrollItem from '@poemkit/components/PeriodicalScroll/PeriodicalScrollItem';


type PeriodicalScrollProps = {
    /** Speed of scrolling up. Amount of time measured in milliseconds. */
    speed?: number;
    /** Autoplay interval. */
	timing?: number; 
    /** -- */
    id?: string;
};
type PeriodicalScrollState = false;


export default class PeriodicalScroll extends Component < PeriodicalScrollProps, PeriodicalScrollState > {

    private rootRef = React.createRef<HTMLDivElement>();

    tl: any;
    uniqueID: string;
    eachItemAnimOKDelay: number;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();

        this.eachItemAnimOKDelay = 150;
        this.tl = new TimelineMax({
            repeat      : -1,
            repeatDelay : this.eachItemAnimOKDelay/1000,
            paused:     true
        });

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(e) {
        this.tl.pause();
    }

    handleMouseLeave(index) {

        const self = this;

		return function (e) { // e is the event object that returned
            self.tl.play();

            //Avoid differences in the direction of element transitions
            const root: any = self.rootRef.current;
            const listWrapper = root.querySelector( 'ul' );
            const items = listWrapper.querySelectorAll( 'li' );
            const itemHeight  = items[0].clientHeight; //including: padding
            const moveY = itemHeight*2;

            if ( index > 0 ) {
                const firstEl = items[0];
                TweenMax.set( firstEl, {
                    opacity : 0,
                    y       : moveY
                });	
            }
		};
    }

    componentDidMount() {

        const self = this;
        const root: any = this.rootRef.current;
           
        const speed = this.props.speed ? this.props.speed : 600,
              timing = this.props.timing ? this.props.timing : 2000;
    
        const listWrapper = root.querySelector( 'ul' );
        const items = listWrapper.querySelectorAll( 'li' );
        const itemHeight  = items[0].clientHeight; //including: padding
        
        
        root.style.height = itemHeight + 'px';
        root.style.overflow = 'hidden';

        
        //If there is only one item, add one to complete the seamless loop effect
        if ( items.length === 1 ) {
            let cloneEl = items[0].cloneNode(true);
            listWrapper.appendChild(cloneEl);
        }
        
        
        //
        const moveY = itemHeight*2;
        
        
        //Prevent repetition of animation events
        TweenMax.killTweensOf( items );
        

        //pauses wherever the playhead currently is:
        setTimeout( () => {
            this.tl.play();
        }, speed );
        

        this.tl
        .add( TweenMax.staggerFromTo( items, speed/1000, {
            opacity : 0,
            y       : moveY
        },{
            opacity : 1,
            y       : 0
        }, timing/1000 ) )

        .add( TweenMax.staggerTo( items, speed/1000, {
            delay    : timing/1000,
            opacity  : 0,
            y        : -moveY,
            onComplete: function() {
                TweenMax.set( this.target, {
                    delay    : self.eachItemAnimOKDelay/1000,
                    opacity : 0,
                    y       : moveY
                });
                            
            }
        }, timing/1000 ), 0 );
        

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
                className="poemkit-periodical-scroll">
                    <ul onMouseEnter={this.handleMouseEnter} >
					{( children != null ) ? (children as any[]).map((item, i) => {
						const childProps = { ...item.props };
						return <PeriodicalScrollItem
                                    elAnimLeaveEv={this.handleMouseLeave(i)}
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

