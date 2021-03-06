/* 
 *************************************
 * <!-- Lightbox -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@/components/_plugins/_lib-bootstrap';
import '@/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@/components/_utils/styles/_all.scss';
import '@/components/_utils/styles/rtl/_all.scss';
import { __ } from '@/components/_utils/_all';

/*-- Apply this component styles --*/
import '@/components/Lightbox/styles/_style.scss';
import '@/components/Lightbox/styles/rtl/_style.scss';

/*-- Apply Third-party animation plugins --*/
import TweenMax from '@/components/_plugins/_lib-gsap';


//Destroys body scroll locking
import { clearAllBodyScrollLocks } from '@/components/_plugins/_lib-scrolllock';

// 
import { fireLightbox } from '@/components/Lightbox/fire-lightbox';
import { closeLightbox } from '@/components/Lightbox/close-lightbox';


interface ajaxPropConfig {
    /** ID of the container, such as `#my-ajax-demo-target-button` */
    target?: string | undefined;
    /** Set the Ajax request.  Type will automatically be set to POST. */
    method?: string | undefined;
}


type LightboxProps = {
    /** The address of the image, you can use an array to lay out the image sequence, 
     * such as `[{"thumb":"path/1.jpg","large":"path/1.jpg"},{"thumb":"path/2.jpg","large":"path/2.jpg"}]` */
     src?: boolean | string | { [key: string]: string | undefined; }[];
     /** Whether to fix the pop-up window */
     fixed?: boolean;
     /** A set of key/value pairs that configure the Ajax request, such as `{"target":"#my-ajax-demo-target-button","method":"POST","url":"https://xxx.com"}` */
     ajax?: boolean | ajaxPropConfig;

    /** /////  */
    /** Tag name of the trigger. Allowed values are: `a`, `button`, `div`, `span` */
    triggerTagName?: string;
    /** Specify a class for this Node. */
    triggerClassName?: string;
    /** Set a piece of text or HTML code for the trigger */
    triggerContent?: React.ReactNode;
    /** A string of HTML to set as the content. */
    htmlContent?: React.ReactNode;
    /** -- */
    id?: string;
};
type LightboxState = false;


export default class Lightbox extends Component<LightboxProps, LightboxState> {

    urlChange: () => void;
    uniqueID: string;

    constructor(props) {
        super(props);
        
        this.uniqueID = 'app-' + __.GUID.create();
        this.urlChange = ()=>{};

    }


    createTrigger(id, tagName, classes, content, dataSrc, dataHtmlID, dataFixed, dataAjax) {

        switch (tagName) {

            case 'a':
                return (
                    <>
                        <a role="button" href="#" id={id} className={"poemkit-lightbox__trigger " + classes} data-lb-src={dataSrc} data-lb-html={dataHtmlID} data-lb-fixed={dataFixed} data-lb-ajax={dataAjax}>{content}</a>
                    </>
                )

            case 'button':
                return (
                    <>
                        <button type="button" id={id} className={"poemkit-lightbox__trigger " + classes} data-lb-src={dataSrc} data-lb-html={dataHtmlID} data-lb-fixed={dataFixed} data-lb-ajax={dataAjax}>{content}</button>
                    </>
                )

            case 'div':
                return (
                    <>
                        <div role="button" id={id} className={"poemkit-lightbox__trigger " + classes} data-lb-src={dataSrc} data-lb-html={dataHtmlID} data-lb-fixed={dataFixed} data-lb-ajax={dataAjax}>{content}</div>
                    </>
                )

            case 'span':
                return (
                    <>
                        <span role="button" id={id} className={"poemkit-lightbox__trigger " + classes} data-lb-src={dataSrc} data-lb-html={dataHtmlID} data-lb-fixed={dataFixed} data-lb-ajax={dataAjax}>{content}</span>
                    </>
                )

        }

    }


    componentDidMount() {

        const self = this;

        __( document ).ready( () => {

        
            // The name of the relevant style of the container
            const wrapperEl       = '.poemkit-lightbox__container',
                  innerEl         = '.poemkit-lightbox__inner',
                  maskEl          = '.poemkit-lightbox__container-mask',
                  closeEl         = '.poemkit-lightbox__close',
                  loaderEl        = '.poemkit-lightbox__loading';

            // Temporarily stored URL
            const docURL = window.location.href;


            if ( __( '.poemkit-lightbox__container' ).len() == 0 ) {
                __( 'body' ).prepend(`
                    <div class="poemkit-lightbox__loading is-loaded poemkit-t-c">
                        <i class="fa fa-spinner fa-spin"></i>Loading...
                    </div>
                    <a class="poemkit-lightbox__original__close" href="#"></a>
                    <div class="poemkit-lightbox__container">
                        <div class="poemkit-lightbox__inner">
                            <div class="poemkit-lightbox__html"></div>
                            <p class="title"></p>
                        </div>
                    </div>
                    <div class="poemkit-lightbox__container-mask"></div>
                    <div class="poemkit-lightbox__close">
                        <button type="button"></button>
                    </div>
                `);
            }
            

            // Move HTML templates to tag end body </body>
            Array.prototype.forEach.call(document.querySelectorAll('.poemkit-lightbox__htmlcontent-template:not(.is-loaded)'), (node) => {
                node.classList.add( 'is-loaded' );
                document.body.appendChild(node);
            });

        
            // Fire the lightbox
            //------------------------------------------
            __( '.poemkit-lightbox__trigger' ).off( 'click' ).on( 'click', function( this: any, e: any ) { 
                e.preventDefault();

                const $this = __( this );

                //do not use `.data()`
                fireLightbox( $this, {
                    src          : $this.attr( 'data-lb-src' ), 
                    htmlID       : $this.attr( 'data-lb-html' ),
                    fixed        : $this.attr( 'data-lb-fixed' ),
                    ajax         : $this.attr( 'data-lb-ajax' ),
                    classWrapper : wrapperEl,
                    classInner   : innerEl,
                    classMask    : maskEl,
                    classClose   : closeEl,
                    classLoader  : loaderEl
                });

    
            });
            
            
    
            // Close the lightbox
            //------------------------------------------    
            //Detect URL change & Fire click event
            self.urlChange = function() {
                let eleTarget = null;
                
                __( '[data-lb-ajax]' ).each( function( this: any ) {

                    let ajaxConfig = __( this ).data( 'lb-ajax' );

                    if ( ajaxConfig !== null ) {
                        //Parse ajax config
                        if ( typeof ajaxConfig === 'string' ) ajaxConfig = JSON.parse( ajaxConfig.replace(/([a-zA-Z0-9]+?):/g, '"$1":').replace(/'/g,'"') );
                    }		
                  
                    
                    let prevURL = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent( 'poemkit-lightbox-ajaxURL' ).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;


                    if ( ajaxConfig.url === prevURL ) {
                        eleTarget = this;
                    }
                    
                });

     
                const backURL = __( eleTarget ).data( 'lb-ajax-doc-url' );
                if ( backURL !== null ) {
                    closeLightbox({
                        url          : backURL,
                        classWrapper : wrapperEl,
                        classInner   : innerEl,
                        classMask    : maskEl,
                        classClose   : closeEl
                    });
                }
            }

            window.addEventListener('popstate', self.urlChange);
            

            __( closeEl + ',' + maskEl ).off( 'click' ).on( 'click', function( this: any, e: any ) {
                e.preventDefault();
                closeLightbox({
                    url          : docURL,
                    classWrapper : wrapperEl,
                    classInner   : innerEl,
                    classMask    : maskEl,
                    classClose   : closeEl
                });
            });	

            


        });


    }


     /** Remove the global list of events, especially as scroll and interval. */
     componentWillUnmount() {
        clearAllBodyScrollLocks();
        
        // Remove URL change events from window
        window.removeEventListener('popstate', this.urlChange);

		// Kill all aniamtions
		TweenMax.killAll();  

        // Remove all moved elements
        Array.prototype.forEach.call(document.querySelectorAll('.poemkit-lightbox__htmlcontent-template.is-loaded'), (node) => {
            node.remove();
        });

    }


    render() {

        const {
            src,
            fixed,
            ajax,
            triggerTagName,
            triggerClassName,
            triggerContent,
            htmlContent,
            id,
        } = this.props;

        const cid = id || this.uniqueID;

        // The container ID of the HTML content displayed to the stage, such as `#my-lightbox-html-1`
        const htmlID = htmlContent || ajax ? 'app-lightbox-html-' + cid : false;

        return (
            <>

                {this.createTrigger(cid, triggerTagName, triggerClassName, triggerContent, src, (htmlID ? '#' + htmlID : false), fixed, ajax)}

                {htmlContent ? (
                    <div className="poemkit-lightbox__htmlcontent-template" id={htmlID || ''}>
                        <div className="poemkit-lightbox__htmlcontent-container" role="dialog" tabIndex={-1} aria-hidden="true">
                            <div className="poemkit-lightbox__htmlcontent-inner" role="document">
                                <div role="note">

                                    {/*<!-- ///////   content begin /////// -->*/}
                                    {htmlContent}
                                    {/*<!-- ///////   content end /////// -->*/}

                                </div>{/*<!-- /[role="note"] -->*/}
                            </div>{/*<!-- /.poemkit-lightbox__htmlcontent-inner -->*/}
                        </div>
                    </div>

                ) : ''
                }

                {ajax ? (
                    <div className="poemkit-lightbox__htmlcontent-template" id={htmlID || ''}>
                        <div className="poemkit-lightbox__htmlcontent-container" role="dialog" tabIndex={-1} aria-hidden="true">
                            <div className="poemkit-lightbox__htmlcontent-inner" role="document">
                                <div role="note"></div>{/*<!-- /[role="note"] -->*/}
                            </div>{/*<!-- /.poemkit-lightbox__htmlcontent-inner -->*/}
                        </div>
                    </div>

                ) : ''
                }

            </>
        )
    }
}

