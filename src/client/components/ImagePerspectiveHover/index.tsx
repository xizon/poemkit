/* 
 *************************************
 * <!-- Image Perspective Hover -->
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
import '@/components/ImagePerspectiveHover/styles/_style.scss';

//
import Image from '@/components/ImagePerspectiveHover/Image';


type ImagePerspectiveHoverProps = {
    /** Specify data of images as a JSON string format. 
     * Such as: `[{"title":"Image Title 1","url":"xxx.jpg","width":200},{"title":"Image Title 2","url":"xxx.jpg","width":300}]` */
     data?: any[any];
     /** Base offset value and power of target number, the format is an array, such as `[20,2]` */
     offset?: number[];
     /** If enabled, it will return to the default position when the mouse is moved away from the image */
     reset?: boolean;
    /** -- */
    id?: string;
};
type ImagePerspectiveHoverState = false;



export default class ImagePerspectiveHover extends Component<ImagePerspectiveHoverProps, ImagePerspectiveHoverState> {

    private parallaxZoneRef = React.createRef<HTMLDivElement>();

    uniqueID: string;
    itemsTotal: number;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();
        this.itemsTotal = this.props.data ? this.props.data.length : 0;

		this.handleMove = this.handleMove.bind(this);
        this.handleMoveEnd = this.handleMoveEnd.bind(this);
        

    }


    handleMove(e) {

        const { offset } = this.props;
        const el: any = this.parallaxZoneRef.current;
        const offsetRes = typeof(offset) === 'undefined' ? false : offset;
        const w = el.clientWidth;	//including: padding
        const h = el.clientHeight; //including: padding
        let base = 0; //Base offset value.
        let multiple = 0; //The power of target number.

        if ( offsetRes ) {
            if ( this.itemsTotal === 1 ) {
                base = Math.pow( offsetRes[0], offsetRes[1] );
            } else {
                base = offsetRes[0];
                multiple =  offsetRes[1];
            }
        }


        let mouseX, 
            mouseY,
            offsetX,
            offsetY;
        
        const touches = e.touches;

        //get the absolute position of a mouse
        //!!! Important: If you do not use window.pageXOffset or window.pageYOffset, 
        //              the mouse coordinates are relative to the parent element
        if ( touches && touches.length ) {	
            mouseX = touches[0].clientX + window.pageXOffset;
            mouseY = touches[0].clientY + window.pageYOffset;
        } else {
            mouseX = e.clientX + window.pageXOffset;
            mouseY = e.clientY + window.pageYOffset;
        } 

        //Find mouse position relative to element
        //!!! Important: Using `el.offsetTop` or `el.offsetLeft` is relative, the value may be 0
        offsetX = mouseX - __(el).offset().left;
        offsetY = mouseY - __(el).offset().top;
        
        //console.log('mouseX: ', mouseX, ' mouseY: ', mouseY, 'el.offsetLeft: ', __(el).offset().left, ' el.offsetTop: ', __(el).offset().top );



        if ( this.itemsTotal === 1 ) {
            /*
            ////////////////////////////////////////////////////////////
            ////////////////////////  Only One   ///////////////////////
            ////////////////////////////////////////////////////////////
            */
            // function to run matrix3D effect on block
            const targetX = this.mousePosition( offsetX, w, base ),
                  targetY = this.mousePosition( offsetY, h, base );

            el.style.transform = `rotateX(${targetY}deg) rotateY(${targetX}deg)`;


        } else {
            /*
            ////////////////////////////////////////////////////////////
            ////////////////////  Multiple Images   ////////////////////
            ////////////////////////////////////////////////////////////
            */
            // function to run matrix3D effect on block
            const targetX = offsetX/w,
                  targetY = offsetY/h;

            const $items = el.children;
            Array.prototype.forEach.call($items, function (node, index) {
                const x         = targetX * ( base*Math.pow( multiple, index ) ),
                      y         = targetY * ( base*Math.pow( multiple, index ) ),
                      z         = 0,
                      deg       = targetY * ( 180 / Math.PI ),
                      rotateDeg = deg - 35;


                node.style.transform = `translate(${x}px ,${y}px) rotate3d( -1, 1, 0, ${rotateDeg}deg )`;
            });


        }



    }

    handleMoveEnd(e) {
        const el: any = this.parallaxZoneRef.current;
        if ( this.props.reset ) {


            if ( this.itemsTotal === 1 ) {
                /*
                ////////////////////////////////////////////////////////////
                ////////////////////////  Only One   ///////////////////////
                ////////////////////////////////////////////////////////////
                */
                el.style.transform = `rotateX(0deg) rotateY(0deg)`;
    
            } else {
                /*
                ////////////////////////////////////////////////////////////
                ////////////////////  Multiple Images   ////////////////////
                ////////////////////////////////////////////////////////////
                */
                const $items = el.children;
                Array.prototype.forEach.call($items, function (node, index) {
                    node.style.transform = `translate(0,0) rotate3d( -1, 1, 0, 0deg )`;
                });
    
            }



        }
            
    }

    // make some calculations for mouse position
    mousePosition( mousePos, dimension, base ) {
        return ( Math.floor( mousePos / dimension * (base*2) ) - base );
    }


    render() {

        const {
            data,
            id
        } = this.props;

        return (
            <>
							

                <div
                    id={id || this.uniqueID}
                    className="poemkit-perspective-hover">

                        <div
                            ref={this.parallaxZoneRef}
                            onMouseMove={this.handleMove} 
                            onTouchMove={this.handleMove}
                            onMouseLeave={this.handleMoveEnd} 
                            onTouchEnd={this.handleMoveEnd}>
                            {data ? data.map((item, index) => {
                                return <Image key={index} url={item.url} title={item.title} width={item.width} />
                            }) : '' }
                        </div>

                    
                </div>


            </>
        )
    }
}

