import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@poemkit/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/TabsAnimated/styles/_style.scss';


//
import TabList from '@poemkit/components/TabsAnimated/TabList';
import TabPanel from '@poemkit/components/TabsAnimated/TabPanel';


type TabsAnimatedProps = {
	/** -- */
	id?: string;
};
type TabsAnimatedState = {
	selected: number;
};


export default class TabsAnimated extends Component<TabsAnimatedProps, TabsAnimatedState> {

	uniqueID: string;
	
	constructor(props) {
		super(props);

		this.uniqueID = 'app-' + __.GUID.create();
		
		this.state={
			selected: 0
		}	

		this.handleClickItem = this.handleClickItem.bind(this);
		
	}


	handleClickItem(itemIndex) {

		return (e) => { // e is the event object that returned
			e.preventDefault();

			this.setSelected(itemIndex);

			const animSpeed: any = __.cssProperty.getTransitionDuration( __( '.poemkit-tabs-animated .poemkit-tabs__content' )[0] );	

			__( '.poemkit-tabs-animated .poemkit-tabs__content.is-active' ).removeClass('is-active').addClass('leave');							
			setTimeout( function() {
				__( '.poemkit-tabs-animated .poemkit-tabs__content' ).removeClass('leave').eq(itemIndex).addClass('is-active');								
			}, animSpeed);
		};


	}


	componentDidMount() {
		

		__( document ).ready( function() {

			//init content boxes height
			const maxContentHeight = __( '.poemkit-tabs-animated .poemkit-tabs__content' ).maxDimension().height;	
			__( '.poemkit-tabs-animated' ).css({'height': (maxContentHeight+60)+'px'});			
			
			
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
			children // the contents of the TabList and TabPanel in a loop
		} = this.props;

		
		return (
		  <>
 
			  <div id={id || this.uniqueID} className="poemkit-tabs-animated">
				<div className="poemkit-tabs__nav">
					<ul role="tablist">
						{( children != null ) ? (children as any[]).map((item, i) => {
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
				{/*<!-- /.poemkit-tabs__nav -->*/}

				<div className="poemkit-tabs__contentWrapper">

					{( children != null ) ? (children as any[]).map((item, i) => {

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
			  {/*<!-- .poemkit-tabs-animated end -->*/}     


	
		  </>
		)
	}
}

