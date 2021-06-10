import React, { Component } from 'react';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import LoginPage from '@uixkit.react/pages/Member/LoginPage.js';
import Footer from '@uixkit.react/components/Footer/index.js';


class Member extends Component {
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
		
				{/*
				<!-- Content   
				====================================================== -->	
				*/}
				<section className="uix-spacing--s">
					<div className="container">
							<div className="row">
								<div className="col-12">
		
           							    <LoginPage />

								</div>
							</div>
							{/*<!-- .row end -->*/}


					</div>
					{/*<!-- .container end -->*/}
				</section>

            </main>
		
		    <Footer />
       
          
      </>

    );
  }
    
}

export default Member;