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
import '@uixkit.react/components/TabsAnimated/styles/_style';


//
import TabList from '@uixkit.react/components/TabsAnimated/TabList';
import TabPanel from '@uixkit.react/components/TabsAnimated/TabPanel';


type TabsAnimatedProps = {
	/** -- */
	id?: string;
	children: any; /* required */
	attributes?: any;
};
type TabsAnimatedState = {
	selected: number;
};


export default class TabsAnimated extends Component<TabsAnimatedProps, TabsAnimatedState> {
	
	constructor(props) {
		super(props);
		
		this.state={
			selected: 0
		}	
		
	}
	componentDidMount(){
		

		__( document ).ready( function() {

			//init content boxes height
			const maxContentHeight = __( '.uix-tabs-animated .uix-tabs__content' ).maxDimension().height;	
			__( '.uix-tabs-animated' ).css({'height': (maxContentHeight+60)+'px'});			
			
			
		});

	}

	
	setSelected(e, index){
		e.preventDefault();
		
		this.setState({
			selected: index
		});
	}

	
	render() {
		
		const { 
			id,
			children, // the contents of the TabList and TabPanel in a loop
			...attributes
		} = this.props;

		
		return (
		  <>
 
			  <div id={id ? id : 'app-tabs-animated-' + __.GUID.create() } className="uix-tabs-animated" {...attributes}>
				<div className="uix-tabs__nav">
					<ul role="tablist">
						{( children != null ) ? children.map((item, i) => {
							const childProps = { ...item.props };
							const itemIndex = i;
							const activeClass = (itemIndex === this.state.selected) ? 'is-active' : '';

							delete childProps.key;

							if ( item.key.indexOf( 'tab-list' ) >= 0 ) {
								return <TabList className={activeClass} key={item.key} {...childProps} onClick={(e)=>{
											this.setSelected(e, itemIndex);
											const animSpeed: any = __.cssProperty.getTransitionDuration( __( '.uix-tabs-animated .uix-tabs__content' )[0] );	
																		
											//console.log('index: ', itemIndex);

											__( '.uix-tabs-animated .uix-tabs__nav li.is-active, .uix-tabs-animated .uix-tabs__content.is-active' ).removeClass('is-active').addClass('leave');
																							
																					
											setTimeout( function() {
												__( '.uix-tabs-animated .uix-tabs__nav li' ).removeClass('leave').eq(itemIndex).addClass('is-active');	
												__( '.uix-tabs-animated .uix-tabs__content' ).removeClass('leave').eq(itemIndex).addClass('is-active');		
																												
											}, animSpeed);

										 }}
										/>;
							}

						})
						 : ""
						}
					</ul>
				</div>
				{/*<!-- /.uix-tabs__nav -->*/}

				<div className="uix-tabs__contentWrapper">

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
			  </div>
			  {/*<!-- .uix-tabs-animated end -->*/}     


	
		  </>
		)
	}
}

