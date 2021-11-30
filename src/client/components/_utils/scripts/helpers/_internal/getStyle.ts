import actualPropertyValue from './actualPropertyValue';

/*
* Get real style data
* @private
*/
function getStyle( el, attr ) {
    const self = el;
    

    if ( typeof (window) !== 'undefined' ) {
        
        //document or window data
        //-----------------
        if ( self === document.body ) {
            if ( attr == 'height' ) return document.body.clientHeight;
            if ( attr == 'width' ) return document.body.clientWidth;
        }

        if ( self === window ) {
            if ( attr == 'height' ) return window.innerHeight;
            if ( attr == 'width' ) return window.innerWidth;
        }		


        //element data
        //-----------------
        let _val: any = 0;
        
        const computedStyle = (window.getComputedStyle as unknown as boolean)
                            ? getComputedStyle(self) // Standards
                            : self.currentStyle;     // Old IE


        if (computedStyle) { // This will be true on nearly all browsers
            _val =  computedStyle[attr];  //return ??px
        }

        
        // if getComputedStyle return 'auto'
        if ( attr === 'height' && _val === 'auto' ) return actualPropertyValue(self, 'height');
        if ( attr === 'width'  && _val === 'auto' ) return actualPropertyValue(self, 'width');


        //
        const newVal = /\d+/.exec( _val ); // Array ["123"]
        return parseFloat(newVal as any);

    } else {
        return 0;
    }
}

export default getStyle;