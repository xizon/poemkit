
/**
 * Remove the set of matched elements from the DOM.
 *
 * @return {Void} 
 */
 function remove(this: any) {
    this.each(function (this: any) {
        this.parentNode.removeChild(this);
    });

    return this;
}

export default remove;
