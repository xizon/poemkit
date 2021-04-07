import React, { Component, Fragment } from 'react';
import axios from 'axios';



const Welcome = ({user, onSignOut}) => {
    // This is a dumb "stateless" component
    return (
        <div>
            Welcome <strong>{user.username}</strong>!
            <a href="javascript:;" onClick={onSignOut}>Sign out</a>
        </div>
    )
}


class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            username: '',
            password: '',
            error: '',
        };

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

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }
        
        
        var formData = new FormData();
        var defaultPostData = {
          action: 'login_check'
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
        axios({
          timeout: 15000,
          method: 'get',
          url: 'https://api.github.com/users',
          data: formData,
          responseType: 'json'
        }).then(function (response) {

            const jsonData = response.data;

            console.log( jsonData );
   

        })
        .catch(function (error) {

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                const status = error.response.status;
                console.log(status);



            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);

                //
            } else {
                // If there was a problem, we need to
                // dispatch the error condition
                console.log(error.message);
            }
        });

        
        
        // login successfully
        // This is where you would call Firebase, an API etc...
        // calling setState will re-render the entire app (efficiently!)
        this.setState({
            user: {
                username: this.state.username
            }
        });
        

        return this.setState({ error: '' });
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
        // clear out user from state
        this.setState({user: null});
    }
    

    checkLogin() {

    }
    
    
    componentDidMount() {
 
        this.checkLogin();
    }

    
    render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)
        return (
          <Fragment>

            
                { 
                  (this.state.user) ? 
                    <Welcome 
                     user={this.state.user} 
                     onSignOut={this.signOut.bind(this)} 
                    />
                  :
                    <div className="Login">
                        <form onSubmit={this.handleSubmit.bind(this)}>

                                
                            <div style={{padding: "5px"}}>
                                <label style={{padding: "10px", display: "inline-block", "width": "62px"}}>Username</label>
                                <input type="text" value={this.state.username} onChange={this.handleUserChange} />   
                            </div>

                            <div style={{padding: "5px"}}>
                                <label style={{padding: "10px", display: "inline-block", "width": "62px"}}>Password</label>
                                <input type="password" value={this.state.password} onChange={this.handlePassChange} />    
                            </div>

                            <div style={{padding: "5px"}}>
                                <label style={{padding: "10px", display: "inline-block", "width": "62px"}}></label>
                                <input type="submit" value="Log In" />
                            </div>


                            <div style={{padding: "5px"}}>
                                <label style={{padding: "10px", display: "inline-block", "width": "62px"}}></label>

                                { this.state.error &&
                                    <span onClick={this.dismissError}>
                                        {this.state.error}, <a href="#" onClick={this.dismissError}>back</a>
                                    </span>
                                }

                            </div>
                            
                        </form>
                    </div>
                }     


            


          </Fragment>
        );
    }
}

export default LoginPage;

