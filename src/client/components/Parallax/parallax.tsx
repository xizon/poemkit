import { __ } from '@uixkit.react/components/_utils/_all';

interface parallaxConfig {
    /** The speed of movement between elements. */
	speed?: number | undefined;
    /** Offset top of background */
	offsetTop?: number | undefined;
    /** Transition time can simulate easing effect. */
	transition?: string | undefined;
    /** Specify the background display. Default value: { enable: true, xPos: '50%' } */
	bg?: any;
}

export function parallax( curElement: any, config: parallaxConfig ) {


	if ( typeof config === typeof undefined ) {

		config = {
			"speed"       : 0.25,
			"offsetTop"   : 0,
			"transition"  : "all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s",
			"bg"          : { enable: true, xPos: '50%' }
		};
	}

    let bgEff      = config.bg,
        $el        = curElement,
        bgXpos     = '50%',
        offsetTop  = config.offsetTop!,
        speed      = -config.speed!;
    
    if ( typeof offsetTop === typeof undefined ) offsetTop = 0;
    if ( typeof speed === typeof undefined ) speed = 0;

    if ( bgEff ) {
        bgEff      = config.bg!.enable;
        bgXpos     = config.bg!.xPos;
    }
    

    //Prohibit transition delay
    $el.css( {
        'transition': 'none'
    } );
    
    //Initialize the position of the background
    if ( bgEff ) {
        //background parallax
        $el.css( 'background-position', bgXpos + ' ' + (-$el[0].getBoundingClientRect().top*speed + (-offsetTop)) + 'px' );
    } else {
        //element parallax
        $el.css( 'transform', 'matrix(1, 0, 0, 1, 0, 0)' );
    }
    
    //
    const scrollUpdate = function() {

        const spyTop = $el[0].getBoundingClientRect().top;

        
        if ( bgEff ) {
            //background parallax
            $el.css({ 
                'background-position': bgXpos + ' ' + ( 0 - ( spyTop * speed + offsetTop ) ) + 'px',
                'transition': config.transition
            });
        } else {
            //element parallax
            $el.css({
                'transform': 'matrix(1, 0, 0, 1, 0, '+( 0 - ( spyTop * speed + offsetTop ) )+')',
                'transition': config.transition
            });
            
            
        }


    };


    const throttleFunc = __.throttle(scrollUpdate, 5);
    window.removeEventListener('scroll', throttleFunc);
    window.removeEventListener('touchmove', throttleFunc);
    
    // Please do not use scroll's off method in each
    window.addEventListener('scroll', throttleFunc);
    window.addEventListener('touchmove', throttleFunc);
    
    
    throttleFunc();
    


}

export default { parallax };