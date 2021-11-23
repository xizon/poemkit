import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/ListBulleted/styles/_style.scss';
import '@poemkit/components/ListBulleted/styles/rtl/_style.scss';



// 
import ListBulletedItem from '@poemkit/components/ListBulleted/ListBulletedItem';


type ListBulletedProps = {
	/** Sets the marker (such as a disc, character, or custom counter style) of a list item element. 
     *  Possible values are: `icon`, `dot`, `numbered`, `numbered-large`, `numbered-large-bg`, `numbered-step`
    */
	type: string;
    /** Add a leading zero is any 0 digit that comes before the first nonzero digit in a 
     * number string in positional notation. Only valid for lists with numbered type. */
    leadingZero?: boolean;
    /** -- */
    id?: string;
};
type ListBulletedState = false;


export default class ListBulleted extends Component<ListBulletedProps, ListBulletedState> {

    uniqueID: string;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();

    }


    render() {

        const {
            type,
            leadingZero,
            id,
            children
        } = this.props;

        const leadingZeroClassName = leadingZero ? ' poemkit-list--numbered-leading-zero' : '';

        let listClassName = '';

        switch (type) {
            case 'icon':
                listClassName = 'poemkit-list poemkit-list--icon';
                break;
            case 'dot':
                listClassName = 'poemkit-list poemkit-list--dot';
                break;
            case 'numbered':
                listClassName = 'poemkit-list poemkit-list--numbered' + leadingZeroClassName;
                break;
            case 'numbered-large':
                listClassName = 'poemkit-list poemkit-list--numbered-large' + leadingZeroClassName;
                break;
            case 'numbered-large-bg':
                listClassName = 'poemkit-list poemkit-list--numbered-large poemkit-list--numbered-bg' + leadingZeroClassName;
                break;
            case 'numbered-step':
                listClassName = 'poemkit-list poemkit-list--numbered-step';
                break;

        }//end switch


        const items = ( children != null ) ? (children as any[]).map((item, i) => {
                            const childProps = { ...item.props };
                            return <ListBulletedItem
                                        key={"item" + i}
                                        type={type}
                                        {...childProps}
                                        />;						

                        }) : '';
          

        return (
            <>

                {type === 'icon' || type === 'dot' || type === 'numbered-step' ? <>
                    <ul
                        id={id || this.uniqueID}
                        className={listClassName}>
                            {items}
                    </ul>
                </> : ''}

                {type === 'numbered' ? <>
                    <ol
                        id={id || this.uniqueID}
                        className={listClassName}>
                            {items}
                    </ol>
                </> : ''}

                {type === 'numbered-large' || type === 'numbered-large-bg' ? <>
                    <div 
                        id={id || this.uniqueID}
                        className={listClassName}>
                        <ol>
                            {items}
                        </ol>
                        
                    </div>
                </> : ''}


            </>
        )
    }
}

