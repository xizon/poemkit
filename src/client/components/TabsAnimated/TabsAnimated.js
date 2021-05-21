import PropTypes from "prop-types";
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/plugins/_lib-bootstrap.js';
import '@uixkit.react/plugins/_lib-gsap.js';
import '@uixkit.react/plugins/_lib-icons.js';

/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utilities/styles/_all.scss';
import '@uixkit.react/components/_utilities/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

/*-- Apply this component styles --*/
import '@uixkit.react/components/TabsAnimated/styles/_style.scss';


//
import TabList from '@uixkit.react/components/TabsAnimated/TabList.js';
import TabPanel from '@uixkit.react/components/TabsAnimated/TabPanel.js';


export default class TabsAnimated extends Component {
	
	constructor(props) {
		super(props);
		
		this.state={
			selected: 0
		}	
		
	}
	componentDidMount(){
		
		//
		__( document ).ready( function() {

			//init content boxes height
			const maxContentHeight = __( '.uix-tabs-animated .uix-tabs__content' ).maxDimension().height;	
			__( '.uix-tabs-animated' ).css({'height': (maxContentHeight+60)+'px'});			
			
			
		});

	}

	
	setSelected(e, index){
		e.preventDefault();
		
		this.setState({
			selected: index,
			state: !this.state
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
 
			  <div id={id ? id : 'app-tabs-' + __.GUID.create() } className="uix-tabs-animated">
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
											const animSpeed = __.cssProperty.getTransitionDuration( __( '.uix-tabs-animated .uix-tabs__content' )[0] );	
																		
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


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
			
	TabsAnimated.propTypes = {
		id: PropTypes.string,
		children: PropTypes.array.isRequired
	}

	
}

