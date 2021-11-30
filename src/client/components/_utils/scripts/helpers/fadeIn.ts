
/*
* Display the matched elements by fading them to opaque.
*
* @param  {Number} speed             - A string or number determining how long the animation will run.
* @param  {Function} callback        - A function to call once the animation is complete, called once per matched element.
* @return {Void} 
*/  
function fadeIn(this: any, speed,callback) {
	const elem = this;
	let opacity = 0;

	if (!elem.style.opacity) {
		elem.style.opacity = 0;
	}
	
	elem.style.display = "inherit";
	
	const inInterval = setInterval(function() {
	
		opacity+=.02;
		elem.style.opacity = opacity;

		if ( opacity >= 1 ) {
			clearInterval(inInterval);
			//do something after inInterval()

			elem.style.removeProperty("opacity");

			if (callback && (typeof callback == "function")) {
				callback();
			}		
		}

		
	}, speed/50 );
}	


export default fadeIn;