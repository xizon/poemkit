
/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the document.
 *
 * @return {Json}      - An object containing the properties top and left. 
 */
 function offset(this: any) {
    let res = { top: 0, left: 0 };

    this.each(function (this: any) {
        const box = this.getBoundingClientRect();
        let top = 0,
            left = 0;

        //Include scrollbar and border
        top = box.top + window.pageYOffset - document.documentElement.clientTop;
        left = box.left + window.pageXOffset - document.documentElement.clientLeft;

        res = { top: top, left: left };
    });

    return res;

}

export default offset;
