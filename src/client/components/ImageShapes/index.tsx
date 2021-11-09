/* 
 *************************************
 * <!-- Image Shapes -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@poemkit/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/ImageShapes/styles/_style.scss';


type ImageShapesProps = {
    /** Set a element path to create lines, curves, arcs, and more. */
    path?: string;
    /** Specifies the path to the image */
    src?: string;
    /** Set a specified width for the container that it is not the size of the image. Measured in pixels */
    containerWidth?: number;
    /** Set a specified height for the container that it is not the size of the image. Measured in pixels */
    containerHeight?: number;
    /** Set a desired width value for the image */
    imgExpectedWidth?: number;
    /** -- */
    id?: string;
};
type ImageShapesState = {
    loaded?: boolean;
    imgWidth?: number;
    bothWidthRatio?: number;
    newSvgHeight?: number;
    newImgHeight?: number;
};


export default class ImageShapes extends Component < ImageShapesProps, ImageShapesState > {

    uniqueID: string;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();

        this.state = {
            loaded: false,
            imgWidth: 0,

            //Add a custom shape SVG to the page
            bothWidthRatio: 0,
            newSvgHeight: 0,
            newImgHeight: 0
        };

    }

	
     componentDidMount() {

        const self = this;    
        const svgW           = this.props.containerWidth,
              svgH           = this.props.containerHeight,
              svgRatio       = (svgW as number) / (svgH as number);

        let imgW = this.props.imgExpectedWidth;

        if ( (imgW as number) > window.innerWidth ) {
            imgW = window.innerWidth;
        }

        //Check if the picture is loaded on the page
        const img = new Image();
        img.src = this.props.src as string;
        img.onload = function( this: any ) {
            const ow     = this.width,
                  oh     = this.height,
                  ratio = ow/oh;

           
            self.setState({
                loaded: true,
                imgWidth: imgW,

                 //Add a custom shape SVG to the page
                bothWidthRatio: (imgW as number) / (svgW as number),
                newSvgHeight: (imgW as number) / svgRatio,
                newImgHeight: (svgW as number) / ratio
            });

        };
        

    }

 
     render() {

        const {
            path,
            src,
            containerWidth,
            containerHeight,
            id
        } = this.props;

        const cid = id || this.uniqueID;

 
        const {
            loaded,
            imgWidth,
            bothWidthRatio,
            newSvgHeight,
            newImgHeight,
        } = this.state;


        return (
            <>

            <span className={loaded ? 'poemkit-shape-img is-active' : 'poemkit-shape-img'}>
                <svg 
                fillRule="evenodd" 
                clipRule="evenodd" 
                width={`${imgWidth}px`} 
                height={`${newSvgHeight}px`} 
                viewBox={`0 0 ${imgWidth} ${newSvgHeight}`}>
                    <pattern id={`${cid}-pat`} patternUnits="userSpaceOnUse" width={`${containerWidth}`} height={`${containerHeight}`}>
                        <image xlinkHref={`${src}`} width={`${containerWidth}px`} height={`${newImgHeight}px`} x="0" y="0" />
                    </pattern>    
                    <path fill={`url(#${cid}-pat)`} transform={`scale(${bothWidthRatio})`} d={`${path}`}/>
                </svg>	
            </span>

            </>
        )
    }
}

