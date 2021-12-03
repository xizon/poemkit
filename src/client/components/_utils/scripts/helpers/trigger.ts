
/**
 * Bind an event in the HTML element
 *
 * @param  {String} eventType         - One event types and optional namespaces, such as "click" 
 * @return {Void}  
 */
 function trigger(this: any, eventType) {
    this.each(function (this: any) {
        const fire = function(this: any, elem, type) {

            // create and dispatch the event
            const event = new CustomEvent(type, {
                detail: {
                    hazcheeseburger: true
                }
            });

            elem.dispatchEvent(event);
        };

        document.addEventListener("plop", function () { }, false);
        fire(this, eventType);
    });

    return this;

}


export default trigger;