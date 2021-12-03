	
/*
* Evaluating a string as a mathematical expression in JavaScript
* @public
*
* @description This function can be used separately in HTML pages or custom JavaScript.
* @return {String}            - New calculation result.
*/  

const math = ( () => {
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
        let n: string[] = [], 
            op: string[] = [], 
            index = 0, 
            oplast = true;

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



export default math;