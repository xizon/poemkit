
/*
* Convert string to camel case
* @private
*/
function toCamelCase(s) {
	
	if (typeof(s) === 'string') {
		let firstWord="";
		let arr: string[] | string = s.split("-");

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


export default toCamelCase;