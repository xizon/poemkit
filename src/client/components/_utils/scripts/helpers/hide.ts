
/**
 * Hide the matched elements.
 *
 * @return {Void}    
 */
 function hide(this: any) {
    this.each(function (this: any) {
        this.style.display = 'none';
    });
    return this;

}

export default hide;
