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
import '@poemkit/components/Slideshow/styles/_style.scss';
import '@poemkit/components/Slideshow/styles/rtl/_style.scss';


// 
import { sliderAnime } from '@poemkit/components/Slideshow/slider-anime';
import SlideshowItem from '@poemkit/components/Slideshow/SlideshowItem';

declare global {
    interface Window {
        dragEvents?: any[any];
        intervalEvents?: any[any];
        windowResizeEvents?: any[any];
    }
}

type SlideshowProps = {
    /** Transition effects */
    effect?: string;
    /** Setup a slideshow for the slider to animate automatically. */
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
    /** -- */
    id?: string;
};
type SlideshowState = false;


export default class Slideshow extends Component<SlideshowProps, SlideshowState> {

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
            sliderAnime($el, {
                'auto': $el.data('auto'),
                'timing': $el.data('timing'),
                'loop': $el.data('loop'),
                'countTotalID': $el.data('count-total'),
                'countCurID': $el.data('count-now'),
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


		// Remove resize events from window
        if ( Array.isArray( window.windowResizeEvents ) ) {
            window.windowResizeEvents.forEach( function(fn){
                clearInterval( fn );
            });
            window.windowResizeEvents = [];
        }


    }


    render() {

        const {
            effect,
            auto,
            timing,
            loop,
            paginationEnabled,
            arrowEnabled,
            arrowPrevIcon,
            arrowNextIcon,
            draggable,
            draggableCursor,
            id,
            children
        } = this.props;

        const cid = id || this.uniqueID;


        return (
            <>


            <div role="banner" className="poemkit-slideshow__wrapper" id={cid}>
                <div ref={this.rootRef}
                    className={"poemkit-slideshow__outline poemkit-slideshow poemkit-slideshow--eff-" + effect}
                    data-draggable={draggable}
                    data-draggable-cursor={draggableCursor || 'move'}
                    data-auto={auto}
                    data-loop={loop}
                    data-timing={timing || 10000}
                    data-count-total="false"
                    data-count-now="false"
                    data-controls-pagination={".app-slider-pagination-" + cid}
                    data-controls-arrows={".app-slider-arrows-" + cid}>
                    <div className="poemkit-slideshow__inner">

                        {(children != null) ? (children as any[]).map((item, i) => {
                            const childProps = { ...item.props };
                            return <SlideshowItem key={i} {...childProps} />;

                        })
                            : ""
                        }

                    </div>
                    {/*<!-- /.poemkit-slideshow__inner -->*/}

                </div>
                {/*<!-- /.poemkit-slideshow__outline -->*/}

            </div>
            {/*<!-- /.poemkit-slideshow__wrapper -->*/}


            { paginationEnabled ? (
                <div className={"poemkit-slideshow__pagination app-slider-pagination-" + cid}></div>
            ) : ''}

            { arrowEnabled ? (
                <div className={"poemkit-slideshow__arrows app-slider-arrows-" + cid}>
                <a href="#" className="poemkit-slideshow__arrows--prev">{ arrowPrevIcon || <><i className="fa fa-long-arrow-left" aria-hidden="true"></i></> }</a>
                <a href="#" className="poemkit-slideshow__arrows--next">{ arrowNextIcon || <><i className="fa fa-long-arrow-right" aria-hidden="true"></i></> }</a>
            </div>
            ) : ''}
            
            </>
        )
    }
}

