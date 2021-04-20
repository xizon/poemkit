import React, { Component, Fragment } from 'react';
import {
	Route, 
	Switch, 
	NavLink,
	useRouteMatch,
} from 'react-router-dom';
import { __ } from '@uixkit.react/components/_utilities/js/_all.js';
import Footer from '@uixkit.react/components/Footer/index.js';


//components list
import Buttons from '@uixkit.react/pages/ComponentsDemo/Buttons.js';


//Might have mismatching versions of React and the renderer (such as React DOM)
function HookContent() {
	
	// The `path` lets us build <Route> paths that are
	// relative to the parent route, while the `url` lets
	// us build relative links.
	let { path, url } = useRouteMatch();

	
	return (
		<Fragment>
		
			<div><NavLink to={`${url}/buttons`} activeClassName="is-active"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Buttons</NavLink></div>

			 <hr />

			  <Switch>
				<Route exact path={path}>
				  <p>None.</p>
				</Route>
				<Route path={`${path}/buttons`}>
				  <Buttons />
				</Route>
			  </Switch>
		</Fragment>
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
	  <Fragment>
		
		
            <main id="uix-maincontent">
		
				{/*
				<!-- Content   
				====================================================== -->	
				*/}
				<section className="uix-spacing--s">
					<div className="container">
							<div className="row">
								<div className="col-12">
		
									<HookContent />

								</div>
							</div>
							{/*<!-- .row end -->*/}


					</div>
					{/*<!-- .container end -->*/}
				</section>

            </main>
		
		    <Footer />
       
          
      </Fragment>

    );
  }
    
}

export default ComponentsDemo;