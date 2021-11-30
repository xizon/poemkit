
import stringlineToHump from './_internal/stringlineToHump';

/*
* Remove a previously-stored piece of data.
*
* @param  {String} a                 - A string naming the piece of data to delete.
* @return {Void} 
*/
function removeData(this: any, a) {
	a = a || '';
	const _s = stringlineToHump( a );
	delete this.dataset[_s];
}

export default removeData;
	