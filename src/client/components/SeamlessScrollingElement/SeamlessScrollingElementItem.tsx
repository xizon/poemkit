import React, { Component } from 'react';


type SeamlessScrollingElementItemProps = {
	/** -- */
	children: React.ReactNode;
};
type SeamlessScrollingElementItemState = false;


export default class SeamlessScrollingElementItem extends Component<SeamlessScrollingElementItemProps, SeamlessScrollingElementItemState>  {

    constructor(props) {
        super(props);
    }
    render() {

        const {
            children
        } = this.props;
        return (

            <li>
                {children}
            </li>
    
        );
    }
}

