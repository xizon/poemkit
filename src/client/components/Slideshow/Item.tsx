import React, { Component } from 'react';


type ItemProps = {
    /** Specify URL each item. Support image and video.  */
    url?: string | undefined;
    /** -- */
    children?: any;
};
type ItemState = false;


export default class Item extends Component<ItemProps, ItemState>  {

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

            <div className="uix-slideshow__item">

                { !isVideo ? (
                    <img src={url} alt='' />
                ) : (
                    <video src={url} autoPlay muted></video>
                )}

                <div className="uix-slideshow__txt">
                    <div className="uix-core-grid__col-7">
                        {children}
                    </div>
                </div>
            </div>
    
        );
    }
}

