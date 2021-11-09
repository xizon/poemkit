import { __ } from '@poemkit/components/_utils/_all';

interface parallaxConfig {
    /** The speed of movement between elements. Recommended value: `-10.00` to `10.00` */
	speed?: number | undefined;
    /** Offset top of background */
	offsetTop?: number | undefined;
    /** Transition time can simulate easing effect. */
	transition?: string | undefined;
    /** Specify the background display. Default value: { enable: true, xPos: '50%' } */
	bg?: any;
}

export function parallax( curElement: any, config: parallaxConfig ) {
    if ( typeof curElement === typeof undefined ) return;
    
    // Set a default configuration
    config = __.setDefaultOptions({
        "speed"       : 0,
        "offsetTop"   : 0,
        "transition"  : "all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s",
        "bg"          : { enable: true, xPos: '50%' }
    }, config);

    //
    let dataBG        = config.bg,
        dataOffsetTop = config.offsetTop,
        dataSpeed     = config.speed,
        dataTrans     = config.transition;


    //
    let bgEff      = dataBG,
        bgXpos     = '50%',
        offsetTop  = dataOffsetTop!,
        speed      = -dataSpeed!;


    if ( bgEff ) {
        bgEff      = dataBG!.enable;
        bgXpos     = dataBG!.xPos;
    }
    

    //Prohibit transition delay
    curElement.style.transition = 'none';

    
    //Initialize the position of the background
    if ( bgEff ) {
        //background parallax
        curElement.style.backgroundPosition = bgXpos + ' ' + (-curElement.getBoundingClientRect().top*speed + (-offsetTop)) + 'px';
    } else {
        //element parallax
        curElement.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    }
    
    //
    const scrollUpdate = function() {

        const spyTop = curElement.getBoundingClientRect().top;
        
        if ( bgEff ) {
            //background parallax
            curElement.style.backgroundPosition = bgXpos + ' ' + ( 0 - ( spyTop * speed + offsetTop ) ) + 'px';
            curElement.style.transition = dataTrans;
        } else {
            //element parallax
            curElement.style.transform = 'matrix(1, 0, 0, 1, 0, '+( 0 - ( spyTop * speed + offsetTop ) )+')';
            curElement.style.transition = dataTrans;  
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

export default parallax;