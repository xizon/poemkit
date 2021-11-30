	

/*
*  Create a deep copy of the set of matched elements.
*
* @param  {Object|Element} obj             - The array, JSON or HTML element to be copied.
* @return {Object|Element}   
*/
function deepClone(obj) {
    
    if ( obj.nodeType === 1 ) {
        return obj.cloneNode(true);
    } else {
        let objClone = Array.isArray(obj)?[]:{};
        if(obj && typeof obj==="object"){
            for(const key in obj){
                if(obj.hasOwnProperty(key)){
                    //Determine whether the ojb child element is an object, if it is, copy it recursively
                    if(obj[key] && typeof obj[key] ==="object"){
                        objClone[key] = deepClone(obj[key]);
                    }else{
                        //If not, simply copy
                        objClone[key] = obj[key];
                    }
                }
            }
        }
        return objClone;
    }

};


export default deepClone;