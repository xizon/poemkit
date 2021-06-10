import React, { Component } from 'react';
import {
	Route, 
	Switch, 
	NavLink,
	useRouteMatch
} from 'react-router-dom';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import Footer from '@uixkit.react/components/Footer/index.js';


//components list
import ButtonsDemo from '@uixkit.react/pages/ComponentsDemo/ButtonsDemo.js';
import TabsDemo from '@uixkit.react/pages/ComponentsDemo/TabsDemo.js';
import TabsAnimatedDemo from '@uixkit.react/pages/ComponentsDemo/TabsAnimatedDemo.js';
import VideoDemo from '@uixkit.react/pages/ComponentsDemo/VideoDemo.js';
import SwiperDemo from '@uixkit.react/pages/ComponentsDemo/SwiperDemo.js';
import TableDemo from '@uixkit.react/pages/ComponentsDemo/TableDemo.js';
import TableGridDemo from '@uixkit.react/pages/ComponentsDemo/TableGridDemo.js';
import TableSorterDemo from '@uixkit.react/pages/ComponentsDemo/TableSorterDemo.js';
import FormDemo from '@uixkit.react/pages/ComponentsDemo/FormDemo.js';
import ScrollRevealDemo from '@uixkit.react/pages/ComponentsDemo/ScrollRevealDemo.js';




//Might have mismatching versions of React and the renderer (such as React DOM)
function HookContent() {
	
	// The `path` lets us build <Route> paths that are
	// relative to the parent route, while the `url` lets
	// us build relative links.
	let { path, url } = useRouteMatch();

	
	return (
		<>
		

			{/*
			<!-- Content   
			====================================================== -->	
			*/}
			<section className="uix-spacing--s uix-spacing--no-bottom">
				<div className="container">
						<div className="row">
							<div className="col-12">

								<NavLink data-route="true" to={`${url}/buttons`} activeClassName="is-active"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Buttons</NavLink>&nbsp;&nbsp;
								<NavLink data-route="true" to={`${url}/tabs`} activeClassName="is-active"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Tabs</NavLink>&nbsp;&nbsp;
								<NavLink data-route="true" to={`${url}/tabs-animated`} activeClassName="is-active"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Tabs Animated</NavLink>&nbsp;&nbsp;
								<NavLink data-route="true" to={`${url}/video`} activeClassName="is-active"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Video</NavLink>&nbsp;&nbsp;
								<NavLink data-route="true" to={`${url}/swiper`} activeClassName="is-active"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Swiper</NavLink>&nbsp;&nbsp;
								<NavLink data-route="true" to={`${url}/table`} activeClassName="is-active"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Table</NavLink>&nbsp;&nbsp;
								<NavLink data-route="true" to={`${url}/table-grid`} activeClassName="is-active"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Table Grid</NavLink>&nbsp;&nbsp;
								<NavLink data-route="true" to={`${url}/table-sorter`} activeClassName="is-active"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Table Sorter</NavLink>&nbsp;&nbsp;
								<NavLink data-route="true" to={`${url}/form`} activeClassName="is-active"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Form</NavLink>&nbsp;&nbsp;
								<NavLink data-route="true" to={`${url}/scroll-reveal`} activeClassName="is-active"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Scroll Reveal</NavLink>&nbsp;&nbsp;

							</div>
						</div>
						{/*<!-- .row end -->*/}


				</div>
				{/*<!-- .container end -->*/}
			</section>
		
			
		
			 <hr />

			  <Switch>
				<Route exact path={path}>
		
					{/*
					<!-- Content   
					====================================================== -->	
					*/}
					<section className="uix-spacing--s uix-spacing--no-bottom">
						<div className="container">
								<div className="row">
									<div className="col-12">

										<p>None.</p>

									</div>
								</div>
								{/*<!-- .row end -->*/}


						</div>
						{/*<!-- .container end -->*/}
					</section>

		
				  
				</Route>
				<Route path={`${path}/buttons`}>
				  <ButtonsDemo />
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
	
		
		
		
			  </Switch>
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

 
    }


  render() {

    return (
	  <>
		
		
            <main id="uix-maincontent">
		
				<HookContent />

            </main>
		
		    <Footer />
       
          
      </>

    );
  }
    
}

export default ComponentsDemo;