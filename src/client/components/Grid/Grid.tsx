import React, { Component } from 'react';
 
 /*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
 import '@uixkit.react/components/_plugins/_lib-bootstrap';
 import '@uixkit.react/components/_plugins/_lib-icons';
 import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';
 
 /*-- Apply global scripts and styles --*/
 import '@uixkit.react/components/_utils/styles/_all.scss';
 import '@uixkit.react/components/_utils/styles/rtl/_all.scss';
 import { __ } from '@uixkit.react/components/_utils/_all';

 
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
	children?: any;
};
type GridState = false;


 export default class Grid extends Component<GridProps, GridState> {
     constructor(props) {
         super(props);
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
             

                 <div className="uix-core-grid" id={id || 'app-grid-' + __.GUID.create()}>
                     <div className={'uix-core-grid__row' + (noBreak ? ' uix-core-grid__row--no-break' : '') + (loop ? ' uix-core-grid__row--loop' : '') + (equalWidth ? ' uix-core-grid__row--auto-width' : '') + (noGutters ? ' uix-core-grid__row--no-gutters' : '')}>
                         {children}
                     </div>
                 </div>

             </>
         )
     }
 }
 
