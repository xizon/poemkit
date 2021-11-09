import { __ } from '@poemkit/components/_utils/_all';

interface stickyConfig {
    /** Placeholder for the current element */
	placeholderEl?: HTMLElement | undefined;
    /** Offset top of element */
	topSpacing?: number | undefined;
}

export function sticky( curElement: any, config: stickyConfig ) {
    if ( typeof curElement === typeof undefined ) return;
    
    // Set a default configuration
    config = __.setDefaultOptions({
        "placeholderEl" : false,
        "topSpacing"    : 0
    }, config);

    //
    const placeholderEl   = config.placeholderEl,
          topSpacing = config.topSpacing;
    
    //The original width of the element
    const originalWidth = curElement.offsetWidth; //including: padding + borders + v-scrollbars (if rendered)

    //Returns the element top position relative to the viewport.
    const elOriginalOffsetTop = curElement.getBoundingClientRect().top;
          
 
    //
    const stopTriggerClassName = curElement.dataset.stopTrigger;
    const stopTriggerEnabled = (stopTriggerClassName !== undefined && stopTriggerClassName.length > 0) ? true : false;
    let stopTargetTop = 0;
    if (stopTriggerEnabled) {
        const triggerOffset = curElement.dataset.stopTriggerOffset;
        const diff = triggerOffset !== undefined && triggerOffset.length > 0 ? __.math.evaluate( triggerOffset.replace(/\s/g, '').replace(/\%\h/g, window.innerHeight).replace(/\%\w/g, window.innerWidth)) : 0;
        stopTargetTop = document.querySelector( stopTriggerClassName ).getBoundingClientRect().top - diff;
    }


    //
    const scrollUpdate = function() {

        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;

        //console.log( 'scrolled: ', scrolled, ' | elOriginalOffsetTop: ', elOriginalOffsetTop, ' | stopTargetTop: ', stopTargetTop );
    
        //stick automatically
        //------------------------------------------
        if ( scrolled > elOriginalOffsetTop - topSpacing! ) {
            curElement.classList.add( 'is-active' );
            curElement.style.width = originalWidth + 'px';
            curElement.style.position = 'fixed';
            curElement.style.top = topSpacing + 'px';

            //placeholder status
            if ( placeholderEl ) placeholderEl.style.display = 'block';
    
        } else {
            curElement.classList.remove( 'is-active' );
            curElement.style.top = 0;
            curElement.style.removeProperty( 'position' );
     
            //placeholder status
            if ( placeholderEl ) placeholderEl.style.display = 'none';
        }


        //stop the sticky action
        //------------------------------------------
        if (stopTriggerEnabled) {

            //Detecting when user scrolls to bottom of div
            if ( scrolled >= stopTargetTop ) {
                curElement.style.top = ( 0 - (scrolled - stopTargetTop) ) + topSpacing! + 'px';
            } else {

                if (elOriginalOffsetTop < 0) {
                    curElement.style.top = 0;

                }
            }
        }


    };


    const throttleFunc = __.throttle(scrollUpdate, 5);
    window.removeEventListener('scroll', throttleFunc);
    window.removeEventListener('touchmove', throttleFunc);
    window.addEventListener('scroll', throttleFunc);
    window.addEventListener('touchmove', throttleFunc);
    
    // Prevent calculation errors caused by unloaded completion
    __( document ).ready( () => {
        throttleFunc();
    });


    return throttleFunc;


}

export default sticky;