import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply Third-party animation plugins --*/
import TweenMax from '@poemkit/components/_plugins/_lib-gsap';

//Disables body scroll locking
import { disableBodyScroll } from '@poemkit/components/_plugins/_lib-scrolllock';

//
import axios from 'axios';

//
import { thumbSwitch } from '@poemkit/components/Lightbox/thumb-switch';


interface ajaxPropConfig {
    /** ID of the container, such as `#my-ajax-demo-target-button` */
    target?: string | undefined;
    /** Set the Ajax request.  Type will automatically be set to POST. */
    method?: string | undefined;
}

interface fireLightboxConfig {
    /** The address of the image, you can use an array to lay out the image sequence, 
     * such as `[{"thumb":"path/1.jpg","large":"path/1.jpg"},{"thumb":"path/2.jpg","large":"path/2.jpg"}]` */
    src?: boolean | string | { [key: string]: string | undefined; }[] | undefined;
    /** The container ID of the HTML content displayed to the stage, such as `#my-lightbox-html-1` */
    htmlID?: boolean | string | undefined;
    /** Whether to fix the pop-up window */
    fixed?: boolean | undefined;
    /** A set of key/value pairs that configure the Ajax request, such as `{"target":"#my-ajax-demo-target-button","method":"POST","url":"https://xxx.com"}` */
    ajax?: boolean | ajaxPropConfig | undefined;
    /** The name of the relevant style of the container */
    classWrapper?: string | undefined;
    classInner?: string | undefined;
    classMask?: string | undefined;
    classClose?: string | undefined; 
    classLoader?: string | undefined; 
}


export function fireLightbox(curElement: any, config: fireLightboxConfig) {
    if ( typeof curElement === typeof undefined ) return;
    
    // Set a default configuration
    config = __.setDefaultOptions({
        "src"          : false,
        "htmlID"       : false,
        "fixed"        : true,
        "ajax"         : false,
        "classWrapper" : ".demo-container",
        "classInner"   : ".demo-inner",
        "classMask"    : ".demo-mask",
        "classClose"   : ".demo-close",
        "classLoader"  : ".demo-loading"
    }, config);

    //
    const wrapperEl       = config.classWrapper,
          innerEl         = config.classInner,
          maskEl          = config.classMask,
          closeEl         = config.classClose,
          loaderEl        = config.classLoader;
 

    //
    const docURL          = window.location.href,
          $content        = __( innerEl ).find( '> .poemkit-lightbox__html' ),
          customWidth     = 1000; //Match the width in the css file;


    let	dataPhoto: any                  = config.src,
        dataHtmlID: any                 = config.htmlID,
        dataFixed: any                  = config.fixed,
        dataAjax: any                   = config.ajax,
        htmlContent: any                = '',
        imgSrcStr: any                  = '',
        imgCalcContainerSrc: any        = '';

    if ( dataAjax ) {
        __( wrapperEl ).addClass( 'js-poemkit-ajax' );

        //Parse ajax config
        if ( typeof dataAjax === 'string' ) dataAjax = JSON.parse( dataAjax.replace(/([a-zA-Z0-9]+?):/g, '"$1":').replace(/'/g,'"') );

        
        //Record current page URL for history
        if ( curElement.data( 'lb-ajax-doc-url' ) === null ) curElement.data( 'lb-ajax-doc-url', docURL );
        
        
    }		

    //Display loading
    __( loaderEl ).removeClass( 'is-loaded' );	

    //Reset the wrapper position
    __( wrapperEl ).css( 'margin-top', 0 );	


    if ( !dataFixed ) {
        __( wrapperEl ).addClass( 'js-poemkit-no-fixed' );
        __( closeEl ).addClass( 'is-active' );
        
        //Initialize the wrapper position
        __( wrapperEl ).css( 'margin-top', __( window ).scrollTop() + 'px' );	
        
    }


    //Reset current container type
    __( innerEl ).removeClass( 'js-poemkit-custom js-poemkit-pure-image' );


    // Locks the page
    if ( !__( wrapperEl ).hasClass( 'js-poemkit-no-fixed' ) ) {
        
        // Locks the page
        //
        // Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
        // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
        // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
        disableBodyScroll( document.querySelector( 'body' ) );


        //Add class for body
        //When scrollLock is used, scrollTop value will change
        __( 'body' ).addClass( 'scrollLock' );
        


    }


    // Show the lightbox
    const showLightbox = function() {
        __( closeEl ).addClass( 'is-active' );
        __( wrapperEl ).show();
        __( maskEl ).show();
        __( innerEl ).show();	
    };


    // hide the content container
    const hideLightboxContent = function() {
        TweenMax.set( $content, {
            css         : {
                'display' : 'none'
            }
        });		
    };


    // show the content container
    const showLightboxContent = function() {
        TweenMax.set( $content, {
            css         : {
                'display' : 'block'
            },
            onComplete  : function() {
                TweenMax.to( this.target, 0.5, {
                    alpha : 1
                });
            }
        });	
    };


    hideLightboxContent();



    /*
    ////////////////////////////////////////////////////////////
    /////////////////////////   PHOTOS  ////////////////////////
    ////////////////////////////////////////////////////////////
    */
    if ( dataPhoto && dataPhoto != '' ) {
        
        //show the lightbox
        showLightbox();

        if ( typeof dataPhoto === 'string' ) {
            dataPhoto = dataPhoto.trim();
            const firstChar = dataPhoto.slice(0,1); 
            const lastChar = dataPhoto.slice(-1); 
            imgSrcStr = firstChar === '[' &&  lastChar === ']' ? JSON.parse( dataPhoto.replace(/([a-zA-Z0-9]+?):/g, '"$1":').replace(/'/g,'"') ) : dataPhoto; 
        } else {
            imgSrcStr = dataPhoto;
        }

        //Judging whether multiple image sets
        if ( Object.prototype.toString.call( imgSrcStr ) === '[object Array]' ) {
            
            let largePhotos = '',
                thumbs      = '';
            
            imgCalcContainerSrc = imgSrcStr[0].large;

            //push the large photos
            largePhotos += '<div class="poemkit-lightbox__photo-container poemkit-lightbox__photo-sets-container"><a href="#" class="poemkit-lightbox__photo-sets__prev"></a><a href="#" class="poemkit-lightbox__photo-sets__next"></a><ul>';
            for ( let i = 0; i < imgSrcStr.length; i++ ) {
            
                const tempID = 'lightbox-' + __.GUID.create();
                
                largePhotos += '<li>';
                largePhotos += '	<a class="poemkit-lightbox__original__link" data-target-id="'+tempID+'-sets-'+i+'" href="#">';
                largePhotos += '	   <img src="'+imgSrcStr[i].large+'" alt=""/>';
                largePhotos += '	</a>';
                largePhotos += '	<div class="poemkit-lightbox__original__target" id="'+tempID+'-sets-'+i+'">';
                largePhotos += '	   <img src="'+imgSrcStr[i].large+'" alt=""/>';
                largePhotos += '	</div>';
                largePhotos += '</li>'; 

            }
            largePhotos += '</ul></div>';
            
            //push the thumbs
            thumbs += '<div class="poemkit-lightbox__thumb-container"><ul>';
            for ( let k = 0; k < imgSrcStr.length; k++ ) {
                
                const active = ( k == 0 ) ? 'class="is-active"' : '';
                
                thumbs += '<li '+active+'><img src="'+imgSrcStr[k].thumb+'" alt=""/></li>';
            }
            thumbs += '</ul></div>';
            
            htmlContent = largePhotos + thumbs;
            

            
        } else {

            const tempID = 'lightbox-' + __.GUID.create();
            
            //Only one image
            imgCalcContainerSrc = imgSrcStr;
            htmlContent += '<div class="poemkit-lightbox__photo-container">';
            htmlContent += '	<a class="poemkit-lightbox__original__link" data-target-id="'+tempID+'" href="#">';
            htmlContent += '	   <img src="'+imgSrcStr+'" alt=""/>';
            htmlContent += '	</a>';
            htmlContent += '	<div class="poemkit-lightbox__original__target" id="'+tempID+'">';
            htmlContent += '	   <img src="'+imgSrcStr+'" alt=""/>';
            htmlContent += '	</div>';
            htmlContent += '</div>'; 
            
        }

        $content.html( htmlContent );

        //Set current container type
        __( innerEl ).addClass( 'js-poemkit-pure-image' );

        //Set container width
        const img = new Image();
        img.src = imgCalcContainerSrc;
        img.onload = function( this: any ) {
            
            //remove loading
            __( loaderEl ).addClass( 'is-loaded' );

            // show the content container
            showLightboxContent();	

            
            let sw     = window.innerWidth - 30,
                ow     = this.width,
                oh     = this.height,
                ratioH = oh/ow,
                ratioW = ow/oh,
                w      = ( ow > customWidth ) ? customWidth : ow,
                h;
    
            if ( w > sw ) w = sw;
            
            h = w * ratioH;
            
        
            //Prevent height overflow
            if ( h > window.innerHeight ) h = window.innerHeight * 0.95;
            
        
            __( innerEl ).css( {
                'width': w + 'px'
            } );
            

            //Don't write variables outside
            const $lbSetsContainer = __( '.poemkit-lightbox__photo-container.poemkit-lightbox__photo-sets-container' );
            $lbSetsContainer.css( {
                'height': h + 'px'
            } );
            
            
            //Set a new height & width of inside images
            $content.find( '.poemkit-lightbox__photo-sets-container ul > li img' ).css( {
                'height': h + 'px'
            } );

            
            if ( ! __( 'body' ).hasClass( 'rtl' ) ) {
                $content.find( '.poemkit-lightbox__photo-sets-container' ).css( {
                    'width': 'calc('+ h*ratioW +'px + 6rem)',
                    'margin-left': '-3rem'
                } );

            } else {
                $content.find( '.poemkit-lightbox__photo-sets-container' ).css( {
                    'width': 'calc('+ h*ratioW +'px + 6rem)',
                    'margin-right': '-3rem'
                } );

            }
            
            
            
            //If the image is larger than the current window, it will display at the top.
            //Don't write variables outside
            const $lbTarImg = __( '.poemkit-lightbox__photo-container > .poemkit-lightbox__original__target' );
            if ( oh > window.innerHeight ) {
                $lbTarImg.addClass( 'poemkit-lightbox__original__target--imgfull' );
            } else {
                $lbTarImg.removeClass( 'poemkit-lightbox__original__target--imgfull' );
            }
            
        
            
            
        };
        
        
        __( innerEl ).find( '> .poemkit-lightbox__html' ).removeClass( 'js-poemkit-no-img' );

        
    }	

    /*
    ////////////////////////////////////////////////////////////
    ////////////   PHOTOS (thumbnail interaction)  /////////////
    ////////////////////////////////////////////////////////////
    */
    const largeImgCloseEl = '.poemkit-lightbox__original__close';

    // Set a default width for container (Match the width in the css file)
    const thumbSwitchWidth = 1000;

    // Click thumbnail to show large photo
    __( '.poemkit-lightbox__thumb-container li' ).off( 'click' ).on( 'click', function( this: any, e: any ) {
        e.preventDefault();

        thumbSwitch( __( this ), {
            index        : __( this ).index(),
            width        : thumbSwitchWidth,
            classLoader  : loaderEl
        });
    });		
    
    
    __( '.poemkit-lightbox__photo-sets-container > a' ).off( 'click' ).on( 'click', function( this: any, e: any ) {
        e.preventDefault();

        const $largePhoto = __( this ).closest( '.poemkit-lightbox__html' ).find( '.poemkit-lightbox__photo-container.poemkit-lightbox__photo-sets-container' ),
            $thumb      = __( this ).closest( '.poemkit-lightbox__html' ).find( '.poemkit-lightbox__thumb-container li' ),
            total       = $thumb.length,
            curIndex    = $thumb.filter( '.is-active' ).index();
        
        let prevIndex   = curIndex - 1,
            nextIndex   = curIndex + 1;
        
        
        if ( prevIndex < 0 ) prevIndex = total - 1;
        if ( nextIndex > total - 1 ) nextIndex = 0;
        
        // Click thumbnail to show large photo
        if ( __( this ).hasClass( 'poemkit-lightbox__photo-sets__prev' ) ) {
            thumbSwitch( $thumb.eq( prevIndex ), {
                index        : prevIndex,
                width        : thumbSwitchWidth,
                classLoader  : loaderEl
            });
        }
        if ( __( this ).hasClass( 'poemkit-lightbox__photo-sets__next' ) ) {
            thumbSwitch( $thumb.eq( nextIndex ), {
                index        : nextIndex,
                width        : thumbSwitchWidth,
                classLoader  : loaderEl
            });
        }
        
        
    });		
    

    if ( window.innerWidth > 768 ) {

        __( '.poemkit-lightbox__original__link' ).off( 'click' ).on( 'click', function( this: any, e: any ) {
            e.preventDefault();

            __( '.poemkit-lightbox__original__target#' + __( this ).data( 'target-id' ) ).addClass( 'is-active' );


            if ( __( this ).closest( '.poemkit-lightbox__container.js-poemkit-no-fixed' ).length > 0 ) {
                __( '.poemkit-lightbox__container.js-poemkit-no-fixed, .poemkit-lightbox__original__target--imgfull' ).addClass( 'no-fixed-imgEnlarged' );
            }


            //---
            __( largeImgCloseEl ).addClass( 'is-active' );


        });	

        __( largeImgCloseEl ).off( 'click' ).on( 'click', function( this: any, e: any ) {
            e.preventDefault();

            __( '.poemkit-lightbox__original__target' ).removeClass( 'is-active' );
            __( '.poemkit-lightbox__container.js-poemkit-no-fixed, .poemkit-lightbox__original__target--imgfull' ).removeClass( 'no-fixed-imgEnlarged' );


            //---
            __( this ).removeClass( 'is-active' );


        });	
    }



    /*
    ////////////////////////////////////////////////////////////
    /////////////////////////   HTML  //////////////////////////
    ////////////////////////////////////////////////////////////
    */
    if ( dataHtmlID && dataHtmlID != '' ) {


        const $htmlAjaxContainer = __( dataHtmlID ).find( '.poemkit-lightbox__htmlcontent-inner > div' );

        //show the lightbox
        showLightbox();
        
        // Content pushing completed
        const htmlContentLoaded = function() {
            //remove loading
            __( loaderEl ).addClass( 'is-loaded' );
            
            //Set current container type
            __( innerEl ).addClass( 'js-poemkit-custom' );
            
            //Set container width
            if ( __( innerEl ).find( '> .poemkit-lightbox__html .poemkit-lightbox__htmlcontent-inner' ).length > 0 ) {
                
                if ( window.innerWidth <= 768 ) {
                    __( innerEl ).css( 'width', window.innerWidth - 10 + 'px' );
                } else {
                    __( innerEl ).css( 'width', __( innerEl ).find( '> .poemkit-lightbox__html .poemkit-lightbox__htmlcontent-inner' ).width() + 'px' );
                }
                
                __( innerEl ).find( '> .poemkit-lightbox__html' ).addClass( 'js-poemkit-no-img' );

                
            }
                
            
        };
        
        
        
        if ( __( wrapperEl ).hasClass( 'js-poemkit-ajax' ) ) {

            //Add content to the dynamic AJAX container
            const ajaxURL = dataAjax.url;


            // Modify the URL without reloading the page
            if( history.pushState ) {
                history.pushState( null, '', ajaxURL );

            } else {
                location.hash = ajaxURL;
            }

            document.cookie = 'poemkit-lightbox-ajaxURL=' + ajaxURL;

            
            // Add a request or response interceptor
            const axiosInterceptor = axios.interceptors.request.use(function(config) {
                // Do something before request is sent


                //
                return config;
            },
            function(error) {
                return Promise.reject(error);
            });

            // To send data in the application/x-www-form-urlencoded format instead
            const formData = new FormData();
            const defaultPostData = {
                action  : 'load_singlepages_ajax_content'
            };
            for(let k in defaultPostData) {
                formData.append(k, defaultPostData[k]);
            }

            // Create a request event
            axios({
                timeout: 15000,
                method: dataAjax.method,
                url: ajaxURL,
                data: formData,
                responseType: 'text',
            })
            .then(function (response) {

                const htmlCode = response.data.match(/<div\s+id=(\"|\')app(\"|\')(.*)>(([\s\S])*?)<\/div>/g);
    
                //
                const targetObject = document.createElement('div');
                const targetTempStr = htmlCode[0]
                                            .replace(/[\r\n]/g, '' )
                                            .trim();
                    
                targetObject.innerHTML = targetTempStr;


                //
                const resHtmlCode = __( targetObject.firstChild ).find( dataAjax.target ).html();
                $htmlAjaxContainer.html( resHtmlCode );
                $content.html( __( dataHtmlID ).html() );

                // show the content container
                showLightboxContent();	

                // content pushing completed
                htmlContentLoaded();


            })  
            .catch(function (error) {

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    const status = error.response.status;
                    console.log(status);
                    
                    if ( status == 404 || status == 405 ) window.location.href = ajaxURL;


                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);

                    //
                    window.location.href = ajaxURL;

                } else {
                    // If there was a problem, we need to
                    // dispatch the error condition
                    console.log(error.message);
                }
            });


            // Remove an interceptor later
            axios.interceptors.request.eject(axiosInterceptor);


            
        } else {
            
            // show the content container
            showLightboxContent();	

            $content.html( __( dataHtmlID ).html() );

            // content pushing completed
            htmlContentLoaded();

        }//endif __( wrapperEl ).hasClass( 'js-poemkit-ajax' )

        
    }	




}

export default fireLightbox;