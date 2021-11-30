declare global {
    interface Window {
        __?: any;
    }
}


import $$ from './wrap';

const __ = (function () {

    'use strict';

    if (typeof (window) !== 'undefined') {
        window.__ = $$;
    }

    return $$;
})();


export default __;

