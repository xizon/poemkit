
/**
 * Traverse all the attribute names and values in an HTML element
 *
 * @return {Array}              - A new array containing the properties name and value.
 */
 function allAttrs(this: any) {
    let res = [];

    this.each(function (this: any) {
        const newArr = [];
        Array.from(this.attributes)
            .filter(obj => {
                return (obj as unknown as any).specified; 
            })
            .map(obj => {
                newArr[ (obj as unknown as HTMLElement).nodeName ] = (obj as unknown as HTMLElement).textContent;
            });

        res = newArr;

    });

    return res;

}

export default allAttrs;
