import React, { Component } from 'react';
import { __ } from '@uixkit.react/components/_utilities/_all.js';
import UserService from "@uixkit.react/services/user-service.js";

class Authorized extends Component {
	
    constructor(props) {
		//You are extending the React.Component class, and per the ES2015 spec, 
		//a child class constructor cannot make use of this until super() has 
		//been called; also, ES2015 class constructors have to call super() 
		//if they are subclasses.
		super(props);
		
		
        this.state = {
			userName: '...'
        };

    }
	
	componentDidMount() {
		
		const self = this;

		UserService.getUserName().then(function(response) {
		    self.setState({ userName: response });
		}); 
	}

	
  render() {
	  
    return (
	  <>
		<p style={{color:"green"}}>&#08730; You need to be authorized after successful login to see this information.</p>
		<p>Your user name is: <code>{this.state.userName}</code></p>
		

      </>
    ); 
	  
  }
    
}

export default Authorized;

