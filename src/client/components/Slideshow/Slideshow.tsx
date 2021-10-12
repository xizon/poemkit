import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of 'global scripts and styles') --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap';
import '@uixkit.react/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utils/styles/_all.scss';
import '@uixkit.react/components/_utils/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Slideshow/styles/_style.scss';
import '@uixkit.react/components/Slideshow/styles/rtl/_style.scss';


// 
import { sliderAnime } from '@uixkit.react/components/Slideshow/slider-anime';
import Item from '@uixkit.react/components/Slideshow/Item';

declare global {
    interface Window {
        dragEvents?: any[any];
        intervalEvents?: any[any];
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
    /** Allow drag and drop on the slider. */
    draggable?: boolean;   
    /** Drag & Drop Change icon/cursor while dragging. */
	draggableCursor?: string | boolean;   
    /** -- */
    id?: string;
    children: any; /* required */
};
type SlideshowState = false;


export default class Slideshow extends Component<SlideshowProps, SlideshowState> {

    private wrapperRef = React.createRef<HTMLDivElement>();

    constructor(props) {
        super(props);
    }


    componentDidMount() {

        const self = this;

        __(document).ready(function () {

			const reactDomEl: any = self.wrapperRef.current;
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

        const cid = id || 'app-slideshow-' + __.GUID.create();


        return (
            <>


            <div role="banner" className="uix-slideshow__wrapper" id={cid}>
                <div ref={this.wrapperRef}
                    className={"uix-slideshow__outline uix-slideshow uix-slideshow--eff-" + effect}
                    data-draggable={draggable}
                    data-draggable-cursor={draggableCursor || 'move'}
                    data-auto={auto}
                    data-loop={loop}
                    data-timing={timing || 10000}
                    data-count-total="false"
                    data-count-now="false"
                    data-controls-pagination={".app-slider-pagination-" + cid}
                    data-controls-arrows={".app-slider-arrows-" + cid}>
                    <div className="uix-slideshow__inner">

                        {(children != null) ? children.map((item, i) => {
                            const childProps = { ...item.props };
                            return <Item key={i} {...childProps} />;

                        })
                            : ""
                        }

                    </div>
                    {/*<!-- /.uix-slideshow__inner -->*/}

                </div>
                {/*<!-- /.uix-slideshow__outline -->*/}

            </div>
            {/*<!-- /.uix-slideshow__wrapper -->*/}


            { paginationEnabled ? (
                <div className={"uix-slideshow__pagination app-slider-pagination-" + cid}></div>
            ) : ''}

            { arrowEnabled ? (
                <div className={"uix-slideshow__arrows app-slider-arrows-" + cid}>
                <a href="#" className="uix-slideshow__arrows--prev">{ arrowPrevIcon || <><i className="fa fa-long-arrow-left" aria-hidden="true"></i></> }</a>
                <a href="#" className="uix-slideshow__arrows--next">{ arrowNextIcon || <><i className="fa fa-long-arrow-right" aria-hidden="true"></i></> }</a>
            </div>
            ) : ''}
            
            </>
        )
    }
}

