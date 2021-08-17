import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap';
import '@uixkit.react/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utils/styles/_all';
import '@uixkit.react/components/_utils/styles/rtl/_all';
import { __ } from '@uixkit.react/components/_utils/_all';

/*-- Apply this component styles --*/
import '@uixkit.react/components/Tabs/styles/_style';


//
import TabList from '@uixkit.react/components/Tabs/TabList';
import TabPanel from '@uixkit.react/components/Tabs/TabPanel';


type TabsProps = {
	type: string;
	/** -- */
	id?: string;
	children: any; /* required */
	attributes?: any;
};
type TabsState = false;


export default class Tabs extends Component<TabsProps, TabsState> {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount(){
		
		
		__( document ).ready( function() {

			
			__( '.uix-tabs' ).each( function(this: any, index: number, curSelector: string ) {
				
			
				const $this             = __( this );
				
				const $li               = $this.find( '.uix-tabs__nav ul > li' ),
					  liWidth           = $li.first().outerWidth(),
					  liHeight          = $li.first().outerHeight(),
					  liNum             = $li.length,
					  isNumeric         = /^[-+]?(\d+|\d+\.\d*|\d*\.\d+)$/,
					  tabBoxID          = $this.attr( 'id' );

				
				
				let	ulWidth           = $this.data( 'width' ),
					fullwidth         = $this.data( 'fullwidth' ),
					rotation          = $this.data( 'rotation' ),
					rotationRadius    = $this.data( 'rotation-radius' ),
					rotationWapperDeg = $this.data( 'rotation-wrapper-angle' ),
					rotationDisplay   = $this.data( 'rotation-display' );

				//console.log( '$this.data( rotation ): ', $this.data( 'rotation' ));

				if ( fullwidth != null && fullwidth == 1 ) {
					$li.css( {
						'width': ( 100 / liNum ) + '%'
					} );
					
				}


				if ( rotation === null ) {
					rotation = false;
				}	


				if ( rotationWapperDeg === null ) {
					rotationWapperDeg = 0;
				}	

				if ( rotationDisplay === null ) {
					rotationDisplay = 5;
				}		
		
				
				
				//Initialize tab list
				__( curSelector ).find( '.uix-tabs__nav ul > li' ).each( function(this: any, index: number ) {
					__( this ).find( 'a' )
										.attr( 'href', 'javascript:' )
										.attr( 'id', tabBoxID + '-tablist-link' + index );
					__( this )
							.attr( 'data-tab', tabBoxID + '-tabs-show' + index )
							.attr( 'id', tabBoxID + '-tablist' + index );
		
				});

				//Initialize tab panel
				__( curSelector ).find( '.uix-tabs__content' ).each( function(this: any, index: number ) {
					__( this ).attr( 'id', tabBoxID + '-tabs-show' + index );
				});
				
				
			
				// Tab Rotation Effect
				if ( rotation ) {
					
					$this.find( '.uix-tabs__nav' ).css( {
						'width'      : rotationRadius * 2 + 'px'
					} );


					$this.find( '.uix-tabs__nav ul' ).css( {
						'width'     : rotationRadius * 2 + 'px',
						'height'    : rotationRadius * 2 + 'px',
						'transform' : 'rotate('+parseFloat(rotationWapperDeg)+'deg)'
					} );



					//Layout components in a circle layout
					const step            = 2 * Math.PI / rotationDisplay,
						  pad             = $this.find( '.uix-tabs__nav ul' ).width();

					let angle             = 0,
						transitionDelay   = 0;

			
					for (let k = 0; k <= liNum; k++) {
						const el          = __( curSelector + ' .uix-tabs__nav ul > li' ).eq(k),
							  elLink      = __( curSelector + ' .uix-tabs__nav ul > li:nth-child('+k+') > a' ),
							  x           = rotationRadius * Math.cos(angle) - liWidth / 2,
							  y           = rotationRadius * Math.sin(angle) - liHeight / 2;



						el.css({
							'transform'        : 'translate('+x+'px,'+( pad/2 + y )+'px)',
							'transition-delay' : transitionDelay + "s"
						});

						elLink.css({
							'transform'        : 'rotate('+(-rotationWapperDeg)+'deg)'
						});	


						angle += step;
						transitionDelay += 0.15;
						


						//Click on the rotation effect
						//----------------------- begin ----------------------
						el.off( 'click' ).on( 'click', function(this: any, e: any ) {
							
							const increase   = Math.PI * 2 / rotationDisplay,
								  n          = __( this ).index(),
								  endAngle   = n % rotationDisplay * increase; 


							( function turn() {
								if (Math.abs(endAngle - angle) > 1 / 8) {
									const sign = endAngle > angle ? 1 : -1;
									angle = angle + sign / 8;
									setTimeout(turn, 20);
								} else {
									angle = endAngle;
								}


			
								for (let j = 0; j <= liNum; j++) {
									
									const el           = __( curSelector + ' .uix-tabs__nav ul > li' ).eq(j),
										  elLink       = __( curSelector + ' .uix-tabs__nav ul > li:nth-child('+j+') > a' ),
										  x2           = Math.cos( - Math.PI / 2 + j * increase - angle) * rotationRadius - liWidth / 2,
										  y2           = Math.sin( - Math.PI / 2 + j * increase - angle) * rotationRadius + liHeight;


									el.css({
										'transform'        : 'translate('+x2+'px,'+y2+'px)',
										'transition'       : 'none',
										'transition-delay' : 0
									});
									
								
									elLink.css({
										'transform'        : 'rotate('+(-rotationWapperDeg)+'deg)'
									});

								}//end for
								
								

							})();	

						});
						//----------------------- end ----------------------	

	
					}//end for
					
					

					// Init
					$this.find( '.uix-tabs__nav ul > li.is-active' ).trigger( 'click' );


				}//end rotation


				// Tab Sliding Effext
				if ( $this.find( '.uix-tabs__nav ul > li:first-child .uix-tabs__marker' ).length == 0 ) {
					$this.find( '.uix-tabs__nav ul > li:first-child' ).prepend( '<div class="uix-tabs__marker"></div>' );
				}

				// Tab Fade Effect
				$this.off( 'click' ).on( 'click', '.uix-tabs__nav ul > li', function(this: any, e: any ) {
					
				
					const tabID = __( this ).attr( 'data-tab' ),
						  index = __( this ).index() - 1;


					$this.find( '.uix-tabs__nav ul > li' ).removeClass( 'is-active' );
					$this.find( '.uix-tabs__content' ).removeClass( 'is-active' );

					__( this ).addClass( 'is-active' );
					__( '#' + tabID ).addClass( 'is-active' );


					//sliding marker
					const translateX = __( this ).index() * 100,
						  liHeight   = $this.find( '.uix-tabs__nav ul > li:first-child' ).outerHeight(),
						  translateY = __( this ).index() * liHeight;

					if ( window.innerWidth <= 768 ) {
						$this.find( '.uix-tabs__marker' ).css({
							'transform'          : 'translateY( '+translateY+'px )'	
						});	
					} else {
						$this.find( '.uix-tabs__marker' ).css({
							'transform'          : 'translateX( '+translateX+'% )'	
						});	
					}



					return false;


				});




			});

		
		});

		
	}
	
	
	typeSwitch(param) {
		
		switch(param) {
			case 'normal':
				return 'uix-tabs uix-tabs--normal';
			case 'center':
				return 'uix-tabs uix-tabs--center';
			case 'fullwidth':
				return 'uix-tabs';
			case 'rotation':
				return 'uix-tabs uix-tabs--rotation';
				
			default:
				return 'uix-tabs uix-tabs--normal';
		}
	}
	
	
	

	render() {
		
		const { 
			type,
			id,
			children, // the contents of the TabList and TabPanel in a loop
			...attributes
		} = this.props;
		
	
		return (
		  <>
 
			
				<div id={id ? id : 'app-tabs-' + __.GUID.create() } className={this.typeSwitch(type)} {...attributes}>
					<div className="uix-tabs__nav">
						<ul role="tablist">
							
							{( children != null ) ? children.map((item, i) => {
								const childProps = { ...item.props };

								delete childProps.key;

								if ( item.key.indexOf( 'tab-list' ) >= 0 ) {
									return <TabList key={item.key} {...childProps} />;
								}

							})
							 : ""
							}
							
						</ul>
					</div>
					{/*<!-- /.uix-tabs__nav -->*/}

					{( children != null ) ? children.map((item, i) => {

					    const childProps = { ...item.props };
						
						delete childProps.key;
						
						if ( item.key.indexOf( 'tab-panel' ) >= 0 ) {
							return <TabPanel key={item.key} {...childProps} />;
						}					
					    								
					 })
					 : ""
					}




				</div>
				{/*<!-- .uix-tabs end -->*/}     
			
	
		  </>
		)
	}
}

