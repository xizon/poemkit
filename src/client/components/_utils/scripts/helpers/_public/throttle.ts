
/*
* Throttle
* @public
*
* @param  {Function} fn    - A function to be executed within the time limit.
* @param  {Number} limit   - Waiting time.
* @return {Function}       - Returns a new function.
*/  
function throttle( fn, limit = 300 ) {
    let waiting = false;                     
    return function (this: any) {                     
        if (!waiting) {                       
            fn.apply(this, arguments);  
            waiting = true;                  
            setTimeout(function () {          
                waiting = false;           
            }, limit);
        }
    }
};
	

export default throttle;