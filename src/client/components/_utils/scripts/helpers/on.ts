
import isChild from './_internal/isChild';

/**
 * Attach an event handler function for one or more events to the selected elements.
 *
 * @param  {String} eventType         - One event types and optional namespaces, such as "click" 
 * @param  {?String} selector         - A selector string to filter the descendants of the selected elements 
 *                                      that trigger the event. 
 * @param  {Function} fn              - A function to execute when the event is triggered. 
 * @param  {Boolean} once             - A boolean value indicating that the listener should be invoked at most 
 *                                      once after being added. If true, the listener would be automatically 
 *                                      removed when invoked.
 * @return {Void}      
 */
 function on(this: any, eventType, selector, fn, once) {
    this.each(function (this: any) {
        if (typeof (once) === 'undefined') once = false;

        let _curFun: any = null;

        if (typeof (fn) !== 'function') {
            fn = selector;
            selector = null;
        }

        if (!this.myListeners) {
            this.myListeners = [];
        };

        if (selector) {
            //if string
            _curFun = function (this: any, evt) {

                [].slice.call(this.querySelectorAll(selector)).forEach(function (el) {
                    if (el === evt.target) {
                        fn.call(el, evt);
                    } else if (isChild(evt.target, el)) {
                        fn.call(el, evt);
                    }
                });
            };

            this.myListeners.push({
                eType: eventType,
                callBack: _curFun,
                function: fn,
                selector: selector
            });


        } else {

            //if HTML element
            _curFun = function (this: any, evt) {
                fn.call(this, evt);
            };


            this.myListeners.push({
                eType: eventType,
                callBack: _curFun,
                function: fn,
                selector: selector
            });

        }

        if (once) {
            this.addEventListener(eventType, _curFun, { once: true });
        } else {
            this.addEventListener(eventType, _curFun);
        }

    });
    return this;

}
export default on;
