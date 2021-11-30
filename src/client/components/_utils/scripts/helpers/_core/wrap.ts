import traverseIndex from '../_internal/traverseIndex';



/*
* Wrap the selector
* @private
*
* @param  {String|Element} s       - The selector to search for or HTML element to wrap with functionality
* @param  {?Element} root           - OPTIONAL An HTML element to start the element query from
* @return {Array}                  - The collection of elements, wrapped with functionality (see API methods)
*/
function selector(s, root?) {

    root = root || document;

    if (typeof (s) !== 'undefined') {

        if (typeof (s) === 'string') {
            //1) string
            return wrap([].slice.call(root.querySelectorAll(s)));

        } else if (s.tagName) {
            //2) HTML elements
            return wrap([s]);

        } else {

            if (s == window) {
                return wrap([s]);
            }

            //3) document or other
            switch (s.nodeType) {
                case 9:
                    //if Document
                    return wrap([document.body]);

                default:
                    return [];

            }

        }

    }//typeof (s) !== 'undefined'


    return [];
}





/* ------------- Independent Methods (public) -------------- */
import ajax from '../_public/ajax';
import browser from '../_public/browser';
import cssProperty from '../_public/cssProperty';
import debounce from '../_public/debounce';
import deepClone from '../_public/deepClone';
import GUID from '../_public/GUID';
import htmlDecode from '../_public/htmlDecode';
import htmlEncode from '../_public/htmlEncode';
import isTouchCapable from '../_public/isTouchCapable';
import lastUrlParamFormat from '../_public/lastUrlParamFormat';
import math from '../_public/math';
import removeFirstLastStr from '../_public/removeFirstLastStr';
import setDefaultOptions from '../_public/setDefaultOptions';
import styleFormat from '../_public/styleFormat';
import throttle from '../_public/throttle';
import toSlug from '../_public/toSlug';
import trim from '../_public/trim';
import validate from '../_public/validate';

selector.ajax = ajax;
selector.browser = browser;
selector.cssProperty = cssProperty;
selector.debounce = debounce;
selector.deepClone = deepClone;
selector.GUID = GUID;
selector.htmlDecode = htmlDecode;
selector.htmlEncode = htmlEncode;
selector.isTouchCapable = isTouchCapable;
selector.lastUrlParamFormat = lastUrlParamFormat;
selector.math = math;
selector.removeFirstLastStr = removeFirstLastStr;
selector.setDefaultOptions = setDefaultOptions;
selector.styleFormat = styleFormat;
selector.throttle = throttle;
selector.toSlug = toSlug;
selector.trim = trim;
selector.validate = validate;



/* ------------- Private Methods -------------- */
//dom
import $$find from '../find';
import $$closest from '../closest';
import $$prev from '../prev';
import $$next from '../next';
import $$parent from '../parent';
import $$parents from '../parents';
import $$children from '../children';
import $$siblings from '../siblings';

//traverse with index
import $$each from '../each';
import $$eq from '../eq';
import $$first from '../first';
import $$last from '../last';
import $$filter from '../filter';
import $$not from '../not';
import $$maxDimension from '../maxDimension';


//functions
import $$ready from '../ready';
import $$loader from '../loader';
import $$append from '../append';
import $$prepend from '../prepend';
import $$before from '../before';
import $$after from '../after';
import $$prependTo from '../prependTo';
import $$appendTo from '../appendTo';
import $$wrapInner from '../wrapInner';
import $$html from '../html';	
import $$text from '../text';		
import $$clone from '../clone';
import $$addClass from '../addClass';
import $$removeClass from '../removeClass';
import $$toggleClass from '../toggleClass';
import $$css from '../css';
import $$removeData from '../removeData';
import $$attr from '../attr';
import $$data from '../data';
import $$prop from '../prop';
import $$removeAttr from '../removeAttr';
import $$one from '../one';
import $$on from '../on';
import $$off from '../off';
import $$offset from '../offset';
import $$position from '../position';		
import $$scrollTop from '../scrollTop';
import $$scrollLeft from '../scrollLeft';
import $$width from '../width';
import $$height from '../height';
import $$outerWidth from '../outerWidth';
import $$outerHeight from '../outerHeight';
import $$remove from '../remove';
import $$empty from '../empty';
import $$allAttrs from '../allAttrs';
import $$hasClass from '../hasClass';
import $$val from '../val';
import $$show from '../show';
import $$hide from '../hide';
import $$fadeIn from '../fadeIn';
import $$fadeOut from '../fadeOut';
import $$serializeArray from '../serializeArray';
import $$getIndex from '../getIndex';
import $$trigger from '../trigger';
import $$animate from '../animate';

//dom
selector.prototype.find = $$find;
selector.prototype.closest = $$closest;
selector.prototype.prev = $$prev;
selector.prototype.next = $$next;
selector.prototype.parent = $$parent;
selector.prototype.parents = $$parents;
selector.prototype.children = $$children;
selector.prototype.siblings = $$siblings;

//traverse with index
selector.prototype.each = $$each;
selector.prototype.eq = $$eq;
selector.prototype.first = $$first;
selector.prototype.last = $$last;
selector.prototype.filter = $$filter;
selector.prototype.not = $$not;
selector.prototype.maxDimension = $$maxDimension;


//functions
selector.prototype.ready = $$ready;
selector.prototype.loader = $$loader;
selector.prototype.append = $$append;
selector.prototype.prepend = $$prepend;
selector.prototype.before = $$before;
selector.prototype.after = $$after;
selector.prototype.prependTo = $$prependTo;
selector.prototype.appendTo = $$appendTo;
selector.prototype.wrapInner = $$wrapInner;
selector.prototype.html = $$html;	
selector.prototype.text = $$text;		
selector.prototype.clone = $$clone;
selector.prototype.addClass = $$addClass;
selector.prototype.removeClass = $$removeClass;
selector.prototype.toggleClass = $$toggleClass;
selector.prototype.css = $$css;
selector.prototype.removeData = $$removeData;
selector.prototype.attr = $$attr;
selector.prototype.data = $$data;
selector.prototype.prop = $$prop;
selector.prototype.removeAttr = $$removeAttr;
selector.prototype.one = $$one;
selector.prototype.on = $$on;
selector.prototype.off = $$off;
selector.prototype.offset = $$offset;
selector.prototype.position = $$position;		
selector.prototype.scrollTop = $$scrollTop;
selector.prototype.scrollLeft = $$scrollLeft;
selector.prototype.width = $$width;
selector.prototype.height = $$height;
selector.prototype.outerWidth = $$outerWidth;
selector.prototype.outerHeight = $$outerHeight;
selector.prototype.remove = $$remove;
selector.prototype.empty = $$empty;
selector.prototype.allAttrs = $$allAttrs;
selector.prototype.hasClass = $$hasClass;
selector.prototype.val = $$val;
selector.prototype.show = $$show;
selector.prototype.hide = $$hide;
selector.prototype.fadeIn = $$fadeIn;
selector.prototype.fadeOut = $$fadeOut;
selector.prototype.serializeArray = $$serializeArray;
selector.prototype.index = $$getIndex;
selector.prototype.trigger = $$trigger;
selector.prototype.animate = $$animate;


const API = {
    //dom
    find: selector.prototype.find,
    closest: selector.prototype.closest,
    prev: selector.prototype.prev,
    next: selector.prototype.next,
    parent: selector.prototype.parent,
    parents: selector.prototype.parents,
    children: selector.prototype.children,
    siblings: selector.prototype.siblings,

    //traverse with index
    each: selector.prototype.each,
    eq: selector.prototype.eq,
    first: selector.prototype.first,
    last: selector.prototype.last,
    filter: selector.prototype.filter,
    not: selector.prototype.not,
    maxDimension: selector.prototype.maxDimension,
            

    //functions
    ready: selector.prototype.ready,
    loader: selector.prototype.loader,
    append: selector.prototype.append,
    prepend: selector.prototype.prepend,
    before: selector.prototype.before,
    after: selector.prototype.after,
    prependTo: selector.prototype.prependTo,
    appendTo: selector.prototype.appendTo,
    wrapInner: selector.prototype.wrapInner,
    html: selector.prototype.html,	
    text: selector.prototype.text,		
    clone: selector.prototype.clone,
    addClass: selector.prototype.addClass,
    removeClass: selector.prototype.removeClass,
    toggleClass: selector.prototype.toggleClass,
    css: selector.prototype.css,
    removeData: selector.prototype.removeData,
    attr: selector.prototype.attr,
    data: selector.prototype.data,
    prop: selector.prototype.prop,
    removeAttr: selector.prototype.removeAttr,
    one: selector.prototype.one,
    on: selector.prototype.on,
    off: selector.prototype.off,
    offset: selector.prototype.offset,
    position: selector.prototype.position,		
    scrollTop: selector.prototype.scrollTop,
    scrollLeft: selector.prototype.scrollLeft,
    width: selector.prototype.width,
    height: selector.prototype.height,
    outerWidth: selector.prototype.outerWidth,
    outerHeight: selector.prototype.outerHeight,
    remove: selector.prototype.remove,
    empty: selector.prototype.empty,
    allAttrs: selector.prototype.allAttrs,
    hasClass: selector.prototype.hasClass,
    val: selector.prototype.val,
    show: selector.prototype.show,
    hide: selector.prototype.hide,
    fadeIn: selector.prototype.fadeIn,
    fadeOut: selector.prototype.fadeOut,
    serializeArray: selector.prototype.serializeArray,
    index: selector.prototype.index,
    trigger: selector.prototype.trigger,
    animate: selector.prototype.animate
    
};


function wrap(list) {
 
    Object.keys(API).forEach(function(fn) {


        list[fn] = function() {

            //slice method can also be called to convert Array-like objects/collections to a new Array. 
            //You just bind the method to the object. The arguments inside a function is an example of an 'array-like object'.
            const args = arguments;
            
            //
            let result;


            // ////////////////////
            // Traverse the counter of a selector, reset to 0 when calling 	`__(selector).XXX()`
            //----------------------	
            switch (fn) {
                case 'each':
                    // for `each()`
                    traverseIndex.each = 0;
                    break;
                case 'eq':
                    // for `eq()`
                    traverseIndex.eq = 0;
                    break;
                case 'first':
                    // for `first()`
                    traverseIndex.first = 0;
                    break;
                case 'last':
                    // for `last()`
                    traverseIndex.last = 0;
                    traverseIndex.total_last = list.length;
                    break;
                case 'filter':
                    // for `filter()`
                    traverseIndex.filter = 0;
                    break;
                case 'not':
                    // for `not()`
                    traverseIndex.not = 0;
                    break;
                case 'maxDimension':
                    // for `maxDimension()`
                    traverseIndex.maxDimension = 0;
                    traverseIndex.total_maxDimension = list.length;
                    traverseIndex.elements_maxDimension = [];
                    break;
            }
            

            // ////////////////////
            // Methods that return value is `DOM elements using selectors`
            //----------------------
            if (Array.isArray(this)) {
                result = [];
                this.forEach(function (root) {

                    const fnResult = API[fn].apply(root, [].slice.call(args));
                    if (Array.isArray(fnResult)) {
                        result = result.concat(fnResult);
                    } else if (fnResult !== undefined) {
                        result.push(fnResult);
                    }

                });


                if (
                    fn === 'find' || 
                    fn === 'closest' ||
                    fn === 'prev' ||
                    fn === 'next' ||
                    fn === 'first' ||
                    fn === 'last' ||
                    fn === 'parent' ||
                    fn === 'parents' ||
                    fn === 'children' ||
                    fn === 'eq' ||
                    fn === 'filter' ||
                    fn === 'not' ||
                    fn === 'siblings'
                    

                ) {
                    wrap(result);
                    
                } else {
                    result = (result.length && result) || undefined;
                }
                
            } else {
                result = API[fn].apply(this, [].slice.call(args));
            }//end Array.isArray(this)

            

            
            // ////////////////////
            // Methods that return value is `JSON`, `Boolean` or `Number`
            //----------------------
            if (
                fn === 'hasClass' || 
                fn === 'offset' ||
                fn === 'position' ||
                fn === 'index' ||
                fn === 'width' ||
                fn === 'outerWidth' ||
                fn === 'height' ||
                fn === 'outerHeight' ||
                fn === 'maxDimension' ||
                fn === 'allAttrs' ||
                fn === 'scrollTop' ||
                fn === 'scrollLeft'	||
                fn === 'html' ||
                fn === 'text' ||
                fn === 'clone' 	

            ) {	
                return (result === undefined) ? this : ( typeof(result[0].data) !== 'undefined' ? result[0].data : result[0] );
            }
    
            
            
            // ////////////////////
            // Methods that return value is `Array` or `HTML element`
            //----------------------
            if (
                fn === 'data' ||
                fn === 'attr' ||
                fn === 'prop' ||
                fn === 'val'
            ) {	
                
                return (result === undefined) ? this : result[0];
                
            }
    
            
            // ////////////////////
            // The default returns value from a function
            //----------------------
            return (result === undefined) ? this : result;
        };
    });
    
    
    return list;
}

export default selector; 