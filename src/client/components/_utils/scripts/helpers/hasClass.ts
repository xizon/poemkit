/**
 * Determine whether any of the matched elements are assigned the given class.
 *
 * @param  {String} v         - The class name to search for.
 * @return {Boolean}   - Return true if the class is assigned to an element
 */
 function hasClass(this: any, v) {
    let res = false;

    this.each(function (this: any) {
        res = this.classList.contains(v) ? true : false;
    });

    return res;
}


export default hasClass;
