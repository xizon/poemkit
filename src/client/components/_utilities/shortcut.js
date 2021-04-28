
/* 
 *************************************
 * Core Shortcut
 *
 * @package: uix-kit-react
 * @version: 0.19
 * @last update: April 26, 2021
 * @license: MIT
 *
 *************************************
 */
/*


__( document ).ready( function() {
	//do something
});


__( 'body' ).loader({
	imagesSelector: 'body img',
	videosSelector: 'body video',
	startEvent: function() {
		//do something
		console.log( '=> loading.' );
	},
	progressEvent: function(percent) {
		//do something
		console.log( '=> progress: ' + percent + '%' );
	},
	endEvent: function() {
		
		console.log( '=> loaded!!!' );
		//do something
	}
});



__( document ).ready( function() {

	__( 'body' ).loader({
		imagesSelector: 'body img',
		videosSelector: 'body video',
		startEvent: function() {
			console.log( '=> loading.' );
		},
		progressEvent: function(percent) {
			console.log( '=> progress: ' + percent + '%' );
		},
		endEvent: function() {
			console.log( '=> loaded!!!' );

			__( '.demo' ).remove();
			__( '.demo' ).empty();
			__( '.demo' ).show();
			__( '.demo' ).hide();
			__( '.demo' ).addClass( 'class-3' );
			__( '.demo, .demo2' ).addClass( 'class-4 );
			__( '.demo' ).find( 'li' ).addClass( 'class-1 class-2' );
			__( '.demo' ).find( 'li' ).removeClass( 'class-2' );
			__( '.demo' ).closest( '.container' ).addClass( 'class-4' );
			__( '.demo' ).css({
				'background': '#f00',
				'font-size': '18px'
			});
			__( '.demo' ).data( 'bg', 'red' );
			__( '.demo' ).attr( 'disabled', 'disabled' );
			__( '.demo' ).width( 300 );
			__( '.menu li:first-child' ).width( "50%" );

			__( '.menu li' ).off( 'click' ).on( 'click', function( e ) {
				console.log('e: ', e);
				console.log('this: ', this);
				console.log('index(): ', __( this ).index());
				console.log('attr(class): ', __( this ).attr( 'class' ));
				__( this ).addClass( 'new-class' )
			});

			__( document ).on( 'click', '.menu li', function( e ) {
				console.log('e: ', e);
				console.log('this: ', this);
				console.log('index(): ', __( this ).index());
				console.log('attr(class): ', __( this ).attr( 'class' ));
				__( this ).addClass( 'new-class' )
			});

			__( '.menu li' ).eq(1).append( '<span style="color:green">after</span>');
			__( '.menu li' ).eq(1).prepend( '<span style="color:red">before</span>');
			__( '.menu li' ).first().before( '<li style="color:green">(first)before</li>');
			__( '.menu li' ).last().after( '<li style="color:red">(last)after</li>');
			__( 'h1' ).html( '<span style="color:red">New H1</span>' );
			__( '.demo1' ).prev().addClass( 'prev' );
			__( '.demo2' ).next().addClass( 'next' );
			__( '.demo' ).children().addClass( 'children-all' );
			__( '.demo' ).children( '.demo-children2' ).addClass( 'children-single' );
			__( '.class-1' ).not( '.class-2' ).addClass( 'class-not' );
			__( '.class-1' ).filter( '.class-2' ).addClass( 'class-filter' );
			__( '.class-1' ).siblings().addClass( 'class-siblings' );
			__( '.demo' ).trigger( 'click' );


			console.log( '<h1> content: ' + __( 'h1' ).html());
			console.log( 'len() of .menu li: ' + __( '.menu li' ).length );
			console.log( 'len() of #none: ' + __( '#none' ).length );
			console.log( 'width(): ' + __( '.demo' ).width() );
			console.log( 'outerWidth(): ' + __( '.demo' ).outerWidth() );
			console.log( 'outerWidth( true ): ' + __( '.demo' ).outerWidth(true) );
			
			console.log( 'height(): ' + __( '.demo' ).height() );
			console.log( 'outerHeight(): ' + __( '.demo' ).outerHeight() );
			console.log( 'outerHeight( true ): ' + __( '.demo' ).outerHeight(true) );	
			
			console.log( '[data-bg] value: ' + __( '.demo' ).data( 'bg' ) );
			console.log( '[disabled] value: ' + __( '.demo' ).attr( 'disabled' ) );
			console.log( __( '.demo' ).hasClass( 'class-1' ) );
			console.log( __( 'h1' ).offset() );
			console.log( __( 'h1' ).position() );		
			console.log( __( '.demo' ).maxDimension() );		
			console.log( __( '.menu li:nth-child(2)' ).index() );


			__( '.menu li' ).each( function( index, selectors )  {
				console.log( index + ' : ' );
				console.log( this );
				this.style.background = '#333';
				__( this ).css({
					'background': '#f00',
					'font-size': '18px'
				});
				
				
				//Nested `each() `
				//__( selectors) are generally used for exact each selector
				__( selectors ).find( 'ul > li' ).each( function( index ) {
					__( this ).attr( 'id', 'li-id-' + index );
				});
	
	
				//Nested `eq()`
				for (let k = 0; k<liNum; k++) {
					__( selectors + ' ul > li' ).eq(k).css({
						'font-size'        : '18px'
					});
					
					__( selectors + ' ul > li:nth-child('+k+') > a' ).css({
						'font-size'        : '18px'
					});
				}

			});

			__( '.demo' ).fadeOut(1000, function(){
				setTimeout( function() {
					__( '.demo' ).fadeIn(3000);
				},1000 );

			});
			
			__( '.demo' ).toggleClass( 'class-toggle-1 class-toggle-2' );
			
			
			__.ajax({
				url: 'https://restcountries.eu/rest/v2/name/Argentina',
				method: 'GET',
				complete: function( data ) {
					console.log( '=> ajax ok!' );
					console.log( data );
				}
			});
			
			
			__( '#input' ).val( 33333 );
			console.log( '__( val(): ' + __( '#input' ).val());

			__( '#checkbox1' ).prop('checked', true);
			console.log( '__( prop(): ' + __( '#checkbox2' ).prop( 'checked' ));	

			__( '#input' ).prop('disabled', true);


			// To send data in the application/x-www-form-urlencoded format instead
			const formData = new FormData();
			const defaultPostData = {
				action  : 'load_singlepages_ajax_content'
			};
			for(let k in defaultPostData) {
				formData.append(k, defaultPostData[k]);
			}

			// For multiple form fields data acquisition
			const oldFormData = __( '#form' ).serializeArray();  
			oldFormData.forEach(function(item){
				formData.append(item.name, item.value);
			});


			console.log( __.browser.isIE );  //.isMobile, .isAndroid, .isPC, .isSafari, .isIE, .supportsPassive
			console.log( __.GUID.create() );
			console.log( __.math.evaluate( '100/3' ) );
			console.log( __.math.getRandomFloat(1, 10) );
			console.log( __.math.getDegree(135) );
			console.log( __.math.getRadian(1) );
			console.log( __.math.getPolarCoord(10,30,0) );
			console.log( __.cssProperty.getAbsoluteCoordinates( __( '.col-12' )[0] ).left );
			console.log( __.cssProperty.getTransitionDuration( __( '.col-12' )[0] ) );
			console.log( __.styleFormat( 'font-size: 10px;background: #51B801; color:#fff; border-radius: 5px;padding: 2px 3px;display: inline-block;margin-left: 3px;' ) )
			console.log( __.trim( 'string string spacing string' ) );
            console.log( __.lastUrlParamFormat( 'string-string-spacing_string' ) );
			console.log( __.removeFirstLastStr( ',string,string,string,' ) );
			console.log( __.validate.isMobile( '13167678787' ) ); //true
			console.log( __.validate.isTel( '123-456-7890' ) ); //true
			console.log( __.validate.isEmail( 'name@gmail.com' ) );	 //true
			console.log( __.validate.isNumber( '1421.231' ) );	//true
			console.log( __.validate.isInt( '1421.231' ) ); //false		
			console.log( __.validate.isJSON( '{"a":true}' ) ); //true	

		}
	});



});

		
*/

const __ = (function () {
	
	'use strict';
	
	
	//The default selector to search for or HTML element
	__.prototype.defaultTargetSelector = null;
	
	
	function __(s, root) {
	    return __.prototype.core(s, root);
	}
	
	
	
	/*
	 * Get real style data
	 * @private method
	 */
    function getStyle( el, attr ) {
		const self = el;

		if ( typeof (window) !== 'undefined' ) {

			let _val = 0;
			
			const computedStyle = window.getComputedStyle
								? getComputedStyle(self) // Standards
								: self.currentStyle;     // Old IE


			if (computedStyle) { // This will be true on nearly all browsers
				_val =  computedStyle[attr];  //return ??px
			}
			
			const newVal = /\d+/.exec( _val );

			return parseFloat( newVal );

		} else {
			return 0;
		}
    }
	

	
	/*
	 * Determine whether it is Child Node
	 * @private method
	 */
	function isChild( el, p ) {
		if (!el || !p || !p.childNodes || !p.childNodes.length) {
			return false;
		}
		return ([].slice.call(p.childNodes).filter(function(n) {
			const found = (n === el);
			if (!found && n.childNodes && n.childNodes.length) {
				return isChild(el, n);
			}
			return found;
		})).length;
	}

	
	
	/*
	 * Determine whether it is in JSON format
	 * @private method
	 */
	function isJSON( str ){
		
		
		if ( typeof( str ) === 'string' && str.length > 0 ) {

			if ( str.replace( /\"\"/g, '' ).replace( /\,/g, '' ) == '[{}]' ) {
				return false;
			} else {

				if (/^[\],:{}\s]*$/.test( str.replace(/\\["\\\/bfnrtu]/g, '@' ).
				replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
				replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

					return true;

				}else{
					return false;
				}	

			}

		} else {
			
			if ( 
				typeof(str) === 'object' && 
				Object.prototype.toString.call(str).toLowerCase() === '[object object]' &&
			    ! str.length
			   ) {
				return true;
			} else {
				return false;
			}
			
		}

	}
	
	
	
	/*
	 * Delete elements in the array
	 * @private method
	 */
	function removeArray(arr) {
		let what, 
			args = arguments, 
			len = args.length, 
			index;
		
		while (len > 1 && arr.length) {
			what = args[--len];
			while ((index = arr.indexOf(what)) !== -1) {
				arr.splice(index, 1);
			}
		}
		return arr;
	}
	
	
	/*
	 * Convert string to camel case
	 * @private method
	 */
	function toCamelCase(s) {
		
		if (typeof(s) === 'string') {
			let firstWord="";
			let arr = s.split("-");

			for (let i = 1; i < arr.length; i++) 
			{
				firstWord = arr[i].charAt(0).toUpperCase();
				arr[i] = firstWord + arr[i].slice(1);  
			}
			arr = arr.join(""); //Convert the arr array to a string
			return arr;	
		} else {
			return s;
		}
	}
	
	
	
	/*
	 * Returns the set of ID and classes of the current target element for use by the selector
	 * @private method
	 */
	function currentElselectors(el) {
		
		let itemDomsStr = '';

		//get ID
		let id = el.id;
		if ( typeof( id ) !== 'undefined' && id != '' ) {
			itemDomsStr += `#${id}`;
		}	

		//get all classes
		let classes = el.classList;
		if ( typeof( classes ) !== 'undefined' ) {
			classes.forEach(
				function(value, key, listObj) {
					itemDomsStr += `.${value}`;
				}, 'arg' );	

		}
		
		//If the ID does not exist, return the current object
		if ( typeof( id ) === 'undefined' || id === '' ) {
			itemDomsStr = '';
		}	
		
		
		return itemDomsStr;
	}
	
	
	/* ------------- Independent Methods -------------- */
	
	
	/*
	 * Object validation
	 *
	 * @return {Boolean}  
	 */
	__.validate = __.validate || ( () => {
		function t() { }

		return t.version = "0.0.1",

		t.isNumber = function(B) {
			const A = /^[\d|\.|,]+$/;
			return A.test(B);
		},
		t.isInt = function(B) {
			if (B == "") {
				return false;
			}
			const A = /\D+/;
			return ! A.test(B);
		},
		t.isEmail = function(A) {
			const B = /^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3})\s*$/;
			return B.test(A);
		},
		t.isTel = function(A) {
			//const B = /^[\d|\-|\s|\_]+$/;
			const B = /^[0-9- ]{7,20}$/; 
			return B.test(A);
		},
		t.isMobile = function(A) {
			//const B = /^13[0-9]{9}|15[012356789][0-9]{8}|18[0256789][0-9]{8}|147[0-9]{8}$/;
			const B = /^1[0-9]{10}$/;
			return B.test(A);
		},
		t.isJSON = function(A) {
			return isJSON(A);
		},

		//
		t
		
	})();
	
	
	
	/*
	 * Determine whether it is a special browser
	 *
	 * @return {Json}  - Boolean judgment collection of common browsers
	 */  

	__.browser = __.browser || ( () => {
		
		let browser = {};
		
		if ( typeof (navigator) !== 'undefined' ) {
			// Add feature test for passive event listener support
			let supportsPassive = false;
			try {
			  document.addEventListener("test", null, { get passive() { supportsPassive = true }});
			} catch(e) {}

			browser = {
				isMobile        : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
				isAndroid       : /(android)/i.test(navigator.userAgent),
				isPC            : !navigator.userAgent.match(/(iPhone|iPod|Android|ios|Mobile)/i),
				isSafari        : !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/), /*Test to 9, 10. */
				isIE            : !!window.ActiveXObject || "ActiveXObject" in window,     /*Test to 6 ~ 11 (not edge) */
				supportsPassive : supportsPassive
			};	
		}
		
		return browser;

	})();
	
	
	
	/*
	 * Create GUID / UUID
	 *
	 * @description This function can be used separately in HTML pages or custom JavaScript.
	 * @return {String}                        - The globally-unique identifiers.
	 */  

	__.GUID = __.GUID || ( () => {
		function t() { }

		return t.version = "0.0.1",

			
			
		/*
		 * Generate a string of unique characters
		 *
		 * @return {String}
		 */		
		t.create = function() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				const r = Math.random() * 16 | 0,
					  v = c == 'x' ? r : (r & 0x3 | 0x8);
				return v.toString(16);
			});
		},

		//
		t

	})();
	
	
	/*
	 * Evaluating a string as a mathematical expression in JavaScript
	 *
	 * @description This function can be used separately in HTML pages or custom JavaScript.
	 * @return {String}            - New calculation result.
	 */  

	__.math = __.math || ( () => {
		function t() { }

		return t.version = "0.0.2",

			
		/*
		 * Expression parsing and evaluation
		 *
		 * @param {String} s - A math expression given in string.
		 * @return {Number}  - Returns a pure number calculated.
		 */	
		t.evaluate = function(s) {

			const chars = s.replace(/\s/g, '').split("");
			let n = [], op = [], index = 0, oplast = true;

			n[index] = "";

			// Parse the expression
			for (let c = 0; c < chars.length; c++) {

				if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
					op[index] = chars[c];
					index++;
					n[index] = "";
					oplast = true;
				} else {
					n[index] += chars[c];
					oplast = false;
				}
			}

			// Calculate the expression
			s = parseFloat(n[0]);
			for (let o = 0; o < op.length; o++) {
				const num = parseFloat(n[o + 1]);
				switch (op[o]) {
					case "+":
						s = s + num;
						break;
					case "-":
						s = s - num;
						break;
					case "*":
						s = s * num;
						break;
					case "/":
						s = s / num;
						break;
				}
			}

			return s;
		},
			
			
           
            
		/*
		 * Generate random number between two numbers
		 *
		 * @return {Number} min - Enter a expected minimum.
		 * @return {Number} max - Enter a expected maximum.
		 * @return {Number}     - A new random number
		 */
		t.getRandomFloat = function(min, max) {
			return Math.random() * (max - min) + min;
		},


		/*
		 * Returns the degree from radian.
		 *
		 * @return {Number} rad - Value of radian.
		 * @return {Number}
		 * @usage: 

		   angle = rad / ( Math.PI / 180 )  = rad * ( 180/Math.PI );
		 */

		t.getDegree = function(rad) {
			return rad / Math.PI * 180;
		},


		/*
		 * Returns the radian degree .
		 *
		 * @return {Number} deg - Value of degree.
		 * @return {Number}
		 * @usage: 

			rad = Math.PI / 180 * 30 ;
		 */
		t.getRadian = function(deg) {
			return deg * Math.PI / 180;
		},


		/*
		 * Convert three.js scene rotation to polar coordinates
		 *
		 * @return {Number} x - X coordinate value.
		 * @return {Number} y - Y coordinate value.
		 * @return {Number} z - Z coordinate value.
		 * @return {Json}
		 * @usage: 

			x = r * cos（θ）
			y = r * sin（θ）  
		 */
		t.getPolarCoord = function(x, y, z) {
			const nx = Math.cos(x) * Math.cos(y) * z,
				  nz = Math.cos(x) * Math.sin(y) * z,
				  ny = Math.sin(x) * z;
			return {
			    x: nx,
				y: ny,
				z: nz
			};
		},



		//
		t
		
	})();
	
	
	/*
	 * Get the CSS property
	 *
	 * @description This function can be used separately in HTML pages or custom JavaScript.
	 * @param  {!Element} el     - The Element for which to get the computed style. Using class name or ID to locate.
	 * @return {String|Object}   - The value of property.
	 */  

	__.cssProperty = __.cssProperty || ( () => {
		function t() { }

		return t.version = "0.0.1",

			
		/*
		 * Get the -webkit-transition-duration property
		 *
		 * @param {Element} el - A DOMString containing one selector to match against.
		 * @return {Number}    - Returns a pure number.
		 */		
		t.getTransitionDuration = function( el ) {

			if ( typeof el === typeof undefined ) {
				return 0;
			}


			let style    = window.getComputedStyle(el),
				duration = style.webkitTransitionDuration,
				delay    = style.webkitTransitionDelay;

			if ( typeof duration != typeof undefined ) {
				// fix miliseconds vs seconds
				duration = (duration.indexOf("ms")>-1) ? parseFloat(duration) : parseFloat(duration)*1000;
				delay = (delay.indexOf("ms")>-1) ? parseFloat(delay) : parseFloat(delay)*1000;

				return duration;
			} else {
				return 0;
			}

		},

			
			
		/*
		 * Get an object's absolute position on the page
		 *
		 * @param {Element} el - A DOMString containing one selector to match against.
		 * @return {Json}    - An object containing the properties top and left. 
		 */	
		t.getAbsoluteCoordinates = function( el ) {

			let windowWidth     = window.innerWidth,
				leftPos         = null,
				topPos          = null;

			if ( ! document.getElementsByTagName( 'body' )[0].className.match(/rtl/) ) {
				leftPos = ( el.offsetLeft == 0 ) ? el.parentElement.offsetLeft : el.offsetLeft;
				topPos = ( el.offsetTop == 0 ) ? el.parentElement.offsetTop : el.offsetTop;
			} else {

				// width and height in pixels, including padding and border
				// Corresponds to jQuery outerWidth(), outerHeight()
				leftPos = ( el.offsetLeft == 0 ) ? ( windowWidth - ( el.parentElement.offsetLeft + el.parentElement.offsetWidth ) ) : ( windowWidth - ( el.offsetLeft + el.offsetWidth ) );
				topPos = ( el.offsetTop == 0 ) ? ( windowWidth - ( el.parentElement.offsetTop + el.parentElement.offsetHeight ) ) : ( windowWidth - ( el.offsetTop + el.offsetHeight ) );
			}


			return {
				'left': leftPos,
				'top': topPos
			};

		},


		 //
		t
		
	})();
	
	
	
	/*
	 * Perform an asynchronous HTTP (Ajax) request.
	 *
	 * @param  {Json} props   - The attribute and value to be set, the format is JSON
	 * @return {Void} 
	 */  
	__.ajax = function(props) {

		if ( ! isJSON(props) ) return false;
		
		const self = this;
		const _url = typeof(props.url) !== 'undefined' ? props.url : '';
		const _method = typeof(props.method) !== 'undefined' ? props.method : 'POST';
		const _loadedFn = typeof(props.complete) !== 'undefined' ? props.complete : null;


		if ( _url != '' ) {
			
			let config = {
				mode: 'cors',
				method: _method
			};

		
			fetch(_url, config )
			.then(response => response.json())
			.then(result => {
				//console.log('Success:', result);
				
				if (_loadedFn && (typeof _loadedFn == "function")) {
					_loadedFn.call(self,result);
				}		
				
			})
			.catch(error => {
	        	console.error('Error:', error);
			});

			
		}

	};
	
	
	/*
	 * Remove all spaces in the string
	 *
	 * @param  {String} s                 - Any string.
	 * @param  {Boolean} isGlobal         - If the value is `true`, remove all spaces including the middle
	 * @return {String}                   - A new string with no spaces
	 */  
    __.trim = function(s, isGlobal = false) {
		if (typeof(s) === 'string') {
			let result;
			result = s.replace(/(^\s+)|(\s+$)/g, "");
			if ( isGlobal === true ) {
				result = result.replace(/\s/g, "");
			}
			return result;
		} else {
			return s;
		}
    }	

	
	
	/*
	 * Capitalize the first letter of all words in a string
	 *
	 * @param  {String} s                 - Any string.
	 * @return {String}                   - A new string.
	 */  	
	__.lastUrlParamFormat = function(s) {
		
		s = s || '';

		if ( s.length > 0 ) {
			
			s = s.replace(/\-/g, ' ' ).replace(/\_/g, ' ' );
			const pieces = s.split(" ");
			for ( let i = 0; i < pieces.length; i++ )
			{
				const j = pieces[i].charAt(0).toUpperCase();
				pieces[i] = j + pieces[i].substr(1);
			}
			return pieces.join(" ");	
			
		} else {
			return s;
		}
		

	}
	
	/*
	 * Convert HTML Element's `Style` Attribute to JSON
	 *
	 * @param  {String} str   - The content of the style attribute in the HTML element, usually a string
	 * @return {Json}     - An HTML element to a JSON object
	 */  
	__.styleFormat = function(s) {
		
		s = s || '';

		if ( s.length > 0 ) {
			const styles = s.split(';'),
				  json = {};
			
			let i = styles.length,
				style, 
				k, 
				v;


			while (i--) {
				style = styles[i].split(':');
				k = toCamelCase(__.trim(style[0]));
				v = __.trim(style[1]);
				if (k.length > 0 && v.length > 0)
				{
					json[k] = v;
				}
			}	
			
			return json;
		} else {
			return '';
		}


	};

	
	
	/*
	 * Remove first, last or both symbols
	 *
	 * @param  {String} str       - Any string.
	 * @param  {Number} type      - Type of all or not. if `0`, is all.
	 * @param  {String} symbol    - The target string to remove.
	 * @return {String}           - An new string.
	 */  
	__.removeFirstLastStr = function( str, type = 0, symbol = ',' ) {

		if (typeof(str) === 'string') {
			if ( type == 0 ) {
				const flRegExp = new RegExp( '^\\'+symbol+'|\\'+symbol+'$' , 'g' );
				return str.replace( flRegExp, '' );
			} else {
				const flRegExp = new RegExp( ''+symbol+'\s*$' , 'g' );
				return str.replace( flRegExp, '' );
			}
		} else {
			return str;
		}

	};


	
	
	/* ---------------- API methods ----------------- */
	
	
	/**
	 * Core method
	 *
	 * @param  {String|Element} s       - The selector to search for or HTML element to wrap with functionality
	 * @param  {Element} root           - OPTIONAL An HTML element to start the element query from
	 * @return {Array}                  - The collection of elements, wrapped with functionality (see API methods)
	 */
	__.prototype.core = function(s, root) {
		const self = this;
		root = root || document;

		
		//update the default selector
		__.prototype.defaultTargetSelector = s;
		
		if ( typeof (s) !== 'undefined' ) {

			if (typeof(s) === 'string') {
				//1) string
				return self.wrap([].slice.call( root.querySelectorAll(s) ));

			} else if (s.tagName) {
				//2) HTML elements
				return self.wrap( [s] );

			} else {
				//3) document or other
				switch( s.nodeType ) {
					 case 9:
						//if Document
						return self.wrap( [document.body] );
						break;

					 default:
						return [];

				} 

			}		

		}//typeof (s) !== 'undefined'

		
		return [];
	};


	/*
	 * Code included inside the code will run once the entire page (all DOM) is ready.
	 *
	 * @param  {Function} fn   - A function to execute after the DOM is ready.
	 * @return {Void}
	 */
	__.prototype.ready = function(fn) {

		if (document.readyState != 'loading') {
			fn();
		} else if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', fn);
		} else {
			document.attachEvent('onreadystatechange', function() {
				if (document.readyState != 'loading') fn();
			});
		}

	};
	
	
	/*
	 * Detect when images and videos have been loaded. 
	 *
	 * @param  {Json} props   - Contains three event functions before loading, loading, and loading completed.
	 * @return {Void}
	 */
	__.prototype.loader = function(props) {


		const self = this;
		const sources = [];
		let loadingFn = null,
			progressFn = null,
			loadedFn = null,
			imagesSelector = 'body img',
			videosSelector = 'body video';
		
		
		if ( isJSON(props) ) {
			loadingFn = props.startEvent;
			progressFn = props.progressEvent;
			loadedFn = props.endEvent;
			imagesSelector = props.imagesSelector;
			videosSelector = props.videosSelector;
		}
		
	
		//count all images on a page
		if ( typeof (document.images) !== 'undefined' && document.images.length == 0 ) {
			
			const imgPlaceholder = document.createElement("div");
			imgPlaceholder.innerHTML = '<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" style="display:none">';
			// insert liLast at the end of <>
			document.body.append(imgPlaceholder);		
			
		}

		
		//loading
		if (loadingFn && (typeof loadingFn == "function")) {
			loadingFn();
		}

		
		//Push all images from page
		const imgs = document.querySelectorAll( imagesSelector );
		for (let i = 0; i < imgs.length; i++) {
			sources.push(
				{
					"url": imgs[i].src,
					"type": 'img'
				}
			);
		}

		
		
	   //Push all videos from page
		const videos = document.querySelectorAll( videosSelector );
		for (let i = 0; i < videos.length; i++) {
			
			const _sources = videos[i].getElementsByTagName('source');
			sources.push(
				{
					"url": _sources.length > 0 ? _sources[0].src : videos[i].src,
					"type": 'video'
				}
			);
		}

		
		
		//Execute after all images and videos have loaded
		let per = 0;
		let perInit = 1;
		if ( sources.length == 0 ) {
			per = 100;
		}

		const loadResources = function() {
			let promises = [];

			for (let i = 0; i < sources.length; i++) {
				

				if ( sources[i].type == 'img' ) {

					///////////
					// IMAGE //
					///////////   
					promises.push( 

						new Promise(function(resolve, reject) {

							const img = document.createElement( 'img' );
							img.crossOrigin = 'anonymous';
							img.src = sources[i].url;

							img.onload = function(image) {
							  //Compatible with safari and firefox
							  if ( typeof image.path === typeof undefined ) {
								  return resolve(image.target.currentSrc);
							  } else {
								  return resolve(image.path[0].currentSrc);
							  }
							};  

						}).then( textureLoaded )
					);

				} else {

					///////////
					// VIDEO //
					///////////    
					promises.push( 
						new Promise(function(resolve, reject) {

							const video = document.createElement('video');
							video.addEventListener( 'loadedmetadata', function( video ) {

								  //Compatible with safari and firefox
								  if ( typeof video.path === typeof undefined ) {
									  return resolve(video.target.currentSrc);
								  } else {
									  return resolve(video.path[0].currentSrc);
								  }	


							}, false);	

							video.src = sources[i].url;

						}).then( textureLoaded )
					);



				}   
				
				

			}//end for



			return Promise.all(promises);
		};

		const textureLoaded = function( url ) {

			//progress number
			per = parseInt( 100 * ( perInit / sources.length ) );
			if ( isNaN( per ) ) per = 100; 
			
			//Call back progress 
			/* console.log( 'progress: ' + per + '%' ); */
			if (progressFn && (typeof progressFn == "function")) {
				progressFn.call(self,per);
			}
			 

			perInit++;
			return per;   

		};
		
		//and videos loaded
		//Must be placed behind the loadResources()
		loadResources().then( function( images ) {
			 if (loadedFn && (typeof loadedFn == "function")) {
				 loadedFn();
			 }
		});

		
	};


	/*
	 * Puts data inside an element at the last index
	 *
	 * @param  {Element|String} el   - An element or string to be parsed as HTML or XML and inserted into the tree.
	 * @return {Void}
	 */
	__.prototype.append = function(el) {

		// Just inside the element, after its last child.
		if(document.createElement("div").insertAdjacentHTML) {
			this.insertAdjacentHTML("beforeend", el);
			return this;
		}
		
	
		//
		const html = (typeof(el) === 'string') ? el : el.outerHTML;
		this.innerHTML += html;
	};

	
	/*
	 * Puts the prepending element at the first index.
	 *
	 * @param  {Element|String} el   - An element or string to be parsed as HTML or XML and inserted into the tree.
	 * @return {Void}
	 */
	__.prototype.prepend = function(el) {
		
		// Just inside the element, before its first child.
		if(document.createElement("div").insertAdjacentHTML) {
			this.insertAdjacentHTML("afterbegin", el);
			return this;
		}

		//
		const html = (typeof(el) === 'string') ? el : el.outerHTML;
		this.innerHTML = html + this.innerHTML;
	};

	
	/*
	 * Before the element itself.
	 *
	 * @param  {String} el   - The string to be parsed as HTML or XML and inserted into the tree.
	 * @return {Void}
	 */
    __.prototype.before = function(el) {
		
		// 
		if(document.createElement("div").insertAdjacentHTML) {
			this.insertAdjacentHTML("beforebegin", el);
			return this;
		}
		
    }

	
	/*
	 * After the element itself.
	 *
	 * @param  {String} el   - The string to be parsed as HTML or XML and inserted into the tree.
	 * @return {Void}
	 */
    __.prototype.after = function(el) {

		if(document.createElement("div").insertAdjacentHTML) {
			this.insertAdjacentHTML("afterend", el);
			return this;
		}
	
    }
	
	/*
	 * Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
	 *
	 * @param  {?String} el   - A string of HTML to set as the content of each matched element.
	 * @return {Void|String}     - The HTML content to set
	 */
    __.prototype.html = function(el) {
		if (el === undefined) {
			return this.innerHTML;
		} else {
			this.innerHTML = el; 
		}
    }
	
	
	
	/*
	 * Adds the specified class(es) to each element in the set of matched elements.
	 *
	 * @param  {String} c   - One or more space-separated classes to be added to the class attribute of each matched element.
	 * @return {Void}
	 */
	__.prototype.addClass = function(c) {

		if ( ! /^\S+$/g.test(c)) {
			// It has only whitespace
			const classArray = c.split( ' ' );
			let className;

			// Loop through the array of classes to add one class at a time
			for (let j = 0; j < classArray.length; j++ ) {
				className = classArray[j];
				this.classList.add( className );
			}
		} else {
			this.classList.add(c);
		}

		
	};
	
	
	
	
	/*
	 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
	 *
	 * @param  {String} c   - One or more space-separated classes to be removed from the class attribute of each matched element.
	 * @return {Void}
	 */
	__.prototype.removeClass = function(c) {
		
		if ( ! /^\S+$/g.test(c)) {
			// It has only whitespace
			const classArray = c.split( ' ' );
			let className;
	
			// Loop through the array of classes to add one class at a time
			for (let j = 0; j < classArray.length; j++ ) {
				className = classArray[j];
				this.classList.remove( className );
			}
		} else {
			this.classList.remove(c);
		}
	};

	
	
	/*
	 * Add or remove one or more classes from each element in the set of matched elements, 
	 * depending on either the class's presence or the value of the state argument.
	 *
	 * @param  {String} c   - One or more classes (separated by spaces) to be toggled for each element in the matched set.
	 * @return {Void}
	 */
	__.prototype.toggleClass = function(c) {
		
		if ( ! /^\S+$/g.test(c)) {
			// It has only whitespace
			const classArray = c.split( ' ' );
			let className;
	
			// Loop through the array of classes to add one class at a time
			for (let j = 0; j < classArray.length; j++ ) {
				className = classArray[j];
				
				if (this.classList.contains(className)) {
					this.classList.remove(className);
				} else {
					this.classList.add(className);
				}

			}
		} else {
			if (this.classList.contains(c)) {
				this.classList.remove(c);
			} else {
				this.classList.add(c);
			}
		}	
		
		
	};

	
	/*
	 * Set the style properties of elements:
	 *
	 * @param  {Json} props   - The attribute and value to be set, the format is JSON
	 * @return {Void}
	 */
	__.prototype.css = function(props) {
		const self = this;
		
		if ( isJSON(props) ) {
		  //the json is ok
			Object.keys(props).forEach(function(prop) {
				self.style[prop] = props[prop];
			});
		}
		
		
	};

	
	
	/*
	 * Get the descendants of each element in the current set of matched elements
	 *
	 * @param  {String|Element} s   - A string or element containing a selector expression to match elements against.
	 * @return {Array}              - The collection of elements
	 */
	__.prototype.find = function(s) {
		return __(s, this);
	};


		 
	/*
	 * Reduce the set of matched elements to the one at the specified index.
	 *
	 * @param  {Number} index   - A string or element containing a selector expression to match elements against.
	 * @return {Array}          - Contains only a collection of HTML elements.
	 */
	__.prototype.eq = function(index) {
		const elements = __(__.prototype.defaultTargetSelector, document);
	
		return elements[ index ];
	};

	
	/*
	 * Returns the Element immediately prior to the specified one in its parent's children list, 
	 * or null if the specified element is the first one in the list.
	 *
	 * @return {Array}          - Contains only a collection of HTML elements.
	 */
    __.prototype.prev = function() {

		const el = this.previousElementSibling;
		return __.prototype.wrap( [el] );
		
    }
	
	
	/*
     * Returns the element immediately following the specified one in its parent's children list, 
     * or null if the specified element is the last one in the list.
	 *
	 * @return {Array}          - Contains only a collection of HTML elements.
	 */
    __.prototype.next = function() {

		const el = this.nextElementSibling;
		return __.prototype.wrap( [el] );
    }

	/*
	 * Returns the DOM node's parent Element, or null if the node either has no parent,
	 * or its parent isn't a DOM Element.
	 *
	 * @return {Array}          - Contains only a collection of HTML elements.
	 */
    __.prototype.parent = function() {

		const el = this.parentElement;
		return __.prototype.wrap( [el] );
    }
	
	/*
	 * Returns a live HTMLCollection which contains all of the child elements 
	 * of the node upon which it was called.
	 *
	 * @param  {?String|?Element} s   - The selector that needs to be filtered.
	 * @return {Array}                -  The collection of elements
	 */
    __.prototype.children = function(s) {

		const self = this;
		const childrenList = self.children;
		const res = [];
	
		
		if (s === undefined) {
			for (let i = 0; i < childrenList.length; i++ ) {
				res.push(childrenList[i]);	
			}
			return __.prototype.wrap( res );
		} else {
			return __(s, self);
		}

    }
	
	
	/*
	 * Reduce the set of matched elements to those that match the selector or pass the function's test.
	 *
	 * @param  {String|Element} s   - The selector that needs to be filtered.
	 * @return {Array}              -  The collection of elements
	 */
    __.prototype.filter = function(s) {
		const elements = __(__.prototype.defaultTargetSelector, document);
		const targetEl = __(s, document);
		const list = Array.from(elements);
		
		for (let j = 0; j < targetEl.length; j++ ) {
			for (let i = 0; i < list.length; i++ ) {
				if ( ! list[i].classList.contains( s.replace(/\./g,'') ) ) {
					removeArray(list, list[i]);
				}
			}	

		}	

		return __.prototype.wrap( list );	
    }
	
	
	/*
	 * Remove elements from the set of matched elements.
	 *
	 * @param  {String|Element} s   - The selector that needs to be filtered.
	 * @return {Array}              -  The collection of elements
	 */
    __.prototype.not = function(s) {
		const elements = __(__.prototype.defaultTargetSelector, document);
		const targetEl = __(s, document);
		const list = Array.from(elements);
		
		for (let j = 0; j < targetEl.length; j++ ) {
			for (let i = 0; i < list.length; i++ ) {
				if ( list[i].classList.contains( s.replace(/\./g,'') ) ) {
					removeArray(list, list[i]);
				}
			}	

		}	

		return __.prototype.wrap( list );
    }
	
	
	/*
	 * Get the siblings of each element in the set of matched elements
	 *
	 * @return {Array}              -  The collection of elements
	 */
    __.prototype.siblings = function() {
		
		const self = this;
		
		
		// for collecting siblings
		let siblings = []; 
		// if no parent, return no sibling
		if(!self.parentNode) {
			return siblings;
		}
		// first child of the parent node
		let sibling  = self.parentNode.firstChild;

		// collecting siblings
		while (sibling) {
			if (sibling.nodeType === 1 && sibling !== self) {
				siblings.push(sibling);
			}
			sibling = sibling.nextSibling;
		}
		
		
        return __.prototype.wrap( siblings );
    }

	
	/*
	 * Reduce the set of matched elements to the first in the set.
	 *
	 * @return {Array}          - Contains only a collection of HTML elements.
	 */
    __.prototype.first = function() {
		const elements = __(__.prototype.defaultTargetSelector, document);
		const length = elements.length;
		return elements[ 0 ];
    }
	
	
	/*
	 * Reduce the set of matched elements to the last in the set.
	 *
	 * @return {Array}          - Contains only a collection of HTML elements.
	 */
    __.prototype.last = function() {
		const elements = __(__.prototype.defaultTargetSelector, document);
		const length = elements.length;
		return elements[ length-1 ];
    }
	
	

	/*
	 * Traverses the Element and its parents (heading toward the document root) 
	 * until it finds a node that matches the provided selector string. 
	 *
	 * @param  {String|Element} s   - The selector that needs to be filtered.
	 * @return {Array}              - Contains only a collection of HTML elements.
	 */
	__.prototype.closest = function(s) {
		//using recursivity
		const el = this.closest( s );
		//console.log( __(el, this) );
		return __(el, this);

	}
	

	/*
	 * Remove a previously-stored piece of data.
	 *
	 * @param  {String} a                 - A string naming the piece of data to delete.
	 * @return {Void} 
	 */
    __.prototype.removeData = function(a) {
		a = a || '';
		this.removeAttribute('data-' + a);
    }
	
	
	/*
	 * Set one or more attributes for the set of matched elements.
	 *
	 * @param  {String} a                 - The name of the attribute to set.
	 * @param  {String} v               - A value to set for the attribute. 
	 * @return {Void|String}              - Get the value of an attribute for the first element in the set of matched elements.
	 */
	__.prototype.attr = function(a, v) {
		a = a || '';
		if (v === undefined) {
			
			let res = this.getAttribute(a);
			if ( res == 'true' ) res = true;
			if ( res == 'false' ) res = false;
			if ( isJSON(res) ) res = JSON.parse(res);
			// Non-existent attributes return null, we normalize to undefined
			return res == null ? undefined : res;
		} else {
			this.setAttribute(a, v);
		}
	};

	/*
	 * Store arbitrary data associated with the matched elements.
	 *
	 * @param  {String} a                 - A string naming the piece of data to set
	 * @param  {String} v                 - The new data value.
	 * @return {Void|String}              - Return arbitrary data associated with the first element as set by data() or by an HTML5 data-* attribute.
	 */
	__.prototype.data = function(a, v) {
		a = a || '';
		if (v === undefined) {
			
			let res = this.getAttribute('data-' + a);
			if ( res == 'true' ) res = true;
			if ( res == 'false' ) res = false;
			if ( isJSON(res) ) res = JSON.parse(res);
			// Non-existent attributes return null, we normalize to undefined
			return res == null ? undefined : res;
		} else {
			this.setAttribute('data-' + a, v);
		}
	};


	/*
	 * Set one or more attributes for the set of matched Form elements.
	 *
	 * @param  {String} a                 - The name of the attribute to set.
	 * @param  {String} v                 - A value to set for the attribute. 
	 * @return {Void|String}              - Get the value of an attribute for the first element in the set of matched elements.
	 */
	__.prototype.prop = function(a, v) {
		a = a || '';
		if (v === undefined) {
			
			let res = this[a];
			if ( res == 'true' ) res = true;
			if ( res == 'false' ) res = false;
			if ( isJSON(res) ) res = JSON.parse(res);
			// Non-existent attributes return null, we normalize to undefined
			return res == null ? undefined : res;
		} else {
			this[a] = v;
		}
	};

	
	
	/*
	 * Remove an attribute from each element in the set of matched elements.
	 *
	 * @param  {String} a                 - A string naming the piece of data to delete.
	 * @return {Void} 
	 */
    __.prototype.removeAttr = function(a) {
		a = a || '';
		this.removeAttribute(a);
    }

	
	/*
	 * Attach an event handler function for one or more events to the selected elements.
	 *
	 * @param  {String} eventType         - One event types and optional namespaces, such as "click" 
	 * @param  {?String} selector         - A selector string to filter the descendants of the selected elements that trigger the event. 
	 * @param  {Function} callBack        - A function to execute when the event is triggered. 
	 * @return {Void}      
	 */
	__.prototype.on = function(eventType, selector, callBack) {
		const self = this;
		
		if (typeof(callBack) !== 'function') {
			callBack = selector;
			selector = null;
		}
		
		if (!this.myListeners) {
			this.myListeners = [];
		};
		
		if (selector) {
			//if string
			const fun = function(evt) {
				__(selector, self).forEach(function(el) {
					if (el === evt.target) {
						callBack.call(el, evt);
					} else if (isChild(evt.target, el)) {
						callBack.call(el, evt);
					}
				});
			};

			this.myListeners.push({
				eType: eventType,
				callBack: fun
			});
										   
			self.addEventListener(eventType, fun);
			
		} else {
		
			//if HTML element
			const fun = function(evt) {
				callBack.call(this, evt);
			};
			
			
			this.myListeners.push({
				eType: eventType,
				callBack: fun
			});
			
			this.addEventListener(eventType, fun, false);

		}
		

		
		
	};
	
	/*
	 * Remove an event handler.
	 *
	 * @param  {?String}          - One event types and optional namespaces, such as "click"
	 * @return {Void}      
	 */
	__.prototype.off = function() {
		
		if (this.myListeners) {
			for (let i = 0; i < this.myListeners.length; i++) {
				this.removeEventListener(this.myListeners[i].eType, this.myListeners[i].callBack);
			};
			delete this.myListeners;
		};
	};

	/*
	 * Get the current coordinates of the first element in the set of matched elements, relative to the document.
	 *
	 * @return {Json}      - An object containing the properties top and left. 
	 */
	__.prototype.offset = function() {
		const box = this.getBoundingClientRect();
		let top = 0, 
			left = 0;
		
		//Include scrollbar and border
		top = box.top + window.pageYOffset - document.documentElement.clientTop;
		left = box.left + window.pageXOffset - document.documentElement.clientLeft;
		
		return { top: top, left: left };
		
    }

	
	/*
	 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
	 *
	 * @return {Json}      - An object containing the properties top and left.
	 */
    __.prototype.position = function() {
		
		let top = this.offsetTop ? this.offsetTop : 0, 
			left = this.offsetLeft ? this.offsetLeft : 0;
		
        return { top: top, left: left };
    }

	
	/*
	 * Get or set the current computed width for elenments
	 *
	 * @param  {?String|?Number} val         - An integer representing the number of pixels, or 
     *                                         an integer along with an optional unit of measure appended (as a string).
	 * @return {Void|Number}                 -  Get the current computed width for the first element in the set of matched elements.
	 */    
	__.prototype.width = function( val ) {
		const self = this;
		if ( typeof (val) !== 'undefined' ) {
			self.style.width = val.toString().indexOf( '%' ) < 0 ? val + 'px' : val;
		}
		
		return getStyle( self,  'width' );
    }
	
	
	/*
	 * Get or set the current computed height for elenments
	 *
	 * @param  {?String|?Number} val         - An integer representing the number of pixels, or 
     *                                         an integer along with an optional unit of measure appended (as a string).
	 * @return {Void|Number}                 -  Get the current computed height for the first element in the set of matched elements.
	 */   
    __.prototype.height = function( val ) {
		const self = this;
		if ( typeof (val) !== 'undefined' ) {
			self.style.height = val.toString().indexOf( '%' ) < 0 ? val + 'px' : val;
		}
		
		return getStyle( self,  'height' );
    }
	
	
	
	/*
	 * Get or set the current computed outer width for elenments (including padding, border, and optionally margin)
	 *
	 * @param  {Boolean} includeMargin         - A Boolean indicating whether to include the element's margin in the calculation.
	 * @return {Number}  - Returns the width of the element, including left and right padding, border, and optionally margin, in pixels.
	 */  
	__.prototype.outerWidth = function( includeMargin ) {

		const self = this;
		
		const width_IncPaddingBorderScrollbar = self.offsetWidth;
		const marginLeft = getStyle( self,  'marginLeft' );
		const marginRight = getStyle( self,  'marginRight' );
		const borderLeftWidth = getStyle( self,  'borderLeftWidth' ) || 0;
		const borderRightWidth = getStyle( self,  'borderRightWidth' ) || 0;

		let totalWidth = width_IncPaddingBorderScrollbar;

		if ( typeof (includeMargin) !== 'undefined' ) {
			totalWidth = totalWidth+marginLeft+marginRight;
		}

		return totalWidth;
	}

	/*
	 * Get or set the current computed outer height for elenments (including padding, border, and optionally margin)
	 *
	 * @param  {Boolean} includeMargin         - A Boolean indicating whether to include the element's margin in the calculation.
	 * @return {Number}   - Returns the height of the element, including left and right padding, border, and optionally margin, in pixels.
	 */  
	__.prototype.outerHeight = function( includeMargin ) { 

		const self = this;

		const height_IncPaddingBorderScrollbar = self.offsetHeight;
		const marginTop = getStyle( self,  'marginTop' );
		const marginBottom = getStyle( self,  'marginBottom' );
		const borderTopWidth = getStyle( self,  'borderTopWidth' ) || 0;
		const borderBottomWidth = getStyle( self,  'borderBottomWidth' ) || 0;

		let totalHeight = height_IncPaddingBorderScrollbar;

		if ( typeof (includeMargin) !== 'undefined' ) {
			totalHeight = totalHeight+marginTop+marginBottom;
		}

		return totalHeight;
	}
			
	
	/*
	 * Remove the set of matched elements from the DOM.
	 *
	 * @return {Void} 
	 */  
    __.prototype.remove = function() {
		this.parentNode.removeChild(this);
    }
	
	/*
	 * Remove all child nodes of the set of matched elements from the DOM.
	 *
	 * @return {Void} 
	 */  
    __.prototype.empty = function() {

		while (this.firstChild) {
			this.removeChild(this.firstChild);
		}
    }
	
	
	/*
	 * Iterate over an object, executing a function for each matched element.
	 *
	 * @param  {Function} fn         - A function to execute for each matched element.
	 * @return {Void} 
	 */  

    __.prototype.each = function(fn) {
		
		let elements = __(__.prototype.defaultTargetSelector, document);
		
		
		elements.map((item, index) => {
			
			//!import: The returned HTML element must be current, 
			//otherwise all HTML elements under document may be queried
			const itemDomsStr = currentElselectors( item );
			
			if (fn && (typeof fn == "function")) {
				fn.call(item, index, itemDomsStr);
			}
		});
		
		

    }	
	
	/*
	 * Determine whether any of the matched elements are assigned the given class.
	 *
	 * @param  {String} v         - The class name to search for.
	 * @return {Boolean}   - Return true if the class is assigned to an element
	 */  
    __.prototype.hasClass = function(v) {
		return this.classList.contains( v ) ? true : false;
    }	

	
	
	
	/*
	 * Get or set the current value of the first element in the set of matched elements.
	 *
	 * @param  {?String|?Number|?Array} v      - Corresponding to the value of each matched element.
	 * @return {String}          - Get the values of form elements.
	 */
    __.prototype.val = function(v) {
		if ( typeof (v) !== 'undefined' ) {
			this.value = v;
		}	
		
		return this.value;
    }	


	/*
	 * Display the matched elements.
	 *
	 * @return {Void} 
	 */
    __.prototype.show = function() {
		// use inherit so that your CSS controls block/flex/inline-block etc
		this.style.display = 'inherit';

    }	

	/*
	 * Hide the matched elements.
	 *
	 * @return {Void}    
	 */
    __.prototype.hide = function() {
		this.style.display = 'none';
    }	

	
	/*
	 * Display the matched elements by fading them to opaque.
	 *
	 * @param  {Number} speed             - A string or number determining how long the animation will run.
	 * @param  {Function} callback        - A function to call once the animation is complete, called once per matched element.
	 * @return {Void} 
	 */  
    __.prototype.fadeIn = function(speed,callback) {
		const elem = this;
		let opacity = 0;

		if (!elem.style.opacity) {
			elem.style.opacity = 0;
		}
		
		elem.style.display = "inherit";
		
		const inInterval = setInterval(function() {
		
			opacity+=.02;
			elem.style.opacity = opacity;

			if ( opacity >= 1 ) {
				clearInterval(inInterval);
				//do something after inInterval()

				elem.style.removeProperty("opacity");

				if (callback && (typeof callback == "function")) {
					callback();
				}		
			}

			
		}, speed/50 );
    }	

	
	/*
	 * Hide the matched elements by fading them to transparent.
	 *
	 * @param  {Number} speed             - A string or number determining how long the animation will run.
	 * @param  {Function} callback        - A function to call once the animation is complete, called once per matched element.
	 * @return {Void} 
	 */  
    __.prototype.fadeOut = function(speed,callback) {
		const elem = this;
		let opacity = 1;


		if (!elem.style.opacity) {
			elem.style.opacity = 1;
		}

		const outInterval = setInterval(function() {
			
			opacity-=.02;
			elem.style.opacity = opacity;
			
			if (opacity <= 0) {
				clearInterval(outInterval);
				//do something after outInterval()

				elem.style.opacity = 0;
				elem.style.display = "none"; //adding dispaly property and equall to none	

				
				if (callback && (typeof callback == "function")) {
					callback();
				}
				
				
			}
		}, speed/50 );
    }	
	


	/*
	 * Serialize html form to JSON
	 *
	 * @return {Void}    
	 */
    __.prototype.serializeArray = function() {
		const form = this;
		const objects = [];
		if (typeof form == 'object' && form.nodeName.toLowerCase() == "form") {
			
			const fieldsTypes = ['input','textarea','select','checkbox','progress','datalist'];
			fieldsTypes.map((item, index) => {
				const fields = form.getElementsByTagName( item );
				for (let i = 0; i < fields.length; i++) {
					objects[objects.length] = {
						name: fields[i].getAttribute("name"),
						value: fields[i].value
					};
				}
			});			
			
			
		}
		return objects;
    }	


	/*
	 * Search for a given element from among the matched elements.
	 *
	 * @return {Number}     - The return value is an integer indicating the position of the 
	 *                        first element within the jQuery object relative to its sibling elements.
	 */
    __.prototype.index = function() {
		const self = this;
		const children = self.parentNode.childNodes;
		
		let num = 0;
		for (let i=0; i<children.length; i++) {
			 if (children[i]==self) return num;
			 if (children[i].nodeType==1) num++;
		}
		return -1;
    }	


	/*
	 * Bind an event in the HTML element
	 *
	 * @param  {String} eventType         - One event types and optional namespaces, such as "click" 
	 * @return {Void}  
	 */
    __.prototype.trigger = function(eventType) {
		const fire = function( elem, type ) {
			const event = document.createEvent('Event');
			event.initEvent(type, true, true); //can bubble, and is cancellable
			elem.dispatchEvent(event);
		};
		
		document.addEventListener( "plop", function() { }, false );
		fire( this, eventType );
		
    }	
	
	
	/*
	 *  Find the Tallest or widest of all elements
	 *
	 * @return {Json}      - An object containing the properties width and height.
	 */
	__.prototype.maxDimension = function() {
		
		let elements = __(__.prototype.defaultTargetSelector, document);
		
		const elementHeights = Array.prototype.map.call(elements, function(el)  {
			return el.clientHeight;
		});
		
		const elementWidths = Array.prototype.map.call(elements, function(el)  {
			return el.clientWidth;
		});

		const maxHeight = Math.max.apply(null, elementHeights);
		const maxWidth = Math.max.apply(null, elementWidths);
	
		return {
			'height': maxHeight,
			'width': maxWidth
		};

	};

	
	
	
	/* ------------- Private Methods -------------- */

	const API = {
		//dom
		find: __.prototype.find,
		closest: __.prototype.closest,
		prev: __.prototype.prev,
		next: __.prototype.next,
		first: __.prototype.first,
		last: __.prototype.last,
		parent: __.prototype.parent,
		children: __.prototype.children,
		eq: __.prototype.eq,
		not: __.prototype.not,
		filter: __.prototype.filter,
		siblings: __.prototype.siblings,
		
		//traverse 
		each: __.prototype.each,
		maxDimension: __.prototype.maxDimension,
		
		//functions
		ready: __.prototype.ready,
		loader: __.prototype.loader,
		append: __.prototype.append,
		prepend: __.prototype.prepend,
		before: __.prototype.before,
		after: __.prototype.after,
		html: __.prototype.html,		
		addClass: __.prototype.addClass,
		removeClass: __.prototype.removeClass,
		toggleClass: __.prototype.toggleClass,
		css: __.prototype.css,
		removeData: __.prototype.removeData,
		attr: __.prototype.attr,
		data: __.prototype.data,
		prop: __.prototype.prop,
		removeAttr: __.prototype.removeAttr,
		on: __.prototype.on,
		off: __.prototype.off,
		offset: __.prototype.offset,
		position: __.prototype.position,		
		width: __.prototype.width,
		height: __.prototype.height,
		outerWidth: __.prototype.outerWidth,
		outerHeight: __.prototype.outerHeight,
		remove: __.prototype.remove,
		empty: __.prototype.empty,
		hasClass: __.prototype.hasClass,
		val: __.prototype.val,
		show: __.prototype.show,
		hide: __.prototype.hide,
		fadeIn: __.prototype.fadeIn,
		fadeOut: __.prototype.fadeOut,
		serializeArray: __.prototype.serializeArray,
		index: __.prototype.index,
		trigger: __.prototype.trigger,
	};



	__.prototype.wrap = function(list) {
		const self = this;
		Object.keys(API).forEach(function(fn) {
			list[fn] = function() {
				
				//slice method can also be called to convert Array-like objects/collections to a new Array. 
				//You just bind the method to the object. The arguments inside a function is an example of an 'array-like object'.
				const args = arguments;
				
				//
				let result;
				const breakException = {};
			
				
				if (Array.isArray(this)) {
					result = [];
					
					try {
						this.forEach(function(root) {

							const fnResult = API[fn].apply(root, [].slice.call(args)); 
							if (Array.isArray(fnResult)) {
								result = result.concat(fnResult);
							} else if (fnResult !== undefined) {
								result.push(fnResult);
							}

							// ////////////////////
							// Break out of the loop of global retrieval of elements
							//----------------------
							if ( fn === 'eq' ||
								 fn === 'first' ||
								 fn === 'last' ||
							 	 fn === 'each' ||
						         fn === 'maxDimension'
							   ) throw breakException;
						});
					} catch (e) {}	
					


					// ////////////////////
					// Methods that return value is `DOM elements using selectors`
					//----------------------
					if (
						fn === 'find' || 
						fn === 'closest' ||
						fn === 'prev' ||
						fn === 'next' ||
						fn === 'first' ||
						fn === 'last' ||
						fn === 'parent' ||
						fn === 'children' ||
						fn === 'eq' ||
						fn === 'filter' ||
						fn === 'not' ||
						fn === 'siblings' 

					) {
						self.wrap(result);
						
						
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
					fn === 'maxDimension'

				) {	
					return (result === undefined) ? undefined : result[0];
				}
		
				
				
				// ////////////////////
				// Methods that return value is `Array` or `HTML element`
				//----------------------
				if (
					fn === 'data' ||
					fn === 'attr' ||
					fn === 'prop' 

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
	};
	
	
	if ( typeof (window) !== 'undefined' ) {
		window.__ = __;
	}
	

	
    return __;
})();




export default __;

