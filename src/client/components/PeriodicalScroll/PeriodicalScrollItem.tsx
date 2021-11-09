import React, { Component } from 'react';


type PeriodicalScrollItemProps = {
	/** Handling events when the mouse leaves the element */
	elAnimLeaveEv?: React.MouseEventHandler<HTMLElement>;
};
type PeriodicalScrollItemState = false;


export default class PeriodicalScrollItem extends Component<PeriodicalScrollItemProps, PeriodicalScrollItemState>  {

    constructor(props) {
        super(props);
    }
    render() {

        const {
            elAnimLeaveEv,
            children
        } = this.props;

        return (

            <li onMouseLeave={elAnimLeaveEv}>
                {children}
            </li>
    
        );
    }
}

