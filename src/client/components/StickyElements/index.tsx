/* 
 *************************************
 * <!-- Sticky Elements -->
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

/*-- Apply Third-party animation plugins --*/
import TweenMax from '@/components/_plugins/_lib-gsap';

//
import { sticky } from '@/components/StickyElements/sticky';


// Adapt the easing parameters of TweenMax
enum EasingList {
    linear = 'Linear.easeNone',
    easeIn = 'Power2.easeIn', 
    easeOut = 'Power2.easeOut', 
    easeInOut = 'Power2.easeInOut'
}


type StickyProps = {
    /** Set a trigger to stop the sticky action, use the class name or ID, for example: `.app-sticky-stoptrigger`. 
     * Sticky state will be triggered when the top of the element is 0 pixels from the top of the scrollElement automatically. */
    stopTrigger?: string | boolean;
    /** Sticky state will be canceled trigger when the bottom of the element is `stopTriggerOffset` pixels from the bottom of the scroll element.
     * You can use `%h` or `%w` to represent the height and width of the window, set this value with mathematical expressions, 
     * please do not bring any units. Such as: `%h/3`, `100/3`, `30*2`, `220`
     */
    stopTriggerOffset?: string | boolean;
    /** -- */
    id?: string;
};
type StickyState = false;


export default class Sticky extends Component<StickyProps, StickyState> {

    private rootRef = React.createRef<HTMLDivElement>();
    
    windowScrollUpdate: () => void;
    uniqueID: string;
    
    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();

         // Add a scroll event listener to window
         this.windowScrollUpdate = ()=>{};

         this.stickyInit = this.stickyInit.bind(this);

    }

    stickyInit() {
        
        const self = this;
        const reactDomEl: any = this.rootRef.current;

        //Set placeholder height
        //------------------------------------------
        const $placeholder = document.querySelector( '[data-sticky-id="'+reactDomEl.dataset.stickyId+'"].is-placeholder' );
        const elStyle = window.getComputedStyle(reactDomEl);
        const elOuterHeight = reactDomEl.offsetHeight + parseFloat( elStyle.marginTop ) + parseFloat( elStyle.marginBottom ); //including: padding + borders + v-scrollbars (if rendered) + margin
        ($placeholder as HTMLElement).style.height = elOuterHeight + 'px';
        

        //Get header height
        //------------------------------------------
        const $headerContainer = document.querySelector( '.poemkit-header__container' );
        const headerContainerStyle = window.getComputedStyle($headerContainer as HTMLElement);
        const headerContainerOuterHeight = ($headerContainer as HTMLElement).offsetHeight + parseFloat( headerContainerStyle.marginTop ) + parseFloat( headerContainerStyle.marginBottom ); //including: padding + borders + v-scrollbars (if rendered) + margin


        //Scroll Spy
        //------------------------------------------
        const topSpacing = ( window.innerWidth <= 768 ) ? 0 : headerContainerOuterHeight; //with margin
        self.windowScrollUpdate = sticky( reactDomEl, {
            placeholderEl : $placeholder as HTMLElement,
            topSpacing    : topSpacing
        }) as unknown as () => void;

    }

    componentDidMount() {

        TweenMax.to( window, 0.5, {
            scrollTo: {
                y: 0, //y: "max" -->*/} vertical scroll to bottom
                autoKill: false
            },
            ease: EasingList.easeOut,
            onComplete: () => {
                this.stickyInit();
            }
        });


    }

     /** Remove the global list of events, especially as scroll and interval. */
     componentWillUnmount() {
         
        // Remove scroll events from window
        window.removeEventListener('scroll', this.windowScrollUpdate);
        window.removeEventListener('touchmove', this.windowScrollUpdate);  

		// Kill all aniamtions
		TweenMax.killAll();  

    }


    render() {

        const {
            stopTrigger,
            stopTriggerOffset,
            id,
            children
        } = this.props;

        const cid = id || this.uniqueID;

        return (
            <>
				
               <div data-sticky-id={cid + '-sticky'} className="is-placeholder" style={{display:"none",width:"100%",visibility:"hidden"}}></div>

               <div 
               ref={this.rootRef}
               id={cid}
               data-sticky-id={cid + '-sticky'}
               className="js-poemkit-sticky-el" 
               data-stop-trigger={stopTrigger || false}
               data-stop-trigger-offset={stopTriggerOffset || 0}
               >
                   {children}
               </div>


            </>
        )
    }
}

