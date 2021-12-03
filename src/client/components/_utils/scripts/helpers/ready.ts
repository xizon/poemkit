
declare global {
    interface Document {
        attachEvent(event: string, listener: EventListener): boolean;
    }
}

/**
 * Code included inside the code will run once the entire page (all DOM) is ready.
 *
 * @param  {Function} fn   - A function to execute after the DOM is ready.
 * @return {Void}
 */
 function ready(this: any, fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState != 'loading') fn();
        });
    }

}

	
export default ready;