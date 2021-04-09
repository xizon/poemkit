
/* 
 *************************************
 * For selecting DOM elements and manipulating them.
 *************************************
 */
/*
		__( '.demo' ).addClass( 'class-3' );
		__( '.demo' ).find( 'li' ).addClass( 'class-1 class-2' );
		__( '.demo' ).find( 'li' ).removeClass( 'class-2' );
		__( '.demo' ).closest( '.container' ).addClass( 'class-4' );
		__( '.demo' ).css({
			'background': '#f00',
			'font-size': '18px'
		});
		__( '.demo' ).data( 'bg', 'red' );
		__( '.demo' ).on( 'click', function() {
			alert( 'click event' );
		});
*/

const __ = (function () {
	
	'use strict';
	
	function __(s, root) {
	    return __.prototype.dom(s, root);
	}

	
	/**
	 * Core method
	 *
	 * @param  {String|HTMLElement} s     The CSS selector to search for or HTML element to wrap with functionality
	 * @param  {HTMLElement}        root  OPTIONAL An HTML element to start the element query from
	 * @return {Array}                    The collection of elements, wrapped with functionality (see API methods)
	 */
	__.prototype.dom = function(s, root) {
		const self = this;
		root = root || (typeof (document) !== 'undefined') ? document : null;

		if ( root !== null ) {
			if (typeof(s) === 'string') {
				return self.wrap([].slice.call( root.querySelectorAll(s) ));
			} else if (s.tagName) {
				return self.wrap( [s] );
			} else {
				return [];
			}	
		}

		return [];
	};



	/* ---------------- API methods ----------------- */

	__.prototype.append = function(el) {
		const html = (typeof(el) === 'string') ? el : el.outerHTML;
		this.innerHTML += html;
	};

	__.prototype.prepend = function(el) {
		const html = (typeof(el) === 'string') ? el : el.outerHTML;
		this.innerHTML = html + this.innerHTML;
	};

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

	__.prototype.toggleClass = function(c) {
		if (this.classList.contains(c)) {
			this.classList.remove(c);
		} else {
			this.classList.add(c);
		}
	};

	__.prototype.css = function(props) {
		const self = this;
		
		//check for a valid JSON, something like:
        const isJSON = function(str) {
            try {
                return (JSON.parse(str) && !!str);
            } catch (e) {
                return false;
            }
        };
		
		if ( isJSON(props) ) {
		  //the json is ok
			Object.keys(props).forEach(function(prop) {
				self.style[prop] = props[prop];
			});
		}
		
		
	};

	__.prototype.find = function(s) {
		return __(s, this);
	};


	__.prototype.closest = function(s) {
		//using recursivity
		const el = this.closest( s );
		//console.log( __(el, this) );
		return __(el, this);

	}


	__.prototype.data = function(a, v) {
		a = a || '';
		if (v === undefined) {
			return this.getAttribute('data-' + a);
		} else {
			this.setAttribute('data-' + a, v);
		}
	};

	__.prototype.on = function(e, s, f) {
		if (typeof(f) !== 'function') {
			f = s;
			s = null;
		}
		if (s) {
			const self = this;
			self.addEventListener(e, function(evt) {
				__(s, self).forEach(function(el) {
					if (el === evt.target) {
						f.call(el, evt);
					} else if (isChild(evt.target, el)) {
						f.call(el, evt);
					}
				});
			});
		} else {
			this.addEventListener(e, f);
		}
	};

	/* ------------- Private Methods -------------- */

	const ___api = {
		append: __.prototype.append,
		prepend: __.prototype.prepend,
		addClass: __.prototype.addClass,
		removeClass: __.prototype.removeClass,
		toggleClass: __.prototype.toggleClass,
		css: __.prototype.css,
		find: __.prototype.find,
		closest: __.prototype.closest,
		data: __.prototype.data,
		on: __.prototype.on
	};


	__.prototype.isChild = function(el, p) {
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
	};



	__.prototype.wrap = function(list) {
		const self = this;
		Object.keys(___api).forEach(function(f) {
			list[f] = function() {
				const args = arguments;
				let result;
				if (Array.isArray(this)) {
					result = [];
					this.forEach(function(root) {
						const fnResult = ___api[f].apply(root, [].slice.call(args));
						if (Array.isArray(fnResult)) {
							result = result.concat(fnResult);
						} else if (fnResult !== undefined) {
							result.push(fnResult);
						}
					});

					if (f === 'find' || f === 'closest') {
						self.wrap(result);
					} else {
						result = (result.length && result) || undefined;
					}
				} else {
					result = ___api[f].apply(this, [].slice.call(args));
				}

				return (result === undefined) ? this : result;
			};
		});
		return list;
	};

	
    return __;
})();




export default __;

