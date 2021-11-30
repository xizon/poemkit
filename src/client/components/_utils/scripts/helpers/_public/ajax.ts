	
import isJSON from '../_internal/isJSON';

/*
* Perform an asynchronous HTTP (Ajax) request.
*
* @param  {Json} props   - The attribute and value to be set, the format is JSON
* @return {Void} 
*/  
function ajax(this: any, props) {

    if ( ! isJSON(props) ) return false;
    
    const self = this;
    const _url = typeof(props.url) !== 'undefined' ? props.url : '';
    const _method = typeof(props.method) !== 'undefined' ? props.method : 'POST';
    const _loadedFn = typeof(props.complete) !== 'undefined' ? props.complete : null;


    if ( _url != '' ) {
        
        let config: any = {
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

}

export default ajax;