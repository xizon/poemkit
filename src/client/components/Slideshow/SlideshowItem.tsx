import React, { Component } from 'react';


type SlideshowItemProps = {
    /** Specify URL each item. Support image and video.  */
    url?: string | undefined;
};
type SlideshowItemState = false;


export default class SlideshowItem extends Component<SlideshowItemProps, SlideshowItemState>  {

    constructor(props) {
        super(props);
    }
    render() {

        const {
            url,
            children
        } = this.props;

        const videoExtReg = /^.*\.(avi|AVI|wmv|WMV|flv|FLV|mpg|MPG|mp4|MP4)$/gi;

        //The RegExp object keeps track of the lastIndex where a match occurred, so on 
        //subsequent matches it will start from the last used index, instead of 0.
        videoExtReg.lastIndex = 0;

        const isVideo = videoExtReg.test( url as string ) ? true : false;


        return (

            <div className="poemkit-slideshow__item">

                { !isVideo ? (
                    <img src={url} alt='' />
                ) : (
                    <video src={url} autoPlay muted></video>
                )}

                <div className="poemkit-slideshow__txt">
                    <div>
                        {children}
                    </div>
                </div>
            </div>
    
        );
    }
}

