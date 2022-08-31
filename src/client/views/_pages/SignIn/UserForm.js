import React, { Component } from 'react';

import { __ } from '@/components/_utils/_all';

import AuthService from "@/services/auth-service.js";

class UserForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loginOk: null,
            username: '',
            password: '',
            error: '',
        };


        this.rootRef = React.createRef();
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();


        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
        this.signOut = this.signOut.bind(this);

    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(e) {
        e.preventDefault();

        const self = this;
        const root = self.rootRef.current;
        const $selectWrapper = __(root);



        if (!self.state.username) {
            return self.setState({ error: 'Username is required' });
        }

        if (!self.state.password) {
            return self.setState({ error: 'Password is required' });
        }

        //control status
        $selectWrapper.find('input').prop('disabled', true);


        //
        const formData = new FormData();
        const defaultPostData = {
            action: 'login_check',
            user_name: self.state.username,
            user_password: self.state.password
        };

        for (let k in defaultPostData) {
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
        AuthService.login(formData).then(function (response) {

            console.log('Login Info: ', response);


            /*
            ////////////////////////////////////////////////////////////
            ///////////////   (1) Network or API error   ///////////////
            ////////////////////////////////////////////////////////////
            */
            if (typeof response === typeof undefined) {
                //control status
                $selectWrapper.find('input').prop('disabled', false);

                //update state
                return self.setState({ error: 'ERROR: Unknown!' });
            }

            /*
             ////////////////////////////////////////////////////////////
             ////////////////   (2) Login successful   //////////////////
             ////////////////////////////////////////////////////////////
             */

            // This is where you would call Firebase, an API etc...
            if (response && response.code === 200) {

                //control status
                $selectWrapper.find('input').prop('disabled', false);

                //update state
                self.setState({
                    loginOk: 1
                });

                return self.setState({ error: '' });


            }

            /*
             ////////////////////////////////////////////////////////////
             ////////////////   (3) Login failed       //////////////////
             ////////////////////////////////////////////////////////////
             */
            if (response && (response.code === 401 || response.code === 419)) {

                //control status
                $selectWrapper.find('input').prop('disabled', false);

                //update state
                return self.setState({ error: 'ERROR: ' + response.code + ': ' + response.error + '!' });

            }

        });



    }

    handleUserChange(e) {
        this.setState({
            username: e.target.value,
        });
    };

    handlePassChange(e) {
        this.setState({
            password: e.target.value,
        });
    }

    signOut(e) {
        e.preventDefault();
        AuthService.logout();

        //update state
        this.setState({
            loginOk: null
        });
    }


    checkLogin() {
        if (localStorage.getItem('user')) {
            this.setState({ loginOk: 1 });
        }
    }

    componentDidMount() {
        this.checkLogin();
    }


    render() {

        return (
            <>


                {
                    (this.state.loginOk) ?
                        <div>
                            Welcome to this page!
                            | <a href="#" onClick={this.signOut}>Sign out</a>
                        </div>
                        :
                        <div ref={this.rootRef}>
                            <p>Test Account: <code>admin</code> Password: <code>admin</code></p>
                            <form onSubmit={this.handleSubmit.bind(this)}>


                                <div style={{ padding: "5px" }}>
                                    <label style={{ padding: "10px", display: "inline-block", width: "100px" }}>Username</label>
                                    <input ref={this.usernameRef} type="text" value={this.state.username} onChange={this.handleUserChange} />
                                </div>

                                <div style={{ padding: "5px" }}>
                                    <label style={{ padding: "10px", display: "inline-block", width: "100px" }}>Password</label>
                                    <input ref={this.passwordRef} type="password" value={this.state.password} onChange={this.handlePassChange} />
                                </div>

                                <div style={{ padding: "5px" }}>
                                    <label style={{ padding: "10px", display: "inline-block", width: "100px" }}></label>
                                    <input style={{ padding: "5px 25px", background: "#191919", outline: "none", color: "#fff", borderRadius: "30px", border: "none", fontSize: "16px" }} type="submit" value="Log In" />
                                </div>


                                <div style={{ padding: "5px" }}>
                                    <label style={{ padding: "10px", display: "inline-block", width: "100px" }}></label>

                                    {this.state.error &&
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

export default UserForm;

