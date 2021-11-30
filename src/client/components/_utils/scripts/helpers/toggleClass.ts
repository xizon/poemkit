

/*
* Add or remove one or more classes from each element in the set of matched elements, 
* depending on either the class's presence or the value of the state argument.
*
* @param  {String} c   - One or more classes (separated by spaces) to be toggled for each element in the matched set.
* @return {Void}
*/
function toggleClass(this: any, c) {
    
    if ( ! /^\S+$/g.test(c)) {
        // It has only whitespace
        const classArray = c.split( ' ' );
        let className;

        // Loop through the array of classes to add one class at a time
        for (let j = 0; j < classArray.length; j++ ) {
            className = classArray[j];
            
            if (this.classList.contains(className)) {
                this.classList.remove(className);
            } else {
                this.classList.add(className);
            }

        }
    } else {
        if (this.classList.contains(c)) {
            this.classList.remove(c);
        } else {
            this.classList.add(c);
        }
    }	
    
    
}


export default toggleClass;