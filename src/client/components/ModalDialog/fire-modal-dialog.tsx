import { __ } from '@uixkit.react/components/_utils/_all';

 /*-- Apply Third-party plugins --*/
import { disableBodyScroll } from '@uixkit.react/components/_plugins/_lib-scrolllock';
import TweenMax from '@uixkit.react/components/_plugins/_lib-gsap';

//
import { closeModalDialog } from '@uixkit.react/components/ModalDialog/close-modal-dialog';

declare global {
    interface Window {
        setCloseModalDialog?: any;
    }
}

interface fireModalDialogConfig {
    /** Modal dialog ID to be opened */
    target?: string | undefined;
    /** Custom modal height whick need a unit string.  
     * This attribute "data-modal-height" may not exist. Such as: 200px
    */
    height?: number | string | boolean | undefined;
    /** Custom modal width whick need a unit string.
     * This attribute "data-modal-width" may not exist. Such as: 200px
     */
    width?: number | string | boolean | undefined;
    /** Delay Time when Full Screen Effect is fired */
    speed?: number | undefined;
    /** Link or button that fires an event */
    btn?: object | boolean | undefined;
    /** Whether to enable the lightbox effect */
    lightbox?: boolean | undefined;
    /** Specify auto-close time. This function is not enabled when this value is false. If the value is 2000, it will automatically close after 2 seconds. */
    autoClose?: number | boolean | undefined;
    /** Disable mask to close the window */
    closeOnlyBtn?: boolean | undefined;
}


export function fireModalDialog(config: fireModalDialogConfig) {

	if ( typeof config === typeof undefined ) {

        config = {
            "target"       : '#modal-open-demo',
            "height"       : false,
            "width"        : false,
            "speed"        : 500,
            "btn"          : false,
            "lightbox"     : true,
            "autoClose"    : false,
            "closeOnlyBtn" : false
        };

	}

    const curElement = __( config.target );

    //Prevent automatic close from affecting new fire effects
    clearTimeout( window.setCloseModalDialog );	

    //Add modal mask to stage
    if ( __( '.uix-modal-mask' ).length == 0 ) {
        __( 'body' ).prepend( '<div className="uix-modal-mask"></div>' );
    }
    if ( config.closeOnlyBtn ) {
        __( '.uix-modal-mask' ).addClass( 'js-uix-disabled' );
    } else {
        __( '.uix-modal-mask' ).removeClass( 'js-uix-disabled' );
    }

    const dataH: any         = config.height,
          dataW: any         = config.width,
          linkBtn: any       = config.btn,
          closeTime: any     = config.autoClose;

    // Initializate modal
    if ( linkBtn ) {
        linkBtn.attr( 'href', 'javascript:void(0)' );
        curElement.find( '.uix-modal-box__content' ).addClass( 'js-uix-no-fullscreen' );


        if ( linkBtn.data( 'video-win' ) ) {
            curElement.find( '.uix-modal-box__content > .uix-modal-box__body' ).css( 'overflow-y', 'hidden' );
        }

    }



    if ( curElement.length > 0 ) {


        // Locks the page
        //
        // Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
        // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
        // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
        disableBodyScroll( document.querySelector( 'body' ) );


        //Add class for body
        //When scrollLock is used, scrollTop value will change
        __( 'body' ).addClass( 'scrollLock' );
        

        if ( typeof dataH != typeof undefined && dataH != '' && dataH ) {
            curElement.css( {'height': dataH } );
        }

        if ( typeof dataW != typeof undefined && dataW != '' && dataW ) {
            curElement.css( {'width': dataW } );
        }

        
        //Enable the lightbox effect.
        if ( config.lightbox ) {
            TweenMax.set( '.uix-modal-mask', {
                css: {
                    opacity : 0,
                    display : 'none'
                },
                onComplete : function() {

                    TweenMax.to( this.target, 0.3, {
                        css: {
                            opacity    : 1,
                            display    : 'block'
                        }
                    });		

                }
            });

        }

        curElement.addClass( 'is-active' );
        
        
        //auto close
        if ( closeTime && !isNaN( closeTime ) ) {
            window.setCloseModalDialog = setTimeout( function() {
                closeModalDialog({target: '.uix-modal-box'});
            }, closeTime );
        }
        
        
        
    }

    if ( curElement.hasClass( 'is-fullscreen' ) ) {
        setTimeout( function() {

            if ( !curElement.hasClass( 'is-video' ) ) {
                curElement.find( '.uix-modal-box__content > .uix-modal-box__body' ).css( 'overflow-y', 'scroll' );
            } else {
                curElement.find( '.uix-modal-box__content > .uix-modal-box__body' ).css( 'overflow-y', 'hidden' );
            }

        }, config.speed );

    }	


}

export default { fireModalDialog };