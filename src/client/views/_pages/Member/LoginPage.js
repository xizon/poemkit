import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { __ } from '@uixkit.react/components/_utilities/_all.js';

//get project config
import { API } from '@uixkit.react/config';

const Welcome = ({ onSignOut}) => {
    // This is a dumb "stateless" component
    return (
        <div>
            Welcome to this page!
            | <a href="javascript:;" onClick={onSignOut}>Sign out</a>
        </div>
    )
}


class LoginPage extends Component {
    constructor() {
        super();
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
		const root = ReactDOM.findDOMNode(this.wrapperRef.current);
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
		axios.post(API.LOGIN_REQUEST, formData )
		.then(function (response) {
			
            const jsonData = response.data;

			/*-----------------------------
			 Login successful
			-------------------------------*/
            // This is where you would call Firebase, an API etc...
			
			console.log(jsonData);
			
			if ( jsonData.code === 200 ) {

				//control status
				$selectWrapper.find( 'input' ).prop('disabled', false);


				// Save info
				localStorage.setItem('user',JSON.stringify({
					token: jsonData.data.token
				}));


				// Fire state
				self.setState({
					loginOk: 1,
					user: {
						username: self.state.username
					}
				});	

				return self.setState({ error: '' });


				// Fire `store.dispatch()`
				//dispatch(...)

			}

			/*-----------------------------
			 Login failed
			-------------------------------*/
			if ( jsonData.code === 401 || jsonData.code === 419 ) {

				//control status
				$selectWrapper.find( 'input' ).prop('disabled', false);

				// Clear info
				localStorage.setItem('user', JSON.stringify({}) );


				// Fire state
				return self.setState({ error: 'ERROR: '+jsonData.code+': '+jsonData.error+'!' });


				// Fire `store.dispatch()`
				//dispatch(...)

			}	

           
		}).catch(function (error) {
			return self.setState({ error: 'ERROR: '+error+'!' });
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
		
		// Clear localStorage
		localStorage.setItem('user', JSON.stringify({}) );
		localStorage.clear();
		
        // clear out user from state
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
                    <Welcome 
                     onSignOut={this.signOut.bind(this)} 
                    />
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

