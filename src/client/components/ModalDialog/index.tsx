/* 
 *************************************
 * <!-- Modal Dialog -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap';
import '@uixkit.react/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utils/styles/_all.scss';
import '@uixkit.react/components/_utils/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply this component styles --*/
import '@uixkit.react/components/ModalDialog/styles/_style.scss';
import '@uixkit.react/components/ModalDialog/styles/rtl/_style.scss';


//Enables body scroll locking
import { clearAllBodyScrollLocks } from '@uixkit.react/components/_plugins/_lib-scrolllock';

// 
import { fireModalDialog } from '@uixkit.react/components/ModalDialog/fire-modal-dialog';
import { closeModalDialog } from '@uixkit.react/components/ModalDialog/close-modal-dialog';

declare global {
    interface Window {
        curVideo?: any;
    }
}


type ModalDialogProps = {
    /** Custom modal height whick need a unit string.  
     * This attribute "data-modal-height" may not exist. Such as: 200px
    */
    height?: number | string | boolean;
    /** Custom modal width whick need a unit string.
     * This attribute "data-modal-width" may not exist. Such as: 200px
     */
    width?: number | string | boolean;
    /** Whether to enable the lightbox effect */
    lightbox?: boolean;
    /** Specify auto-close time. This function is not enabled when this value is false. If the value is 2000, it will automatically close after 2 seconds. */
    autoClose?: number | boolean;
    /** Disable mask to close the window */
    closeOnlyBtn?: boolean;

    /** /////  */
    /** Toggles whether fullscreen should be enabled */
    fullscreen?: boolean;
    /** Set a window title */
    heading?: React.ReactNode;
    /** Tag name of the trigger. Allowed values are: `a`, `button`, `div`, `span` */
    triggerTagName?: string;
    /** Specify a class for this Node. */
    triggerClassName?: string;
    /** Set a piece of text or HTML code for the trigger */
    triggerContent?: React.ReactNode;
    /** Automatically open the component, you can use it with the `autoClose` property at the same time */
    autoOpen?: boolean;
    /** Adapt the video to the window */
    enableVideo?: boolean;
    /** -- */
    id?: string;
    children?: any;
};
type ModalDialogState = false;


export default class ModalDialog extends Component<ModalDialogProps, ModalDialogState> {
    constructor(props) {
        super(props);

        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }


    handleCloseModal(e) {
        e.preventDefault();
        this.closeAction();
    }


    handleOpenModal(e, obj) {
        e.preventDefault();
        this.openAction(obj);

    }


    closeAction() {
        // pause video without controls
        //------------------------------------------
        if (window.curVideo !== null) window.curVideo.pause();


        // close Modal Dialog
        //------------------------------------------
        closeModalDialog({ target: '.uix-modal-box' });
    }


    openAction(obj) {

        const self = this;
        const curModalID = '#' + obj.data('modal-id');

        //Delay Time when Full Screen Effect is fired.
        const modalSpeed: any = __.cssProperty.getTransitionDuration(__('.uix-modal-box:first-child')[0]);

        let dataH = obj.data('modal-height'),
            dataW = obj.data('modal-width'),
            dataLightbox = obj.data('modal-lightbox'),
            dataCloseTime = obj.data('modal-close-time'),
            dataCloseOnlyBtn = obj.data('modal-close-onlybtn');


        if (dataH === null) {
            dataH = false;
        }

        if (dataW === null) {
            dataW = false;
        }
        if (dataLightbox === null) {
            dataLightbox = true;
        }
        if (dataCloseTime === null) {
            dataCloseTime = false;
        }
        if (dataCloseOnlyBtn === null) {
            dataCloseOnlyBtn = false;
        }



        // Video PopUp Interaction
        //------------------------------------------
        const hasVideo = __(curModalID).hasClass('is-video') ? true : false;

        if (hasVideo) {

            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const $videoWrapper = __(curModalID).find('.uix-modal-box__video-container');
            const isIframe = $videoWrapper.find('iframe').length > 0 ? true : false;
            let $video: any = isIframe ? $videoWrapper.find('iframe') : $videoWrapper.find('video');

            //
            const setVideo = function (currentWidth, currentHeight, obj) {

                const newMaxW = windowWidth - 80,
                    newMaxH = windowHeight - 80;

                let newW = currentWidth,
                    newH = currentHeight;


                if (currentHeight > newMaxH) {
                    newH = newMaxH;

                    //Scaled/Proportional Content 
                    newW = currentWidth * (newH / currentHeight);

                }

                if (newW > newMaxW) {
                    newW = newMaxW;

                    //Scaled/Proportional Content 
                    newH = currentHeight * (newW / currentWidth);
                }


                obj.css({
                    'left': (newMaxW - newW) / 2 + 'px',
                    'top': (newMaxH - newH) / 2 + 'px',
                    'height': newH + 'px',
                    'width': newW + 'px'
                });

                if (windowWidth <= 768) {
                    obj.css({
                        'top': 0
                    }).parent().css({
                        'top': (newMaxH - newH) / 2 + 'px'
                    });

                }
            };


            if (isIframe) {
                setVideo($video.width(), $video.height(), $video);
            } else {

                const _sources = $video[0].getElementsByTagName('source');
                const _src = _sources.length > 0 ? _sources[0].src : $video[0].src;

                self.getVideoDimensions(_src).then(function (res: any): void {
                    setVideo(res.width, res.height, $video);
                });
            }

            //Set current video when the tag is <video>
            window.curVideo = $video[0].tagName === 'VIDEO' ? $video[0] : null;


        }


        // fire Modal Dialog
        //------------------------------------------
        fireModalDialog({
            target: curModalID,
            height: dataH,
            width: dataW,
            speed: modalSpeed,
            btn: obj,
            lightbox: dataLightbox,
            autoClose: dataCloseTime,
            closeOnlyBtn: dataCloseOnlyBtn
        });

    }



    createTrigger(id, closeOnlyBtn, autoClose, tagName, classes, content, width, height, autoOpen) {

        switch (tagName) {

            case 'a':
                return (
                    <>
                        <a role="button" href="#" data-modal-width={width} data-modal-height={height} data-modal-auto-open={autoOpen} className={classes} data-modal-id={id} data-modal-close-onlybtn={closeOnlyBtn} data-modal-close-time={autoClose}>{content}</a>
                    </>
                )

            case 'button':
                return (
                    <>
                        <button type="button" data-modal-width={width} data-modal-height={height} data-modal-auto-open={autoOpen} className={classes} data-modal-id={id} data-modal-close-onlybtn={closeOnlyBtn} data-modal-close-time={autoClose}>{content}</button>
                    </>
                )

            case 'div':
                return (
                    <>
                        <div role="button" data-modal-width={width} data-modal-height={height} data-modal-auto-open={autoOpen} className={classes} data-modal-id={id} data-modal-close-onlybtn={closeOnlyBtn} data-modal-close-time={autoClose}>{content}</div>
                    </>
                )

            case 'span':
                return (
                    <>
                        <span role="button" data-modal-width={width} data-modal-height={height} data-modal-auto-open={autoOpen} className={classes} data-modal-id={id} data-modal-close-onlybtn={closeOnlyBtn} data-modal-close-time={autoClose}>{content}</span>
                    </>
                )

        }

    }


    //Returns the dimensions of a video asynchrounsly.
    getVideoDimensions(url) {
        return new Promise(function (resolve) {
            // create the video element
            let video = document.createElement('video');

            // place a listener on it
            video.addEventListener("loadedmetadata", function () {
                // retrieve dimensions
                let height = this.videoHeight;
                let width = this.videoWidth;
                // send back result
                resolve({
                    height: height,
                    width: width
                });
            }, false);

            // start download meta-datas
            video.src = url;
        });
    }


    componentDidMount() {

        const self = this;
        window.curVideo = null;

        __(document).ready(function () {

            //Add modal mask to stage
            if (__('.uix-modal-mask').length == 0) {
                __('body').prepend('<div class="uix-modal-mask"></div>');
            }

            const btnClose = '.uix-modal-box [data-modal-close-trigger], .uix-modal-mask:not(.js-uix-disabled)';
            __(document).off('click', btnClose);
            __(document).on('click', btnClose, function (this: any, e: any) {
                self.handleCloseModal(e);
            });


            //move Modal Dialog template to tag end body </body>
            Array.prototype.forEach.call(document.querySelectorAll('.uix-modal-box'), function (node) {
                document.body.appendChild(node);
            });



            //click to open Modal Dialog 
            const btnOpen = '[data-modal-id]';
            __(btnOpen).off('click').on('click', function (this: any, e: any) {
                self.handleOpenModal(e, __(this));
            });


            //automatically open Modal Dialog 
            __(btnOpen).each(function (this: any) {

                let dataAutoOpen = __(this).data('modal-auto-open');

                if (dataAutoOpen === null) {
                    dataAutoOpen = false;
                }
                if (dataAutoOpen) self.openAction(__(this));

            });



        });


    }

    componentWillUnmount() {
        clearAllBodyScrollLocks();
    }


    render() {

        const {
            height,
            width,
            lightbox,
            autoClose,
            closeOnlyBtn,
            fullscreen,
            heading,
            triggerTagName,
            triggerClassName,
            triggerContent,
            autoOpen,
            enableVideo,
            id,
            children,
            ...attributes
        } = this.props;

        const cid = id || 'app-modal-' + __.GUID.create();
        const fullClassName = fullscreen ? 'is-fullscreen' : '';



        return (
            <>

                {this.createTrigger(cid, closeOnlyBtn, autoClose, triggerTagName, triggerClassName, triggerContent, width, height, autoOpen)}

                {!enableVideo ? (
                    <div className={`uix-modal-box ${fullClassName}`} role="dialog" tabIndex={-1} aria-hidden="true" id={cid} {...attributes}>
                        <button type="button" className="uix-modal-box__close" data-modal-close-trigger="true"></button>
                        <div className="uix-modal-box__content" role="document">
                            <div className="uix-modal-box__head">
                                {heading || ''}
                            </div>
                            <div className="uix-modal-box__body">
                                <div role="note">
                                    {/*<!-- ////////  content  begin //////// -->*/}
                                    {children}
                                    {/*<!-- ////////  content  end //////// -->*/}
                                </div>
                            </div>


                        </div>
                    </div>
                ) : (
                    <div className="uix-modal-box is-fullscreen is-video" role="dialog" tabIndex={-1} aria-hidden="true" id={cid} {...attributes}>
                        <button type="button" className="uix-modal-box__close" data-modal-close-trigger="true"></button>
                        <div className="uix-modal-box__content" role="document">
                            <div className="uix-modal-box__video-waiting"></div>
                            <div className="uix-modal-box__video-container">
                                <div className="embed-responsive embed-responsive-16by9">
                                    {/*<!-- ////////  content  begin //////// -->*/}
                                    {children}
                                    {/*<!-- ////////  content  end //////// -->*/}
                                </div>
                            </div>
                        </div>
                    </div>
                )}



            </>
        )
    }
}

