import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@/components/_plugins/_lib-bootstrap';
import '@/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@/components/_utils/styles/_all.scss';
import '@/components/_utils/styles/rtl/_all.scss';
import { __ } from '@/components/_utils/_all';

/*-- Apply this component styles --*/
import '@/components/Grid/styles/_style.scss';
import '@/components/Grid/styles/rtl/_style.scss';


type GridProps = {
    /** Permanent non-breaking */
    noBreak?: boolean | undefined;
    /** Remove column spacing */
    noGutters?: boolean | undefined;
    /** Per-column will be the same width automatically */
    equalWidth?: boolean | undefined;
    /** Multi-line layout correction */
    loop?: boolean | undefined;
    /** -- */
    id?: string;
	children: React.ReactNode;
};
type GridState = false;


export default class Grid extends Component<GridProps, GridState> {

    uniqueID: string;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();
    }

    render() {

        const {
            noBreak,
            noGutters,
            equalWidth,
            loop,
            id,
            children
        } = this.props;


        return (
            <>


                <div className="poemkit-core-grid" id={id || this.uniqueID}>
                    <div className={'poemkit-core-grid__row' + (noBreak ? ' poemkit-core-grid__row--no-break' : '') + (loop ? ' poemkit-core-grid__row--loop' : '') + (equalWidth ? ' poemkit-core-grid__row--auto-width' : '') + (noGutters ? ' poemkit-core-grid__row--no-gutters' : '')}>
                        {children}
                    </div>
                </div>

            </>
        )
    }
}

