import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of 'global scripts and styles') --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@poemkit/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/HybridContentSlider/styles/_style.scss';


// 
import { hybridSliderAnime } from '@poemkit/components/HybridContentSlider/hybrid-slider-anime';
import HybridContentSliderItem from '@poemkit/components/HybridContentSlider/HybridContentSliderItem';

declare global {
    interface Window {
        dragEvents?: any[any];
        intervalEvents?: any[any];
    }
}

type HybridContentSliderProps = {
    /** Transition speed. This setting sets how long the transition animation lasts. Amount of time measured in milliseconds. */
    speed?: number;
    /** The direction of the component animation, the value can be `vertical` and `horizontal` */
    direction?: string;
    /** Setup a slider for the slider to animate automatically. */
	auto?: boolean;
    /** Autoplay interval. */
	timing?: number;
    /** Gives the slider a seamless infinite loop. */
	loop?: boolean;   
    /** Display or hide Navigation of paging control. */
    paginationEnabled?: boolean;   
    /** Display or hide Previous/Next arrow. */
	arrowEnabled?: boolean;   
	/** Previous arrow icon */
	arrowPrevIcon?: React.ReactNode;
	/** Next arrow icon */
	arrowNextIcon?: React.ReactNode;
    /** Allow drag and drop on the slider (touch devices will always work). */
    draggable?: boolean;   
    /** Drag & Drop Change icon/cursor while dragging. */
	draggableCursor?: string | boolean;
    /** Custom Navigation of paging control with HTML code.
     * For buttons or links, use the `data-index` attribute to control the index.
     */
    customPagination?: React.ReactNode;
    /** -- */
    id?: string;
};
type HybridContentSliderState = false;


export default class HybridContentSlider extends Component<HybridContentSliderProps, HybridContentSliderState> {

    private rootRef = React.createRef<HTMLDivElement>();

    uniqueID: string;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();
    }


    componentDidMount() {

        const self = this;

        __( document ).ready( function() {

			const reactDomEl: any = self.rootRef.current;
			const $el = __( reactDomEl );

            //Get parameter configuration from the data-* attribute of HTML
            hybridSliderAnime($el, {
                'speed': $el.data('speed'),
                'dir': $el.data('dir'),
                'auto': $el.data('auto'),
                'timing': $el.data('timing'),
                'loop': $el.data('loop'),
                'paginationID': $el.data('controls-pagination'),
                'arrowsID': $el.data('controls-arrows'),
                'draggable': $el.data('draggable'),
                'draggableCursor': $el.data('draggable-cursor')
            });

        });


    }

     /** Remove the global list of events, especially as scroll and interval. */
     componentWillUnmount() {

        // Remove drag events from document
        if ( Array.isArray( window.dragEvents ) ) {
            window.dragEvents.forEach( function(fn){

                document.removeEventListener('mouseup', fn);
                document.removeEventListener('mousemove', fn);
                document.removeEventListener('touchend', fn);
                document.removeEventListener('touchmove', fn);
            });
            window.dragEvents = [];
        }


        // Remove interval events from window
        if ( Array.isArray( window.intervalEvents ) ) {
            window.intervalEvents.forEach( function(fn){
                clearInterval( fn );
            });
            window.intervalEvents = [];
        }



		// Kill all aniamtions
		TweenMax.killAll();  


    }


    render() {

        const {
            speed,
            direction,
            auto,
            timing,
            loop,
            paginationEnabled,
            arrowEnabled,
            arrowPrevIcon,
            arrowNextIcon,
            draggable,
            draggableCursor,
            customPagination,
            id,
            children
        } = this.props;

        const cid = id || this.uniqueID;


        return (
            <>
					       
            <div 
                ref={this.rootRef}
                id={cid}
                role="slider"
                className="poemkit-hybrid-content-slider"
                data-speed={speed || 250} 
                data-dir={direction || 'horizontal'}
                data-draggable={draggable}
                data-draggable-cursor={draggableCursor || 'move'}
                data-auto={auto}
                data-loop={loop}
                data-timing={timing || 10000}
                data-controls-pagination={".app-hybridslider-pagination-" + cid}
                data-controls-arrows={".app-hybridslider-arrows-" + cid}>
                <div className="poemkit-hybrid-content-slider__items">

                    {(children != null) ? (children as any[]).map((item, i) => {
                        const childProps = { ...item.props };
                        return <HybridContentSliderItem key={i} {...childProps} />;

                    })
                        : ""
                    }

                </div>

            </div>


            { paginationEnabled ? (
                <div className={"poemkit-hybrid-content-slider__pagination app-hybridslider-pagination-" + cid}>{customPagination ? <>{customPagination}</> : ''}</div>
            ) : ''}

            <div className={"poemkit-hybrid-content-slider__controls app-hybridslider-arrows-" + cid} style={{display: (arrowEnabled ? 'inherit' : 'none')}}>
                <a href="#" className="poemkit-hybrid-content-slider__controls--prev">{ arrowPrevIcon || <><i className="fa fa-angle-left" aria-hidden="true"></i></> }</a>
                <a href="#" className="poemkit-hybrid-content-slider__controls--next">{ arrowNextIcon || <><i className="fa fa-angle-right" aria-hidden="true"></i></> }</a>
            </div>
            
            </>
        )
    }
}

