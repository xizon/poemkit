/* 
 *************************************
 * <!-- Toaster -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@/components/_plugins/_lib-bootstrap';
import '@/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@/components/_utils/styles/_all.scss';
import '@/components/_utils/styles/rtl/_all.scss';
import { __ } from '@/components/_utils/_all';

/*-- Apply this component styles --*/
import '@/components/Toaster/styles/_style.scss';

type ToasterProps = {
	/** The direction of the toaster. Defaults to `center`. Possible values are: `left`, `center`, `right` */
	direction?: string;
    /** Set an automatic closing time, multiple items will be accumulated in order. 
     * Amount of time measured in milliseconds. If false or without this attribute, Auto-Close will be disabled.
     */
    autoCloseTime?: boolean | number;
    /** Specify data of toasts as a JSON string format. 
     * Such as: `[{"title":"Title 1","message":"description..."},{"title":"Title 2","message":"description..."}]` */
    data?: any[any];
    /** -- */
    id?: string;
};
type ToasterState = {
    toasts?: any[any];
};


const Toast = (props) => (
    <div
        className={`poemkit-toast ${props.removed ? 'is-animating' : ''}`}
        data-index={props.index}
        style={{
            transform: `perspective(100px) translateZ(-${2 * props.index}px) translateY(${35 * props.index}px)`,
            zIndex: props.depth
        }}>
        <div className="poemkit-toast__content">
            {props.title === '' || props.title === false ? '' : <><h4 className="poemkit-toast__title">{props.title}</h4></>}
            <p className="poemkit-toast__message">{props.message}</p>
        </div>
        <svg onClick={() => { props.closeEv(props.index) }} className="poemkit-toast__closebtn" width="12px" height="12px" viewBox="0 0 16 16"><path d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z" fillRule="evenodd"></path></svg>
    </div>
);

export default class Toaster extends Component<ToasterProps, ToasterState> {

    uniqueID: string;
    autoHideTimeout: any;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();
        this.autoHideTimeout = false;
 
        this.state = {
            toasts: this.props.data ? this.props.data : []
        }

        this.clickToCloseItem = this.clickToCloseItem.bind(this);


    }


    clickToCloseItem(index) {
        const items = this.state.toasts;
        if (items[index] !== undefined) {
            items[index].removed = true;
            //console.log('clicked ', index, 'curr state:', items);
            this.setState({ toasts: items });

            //Let the removed animation show
            setTimeout(() => {
                const newItems = this.state.toasts;
                newItems.splice(index, 1); //delete one item
                //console.log('new after interval:', newItems);
                this.setState({ toasts: newItems });
            }, 300);
        }


    }


    autoCloseItem(allItems) {
        let items = this.state.toasts;
        items = items.reverse();
        if (allItems[items.length - 1] !== undefined) {
            allItems[items.length - 1].removed = true;
            this.setState({ toasts: items.reverse() });

            //Let the removed animation show
            setTimeout(() => {
                let newItems = this.state.toasts;
                newItems = newItems.reverse();
                newItems.splice(newItems.length - 1, 1); //delete one item
                this.setState({ toasts: newItems.reverse() });
            }, 300);

        }

    }

    componentDidMount() {

        const { autoCloseTime } = this.props;
        
        //Auto hide
        const _autoCloseTime: any = typeof(autoCloseTime) === 'undefined' || autoCloseTime === false ? false : autoCloseTime;
        if ( _autoCloseTime !== false ) {
            const items = this.state.toasts;
            items.forEach((item, index) => {

                this.autoHideTimeout = setTimeout(() => {
                    this.autoCloseItem(items);
                }, _autoCloseTime * (index + 1));

            }); 
        }


    }
    F
    /** Remove the global list of events, especially as scroll and interval. */
    componentWillUnmount() {

         // Cancels a timeout previously established by calling setTimeout().
         clearTimeout(this.autoHideTimeout);

    }


    render() {

        const {
            direction,
            id
        } = this.props;

        const { toasts } = this.state;
        let depth = toasts.length + 1;


        return (
            <>
                <div id={id || this.uniqueID}
                    className={`poemkit-toaster__container poemkit-toaster__container--${direction ? direction : 'center'}`}>
                    <div className="poemkit-toaster">
                        {toasts.map((item, i) => {
                            return <Toast
                                depth={depth - i}
                                key={i}
                                index={i}
                                title={item.title}
                                message={item.message}
                                removed={item.removed}
                                closeEv={this.clickToCloseItem}
                            />

                        })}
                    </div>

                </div>

            </>
        )
    }
}

