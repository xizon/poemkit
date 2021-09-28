/* 
 *************************************
 * <!-- Parallax -->
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
import '@uixkit.react/components/Parallax/styles/_style.scss';



// Parallax Effect
import { parallax } from '@uixkit.react/components/Parallax/parallax';


type ParallaxProps = {
    /** Pure parallax scrolling effect without other embedded HTML elements */
    parallaxElements: boolean;
    /** Transition of parallax when `parallaxElements` is true */
    parallaxElementsTransition?: string | null;
    /** Background image URL */
    img?: string;
    /** Class name of default height */
    heightClass?: string | null;
    /** Whether to display all pictures, including the edges */
    fullyVisible?: boolean | null;
    /** Offset top of background */
    offsetTop?: number | null;
    /** Background overlay */
    overlay?: boolean | string | null;
    /** skew of background */
    skew?: number | null;
    /** speed of parallax animation */
    speed?: number | null;
    /** -- */
    id?: string;
    children?: any;
};
type ParallaxState = false;


export default class Parallax extends Component<ParallaxProps, ParallaxState> {
    constructor(props) {
        super(props);
    }


    componentDidMount() {

        __(document).ready(function () {

            let windowWidth = window.innerWidth;

            parallaxInit(windowWidth);

            function windowUpdate() {
                // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
                if (window.innerWidth != windowWidth) {

                    // Update the window width for next time
                    windowWidth = window.innerWidth;

                    // Do stuff here
                    parallaxInit(windowWidth);


                }
            }

            const debounceFunc = __.debounce(windowUpdate, 50);
            window.removeEventListener('resize', debounceFunc);
            window.addEventListener('resize', debounceFunc);



            /*
             * Initialize parallx settings
             *
             * @param  {Number} w         - Returns width of browser viewport
             * @param  {Number} h         - Returns height of browser viewport
             * @return {Void}
             */
            function parallaxInit(w) {

                /* Pure parallax scrolling effect without other embedded HTML elements */
                __('.uix-parallax--el').each(function (this: any, index: number, curSelector: string) {
                    const $this = __(this);

                    let dataSpeed = $this.data('speed'),
                        dataEasing = $this.data('transition');

                    if (dataSpeed === null) {
                        dataSpeed = 0;
                    }
                    if (dataEasing === null) {
                        dataEasing = 'none 0s ease 0s';
                    }


                    parallax($this, { 'speed': dataSpeed, 'bg': false, transition: dataEasing });


                });


                /* Parallax scrolling effect with embedded HTML elements */
                __('.uix-parallax').each(function (this: any, index: number, curSelector: string) {
                    const $this = __(this);

                    const $curImg = __(curSelector + ' .uix-parallax__img'),
                        dataImg = $curImg.attr('src');

                    let dataSkew = $this.data('skew'),
                        dataSpeed = $this.data('speed'),
                        dataEasing = $this.data('transition'),
                        dataOverlay = $this.data('overlay-bg'),
                        dataFullyVisible = $this.data('fully-visible'),
                        dataXPos = $this.data('xpos'),
                        dataOffsetTop = parseFloat($this.data('offset-top')),
                        curImgH: any = null,
                        curImgW: any = null,
                        curSize = 'cover';

                    if (
                        dataOverlay === null ||
                        dataOverlay === 'none' ||
                        dataOverlay === 0 ||
                        dataOverlay === false
                    ) {
                        dataOverlay = 'rgba(0, 0, 0, 0)';
                    }

                    if (dataSpeed === null) { // If there is no data-xxx, save current source to it
                        dataSpeed = 0;
                    }
                    if (dataEasing === null) {
                        dataEasing = 'none 0s ease 0s';
                    }

                    if (dataXPos === null) {
                        dataXPos = '50%';
                    }

                    if (dataOffsetTop === null) {
                        dataOffsetTop = 0;
                    }

                    if (dataFullyVisible === null) {
                        dataFullyVisible = false;
                    }

                    //Trigger a callback when the selected images are loaded
                    //Check if the picture is loaded on the page
                    const img = new Image();
                    img.onload = function () {

                        curImgH = $curImg.height();
                        curImgW = $curImg.width();

                        //Custom height for parallax container
                        if (
                            $this.hasClass('uix-height--10') ||
                            $this.hasClass('uix-height--20') ||
                            $this.hasClass('uix-height--30') ||
                            $this.hasClass('uix-height--40') ||
                            $this.hasClass('uix-height--50') ||
                            $this.hasClass('uix-height--60') ||
                            $this.hasClass('uix-height--70') ||
                            $this.hasClass('uix-height--80') ||
                            $this.hasClass('uix-height--90') ||
                            $this.hasClass('uix-height--100')
                        ) {

                            const newH = $this.height();
                            $this.css({
                                'height': newH + 'px'
                            });
                            $curImg.css('max-height', newH + 'px');
                        } else {
                            $this.css({
                                'height': $this.height() + 'px'
                            });
                        }


                        //If the ".uix-v-align--absolute" has more content
                        if (w <= 768) {

                            if (__(curSelector + ' .uix-v-align--absolute').height() >= curImgH) {
                                __(curSelector + ' .uix-v-align--absolute').addClass('uix-v-align--relative');
                                $curImg.hide();
                            }

                        }


                        //Resize the background image to cover the entire container and
                        //Resize the background image to make sure the image is fully visible
                        if (curImgW > w) {
                            curSize = 'contain';
                        } else {
                            curSize = 'cover';
                        }


                        //Determine image height and parallax container height
                        //If the height is the same, higher or lower than the height of the container height, 
                        //be sure to use the cover attribute
                        //*** Must be placed before the "dataFullyVisible" condition
                        if (curImgH <= $this.height()) {
                            curSize = 'cover';
                        }


                        //Whether to display all pictures, including the edges
                        if (dataFullyVisible) {

                            if (curImgW < w) {
                                curSize = 'cover';
                            } else {
                                curSize = 'contain';
                            }
                        }


                        //console.log( 'Height: ' +curImgH + '===' + $this.height() + ' | Width: ' + curImgW + '===' + w + ' | ' + curSize );

                        //Add background image to parallax container
                        if (dataImg !== null) {

                            $this.css({
                                'background': `linear-gradient(${dataOverlay}, ${dataOverlay}), url(${dataImg}) ${dataXPos} ${dataOffsetTop}px/${curSize} no-repeat fixed`
                            });

                        }



                        //Apply tilt effect
                        if (dataSkew !== null && dataSkew != 0) {

                            //Firefox browser will affect parallax effect due to transform
                            $this.css({
                                'transform': `skew(0deg, ${dataSkew}deg)`
                            });
                        }


                        //Use parallax to background
                        parallax($this, { 'speed': dataSpeed, 'transition': dataEasing, 'offsetTop': dataOffsetTop, 'bg': { enable: true, xPos: dataXPos } });




                    };


                    img.src = dataImg;



                });



            }



        });


    }


    render() {

        const {
            parallaxElements,
            parallaxElementsTransition,
            img,
            heightClass,
            fullyVisible,
            offsetTop,
            overlay,
            skew,
            speed,
            id,
            children,
            ...attributes
        } = this.props;

        const _parallaxElements = typeof parallaxElements === typeof undefined ? false : parallaxElements;

        return (
            <>

                {!_parallaxElements ? (
                    <div id={id || 'app-parallax-' + __.GUID.create()}
                        className={`uix-parallax ${heightClass || ''}`}
                        data-fully-visible={fullyVisible || false}
                        data-offset-top={offsetTop || 0}
                        data-overlay-bg={overlay || false}
                        data-skew={skew || 0}
                        data-speed={speed || 0.1}
                        {...attributes}>
                        <img className="uix-parallax__img" src={img} alt="" />
                        <div className="uix-v-align--absolute uix-t-c">
                            {children}
                        </div>
                    </div>

                ) : (
                    <div id={id || 'app-parallaxEl-' + __.GUID.create()}
                        className={`uix-parallax--el ${heightClass || ''}`}
                        data-transition={parallaxElementsTransition || 'all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s'}
                        data-speed={speed || 0.1}
                        {...attributes}>
                        {children}
                    </div>
                )}



            </>
        )
    }
}

