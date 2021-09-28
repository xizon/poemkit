import { __ } from '@uixkit.react/components/_utils/_all';

 /*-- Apply Third-party plugins --*/
 import { enableBodyScroll } from '@uixkit.react/components/_plugins/_lib-scrolllock';
 import TweenMax from '@uixkit.react/components/_plugins/_lib-gsap';


declare global {
    interface Window {
        setCloseModalDialog?: any;
    }
}

interface closeModalDialogConfig {
    /** Modal dialog ID to be closed */
     target?: string | undefined;
}


export function closeModalDialog(config: closeModalDialogConfig) {

	if ( typeof config === typeof undefined ) {

        config = {
            "target": '.uix-modal-box'
        };

	}

    const curElement = __( config.target );

    //Enable mask to close the window.
    __( '.uix-modal-mask' ).removeClass( 'js-uix-disabled' );

    curElement.removeClass( 'is-active' );
    TweenMax.to( '.uix-modal-mask', 0.3, {
        css: {
            opacity : 0,
            display : 'none'
        }
    });
        
    curElement.find( '.uix-modal-box__content' ).removeClass( 'js-uix-no-fullscreen' );




    // Unlocks the page
    enableBodyScroll( document.querySelector( 'body' ) );



    //Remove class for body
    //When scrollLock is used, scrollTop value will change
    __( 'body' ).removeClass( 'scrollLock' );		


    //Prevent automatic close from affecting new fire effects
    clearTimeout( window.setCloseModalDialog );	
  


}

export default { closeModalDialog };