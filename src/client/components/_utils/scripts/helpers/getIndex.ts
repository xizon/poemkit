
/**
 * Search for a given element from among the matched elements.
 *
 * @return {Number}     - The return value is an integer indicating the position of the 
 *                        first element within the object relative to its sibling elements.
 */
function getIndex(this: any) {
    let res = -1;

    this.each(function (this: any) {
        const self = this;
        const children = self.parentNode.childNodes;

        let num = 0;
        for (let i = 0; i < children.length; i++) {
            if (children[i] == self) res = num;
            if (children[i].nodeType == 1) num++;
        }

    });

    return res;
}


export default getIndex;