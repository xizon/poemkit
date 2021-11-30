
/*
* Delete elements in the array
* @private
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
	

export default removeArray;