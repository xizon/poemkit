import React, { Component } from 'react';


type HybridContentSliderItemProps = {
	/** -- */
	children: React.ReactNode; 
};
type HybridContentSliderItemState = false;


export default class HybridContentSliderItem extends Component<HybridContentSliderItemProps, HybridContentSliderItemState>  {

    constructor(props) {
        super(props);
    }
    render() {

        const {
            children
        } = this.props;
        return (

            <div className="poemkit-hybrid-content-slider__item">
                {children}
            </div>
    
        );
    }
}

