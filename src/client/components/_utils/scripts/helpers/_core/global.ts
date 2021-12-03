import core from './constructor';
import instance from './instance';

//+++++++++++++++++++++++++++++++++++++++++++
// Independent Methods (public)
//+++++++++++++++++++++++++++++++++++++++++++
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


//+++++++++++++++++++++++++++++++++++++++++++
// API methods
//+++++++++++++++++++++++++++++++++++++++++++
//dom
import $$find from '../find';
import $$closest from '../closest';
import $$prev from '../prev';
import $$next from '../next';
import $$parent from '../parent';
import $$parents from '../parents';
import $$children from '../children';
import $$siblings from '../siblings';

//traverse
import $$each from '../each';
import $$eq from '../eq';
import $$first from '../first';
import $$last from '../last';
import $$filter from '../filter';
import $$not from '../not';
import $$maxDimension from '../maxDimension';


//other methods
import $$get from '../get';
import $$len from '../len';
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


declare global {
    interface Window {
        __?: any;
    }
}


const __ = (function () {

    'use strict';

	/**
	 * Create the constructor (Wrap the selector)
	 * @private
	 *
	 * @param  {String|Element|Array} s  - The selector to search for or HTML element to wrap with functionality
	 * @param  {Element} root            - OPTIONAL An HTML element to start the element query from
	 * @return {NodeList}                - The collection of elements, wrapped with functionality (see API methods)
	 */
     const Constructor = core;

    /**
     * Instantiate a new constructor
     * @private
     */
    const $$: any = instance;

    /**
     * Return a prototype that extending by adding new methods
     * @private
     */
    $$.fn = Constructor.prototype;


	
	/* ------------- Independent Methods (public) -------------- */
    $$.ajax = ajax;
    $$.browser = browser;
    $$.cssProperty = cssProperty;
    $$.debounce = debounce;
    $$.deepClone = deepClone;
    $$.GUID = GUID;
    $$.htmlDecode = htmlDecode;
    $$.htmlEncode = htmlEncode;
    $$.isTouchCapable = isTouchCapable;
    $$.lastUrlParamFormat = lastUrlParamFormat;
    $$.math = math;
    $$.removeFirstLastStr = removeFirstLastStr;
    $$.setDefaultOptions = setDefaultOptions;
    $$.styleFormat = styleFormat;
    $$.throttle = throttle;
    $$.toSlug = toSlug;
    $$.trim = trim;
    $$.validate = validate;
    

    /* ---------------- API methods ----------------- */
    //dom
    Constructor.prototype.find = $$find;
    Constructor.prototype.closest = $$closest;
    Constructor.prototype.prev = $$prev;
    Constructor.prototype.next = $$next;
    Constructor.prototype.parent = $$parent;
    Constructor.prototype.parents = $$parents;
    Constructor.prototype.children = $$children;
    Constructor.prototype.siblings = $$siblings;

    //traverse
    Constructor.prototype.each = $$each;
    Constructor.prototype.eq = $$eq;
    Constructor.prototype.first = $$first;
    Constructor.prototype.last = $$last;
    Constructor.prototype.filter = $$filter;
    Constructor.prototype.not = $$not;
    Constructor.prototype.maxDimension = $$maxDimension;


    //other methods
    Constructor.prototype.get = $$get;
    Constructor.prototype.len = $$len;
    Constructor.prototype.ready = $$ready;
    Constructor.prototype.loader = $$loader;
    Constructor.prototype.append = $$append;
    Constructor.prototype.prepend = $$prepend;
    Constructor.prototype.before = $$before;
    Constructor.prototype.after = $$after;
    Constructor.prototype.prependTo = $$prependTo;
    Constructor.prototype.appendTo = $$appendTo;
    Constructor.prototype.wrapInner = $$wrapInner;
    Constructor.prototype.html = $$html;	
    Constructor.prototype.text = $$text;		
    Constructor.prototype.clone = $$clone;
    Constructor.prototype.addClass = $$addClass;
    Constructor.prototype.removeClass = $$removeClass;
    Constructor.prototype.toggleClass = $$toggleClass;
    Constructor.prototype.css = $$css;
    Constructor.prototype.removeData = $$removeData;
    Constructor.prototype.attr = $$attr;
    Constructor.prototype.data = $$data;
    Constructor.prototype.prop = $$prop;
    Constructor.prototype.removeAttr = $$removeAttr;
    Constructor.prototype.one = $$one;
    Constructor.prototype.on = $$on;
    Constructor.prototype.off = $$off;
    Constructor.prototype.offset = $$offset;
    Constructor.prototype.position = $$position;		
    Constructor.prototype.scrollTop = $$scrollTop;
    Constructor.prototype.scrollLeft = $$scrollLeft;
    Constructor.prototype.width = $$width;
    Constructor.prototype.height = $$height;
    Constructor.prototype.outerWidth = $$outerWidth;
    Constructor.prototype.outerHeight = $$outerHeight;
    Constructor.prototype.remove = $$remove;
    Constructor.prototype.empty = $$empty;
    Constructor.prototype.allAttrs = $$allAttrs;
    Constructor.prototype.hasClass = $$hasClass;
    Constructor.prototype.val = $$val;
    Constructor.prototype.show = $$show;
    Constructor.prototype.hide = $$hide;
    Constructor.prototype.fadeIn = $$fadeIn;
    Constructor.prototype.fadeOut = $$fadeOut;
    Constructor.prototype.serializeArray = $$serializeArray;
    Constructor.prototype.index = $$getIndex;
    Constructor.prototype.trigger = $$trigger;
    Constructor.prototype.animate = $$animate;



	/* ------------- Global -------------- */
	if ( typeof (window) !== 'undefined' ) {
		window.__ = $$;
	}
	

	//
    return $$;
})();


export default __;

