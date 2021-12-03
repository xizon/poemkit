import $$ from './_core/instance';

/**
 * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
 *
 * @param  {String} eventType         - One event types and optional namespaces, such as "click" 
 * @param  {?String} selector         - A selector string to filter the descendants of the selected elements that trigger the event. 
 * @param  {Function} fn              - A function to execute when the event is triggered. 
 * @return {Void}      
 */
function one(this: any, eventType, selector, fn) {
    this.each(function (this: any) {
        $$(this).on(eventType, selector, fn, true);
    });

    return this;

}

export default one;
