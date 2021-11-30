

/*
* Wrap an HTML structure around the content of each element in the set of matched elements.
*
* @param  {String} el   - An HTML snippet.
* @return {Void}
*/
function wrapInner(this: any, el) {

    //get old value
    const val = this.innerHTML;

    //empty default value
    this.innerHTML = '';

    //The DOMParser() method is awesome, but the parseFromString() method stops at IE10.
    const support = (function() {
        if (!window.DOMParser) return false;
        const parser = new DOMParser();
        try {
            parser.parseFromString('x', 'text/html');
        } catch(err) {
            return false;
        }
        return true;
    })();

    //Convert a template string into HTML DOM nodes
    const stringToHTML = function stringToHTML(str) {

        // If DOMParser is supported, use it
        if (support) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(str, 'text/html');
            const res = doc.body;
            return res.children[0];
        }

        // Otherwise, fallback to old-school method
        const dom = document.createElement('div');
        dom.innerHTML = str;
        const res = dom;
        return res.children[0];
    };

    if (typeof el === 'string') {
        const div = this.appendChild(stringToHTML(el));
        div.innerHTML = val;

        while (this.firstChild !== div) {
            div.appendChild(this.firstChild);
        }
    }
    
}

export default wrapInner;