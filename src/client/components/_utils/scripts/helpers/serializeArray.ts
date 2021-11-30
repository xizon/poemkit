
/*
* Serialize html form to JSON
*
* @return {Void}    
*/
function serializeArray(this: any) {
	const form = this;
	const objects: any[] = [];
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

export default serializeArray;