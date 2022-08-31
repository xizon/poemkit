/* 
 *************************************
 * <!-- Parallax -->
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
import '@/components/Parallax/styles/_style.scss';

//
import { parallax } from '@/components/Parallax/parallax';


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
    /** speed of parallax animation. Recommended value: `-10.00` to `10.00` */
    speed?: number | null;
    /** -- */
    id?: string;
	children: React.ReactNode;
};
type ParallaxState = false;


export default class Parallax extends Component<ParallaxProps, ParallaxState> {

    private rootRef = React.createRef<HTMLDivElement>();

    windowScrollUpdate: () => void;
    windowResizeUpdate: () => void;
    uniqueID: string;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();

        // Add a scroll event listener to window
        this.windowScrollUpdate = () => { };

        // Add a resize event listener to window
        this.windowResizeUpdate = () => { };

        this.parallaxInit = this.parallaxInit.bind(this);

    }

    parallaxInit(w) {

        const self = this;
        const reactDomEl: any = self.rootRef.current;

        // Pure parallax scrolling effect without other embedded HTML elements
        //------------------------------------------
        if (reactDomEl.classList.contains('poemkit-parallax--el')) {

            let dataSpeed = reactDomEl.dataset.speed,
                dataEasing = reactDomEl.dataset.transition;

            if (dataSpeed === undefined) dataSpeed = 0;
            if (dataEasing === undefined) dataEasing = 'none 0s ease 0s';


            //Scroll Spy
            self.windowScrollUpdate = parallax(reactDomEl, {
                speed: dataSpeed,
                offsetTop: 0,
                transition: dataEasing,
                bg: false
            }) as unknown as () => void;

        }


        // Parallax scrolling effect with embedded HTML elements
        //------------------------------------------
        if (!reactDomEl.classList.contains('poemkit-parallax--el')) {
            const $curImg = reactDomEl.querySelector('.poemkit-parallax__img'),
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

                curImgH = $curImg.offsetHeight; //including: padding + borders + v-scrollbars (if rendered)
                curImgW = $curImg.offsetWidth; //including: padding + borders + v-scrollbars (if rendered)

                //Custom height for parallax container
                if (
                    reactDomEl.classList.contains('poemkit-height--10') ||
                    reactDomEl.classList.contains('poemkit-height--20') ||
                    reactDomEl.classList.contains('poemkit-height--30') ||
                    reactDomEl.classList.contains('poemkit-height--40') ||
                    reactDomEl.classList.contains('poemkit-height--50') ||
                    reactDomEl.classList.contains('poemkit-height--60') ||
                    reactDomEl.classList.contains('poemkit-height--70') ||
                    reactDomEl.classList.contains('poemkit-height--80') ||
                    reactDomEl.classList.contains('poemkit-height--90') ||
                    reactDomEl.classList.contains('poemkit-height--100')
                ) {

                    const newH = reactDomEl.offsetHeight;
                    reactDomEl.style.height = newH + 'px';
                    $curImg.style.maxHeight = newH + 'px';

                } else {
                    reactDomEl.style.height = reactDomEl.offsetHeight + 'px';
                }


                //If the ".poemkit-v-align--absolute" has more content
                if (w <= 768) {

                    if (reactDomEl.querySelector('.poemkit-v-align--absolute').offsetHeight >= curImgH) {
                        reactDomEl.querySelector('.poemkit-v-align--absolute').classList.add( 'poemkit-v-align--relative' );
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
                self.windowScrollUpdate = parallax(reactDomEl, {
                    speed: dataSpeed,
                    offsetTop: dataOffsetTop,
                    transition: dataEasing,
                    bg: { enable: true, xPos: dataXPos }
                }) as unknown as () => void;



            };

            img.src = dataImg;
        }




    }


    componentDidMount() {

        let windowWidth = window.innerWidth;
        this.parallaxInit(windowWidth);

        const windowUpdate = () => {
            // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
            if (window.innerWidth != windowWidth) {

                // Update the window width for next time
                windowWidth = window.innerWidth;

                // Do stuff here
                this.parallaxInit(windowWidth);


            }
        }

        // Add function to the window that should be resized
        this.windowResizeUpdate = __.debounce(windowUpdate, 50) as unknown as () => void;
        window.removeEventListener('resize', this.windowResizeUpdate);
        window.addEventListener('resize', this.windowResizeUpdate);


    }

    /** Remove the global list of events, especially as scroll and interval. */
    componentWillUnmount() {

        // Remove scroll events from window
        window.removeEventListener('scroll', this.windowScrollUpdate);
        window.removeEventListener('touchmove', this.windowScrollUpdate);

        // Remove resize events from window
        window.removeEventListener('resize', this.windowResizeUpdate);

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
            children
        } = this.props;

        const _parallaxElements = typeof parallaxElements === typeof undefined ? false : parallaxElements;

        return (
            <>

                {!_parallaxElements ? (
                    <div
                        ref={this.rootRef}
                        id={id || this.uniqueID}
                        className={`poemkit-parallax ${heightClass || ''}`}
                        data-fully-visible={fullyVisible || false}
                        data-offset-top={offsetTop || 0}
                        data-overlay-bg={overlay || false}
                        data-skew={skew || 0}
                        data-speed={speed || 0.1}>
                        <img className="poemkit-parallax__img" src={img} alt="" />
                        <div className="poemkit-v-align--absolute poemkit-t-c">
                            {children}
                        </div>
                    </div>

                ) : (
                    <div
                        ref={this.rootRef}
                        id={id || this.uniqueID}
                        className={`poemkit-parallax--el ${heightClass || ''}`}
                        data-transition={parallaxElementsTransition || 'all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s'}
                        data-speed={speed || 0.1}>
                        {children}
                    </div>
                )}



            </>
        )
    }
}

