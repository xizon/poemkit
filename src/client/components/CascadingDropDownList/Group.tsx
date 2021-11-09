import React, { Component } from 'react';

type GroupFnType = (arg1: any, arg2: number) => void;

type GroupProps = {
    data?: any[any];
    selectEv?: React.MouseEventHandler<HTMLElement> | GroupFnType | null;
};
type GroupState = false;


export default class Group extends Component<GroupProps, GroupState> {
    render() {
        const {
            data,
            selectEv
        } = this.props;

        return (
            <>
                {data.map((item, index) => {
                    return <div className={item.current ? 'poemkit-cascading-dropdown-list__opt is-active' : 'poemkit-cascading-dropdown-list__opt'} key={index} onClick={(e) => selectEv!(item, index)}>{item.name}</div>
                })}
            </>
        )
    }
}


