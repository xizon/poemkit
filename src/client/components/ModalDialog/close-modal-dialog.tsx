import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply Third-party plugins --*/
import { enableBodyScroll } from '@poemkit/components/_plugins/_lib-scrolllock';
import TweenMax from '@poemkit/components/_plugins/_lib-gsap';


declare global {
    interface Window {
        setCloseModalDialog?: any;
    }
}


export function closeModalDialog(curElement: any) {
    if ( typeof curElement === typeof undefined ) return;

    //Enable mask to close the window.
    __( '.poemkit-modal-mask' ).removeClass( 'js-poemkit-disabled' );

    curElement.removeClass( 'is-active' );
    TweenMax.to( '.poemkit-modal-mask', 0.3, {
        css: {
            opacity : 0,
            display : 'none'
        }
    });
        
    curElement.find( '.poemkit-modal-box__content' ).removeClass( 'js-poemkit-no-fullscreen' );


    // Unlocks the page
    enableBodyScroll( document.querySelector( 'body' ) );



    //Remove class for body
    //When scrollLock is used, scrollTop value will change
    __( 'body' ).removeClass( 'scrollLock' );		


    //Prevent automatic close from affecting new fire effects
    clearTimeout( window.setCloseModalDialog );	
  


}

export default closeModalDialog;