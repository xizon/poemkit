import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

import AuthService from "@uixkit.react/services/auth-service.js";

class LoginPage extends Component {
	
    constructor(props) {
		//You are extending the React.Component class, and per the ES2015 spec, 
		//a child class constructor cannot make use of this until super() has 
		//been called; also, ES2015 class constructors have to call super() 
		//if they are subclasses.
		super(props);
		
		
        this.state = {
			loginOk: null,
            user: null,
            username: '',
            password: '',
            error: '',
        };

		
		//Refs are commonly assigned to an instance property when a component 
		//is constructed so they can be referenced throughout the component.
		this.wrapperRef = React.createRef();
		
		
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSignIn(e) {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.onSignIn(username, password);
    }

    
    handleSubmit(evt) {
        evt.preventDefault();
		
		const self = this;
		const root = ReactDOM.findDOMNode(self.wrapperRef.current);
		const $selectWrapper = __( root );

	
		
        if (!self.state.username) {
            return self.setState({ error: 'Username is required' });
        }

        if (!self.state.password) {
            return self.setState({ error: 'Password is required' });
        }
        
		//control status
		$selectWrapper.find( 'input' ).prop('disabled', true);
		
		
        //
        var formData = new FormData();
        var defaultPostData = {
            action: 'login_check',
			user_name: self.state.username, 
			user_password: self.state.password
        };

        for (var k in defaultPostData) {
          formData.append(k, defaultPostData[k]);
        }
        /*
        // For multiple form fields data acquisition
        const formData = new FormData();
        const oldFormData = $this.serializeArray();
        oldFormData.forEach(function(item){
            formData.append(item.name, item.value);
        });
        formData.append('action', 'load_singlepages_ajax_content');
        */
		AuthService.login(formData).then(function(response) {
			
			console.log('Login Info: ', response);
			
			/*-----------------------------
			 Login successful
			-------------------------------*/
			// This is where you would call Firebase, an API etc...
			if ( response.code === 200 ) {

				//control status

				$selectWrapper.find( 'input' ).prop('disabled', false);

				//update state
				//-----------
				self.setState({
					loginOk: 1,
					user: {
						username: self.state.username
					}
				});	

				return self.setState({ error: '' });


			}

			/*-----------------------------
			 Login failed
			-------------------------------*/
			if ( response.code === 401 || response.code === 419 ) {

				//control status
				//-----------
				$selectWrapper.find( 'input' ).prop('disabled', false);

				//update state
				//-----------
				return self.setState({ error: 'ERROR: '+response.code+': '+response.error+'!' });

			}		
	
		});
	
		
       
    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    
    // App "actions" (functions that modify state)
    signIn(username, password) {
        // This is where you would call Firebase, an API etc...
        // calling setState will re-render the entire app (efficiently!)
        this.setState({
            user: {
                username,
                password,
            }
        })
    }

    signOut() {
		
		AuthService.logout();
		
		
        //update state
        this.setState({
			loginOk: null,
			user: null
		});
		
		
	}
    

    checkLogin() {

		if ( localStorage.getItem('user') ) {
			this.setState({loginOk: 1});	
		}
    }
    
    
    componentDidMount() {
 
        this.checkLogin();
    }

    
    render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)
        return (
          <>


                { 
                  (this.state.loginOk) ? 
					<div>
						Welcome to this page!
						| <a href="javascript:;" onClick={this.signOut.bind(this)}>Sign out</a>
					</div>	
                  :
                    <div ref={this.wrapperRef}>
						<p>Test Account: <code>admin</code> Password: <code>admin</code></p>
                        <form onSubmit={this.handleSubmit.bind(this)}>

                                
                            <div style={{padding: "5px"}}>
                                <label style={{padding: "10px", display: "inline-block", width: "100px"}}>Username</label>
                                <input type="text" value={this.state.username} onChange={this.handleUserChange} />   
                            </div>

                            <div style={{padding: "5px"}}>
                                <label style={{padding: "10px", display: "inline-block", width: "100px"}}>Password</label>
                                <input type="password" value={this.state.password} onChange={this.handlePassChange} />    
                            </div>

                            <div style={{padding: "5px"}}>
                                <label style={{padding: "10px", display: "inline-block", width: "100px"}}></label>
                                <input style={{padding: "5px 25px", background: "#191919", outline: "none", color: "#fff", borderRadius: "30px", border: "none", fontSize: "16px"}} type="submit" value="Log In" />
                            </div>

    
                            <div style={{padding: "5px"}}>
                                <label style={{padding: "10px", display: "inline-block", width: "100px"}}></label>

                                { this.state.error &&
                                    <span onClick={this.dismissError}>
                                        {this.state.error}, <a href="#" onClick={this.dismissError}>back</a>
                                    </span>
                                }

                            </div>
                            
                        </form>
                    </div>
                }     


            


          </>
        );
    }
}

export default LoginPage;

