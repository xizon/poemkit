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
import TabsDemo from '@uixkit.react/pages/ComponentsDemo/TabsDemo.js';
import TabsAnimatedDemo from '@uixkit.react/pages/ComponentsDemo/TabsAnimatedDemo.js';
import VideoDemo from '@uixkit.react/pages/ComponentsDemo/VideoDemo.js';
import SwiperDemo from '@uixkit.react/pages/ComponentsDemo/SwiperDemo.js';
import TableDemo from '@uixkit.react/pages/ComponentsDemo/TableDemo.js';
import TableGridDemo from '@uixkit.react/pages/ComponentsDemo/TableGridDemo.js';
import TableSorterDemo from '@uixkit.react/pages/ComponentsDemo/TableSorterDemo.js';
import FormDemo from '@uixkit.react/pages/ComponentsDemo/FormDemo.js';
import ScrollRevealDemo from '@uixkit.react/pages/ComponentsDemo/ScrollRevealDemo.js';
import CardDemo from '@uixkit.react/pages/ComponentsDemo/CardDemo.js';
import ParallaxDemo from '@uixkit.react/pages/ComponentsDemo/ParallaxDemo.js';




//Might have mismatching versions of React and the renderer (such as React DOM)
function HookContent() {
	
	// The `path` lets us build <Route> paths that are
	// relative to the parent route, while the `url` lets
	// us build relative links.
	let { path, url } = useRouteMatch();

	//
	const theLocation = useLocation();

	
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
				<li className={theLocation.pathname.indexOf('/button') >= 0 ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/button`} activeClassName="is-active">Button</NavLink>
				</li>
				<li className={theLocation.pathname.indexOf('/tabs') >= 0 && theLocation.pathname.indexOf('/tabs-animated') < 0 ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/tabs`} activeClassName="is-active">Tabs</NavLink>
				</li>
				<li className={theLocation.pathname.indexOf('/tabs-animated') >= 0 ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/tabs-animated`} activeClassName="is-active">Tabs Animated</NavLink>
				</li>
				<li className={theLocation.pathname.indexOf('/video') >= 0 ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/video`} activeClassName="is-active">Video</NavLink>
				</li>
				<li className={theLocation.pathname.indexOf('/swiper') >= 0 ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/swiper`} activeClassName="is-active">Swiper</NavLink>
				</li>
				<li className={theLocation.pathname.indexOf('/table') >= 0 && theLocation.pathname.indexOf('/table-grid') < 0 && theLocation.pathname.indexOf('/table-sorter') < 0 ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/table`} activeClassName="is-active">Table</NavLink>
				</li>
				<li className={theLocation.pathname.indexOf('/table-grid') >= 0 ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/table-grid`} activeClassName="is-active">Table Grid</NavLink>
				</li>
				<li className={theLocation.pathname.indexOf('/table-sorter') >= 0 ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/table-sorter`} activeClassName="is-active">Table Sorter</NavLink>
				</li>
				<li className={theLocation.pathname.indexOf('/form') >= 0 ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/form`} activeClassName="is-active">Form</NavLink>
				</li>
				<li className={theLocation.pathname.indexOf('/scroll-reveal') >= 0 ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/scroll-reveal`} activeClassName="is-active">Scroll Reveal</NavLink>
				</li>
				<li className={theLocation.pathname.indexOf('/card') >= 0 ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/card`} activeClassName="is-active">Card</NavLink>
				</li>
				<li className={theLocation.pathname.indexOf('/parallax') >= 0 ? 'is-active' : ''}>
					<NavLink data-route="true" to={`${url}/parallax`} activeClassName="is-active">Parallax</NavLink>
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
						<Route path={`${path}/button`}>
							<ButtonDemo />
						</Route>
						<Route path={`${path}/tabs`}>
							<TabsDemo />
						</Route>
						<Route path={`${path}/tabs-animated`}>
							<TabsAnimatedDemo />
						</Route>
						<Route path={`${path}/video`}>
							<VideoDemo />
						</Route>
						<Route path={`${path}/swiper`}>
							<SwiperDemo />
						</Route>
						<Route path={`${path}/table`}>
							<TableDemo />
						</Route>
						<Route path={`${path}/table-grid`}>
							<TableGridDemo />
						</Route>
						<Route path={`${path}/table-sorter`}>
							<TableSorterDemo />
						</Route>
						<Route path={`${path}/form`}>
							<FormDemo />
						</Route>
						<Route path={`${path}/scroll-reveal`}>
							<ScrollRevealDemo />
						</Route>
						<Route path={`${path}/card`}>
							<CardDemo />
						</Route>
						<Route path={`${path}/parallax`}>
							<ParallaxDemo />
						</Route>



					</Switch>

				</div>
			</div>
		</div>

			

		</>
	)

}



class ComponentsDemo extends Component {
	constructor(props) {

		//You are extending the React.Component class, and per the ES2015 spec, 
		//a child class constructor cannot make use of this until super() has 
		//been called; also, ES2015 class constructors have to call super() 
		//if they are subclasses.
		super(props);
		//console.log(this.props) //props will get logged.

   
	}


    /**
     * componentDidMount() is invoked immediately after a component 
     * is mounted (inserted into the tree). 
     * Initialization that requires DOM nodes should go here. 
     * If you need to load data from a remote endpoint, this 
     * is a good place to instantiate the network request.
     */
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
					transform: translateX(100px);
				}
				
				@media all and (max-width: 768px) {
					.uix-demo-container {
						padding: 0;	
						max-width: 100%;
						transform: translateX(0);
					}
				}

				@media all and (max-width: 1141px) {
					.uix-demo-container {
						max-width: 700px;
					}
				}
		
				@media all and (min-width: 1430px) {
					.uix-demo-container {
						max-width: 1140px;
						transform: translateX(0);
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