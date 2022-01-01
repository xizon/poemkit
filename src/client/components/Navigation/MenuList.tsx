import React, { Component } from 'react';
import { __ } from '@/components/_utils/_all';

/*-- Apply Third-party animation plugins --*/
import TweenMax from '@/components/_plugins/_lib-gsap';

/* Recursively nested components to traverse nodes
-------------------------------------------------*/		
type MenuListProps = {
    /** Menu JSON data passed over */
	menuListData: any[any];
    /** Determine whether it is a non-first-level navigation list */
    submenu?: boolean;
    /** Determine whether it belongs to mobile navigation */
    mobile?: boolean;
    /** The navigation direction. Possible values are: `vertical` and `horizontal` */
    dir?: string;
};
type MenuListState = false;

export default class MenuList extends Component<MenuListProps, MenuListState>  {

    animMarginTop: number;

	constructor(props) {
		super(props);

        // for desktop
        this.animMarginTop = 15;
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        // for mobile
        this.handleCollapseMobileMenuList = this.handleCollapseMobileMenuList.bind(this);

    }

    handleMouseEnter(e) {
        /*
        ////////////////////////////////////////////////////////////
        //////////////  Not Mobile (item event)   //////////////////
        ////////////////////////////////////////////////////////////
        */
        const menuContainer = e.currentTarget.closest( '.poemkit-menu__container' );
        if ( menuContainer !== null && menuContainer.classList.contains( 'is-mobile' ) ) return;


        //
        const self = this;
        TweenMax.set( [e.currentTarget.querySelector( 'ul.sub-menu' ), e.currentTarget.querySelector( '.poemkit-menu__arrow-mega' )], {
            css: {
                opacity    : 0,
                display    : 'block',
                marginTop  : self.animMarginTop + 'px'
            },
            onComplete : function() {
    
                TweenMax.to( this.target, 0.3, {
                    css: {
                        opacity    : 1,
                        marginTop  : 0
                    },
                    ease   : 'Power2.easeOut'
                });		
    
            }
        });				
			 
    }

    handleMouseLeave(e) {

        /*
        ////////////////////////////////////////////////////////////
        /////////////////  Not Mobile  (item event)  ///////////////
        ////////////////////////////////////////////////////////////
        */
        const menuContainer = e.currentTarget.closest( '.poemkit-menu__container' );
        if ( menuContainer !== null && menuContainer.classList.contains( 'is-mobile' ) ) return;


        //
        const self = this;
        TweenMax.to( [e.currentTarget.querySelector( 'ul.sub-menu' ), e.currentTarget.querySelector( '.poemkit-menu__arrow-mega' )], 0.3, {
            css: {
                opacity    : 0,
                marginTop  : self.animMarginTop + 'px'
            },
            onComplete : function() {
    
                TweenMax.set( this.target, {
                    css: {
                        display    : 'none',
                    }
                });		
    
    
    
            }
        });				
    

    }
 

    handleCollapseMobileMenuList(e) {
        /*
        ////////////////////////////////////////////////////////////
        ////////////////  Mobile Menu  (item event)  ///////////////
        ////////////////////////////////////////////////////////////
        */
        if (this.props.mobile) {
         
            const el = __(e.target);
            const $sub = el.next('ul');

            if ($sub.len() > 0) {

                e.preventDefault();

                if (el.attr('aria-expanded') === 'false' || el.attr('aria-expanded') === null) {
                    //Hide other all sibling <ul> of the selected element
                    const $siblingsItems = el.parent().siblings();
                    if ($siblingsItems.len() > 0) {
                        $siblingsItems.each(function (this: any) {

                            const _link = __(this).find('> a');

                            _link.removeClass('is-active').attr('aria-expanded', false);
                            TweenMax.to(_link.next('ul').get(-1), 0.5, { height: 0 });


                        });
                    }

                    el.addClass('is-active').attr('aria-expanded', true);
                    el.parent('li').addClass('is-active');

                    //to open
                    // - temporarilty set height:auto
                    // - tween from height:0
                    TweenMax.set($sub.get(-1), { height: 'auto' });
                    TweenMax.from($sub.get(-1), 0.5, { height: 0 });

                } else {

                    el.removeClass('is-active').attr('aria-expanded', false);
                    el.parent('li').removeClass('is-active');

                    //to close
                    TweenMax.to($sub.get(-1), 0.5, { height: 0 });

                }

            }
        }


    }


    componentDidMount() {

        /*
        ////////////////////////////////////////////////////////////
        ////////////  Mega Menu  (initial adjustment)  /////////////
        ////////////////////////////////////////////////////////////
        */
        const w = window.innerWidth; 
        const megaMenuRootLi = document.querySelectorAll( '.poemkit-menu__container:not(.is-mobile) li.multi-column' );
    
        //This value is equal to the $nav-mega-li-w variable in the SCSS
        const perDefaultW = 270; //Default width of each column
    
        //The maximum width of the mega menu wrapper
        let maxWidth = 1140;
    
        //New XL container for Bootstrap 4.x
        if (w > 1430) maxWidth = 1278;
    
        //Full width container
        maxWidth = w - 15;
    
    
        if (w > 768) {
    
            Array.prototype.forEach.call(megaMenuRootLi, (node) => {
				
               const allLinks = node.querySelector( 'a' ).nextElementSibling.querySelectorAll( 'li' ),
                     colTotal = node.querySelector( 'a' ).nextElementSibling.children.length,
                     megaDiv  = node.querySelector( 'a' ).nextElementSibling;

                let megaPerWidth = null as unknown as number,
                    rootLiLeft = null as unknown as number;


                // Get width or other style data of element when Not Visible (Display: None)
                // megaDiv.width() it may return 0, so it automatically enables the 
                // `actualPropertyValue()` that returns real width or height
                let megaDivWidth = __( megaDiv ).width();


                // Detecting if the right or left of the div is touching the browser window edge.
                if (colTotal > 0) {

                    if ( !document.body.classList.contains( 'rtl' ) ) {
                        rootLiLeft = ( megaDiv.offsetLeft == 0 ) ? megaDiv.parentElement.offsetLeft : megaDiv.offsetLeft;
                    } else {
                        // width and height in pixels, including padding and border
                        // Corresponds to outerWidth(), outerHeight()
                        rootLiLeft = ( megaDiv.offsetLeft == 0 ) ? ( w - ( megaDiv.parentElement.offsetLeft + megaDiv.parentElement.offsetWidth ) ) : ( w - ( megaDiv.offsetLeft + megaDiv.offsetWidth ) );
                    }
                    

                    //Determine the mega menu wrapper within document width, in order to limit the width of each column for mega menu
                    if (maxWidth > w) maxWidth = w;


                    if ((megaDivWidth + 20) > maxWidth) {

                        megaDivWidth = maxWidth;
                        megaPerWidth = maxWidth / colTotal - 2.888;

                        //Resetting the width of each column and <li> tag
                        Array.prototype.forEach.call(allLinks, (node) => {
                            node.style.width = megaPerWidth + 'px';

                        });

                        
                        if ( !document.body.classList.contains( 'rtl' ) ) {
                            megaDiv.style.marginLeft = (-rootLiLeft) + (w - megaDivWidth) / 2 + 'px';
                        } else {
                            megaDiv.style.marginRight = (-rootLiLeft) + (w - megaDivWidth) / 2 + 'px';
                        }




                    } else {

                        //Resetting the width of each column and <li> tag
                        Array.prototype.forEach.call(allLinks, (node) => {
                            node.style.width = perDefaultW + 'px';

                        });

                        const chkWidth = (rootLiLeft + megaDivWidth);

                        if (chkWidth > w) {
                            if ( !document.body.classList.contains( 'rtl' ) ) {
                                megaDiv.style.marginLeft = - (chkWidth - w) + 'px';
                            } else {
                                megaDiv.style.marginRight = - (chkWidth - w) + 'px';
                            }


                            //If the CSS sets the offset of ul::before
                            /*
                            const megaDivOffset = megaDivWidth/2 - 0;
                            
                            if ( !document.body.classList.contains( 'rtl' ) ) {
                                megaDiv.style.marginLeft = - ( chkWidth - w ) + megaDivOffset + 'px';
                            } else {
                                megaDiv.style.marginRight = - ( chkWidth - w ) + megaDivOffset + 'px';
                            }	
                            */


                        }


                    }



                }


            });      
                  
  
        }// endif (w > 768)  


    }


    /** Remove the global list of events, especially as scroll and interval. */
    componentWillUnmount() {
		
		// Kill all aniamtions
		TweenMax.killAll();
    }


	render() {

        let { 
            menuListData,
            submenu,
            mobile
        } = this.props;


        const options = menuListData.map((item, i) => {

            // if it is Route Link
            if ( typeof(item.title) === 'string' ) {

                return (
                    <li 
                    key={i} 
                    className={item.mega ? 'multi-column' : ''}
                    onMouseEnter={this.handleMouseEnter} 
                    onMouseLeave={this.handleMouseLeave}
                    >


                        {/* Desktop arrow */}
                        {item.mega && !mobile ? <span className="poemkit-menu__arrow-mega"></span> : ''}
                        {(item.children || item.mega) && !mobile ? <span className="poemkit-menu__arrow"></span> : ''}

                        {/* Mobile arrow */}
                        {mobile && (item.mega || item.children) ? <em className="poemkit-menu__arrow-mobile"></em> : ''}


                        {/* Hyperlinks*/}
                        <a href={item.link || '#'} onClick={this.handleCollapseMobileMenuList}>
                            {item.title}
                        </a>
    
                        {/* Sub menu list */}
                        {!item.mega && item.children && <MenuList menuListData={item.children} submenu={true} />}
    
                        {/* Mega menu list */}
                        {item.mega ? <>
                            <ul className="sub-menu" style={{marginTop:`${this.animMarginTop}px`}}>
                            {item.mega.columnLists ? item.mega.columnLists.map((perColItem, i) => {
                                return(
                                    <li key={i}>
                                        {perColItem.heading ? <span className="multi-column-title">{perColItem.heading}</span> : ''}
                                        <ul className="sub-menu multi" style={{marginTop:`${this.animMarginTop}px`}}>
                                            { perColItem.list ? perColItem.list.map((item, i) => {
                                                return (
                                                    <li key={i}>
                                                        <a href={item.link || '#'}>
                                                            {item.title}
                                                        </a>
                                                    </li>
                                                )
                                            }) : ''}
                                        </ul>
                                    </li>
                                )
                            }) : ''}
                            </ul>
                        </> : ''}
    
                    </li>
                    );
            } else {
                return <React.Fragment key={i}>{item.title}</React.Fragment>;   
            }

        });
   
        if (submenu && submenu === true) {
            return <ul className="sub-menu" style={{marginTop:`${this.animMarginTop}px`}}>{options}</ul>;
        }
            
        return <ul className="poemkit-menu">{options}</ul>;

	}
}



/*
Mega Menu Construction:


render() {
	
    return (
      <>
                
      <nav className="poemkit-menu__container">
        <div className="poemkit-menu__inner">
            <span className="poemkit-brand--mobile"><img src="" /></span>
            <ul className="poemkit-menu">
                <li className="multi-column"><a href="#">Components</a>
                    <ul className="sub-menu">

                        <li>
                            <span className="multi-column-title">Mega Menu 1</span>
                            <ul className="sub-menu multi">
                                <li><a href="#">Menu Text</a></li>
                                <li><a href="#">Menu Text</a></li>
                                <li><a href="#">Menu Text</a></li>
                                <li><a href="#">Menu Text</a><span className="poemkit-bubble">new</span></li>
                            </ul>
                        </li>


                        <li>
                            <span className="multi-column-title">Mega Menu 2</span>
                            <ul className="sub-menu multi">
                                <li><a href="#">Menu Text</a></li>
                                <li><a href="#">Menu Text</a></li>
                            </ul>
                        </li>


                    </ul>

                </li>
                <li><a href="#">Menu</a>
                    <ul className="sub-menu">
                        <li><a href="#">Menu Text</a></li>
                        <li><a href="#">Menu Text</a>
							<ul className="sub-menu">
								<li><a href="#">Menu Text</a></li>
								<li><a href="#">Menu Text</a></li>
							</ul>
						</li>
                    </ul>

                </li>
                <li className="is-active"><a href="#">Actived Menu</a></li>
				<li><a href="#">Menu</a></li>

            </ul>

        </div>

    </nav>


      </>
    )
}

*/