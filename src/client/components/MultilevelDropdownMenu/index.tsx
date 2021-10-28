/* 
 *************************************
 * <!-- Multiple-Level Dropdown Menu -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap';
import '@uixkit.react/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utils/styles/_all.scss';
import '@uixkit.react/components/_utils/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply this component styles --*/
import '@uixkit.react/components/MultilevelDropdownMenu/styles/_style.scss';


//
import MenuList from '@uixkit.react/components/MultilevelDropdownMenu/MenuList';


type MultilevelDropdownMenuProps = {
    /** Specify data of Cascading DropDown List as a JSON string format. 
     * Such as: `[{"title":"Top level 1","link":"#","children":[{"title":"Sub level 1","link":"#","children":[{"title":"Sub Sub Level 1","link":"#"}]}]},{"title":"Top level 2","link":"https://example.com"}]` */
    data?: any[any];
    /** -- */
    id?: string;
};
type MultilevelDropdownMenuState = false;


export default class MultilevelDropdownMenu extends Component<MultilevelDropdownMenuProps, MultilevelDropdownMenuState> {

    uniqueID: string;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();
    }

    render() {

        const {
            data,
            id
        } = this.props;


        return (
            <>

                <div id={id || this.uniqueID}>
                    <MenuList menuListData={data} />
                </div>

            </>
        )
    }
}

