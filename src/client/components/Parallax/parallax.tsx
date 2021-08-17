import { __ } from '@uixkit.react/components/_utils/_all';

interface parallaxConfig {
	speed?: number | undefined;
	offsetTop?: number | undefined;
	transition?: string | undefined;
	bg?: any;
}

export function parallax( curElement: any, config: parallaxConfig ) {


	if ( typeof config === typeof undefined ) {

        /*
        * @param  {Number} speed       - The speed of movement between elements.
        * @param  {String} transition  - Transition time can simulate easing effect.
        * @param  {Object} bg            - Specify the background display. Default value: { enable: true, xPos: '50%' }
        * @return {Void}
        */   
		config = {
			"speed"       : 0.25,
			"offsetTop"   : 0,
			"transition"  : "all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s",
			"bg"          : { enable: true, xPos: '50%' }
		};
	}

	if ( config ) {

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


}

export default { parallax };