
/*
* Some easing functions
* @private
* @link: https://easings.net
* @param {Number} t   - time (Amount of time that has passed since the beginning of the animation. Usually starts at 0 and is slowly increased using a game loop or other update function.)
* @param {Number} b   - beginning value (The starting point of the animation. Usually it's a static value, you can start at 0 for example.)
* @param {Number} c   - change in value (The amount of change needed to go from starting point to end point. It's also usually a static value.)
* @param {Number} d   - duration (Amount of time the animation will take. Usually a static value aswell.)
* @return {Number}
*/
function easeLinear (t, b, c, d) {
	return c * t / d + b;
}

function easeInQuart (t, b, c, d) {
	return c * (t /= d) * t * t * t + b;
}

function easeOutQuart (t, b, c, d) {
	return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}

function easeInOutQuart (t, b, c, d) {
	if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
	return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}

function easeInCubic (t, b, c, d) {
	return c * (t /= d) * t * t + b;
}

function easeOutCubic (t, b, c, d) {
	return c * ((t = t / d - 1) * t * t + 1) + b;
}

function easeInOutCubic (t, b, c, d) {
	if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
	return c / 2 * ((t -= 2) * t * t + 2) + b;
}



export {
	easeLinear,
	easeInQuart,
	easeOutQuart,
	easeInOutQuart,
	easeInCubic,
	easeOutCubic,
	easeInOutCubic
};