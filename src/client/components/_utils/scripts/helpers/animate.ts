
import {	
	easeLinear,
	easeInQuart,
	easeOutQuart,
	easeInOutQuart,
	easeInCubic,
	easeOutCubic,
	easeInOutCubic
} from './_internal/easing';
/*
* Create a new Animation, applies it to the element, then plays the animation
* @param  {String} prop         - The style property to be set.
* @param  {Number} from         - The initial offset of the object
* @param  {Number} to           - The end offset of the object
* @param  {String} unit         - Unit string, such as `px` and `%`, and so on.
* @param  {Number} duration     - The number of milliseconds each iteration of the animation takes to complete
* @param  {String} easing       - The rate of the animation's change over time. Accepts the pre-defined values "linear", "ease-in", "ease-out", and "ease-in-out"
* @param  {Function} complete   - A function to call once the animation is complete, called once per matched element.
* @return {Void}
*/
function animate(this: any, prop, from, to, unit, duration, easing, complete) {
	const el = this;
	const start = new Date().getTime();
	const timer = setInterval(function () {
		const time = new Date().getTime() - start;
		let val;

		switch (easing) {
			case "linear":
				val = easeLinear(time, from, to - from, duration);
				break;
			case "ease-in":
				val = easeInCubic(time, from, to - from, duration);
				break;
			case "ease-out":
				val = easeOutCubic(time, from, to - from, duration);
				break;
			case "ease-in-out":
				val = easeInOutCubic(time, from, to - from, duration);
				break;

			default:
				val = easeLinear(time, from, to - from, duration);
		}


		//
		const res = val + unit;
		el.style[prop] = res;
		
		if (time >= duration) {
			clearInterval(timer);

			//
			if (complete && (typeof complete == "function")) {
				complete.call(el);
			}


		}
	}, 1000 / 60);

}

export default animate;