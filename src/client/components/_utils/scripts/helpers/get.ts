/**
 * Returns a native DOM element
 * 
 * @param  {Number} index   - A number for index.
 * @return {Element} 
 */
function get(this: any, index) {
    let { elems } = this;

    if ( index === -1 ) {
        //get all elements
        return elems;
    } else {
        return elems[index];
    }
}

export default get;
