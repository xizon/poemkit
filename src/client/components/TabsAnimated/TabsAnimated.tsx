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
import '@uixkit.react/components/TabsAnimated/styles/_style.scss';


//
import TabList from '@uixkit.react/components/TabsAnimated/TabList';
import TabPanel from '@uixkit.react/components/TabsAnimated/TabPanel';


type TabsAnimatedProps = {
	/** -- */
	id?: string;
	children: any; /* required */
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

		this.handleClickItem = this.handleClickItem.bind(this);
		
	}


	handleClickItem(itemIndex) {

		const self = this;

		return function (e) { // e is the event object that returned
			e.preventDefault();

			self.setSelected(itemIndex);

			const animSpeed: any = __.cssProperty.getTransitionDuration( __( '.uix-tabs-animated .uix-tabs__content' )[0] );	

			__( '.uix-tabs-animated .uix-tabs__content.is-active' ).removeClass('is-active').addClass('leave');							
			setTimeout( function() {
				__( '.uix-tabs-animated .uix-tabs__content' ).removeClass('leave').eq(itemIndex).addClass('is-active');								
			}, animSpeed);
		};


	}


	componentDidMount(){
		

		__( document ).ready( function() {

			//init content boxes height
			const maxContentHeight = __( '.uix-tabs-animated .uix-tabs__content' ).maxDimension().height;	
			__( '.uix-tabs-animated' ).css({'height': (maxContentHeight+60)+'px'});			
			
			
		});

	}

	
	setSelected(index){
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
							const activeClassName = (itemIndex === this.state.selected) ? 'is-active' : '';
							
							delete childProps.key;
							delete childProps.defaultActive;

							if ( item.key.indexOf( 'tab-list' ) >= 0 ) {
								return <TabList className={activeClassName} key={item.key} {...childProps} onClick={this.handleClickItem(itemIndex)} />;
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

