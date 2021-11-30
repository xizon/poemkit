
/*
* Bind an event in the HTML element
*
* @param  {String} eventType         - One event types and optional namespaces, such as "click" 
* @return {Void}  
*/
function trigger(this: any, eventType) {
	const fire = function( elem, type ) {
		
		// create and dispatch the event
		const event = new CustomEvent(type, {
			detail: {
			hazcheeseburger: true
			}
		});
		
		elem.dispatchEvent(event);
	};
	
	document.addEventListener( "plop", function() { }, false );
	fire( this, eventType );
	
}	

export default trigger;