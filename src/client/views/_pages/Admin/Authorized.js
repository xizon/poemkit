import React, { Component } from 'react';
import { __ } from '@uixkit.react/components/_utils/_all';
import UserService from "@uixkit.react/services/user-service.js";

class Authorized extends Component {
	
    constructor(props) {
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

