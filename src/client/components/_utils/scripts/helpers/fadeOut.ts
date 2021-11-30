
/*
* Hide the matched elements by fading them to transparent.
*
* @param  {Number} speed             - A string or number determining how long the animation will run.
* @param  {Function} callback        - A function to call once the animation is complete, called once per matched element.
* @return {Void} 
*/  
function fadeOut(this: any, speed,callback) {
	const elem = this;
	let opacity = 1;


	if (!elem.style.opacity) {
		elem.style.opacity = 1;
	}

	const outInterval = setInterval(function() {
		
		opacity-=.02;
		elem.style.opacity = opacity;
		
		if (opacity <= 0) {
			clearInterval(outInterval);
			//do something after outInterval()

			elem.style.opacity = 0;
			elem.style.display = "none"; //adding dispaly property and equall to none	

			
			if (callback && (typeof callback == "function")) {
				callback();
			}
			
			
		}
	}, speed/50 );
}	

export default fadeOut;