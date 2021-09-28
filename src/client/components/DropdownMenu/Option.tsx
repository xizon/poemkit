import React, { Component } from 'react';


interface OptionConfig {
	value?: string | undefined;
	label?: string | undefined;
}

type OptionProps = {
    option?: OptionConfig;
    onSelect?: (option: any) => void | undefined;
};
type OptionState = false;


export default class Option extends Component<OptionProps, OptionState>  {

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e) {
        e.preventDefault();

        const fn: any = this.props.onSelect;
        fn(this.props.option);
    }

    render() {

        return (
            <li><a data-value={this.props.option?.value} href="#" onClick={this.handleSelect}>{this.props.option?.label}</a></li>
        );
    }
}

