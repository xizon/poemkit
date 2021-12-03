/**
 * Create the constructor (Wrap the selector)
 * @private
 *
 * @param  {String|Element|Array} s   - The selector to search for or HTML element to wrap with functionality
 * @param  {?Element} root            - OPTIONAL An HTML element to start the element query from
 * @return {NodeList}                 - The collection of elements, wrapped with functionality (see API methods)
 */
const Constructor = function (this: any, s, root?) {
    if ( typeof (s) === 'undefined' ) return;
    

    // Backward compatibility, some methods need to use it
    this.storeSelector = this; 
    

    //
    this.elems = [];
    root = root || document;
    
    if ( Array.isArray(s) ) {

        //is array
        // eg.  [li#demo1, li#demo2, li#demo3]
        // [ [li#demo1, li#demo2, li#demo3] ]
        //----------

        // There may be Nested array, the array needs to be flattened
        s = [].concat(...s);

        this.elems = s;

    } else {

        //not array
        //----------
        
        if (typeof(s) === 'string') {
            //1) string
            this.elems = root.querySelectorAll(s);

        } else if (s.tagName) {
            //2) HTML elements
            this.elems = [s];

        } else {

            //3) window
            if ( s === window ) this.elems = [window];

            //4) document or other
            switch( s.nodeType ) {
                    case 9:
                    //if Document
                    this.elems = [document.body];
                    break;

                    default:
                    
            } 

        }		

    }


}

export default Constructor;