import { __ } from '@poemkit/components/_utils/_all';

 /*-- Apply Third-party plugins --*/
import { disableBodyScroll } from '@poemkit/components/_plugins/_lib-scrolllock';
import TweenMax from '@poemkit/components/_plugins/_lib-gsap';

//
import { closeModalDialog } from '@poemkit/components/ModalDialog/close-modal-dialog';

declare global {
    interface Window {
        setCloseModalDialog?: any;
    }
}

interface fireModalDialogConfig {
    /** Custom modal height whick need a unit string.  
     * This attribute "data-modal-height" may not exist. Such as: 200px
    */
    height?: number | string | boolean | undefined;
    /** Custom modal width whick need a unit string.
     * This attribute "data-modal-width" may not exist. Such as: 200px
     */
    width?: number | string | boolean | undefined;
    /** Delay Time when Full Screen Effect is fired. Amount of time measured in milliseconds. */
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


export function fireModalDialog(curElement: any, config: fireModalDialogConfig) {
    if ( typeof curElement === typeof undefined ) return;
    
    // Set a default configuration
    config = __.setDefaultOptions({
        "height"       : false,
        "width"        : false,
        "speed"        : 500,
        "btn"          : false,
        "lightbox"     : true,
        "autoClose"    : false,
        "closeOnlyBtn" : false
    }, config);

    //
    const dataH                 = config.height,
          dataW                 = config.width,
          closeTime             = config.autoClose,
          lightBoxEnabled       = config.lightbox,
          animDelay             = config.speed,
          closeOnlyBtnEnabled   = config.closeOnlyBtn,
          linkBtn: any          = config.btn;
          

    //Prevent automatic close from affecting new fire effects
    clearTimeout( window.setCloseModalDialog );	

    //Add modal mask to stage
    if ( __( '.poemkit-modal-mask' ).length == 0 ) {
        __( 'body' ).prepend( '<div className="poemkit-modal-mask"></div>' );
    }
    if ( closeOnlyBtnEnabled ) {
        __( '.poemkit-modal-mask' ).addClass( 'js-poemkit-disabled' );
    } else {
        __( '.poemkit-modal-mask' ).removeClass( 'js-poemkit-disabled' );
    }


    // Initializate modal
    if ( linkBtn ) {
        curElement.find( '.poemkit-modal-box__content' ).addClass( 'js-poemkit-no-fullscreen' );

        if ( linkBtn.data( 'video-win' ) ) {
            curElement.find( '.poemkit-modal-box__content > .poemkit-modal-box__body' ).css( 'overflow-y', 'hidden' );
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
        

        if ( dataH && dataH != '' ) {
            curElement.css( {'height': dataH } );
        }

        if ( dataW && dataW != '' ) {
            curElement.css( {'width': dataW } );
        }

        
        //Enable the lightbox effect.
        if ( lightBoxEnabled ) {
            TweenMax.set( '.poemkit-modal-mask', {
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
        if ( closeTime && !isNaN( closeTime as number ) ) {
            window.setCloseModalDialog = setTimeout( function() {
                closeModalDialog( __( '.poemkit-modal-box' ) );
            }, closeTime as number );
        }
        
        
        
    }

    if ( curElement.hasClass( 'is-fullscreen' ) ) {
        setTimeout( function() {

            if ( !curElement.hasClass( 'is-video' ) ) {
                curElement.find( '.poemkit-modal-box__content > .poemkit-modal-box__body' ).css( 'overflow-y', 'scroll' );
            } else {
                curElement.find( '.poemkit-modal-box__content > .poemkit-modal-box__body' ).css( 'overflow-y', 'hidden' );
            }

        }, animDelay );

    }	


}

export default fireModalDialog;