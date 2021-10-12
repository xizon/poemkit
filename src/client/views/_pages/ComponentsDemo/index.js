import React, { Component } from 'react';
import {
	Route, 
	Switch, 
	NavLink,
	useRouteMatch,
	useLocation
} from 'react-router-dom';
import { __ } from '@uixkit.react/components/_utils/_all';


//components list
import ButtonDemo from '@uixkit.react/pages/ComponentsDemo/ButtonDemo.js';
import FormDemo from '@uixkit.react/pages/ComponentsDemo/FormDemo.js';
import GridDemo from '@uixkit.react/pages/ComponentsDemo/GridDemo.js';
import TabsDemo from '@uixkit.react/pages/ComponentsDemo/TabsDemo.js';
import TabsAnimatedDemo from '@uixkit.react/pages/ComponentsDemo/TabsAnimatedDemo.js';
import VideoDemo from '@uixkit.react/pages/ComponentsDemo/VideoDemo.js';
import TableDemo from '@uixkit.react/pages/ComponentsDemo/TableDemo.js';
import TableGridDemo from '@uixkit.react/pages/ComponentsDemo/TableGridDemo.js';
import TableSorterDemo from '@uixkit.react/pages/ComponentsDemo/TableSorterDemo.js';
import ScrollRevealDemo from '@uixkit.react/pages/ComponentsDemo/ScrollRevealDemo.js';
import CardDemo from '@uixkit.react/pages/ComponentsDemo/CardDemo.js';
import ParallaxDemo from '@uixkit.react/pages/ComponentsDemo/ParallaxDemo.js';
import AccordionDemo from '@uixkit.react/pages/ComponentsDemo/AccordionDemo.js';
import AccordionSliderDemo from '@uixkit.react/pages/ComponentsDemo/AccordionSliderDemo.js';
import CounterDemo from '@uixkit.react/pages/ComponentsDemo/CounterDemo.js';
import DropdownMenuDemo from '@uixkit.react/pages/ComponentsDemo/DropdownMenuDemo.js';
import ModalDialogDemo from '@uixkit.react/pages/ComponentsDemo/ModalDialogDemo.js';
import SlideshowDemo from '@uixkit.react/pages/ComponentsDemo/SlideshowDemo.js';
import SwiperDemo from '@uixkit.react/pages/ComponentsDemo/SwiperDemo.js';
import BackToTopDemo from '@uixkit.react/pages/ComponentsDemo/BackToTopDemo.js';
import LightboxDemo from '@uixkit.react/pages/ComponentsDemo/LightboxDemo.js';
import ProgressBarDemo from '@uixkit.react/pages/ComponentsDemo/ProgressBarDemo.js';
import StickyElementsDemo from '@uixkit.react/pages/ComponentsDemo/StickyElementsDemo.js';




//Might have mismatching versions of React and the renderer (such as React DOM)
function HookContent() {
	
	// The `path` lets us build <Route> paths that are
	// relative to the parent route, while the `url` lets
	// us build relative links.
	let { path, url } = useRouteMatch();

	//
	const theLocation = useLocation();
	
	//
	const urlChk = function( str ) {
		return theLocation.pathname.indexOf( str ) >= 0 ? true : false;
	};

	return (
		<>
		

		{/*
		<!-- Sidebar   
		====================================================== -->	
		*/}
		<div className="uix-demo-sidebar-left">
			<h4>Components</h4>
			<ul className="uix-demo-nav">
				<li className="uix-demo-nav-header">Getting started</li>
				<li className={urlChk('/button') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/button`} activeClassName="is-active">Button</NavLink>
				</li>
				<li className={urlChk('/form') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/form`} activeClassName="is-active">Form</NavLink>
				</li>
				<li className={urlChk('/grid') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/grid`} activeClassName="is-active">Grid</NavLink>
				</li>
				<li className={urlChk('/tabs') && !urlChk('/tabs-animated') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/tabs`} activeClassName="is-active">Tabs</NavLink>
				</li>
				<li className={urlChk('/tabs-animated') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/tabs-animated`} activeClassName="is-active">Tabs Animated</NavLink>
				</li>
				<li className={urlChk('/video') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/video`} activeClassName="is-active">Video</NavLink>
				</li>
				<li className={urlChk('/table') && !urlChk('/table-grid') && !urlChk('/table-sorter') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/table`} activeClassName="is-active">Table</NavLink>
				</li>
				<li className={urlChk('/table-grid') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/table-grid`} activeClassName="is-active">Table Grid</NavLink>
				</li>
				<li className={urlChk('/table-sorter') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/table-sorter`} activeClassName="is-active">Table Sorter</NavLink>
				</li>
				<li className={urlChk('/scroll-reveal') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/scroll-reveal`} activeClassName="is-active">Scroll Reveal</NavLink>
				</li>
				<li className={urlChk('/card') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/card`} activeClassName="is-active">Card</NavLink>
				</li>
				<li className={urlChk('/parallax') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/parallax`} activeClassName="is-active">Parallax</NavLink>
				</li>
				<li className={urlChk('/accordion') && !urlChk('/accordion-slider') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/accordion`} activeClassName="is-active">Accordion</NavLink>
				</li>
				<li className={urlChk('/accordion-slider') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/accordion-slider`} activeClassName="is-active">Accordion Slider</NavLink>
				</li>
				<li className={urlChk('/counter') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/counter`} activeClassName="is-active">Counter</NavLink>
				</li>
				<li className={urlChk('/dropdown-menu') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/dropdown-menu`} activeClassName="is-active">Dropdown Menu</NavLink>
				</li>
				<li className={urlChk('/modal-dialog') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/modal-dialog`} activeClassName="is-active">Modal Dialog</NavLink>
				</li>
				<li className={urlChk('/slideshow') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/slideshow`} activeClassName="is-active">Slideshow</NavLink>
				</li>
				<li className={urlChk('/swiper') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/swiper`} activeClassName="is-active">Swiper</NavLink>
				</li>
				<li className={urlChk('/back-to-top') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/back-to-top`} activeClassName="is-active">Back To Top</NavLink>
				</li>
				<li className={urlChk('/lightbox') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/lightbox`} activeClassName="is-active">Lightbox</NavLink>
				</li>
				<li className={urlChk('/progress-bar') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/progress-bar`} activeClassName="is-active">Progress Bar</NavLink>
				</li>
				<li className={urlChk('/sticky-elements') ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/sticky-elements`} activeClassName="is-active">Sticky Elements</NavLink>
				</li>

			</ul>
		</div>


		{/*
		<!-- Content   
		====================================================== -->	
		*/}
		<div className="uix-demo-section">
			<div className="uix-demo-container">
				<div>

					<Switch>
						<Route exact path={path}>


							<section>
								<div className="container">
									<div className="row">
										<div className="col-12">

											<h3>Introduction</h3>
											<p>Get familiar with the basic setup and overview of UI Components.</p>
											<p><a className="btn btn-dark" href="https://github.com/xizon/uix-kit-react" target="_blank">Download Uix Kit React</a></p>

										</div>
									</div>
									{/*<!-- .row end -->*/}


								</div>
								{/*<!-- .container end -->*/}
							</section>



						</Route>
								
						<Route path={`${path}/button`}><ButtonDemo/></Route>
						<Route path={`${path}/form`}><FormDemo/></Route>
						<Route path={`${path}/grid`}><GridDemo/></Route>
						<Route path={`${path}/tabs`}><TabsDemo/></Route>
						<Route path={`${path}/tabs-animated`}><TabsAnimatedDemo/></Route>
						<Route path={`${path}/video`}><VideoDemo/></Route>
						<Route path={`${path}/table`}><TableDemo/></Route>
						<Route path={`${path}/table-grid`}><TableGridDemo/></Route>
						<Route path={`${path}/table-sorter`}><TableSorterDemo/></Route>
						<Route path={`${path}/scroll-reveal`}><ScrollRevealDemo/></Route>
						<Route path={`${path}/card`}><CardDemo/></Route>
						<Route path={`${path}/parallax`}><ParallaxDemo/></Route>
						<Route path={`${path}/accordion`}><AccordionDemo/></Route>
						<Route path={`${path}/accordion-slider`}><AccordionSliderDemo/></Route>
						<Route path={`${path}/counter`}><CounterDemo/></Route>
						<Route path={`${path}/dropdown-menu`}><DropdownMenuDemo/></Route>
						<Route path={`${path}/modal-dialog`}><ModalDialogDemo/></Route>
						<Route path={`${path}/slideshow`}><SlideshowDemo/></Route>
						<Route path={`${path}/swiper`}><SwiperDemo/></Route>
						<Route path={`${path}/back-to-top`}><BackToTopDemo/></Route>
						<Route path={`${path}/lightbox`}><LightboxDemo/></Route>
						<Route path={`${path}/progress-bar`}><ProgressBarDemo/></Route>
						<Route path={`${path}/sticky-elements`}><StickyElementsDemo/></Route>								

					</Switch>

				</div>
			</div>
		</div>

			

		</>
	)

}



class ComponentsDemo extends Component {
	constructor(props) {
		super(props);
	}

    componentDidMount() {
        //do shmething

	    if ( document.querySelector( '#app-uix-demo-style') === null ) {
			const $style = document.createElement("style");
			$style.id = 'app-uix-demo-style';
			document.head.appendChild($style);
			$style.innerHTML = `
				/*-- Sidebar --*/
				.uix-demo-sidebar-left {
					position: fixed;
					top: 70px;
					bottom: 0;
					box-sizing: border-box;
					width: 240px;
					padding: 40px 40px 60px 40px;
					border-right: 1px #e5e5e5 solid;
					overflow: auto;
				}

				@media all and (max-width: 768px) {
					.uix-demo-sidebar-left {
						position: relative;
						top: 0;
						width: 100%;
						padding: 15px;
					}
				}

				
				/*-- Navigation --*/
				.uix-demo-nav,
				.uix-demo-nav ul {
					margin: 0;
					padding: 0;
					list-style: none;
					font-size: .875rem;
				}

				.uix-demo-nav-header {
					padding: 8px 0;
					border-bottom: 1px solid #e5e5e5;
				}

				.uix-demo-nav li {
					position: relative;
				}

				
				
				.uix-demo-nav li>a {
					display: flex;
					align-items: center;
					column-gap: .25em;
					text-decoration: none;
					color: #999;
				}
				

				.uix-demo-nav li>a>* {
					flex: none;
				}
				
				.uix-demo-nav li>a:focus {
					outline: none;
				}
				
				.uix-demo-nav>li>a {
					padding: 5px 0;
				}

				.uix-demo-nav li.is-active > a {
					color: #333;
				}
				.uix-demo-nav li.is-active > a:after {
					content: '';
					display: block;
					width: 5px;
					height: 5px;
					position: absolute;
					top: 45%;
					left: -1rem;
					background: #333;
				}		

				@media all and (max-width: 768px) {
					.uix-demo-nav li {
						position: relative;
						float: left;
						display: inline-block;
						margin: 0 1.2rem 0 0;
					}

					.uix-demo-nav-header {
						width: 100%;
					}	

					.uix-demo-nav li.is-active > a:after {
						left: -.7rem;
					}	

				}
				
				
				/*-- Main --*/
				.uix-demo-container {
					padding-left: 15px;
					padding-right: 15px;
					max-width: 1000px;
					position: relative;
					margin-left: auto;
					margin-right: auto;
					padding-bottom: 70px;
					/* Do not use "transform", it will affect the "position:fixed" effect of the child */
					left: 100px;
				}
				
				@media all and (max-width: 768px) {
					.uix-demo-container {
						padding: 0;	
						max-width: 100%;
						left: 0;
					}
				}

				@media all and (max-width: 1024px) and (min-width: 769px) {
					.uix-demo-container {
						max-width: 700px;
					}
				}
		
				@media all and (max-width: 1440px) and (min-width: 1025px) {
					.uix-demo-container {
						max-width: 1000px;
					}
				}


				@media all and (min-width: 1441px) {
					.uix-demo-container {
						max-width: 1140px;
						left: 0;
					}
				}

				
				.uix-demo-section {
					display: flow-root;
					box-sizing: border-box;
					padding-top: 40px;
					padding-bottom: 40px;
				}
				
			`;   
	
		}

    }


  render() {

    return (
	  <>
		
		
            <main id="uix-maincontent">
		
				<HookContent />

            </main>
		
          
      </>

    );
  }
    
}

export default ComponentsDemo;