import isJSON from './_internal/isJSON';

/*
* Detect when images and videos have been loaded. 
*
* @param  {Json} props   - Contains three event functions before loading, loading, and loading completed.
* @return {Void}
*/
function loader(this: any, props) {


    const self = this;
    const sources: any[] = [];
    let loadingFn: any = null,
        progressFn: any = null,
        loadedFn: any = null,
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
                "url": (imgs[i] as unknown as HTMLImageElement).src,
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
                "url": _sources.length > 0 ? _sources[0].src : (videos[i] as unknown as HTMLVideoElement).src,
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
                const _promise = new Promise(function (resolve: any, reject?: any) {

                    const img = document.createElement( 'img' );
                    img.crossOrigin = 'anonymous';
                    img.src = sources[i].url;

                    img.onload = function(this: any, e: any) {
                        //Compatible with safari and firefox
                        if ( typeof e.path === typeof undefined ) {
                            return resolve(e.target.currentSrc);
                        } else {
                            return resolve(e.path[0].currentSrc);
                        }
                    };  
                }).then( textureLoaded ) as never;

                promises.push( _promise );

            } else {

                ///////////
                // VIDEO //
                ///////////    

                const _promise = new Promise(function (resolve: any, reject?: any) {

                    const video = document.createElement('video');
                    video.addEventListener("loadedmetadata", function (this: any, e: any) {

                        //Compatible with safari and firefox
                        if ( typeof e.path === typeof undefined ) {
                            return resolve(e.target.currentSrc);
                        } else {
                            return resolve(e.path[0].currentSrc);
                        }	

                    }, false);

                    // start download meta-datas
                    video.src = sources[i].url;
                }).then( textureLoaded ) as never;

                promises.push( _promise );

            }   
            
            

        }//end for



        return Promise.all(promises);
    };

    const textureLoaded = function( url ) {

        //progress number
        per = 100 * ( perInit / sources.length );
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

    
}


export default loader;