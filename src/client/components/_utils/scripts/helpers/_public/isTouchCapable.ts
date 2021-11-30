declare global {
    interface Window {
        DocumentTouch?: any;
    }
}


/*
* To determine if it is a touch screen.
*
* @return {Boolean} 
*/  
function isTouchCapable() {
	return 'ontouchstart' in window ||
			window.DocumentTouch && document instanceof window.DocumentTouch ||
			window.navigator.maxTouchPoints > 0;  
}				

export default isTouchCapable;