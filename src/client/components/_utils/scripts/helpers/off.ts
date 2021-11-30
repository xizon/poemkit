
/*
* Remove an event handler.
*
* @param  {?String} eventType             - One event types and optional namespaces, such as "click"
* @param  {?String|Function} curSelector  - A selector string or function to filter the descendants of the selected elements that trigger the event. 
* @return {Void}      
*/
function off(this: any, eventType, curSelector) {

	if (this.myListeners) {
		for (let i = 0; i < this.myListeners.length; i++) {

			if ( typeof (curSelector) !== 'undefined' ) {
				
				if (typeof curSelector === "function") {
					//is function
					if ( curSelector === this.myListeners[i].function ) this.removeEventListener(this.myListeners[i].eType, this.myListeners[i].callBack);
				} else {
					//is string
					if ( curSelector === this.myListeners[i].selector ) this.removeEventListener(this.myListeners[i].eType, this.myListeners[i].callBack);
				}


			} else {
				this.removeEventListener(this.myListeners[i].eType, this.myListeners[i].callBack);
			}			
			
		};
		delete this.myListeners;
	};
}

export default off;
