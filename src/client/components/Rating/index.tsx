/* 
 *************************************
 * <!-- Rating -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/Rating/styles/_style.scss';

type RatedFnType = (arg1: any) => void;

type RatingProps = {
    /** Set a name for the form field for this component  */
    name?: string;
    /** Active color for shape, defaults to `#ff851b` */
    activeColor?: string;
    /** Inactive color for shape, defaults to `#333` */
    inactiveColor?: string;
    /** When true, do not allow repeated selection */
    repeated?: boolean;
    /** Specify a rating number, an integer between 1-5 */
    stars?: number;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the page number as an argument.
     */
    refreshCallback?: RatedFnType | null;
    /** -- */
    id?: string;
};
type RatingState = {
    value?: number;
    dynamicValue?: number;
    updated?: boolean;
};


export default class Rating extends Component<RatingProps, RatingState> {

    uniqueID: string;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();


        const stars = this.props.stars ? this.props.stars : 0;

        this.state = {
            value: stars,
            dynamicValue: stars,
            updated: false
        };

    }

    handleClick(newValue) {

        if ( !this.state.updated ) {
            this.setState({
                value: newValue,
                dynamicValue: newValue,

                //Only allow one selection
                updated: this.props.repeated ? false : true
            });

            if ( typeof(this.props.refreshCallback) === 'function' ) {
                this.props.refreshCallback(newValue);
            }   
        }

    }

    handleMouseEnter(newValue) {
        if ( !this.state.updated ) this.setState({ dynamicValue: newValue });
    }

    handleMouseLeave(newValue) {
        if ( !this.state.updated ) this.setState({ dynamicValue: this.state.value });
    }

    render() {

        const {
            name,
            activeColor,
            inactiveColor,
            id
        } = this.props;

        const cid = id || this.uniqueID;
        const starSpans: any[] = [];
        const currentValue: any = this.state.dynamicValue;
        
        for (let v = 1; v <= 5; v++) {
            if (v <= currentValue) {
                starSpans.push(
                    <span
                        id={cid}
                        key={v}
                        className="poemkit-rating-star"
                        onMouseEnter={this.handleMouseEnter.bind(this, v)}
                        onMouseLeave={this.handleMouseLeave.bind(this, v)}
                        onClick={this.handleClick.bind(this, v)}
                    >

                        <svg className="is-active" x="0px" y="0px" viewBox="0 0 940.688 940.688">
                            <g>
                                <path fill={activeColor ? activeColor : '#ff851b'} d="M885.344,319.071l-258-3.8l-102.7-264.399c-19.8-48.801-88.899-48.801-108.6,0l-102.7,264.399l-258,3.8c-53.4,3.101-75.1,70.2-33.7,103.9l209.2,181.4l-71.3,247.7c-14,50.899,41.1,92.899,86.5,65.899l224.3-122.7l224.3,122.601c45.4,27,100.5-15,86.5-65.9l-71.3-247.7l209.2-181.399C960.443,389.172,938.744,322.071,885.344,319.071z"/>
                            </g>
                        </svg>

                    </span>
                );
            } else {
                starSpans.push(

                    <span
                        id={cid}
                        key={v}
                        className="poemkit-rating-star"
                        onMouseEnter={this.handleMouseEnter.bind(this, v)}
                        onMouseLeave={this.handleMouseLeave.bind(this, v)}
                        onClick={this.handleClick.bind(this, v)}
                    >

                        <svg x="0px" y="0px" viewBox="0 0 248.294 248.294">
                            <g>
                                <path fill={inactiveColor ? inactiveColor : '#333'} d="M55.688,242.322c2.882,0,6.069-0.719,9.439-2.24l59.032-32.156l59.032,32.156c3.369,1.521,6.557,2.24,9.437,2.24c8.933,0,14.963-6.917,14.543-18.36l-7.71-65.312l44.062-45.268c9.166-12.062,4.732-25.004-9.908-28.908l-65.53-10.529l-28.932-58.22c-4.242-6.49-9.959-9.754-15.732-9.754c-5.512,0-11.063,2.973-15.422,8.952L74.461,73.941l-59.893,10.06c-14.566,4.163-18.943,17.314-9.777,29.377l44.06,45.264l-7.71,65.311C40.721,235.405,46.753,242.322,55.688,242.322zM20.734,102.347l56.896-9.558l8.961-1.505l4.492-7.906l32.191-56.649l27.689,55.713l4.378,8.809l9.712,1.557l62.101,9.98l-41.388,42.515l-6.353,6.534l1.064,9.045l7.057,59.795l-54.231-29.548l-9.145-4.979l-9.147,4.979l-54.227,29.548l7.052-59.795l1.066-9.045l-6.352-6.534L20.734,102.347z"/>
                            </g>
                        </svg>

                    </span>
                );
            }
        }


        return (
            <>
                {starSpans}
                <input name={name || ''} type="hidden" defaultValue={this.state.value} />

            </>
        )
    }
}

