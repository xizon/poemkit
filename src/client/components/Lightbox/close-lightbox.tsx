import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply Third-party plugins --*/
import { enableBodyScroll } from '@uixkit.react/components/_plugins/_lib-scrolllock';


interface closeLightboxConfig {
    /** The current page URL for history */
    url?: string | undefined;
    /** The name of the relevant style of the container */
    classWrapper?: string | undefined;
    classInner?: string | undefined;
    classMask?: string | undefined;
    classClose?: string | undefined;

}


export function closeLightbox(config: closeLightboxConfig) {
    
    // Set a default configuration
    config = __.setDefaultOptions({
        "url"          : "#",
        "classWrapper" : ".demo-container",
        "classInner"   : ".demo-inner",
        "classMask"    : ".demo-mask",
        "classClose"   : ".demo-close"
    }, config);

    //
    const wrapperEl       = config.classWrapper,
          innerEl         = config.classInner,
          maskEl          = config.classMask,
          closeEl         = config.classClose;


    //Detect URL change when AJAX calls are done
    if ( __( wrapperEl ).hasClass( 'js-uix-ajax' ) ) {
        history.pushState( null, '', config.url );
    }

    //Remove all dynamic classes
    __( wrapperEl ).removeClass( 'js-uix-no-fixed js-uix-ajax' );
    __( closeEl ).removeClass( 'is-active' );
    

    //Reset current container type
    __( innerEl ).removeClass( 'js-uix-custom js-uix-pure-image' );
    
    
    //close windows
    __( wrapperEl ).hide();
    __( maskEl ).hide();

    
    // Unlocks the page
    enableBodyScroll( document.querySelector( 'body' ) );



    //Remove class for body
    //When scrollLock is used, scrollTop value will change
    __( 'body' ).removeClass( 'scrollLock' );		



}

export default { closeLightbox };