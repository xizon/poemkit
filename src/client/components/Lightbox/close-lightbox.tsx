import { __ } from '@poemkit/components/_utils/_all';

//Enables body scroll locking
import { enableBodyScroll } from '@poemkit/components/_plugins/_lib-scrolllock';


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
    if ( __( wrapperEl ).hasClass( 'js-poemkit-ajax' ) ) {
        history.pushState( null, '', config.url );
    }

    //Remove all dynamic classes
    __( wrapperEl ).removeClass( 'js-poemkit-no-fixed js-poemkit-ajax' );
    __( closeEl ).removeClass( 'is-active' );
    

    //Reset current container type
    __( innerEl ).removeClass( 'js-poemkit-custom js-poemkit-pure-image' );
    
    
    //close windows
    __( wrapperEl ).hide();
    __( maskEl ).hide();

    
    // Unlocks the page
    enableBodyScroll( document.querySelector( 'body' ) );



    //Remove class for body
    //When scrollLock is used, scrollTop value will change
    __( 'body' ).removeClass( 'scrollLock' );		



}

export default closeLightbox;