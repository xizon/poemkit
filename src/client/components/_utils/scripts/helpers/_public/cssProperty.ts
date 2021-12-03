/*
* Get the CSS property
* @public
*
* @description This function can be used separately in HTML pages or custom JavaScript.
* @param  {!Element} el     - The Element for which to get the computed style. Using class name or ID to locate.
* @return {String|Object}   - The value of property.
*/  

const cssProperty = ( () => {
    function t() { }

    return t.version = "0.0.1",

        
    /*
    * Get the -webkit-transition-duration property
    *
    * @param {Element} el - A DOM node containing one selector to match against.
    * @return {Number}    - Returns a pure number.
    */		
    t.getTransitionDuration = function( el ) {

        if ( typeof el === typeof undefined ) {
            return 0;
        }


        let style = window.getComputedStyle(el),
            duration: any = style.webkitTransitionDuration,
            delay: any = style.webkitTransitionDelay;

        if ( typeof duration != typeof undefined ) {
            // fix miliseconds vs seconds
            duration = (duration.indexOf("ms")>-1) ? parseFloat(duration) : parseFloat(duration)*1000;
            delay = (delay.indexOf("ms")>-1) ? parseFloat(delay) : parseFloat(delay)*1000;

            return duration;
        } else {
            return 0;
        }

    },

        
        
    /*
    * Get an object's absolute position on the page
    *
    * @param {Element} el - A DOM node containing one selector to match against.
    * @return {Json}    - An object containing the properties top and left. 
    */	
    t.getAbsoluteCoordinates = function( el ) {

        let windowWidth: number  = window.innerWidth,
            leftPos: any         = null,
            topPos: any          = null;

        if ( ! document.getElementsByTagName( 'body' )[0].className.match(/rtl/) ) {
            leftPos = ( el.offsetLeft == 0 ) ? el.parentElement.offsetLeft : el.offsetLeft;
            topPos = ( el.offsetTop == 0 ) ? el.parentElement.offsetTop : el.offsetTop;
        } else {

            // width and height in pixels, including padding and border
            // Corresponds to outerWidth(), outerHeight()
            leftPos = ( el.offsetLeft == 0 ) ? ( windowWidth - ( el.parentElement.offsetLeft + el.parentElement.offsetWidth ) ) : ( windowWidth - ( el.offsetLeft + el.offsetWidth ) );
            topPos = ( el.offsetTop == 0 ) ? ( windowWidth - ( el.parentElement.offsetTop + el.parentElement.offsetHeight ) ) : ( windowWidth - ( el.offsetTop + el.offsetHeight ) );
        }


        return {
            'left': leftPos,
            'top': topPos
        };

    },


        //
    t
    
})();

export default cssProperty;