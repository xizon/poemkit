declare global {
    interface Window {
        ActiveXObject?: any;
    }
}

/*
* Determine whether it is a special browser
*
* @return {Json}  - Boolean judgment collection of common browsers
*/  
const browser = ( () => {
    
    let browser = {};
    
    if ( typeof (navigator) !== 'undefined' ) {

        // Test via a getter in the options object to see if the passive property is accessed
        let supportsPassive = false;
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get: function() {
                supportsPassive = true;
                }
            });
            window.addEventListener("testPassive", (e: Event) => {}, opts);
            window.removeEventListener("testPassive", (e: Event) => {}, opts);
        } catch (e) {}


        browser = {
            isMobile        : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isAndroid       : /(android)/i.test(navigator.userAgent),
            isPC            : !navigator.userAgent.match(/(iPhone|iPod|Android|ios|Mobile)/i),
            isSafari        : !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/), /*Test to 9, 10. */
            isIE            : !!window.ActiveXObject || "ActiveXObject" in window,     /*Test to 6 ~ 11 (not edge) */
            supportsPassive : supportsPassive
        };	
    }
    
    return browser;

})();
        

export default browser;