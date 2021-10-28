import React, { Component } from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';


/* Recursively nested components to traverse nodes
-------------------------------------------------*/		
type MenuListProps = {
	menuListData: any[any];
};
type MenuListState = false;

export default class MenuList extends Component<MenuListProps, MenuListState>  {

	constructor(props) {
		super(props);
        this.handleCollapseMenuList = this.handleCollapseMenuList.bind(this);
    }

    handleCollapseMenuList(e) {

        const el = __(e.target);
        const $sub = el.next('ul');

        if ($sub.length > 0) {

            e.preventDefault();
       
            if ( el.attr( 'aria-expanded' ) === 'false' || el.attr( 'aria-expanded' ) === null ) {
                //Hide other all sibling <ul> of the selected element
                const $siblingsItems = el.parent().siblings();
				if ( $siblingsItems.length > 0 ) {
					$siblingsItems.each( function(this: any) {

						const _link = __( this ).find( '> a' );

						_link.removeClass('is-active').attr( 'aria-expanded', false );
						TweenMax.to( _link.next('ul'), 0.5, { height: 0 });
						
		
					});
				}

                el.addClass( 'is-active' ).attr( 'aria-expanded', true );
                el.parent( 'li' ).addClass( 'is-active' );

                //to open
                // - temporarilty set height:auto
                // - tween from height:0
                TweenMax.set($sub, { height: 'auto' });
                TweenMax.from($sub, 0.5, { height: 0 });

            } else {

                el.removeClass( 'is-active' ).attr( 'aria-expanded', false );
                el.parent( 'li' ).removeClass( 'is-active' );

                //to close
                TweenMax.to($sub, 0.5, { height: 0 });

            }

        }

    }


	render() {
		if ( this.props.menuListData ) {
			
			return (
			  <>
                <ul className="uix-vertical-menu">
                    
                    {this.props.menuListData.map((item, i) => {
                        return (
                        <li key={i}>
                            <a href={item.link || '#'} aria-expanded="false" onClick={this.handleCollapseMenuList}>
                                {item.title}
                                {item.children ? <span className="uix-vertical-menu__arrow"></span> : ''}
                            </a>
                            {item.children && <MenuList menuListData={item.children}  />}
                        </li>
                        );
                    })}
                </ul>

			  </>
			)	
		} else {
			return (
				<></>
			)
		}
	}
}

