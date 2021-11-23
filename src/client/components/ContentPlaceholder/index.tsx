/* 
 *************************************
 * <!-- Content Placeholder -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/ContentPlaceholder/styles/_style.scss';
import '@poemkit/components/ContentPlaceholder/styles/rtl/_style.scss';


type ContentPlaceholderProps = {
	/** Placeholder display style */
	type: string;
    /** -- */
    id?: string;
};
type ContentPlaceholderState = false;


export default class ContentPlaceholder extends Component<ContentPlaceholderProps, ContentPlaceholderState> {

    uniqueID: string;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();

    }

    render() {

        const {
            type,
            id
        } = this.props;

		//set ID
		const cid = id || this.uniqueID;

		//return HTML structure
		let res: any = null;
		let typeRes = type ? type : '';

		switch (typeRes) {
			case 'page':
				res = (
					<>
                        <div id={cid} className="poemkit-content-placeholder">
                            <ul>
                                <li>
                                    <div className="poemkit-content-placeholder__view">
                                        <ul>
                                            <li>
                                                <div className="poemkit-content-placeholder__textSlot">
                                                    <div className="poemkit-content-placeholder__line--first poemkit-content-placeholder__line"></div>
                                                    <div className="poemkit-content-placeholder__line--second poemkit-content-placeholder__line"></div>
                                                </div>
                                                <div className="poemkit-content-placeholder__thumbSlot"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul>
                                <div className="poemkit-content-placeholder__view">
                                    <ul>
                                        <li>
                                            <div className="poemkit-content-placeholder__thumbSlot"></div>
                                            <div className="poemkit-content-placeholder__textSlot">
                                                <div className="poemkit-content-placeholder__line--first poemkit-content-placeholder__line"></div>
                                                <div className="poemkit-content-placeholder__line--second poemkit-content-placeholder__line"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="poemkit-content-placeholder__thumbSlot"></div>
                                            <div className="poemkit-content-placeholder__textSlot">
                                                <div className="poemkit-content-placeholder__line--first poemkit-content-placeholder__line"></div>
                                                <div className="poemkit-content-placeholder__line--second poemkit-content-placeholder__line"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="poemkit-content-placeholder__thumbSlot"></div>
                                            <div className="poemkit-content-placeholder__textSlot">
                                                <div className="poemkit-content-placeholder__line--first poemkit-content-placeholder__line"></div>
                                                <div className="poemkit-content-placeholder__line--second poemkit-content-placeholder__line"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </ul>

                        </div>
					</>
				);
				break;
            case 'list':
                    res = (
                        <>
                            <div id={cid} className="poemkit-content-placeholder">
                                <ul>
                                    <div className="poemkit-content-placeholder__view">
                                        <ul>
                                            <li>
                                                <div className="poemkit-content-placeholder__thumbSlot"></div>
                                                <div className="poemkit-content-placeholder__textSlot">
                                                    <div className="poemkit-content-placeholder__line--first poemkit-content-placeholder__line"></div>
                                                    <div className="poemkit-content-placeholder__line--second poemkit-content-placeholder__line"></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="poemkit-content-placeholder__thumbSlot"></div>
                                                <div className="poemkit-content-placeholder__textSlot">
                                                    <div className="poemkit-content-placeholder__line--first poemkit-content-placeholder__line"></div>
                                                    <div className="poemkit-content-placeholder__line--second poemkit-content-placeholder__line"></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="poemkit-content-placeholder__thumbSlot"></div>
                                                <div className="poemkit-content-placeholder__textSlot">
                                                    <div className="poemkit-content-placeholder__line--first poemkit-content-placeholder__line"></div>
                                                    <div className="poemkit-content-placeholder__line--second poemkit-content-placeholder__line"></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
    
                            </div>
                        </>
                    );
                    break;
            case 'content':
                    res = (
                        <>
                            <div id={cid} className="poemkit-content-placeholder">
                                <ul>
                                    <li>
                                        <div className="poemkit-content-placeholder__view">
                                            <ul>
                                                <li>
                                                    <div className="poemkit-content-placeholder__textSlot">
                                                        <div className="poemkit-content-placeholder__line--first poemkit-content-placeholder__line"></div>
                                                        <div className="poemkit-content-placeholder__line--second poemkit-content-placeholder__line"></div>
                                                    </div>
                                                    <div className="poemkit-content-placeholder__thumbSlot"></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </>
                    );
                    break; 
			case 'image':
				res = (
					<>
                        <div id={cid} className="poemkit-content-placeholder">
                            <div className="poemkit-content-placeholder__view uix-content-placeholder__view--aspectRatio">
                                <div className="poemkit-content-placeholder__thumbSlot"></div>
                            </div>
                        </div>
					</>
				);
				break;


		}


        return (
            <>
               {res}
            </>
        )
    }
}

