/*
* Create a deep copy of the set of matched elements.
*
* @return {Array}          - Contains only a collection of HTML elements. 
*                            Returns a duplicate of the node on which this method was called.
*/
function clone(this: any) {
    return { data: this.cloneNode(true) };      
}	

export default clone;