/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
 *
 * @return {Json}      - An object containing the properties top and left.
 */
 function position(this: any) {
    let res = { top: 0, left: 0 };

    this.each(function (this: any) {

        let top = this.offsetTop ? this.offsetTop : 0,
            left = this.offsetLeft ? this.offsetLeft : 0;

        res = { top: top, left: left };
    });
    return res;
}


export default position;