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

//
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
 
     private wrapperRef = React.createRef<HTMLDivElement>();
 
     windowScrollUpdate: () => void;
     
     constructor(props) {
         super(props);
 
         // Add a scroll event listener to window
         this.windowScrollUpdate = ()=>{};

         this.parallaxInit = this.parallaxInit.bind(this);
 
     }
 
     parallaxInit(w) {
 
        const self = this;
        const reactDomEl: any = self.wrapperRef.current;

        // Pure parallax scrolling effect without other embedded HTML elements
        //------------------------------------------
        if ( reactDomEl.classList.contains( 'uix-parallax--el' ) ) {
        
            let dataSpeed = reactDomEl.dataset.speed,
                dataEasing = reactDomEl.dataset.transition;

            if (dataSpeed === undefined) dataSpeed = 0;
            if (dataEasing === undefined) dataEasing = 'none 0s ease 0s';


            //Scroll Spy
            self.windowScrollUpdate = parallax( reactDomEl, {
                speed       : dataSpeed,
                offsetTop   : 0,
                transition  : dataEasing,
                bg          : false
            }) as () => void;

        }


        // Parallax scrolling effect with embedded HTML elements
        //------------------------------------------
        if ( !reactDomEl.classList.contains( 'uix-parallax--el' ) ) {
            const $curImg = reactDomEl.querySelector( '.uix-parallax__img'),
                  dataImg = $curImg.src;

            let dataSkew = reactDomEl.dataset.skew,
                dataSpeed = reactDomEl.dataset.speed,
                dataEasing = reactDomEl.dataset.transition,
                dataOverlay = reactDomEl.dataset.overlayBg,
                dataFullyVisible = reactDomEl.dataset.fullyVisible,
                dataXPos = reactDomEl.dataset.xpos,
                dataOffsetTop = parseFloat(reactDomEl.dataset.offsetTop),
                curImgH: any = null,
                curImgW: any = null,
                curSize = 'cover';

            if (
                dataOverlay === undefined ||
                dataOverlay === 'none' ||
                dataOverlay === 0 ||
                dataOverlay === 'false'
            ) {
                dataOverlay = 'rgba(0, 0, 0, 0)';
            }

            // If there is no data-xxx, save current source to it
            if (dataSpeed === undefined) dataSpeed = 0;
            if (dataEasing === undefined) dataEasing = 'none 0s ease 0s';
            if (dataXPos === undefined) dataXPos = '50%';
            if (dataOffsetTop === undefined) dataOffsetTop = 0;
            if (dataFullyVisible === undefined) dataFullyVisible = false;
            

            //Trigger a callback when the selected images are loaded
            //Check if the picture is loaded on the page
            const img = new Image();
            img.onload = function () {

                curImgH = $curImg.offsetHeight; //element height + padding width + borders width
                curImgW = $curImg.offsetWidth; //element width + padding width + borders width

                //Custom height for parallax container
                if (
                    reactDomEl.classList.contains('uix-height--10') ||
                    reactDomEl.classList.contains('uix-height--20') ||
                    reactDomEl.classList.contains('uix-height--30') ||
                    reactDomEl.classList.contains('uix-height--40') ||
                    reactDomEl.classList.contains('uix-height--50') ||
                    reactDomEl.classList.contains('uix-height--60') ||
                    reactDomEl.classList.contains('uix-height--70') ||
                    reactDomEl.classList.contains('uix-height--80') ||
                    reactDomEl.classList.contains('uix-height--90') ||
                    reactDomEl.classList.contains('uix-height--100')
                ) {
                
                    const newH = reactDomEl.offsetHeight;
                    reactDomEl.style.height = newH + 'px';
                    $curImg.style.maxHeight = newH + 'px';

                } else {
                    reactDomEl.style.height = reactDomEl.offsetHeight + 'px';
                }


                //If the ".uix-v-align--absolute" has more content
                if (w <= 768) {

                    if (reactDomEl.querySelector('.uix-v-align--absolute').offsetHeight >= curImgH) {
                        reactDomEl.querySelector('.uix-v-align--absolute').classList.add('uix-v-align--relative');
                        $curImg.style.display = 'none';
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
                if (curImgH <= reactDomEl.offsetHeight) {
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


                //console.log( 'Height: ' +curImgH + '===' + reactDomEl.offsetHeight + ' | Width: ' + curImgW + '===' + w + ' | ' + curSize );

                //Add background image to parallax container
                if (dataImg !== undefined) {
                    reactDomEl.style.background = `linear-gradient(${dataOverlay}, ${dataOverlay}), url(${dataImg}) ${dataXPos} ${dataOffsetTop}px/${curSize} no-repeat fixed`;

                }



                //Apply tilt effect
                if (dataSkew !== undefined && dataSkew != 0) {

                    //Firefox browser will affect parallax effect due to transform
                    reactDomEl.style.transform = `skew(0deg, ${dataSkew}deg)`;
                }


                //Scroll Spy
                self.windowScrollUpdate = parallax( reactDomEl, {
                    speed       : dataSpeed,
                    offsetTop   : dataOffsetTop,
                    transition  : dataEasing,
                    bg          : { enable: true, xPos: dataXPos }
                }) as () => void;



            };

            img.src = dataImg;       
        }



 
     }
 
 
     componentDidMount() {
 
         const self = this;
 
         __(document).ready(function () {
 

             let windowWidth = window.innerWidth;
             self.parallaxInit(windowWidth);
    
             function windowUpdate() {
                 // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
                 if (window.innerWidth != windowWidth) {
    
                     // Update the window width for next time
                     windowWidth = window.innerWidth;
    
                     // Do stuff here
                     self.parallaxInit(windowWidth);
    
    
                 }
             }
    
             const debounceFunc = __.debounce(windowUpdate, 50);
             window.removeEventListener('resize', debounceFunc);
             window.addEventListener('resize', debounceFunc);
    

 
         });
 
 
     }
 
     /** Remove the global list of events, especially as scroll and interval. */
     componentWillUnmount() {
         
         // Remove scroll events from window
         window.removeEventListener('scroll', this.windowScrollUpdate);
         window.removeEventListener('touchmove', this.windowScrollUpdate);  
 
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
                    <div 
                        ref={this.wrapperRef}
                        id={id || 'app-parallax-' + __.GUID.create()}
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
                    <div 
                        ref={this.wrapperRef}
                        id={id || 'app-parallaxEl-' + __.GUID.create()}
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
 
 