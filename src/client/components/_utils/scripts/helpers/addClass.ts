	
/*
* Adds the specified class(es) to each element in the set of matched elements.
*
* @param  {String} c   - One or more space-separated classes to be added to the class attribute of each matched element.
* @return {Void}
*/
function addClass(this: any, c) {

    if ( ! /^\S+$/g.test(c)) {
        // It has only whitespace
        const classArray = c.split( ' ' );
        let className;

        // Loop through the array of classes to add one class at a time
        for (let j = 0; j < classArray.length; j++ ) {
            className = classArray[j];
            this.classList.add( className );
        }
    } else {
        this.classList.add(c);
    }

    
}


export default addClass;