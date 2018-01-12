import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, {Component} from 'react'
import {CircularProgress} from "material-ui";

class LoginComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            emailSubmitState: false,
            loginContent: 'login'
        }
    }

    handleLoginSubmit(event) {
        console.log("Starting fetch");
        this.handleLoginStatus('spinner');
        let url = "/rest/auth/login";

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        const options = {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),
            headers: headers
        };
        const self = this;
        fetch(url, options)
            .then(function (response) {
                if (response.ok) {
                    self.handleLoginStatus('success');
                    console.log("from login: " + self.state.email);
                    self.props.setMail(self.state.email)
                } else if(response.status === 401) {
                    self.handleLoginStatus('login');
                } else {
                    console.log("Kefi se");
                }
            })
        .catch(function (error) {
            console.error(error);        
        });
    }

    getLoginContent() {
        if (this.state.loginContent === 'login') {
            return (
                <MuiThemeProvider>
                    <div>
                        <TextField
                            hintText="Въведете Email"
                            floatingLabelText="Email"
                            onChange = {(event, newValue) => this.checkEmailField(event, newValue)}
                        /> <br/>

                        <TextField
                            type="password"
                            hintText="Въведете парола"
                            floatingLabelText="Парола"
                            onChange = {(event, newValue) => this.setState({password: newValue})}
                        />
                        <br/>
                        <RaisedButton
                            label="Вписване"
                            primary={true}
                            style={style}
                            onClick={(event) => this.handleLoginSubmit(event)}
                            disabled={!this.handleSubmitButtonState()}
                        />
                    </div>
                </MuiThemeProvider>
            );
        } else if (this.state.loginContent === 'spinner') {
            return (
                <div>
                    <CircularProgress />
                </div>
            );
        } else if (this.state.loginContent === 'success') {
            return (
                <div>
                    WELCOME
                    <RaisedButton
                        label="Напред"
                        primary={true}
                        onClick={(event) => this.props.login(event)}
                    />
                </div>
            );
        } else {
            return (
                <div>
                    Error apeared;
                </div>
            );
        }
    }

    handleLoginStatus(screen) {
        this.setState({
            loginContent: screen
        });
    }

    handleSubmitButtonState() {
        if (this.state.emailSubmitState === true && this.state.password !== '') {
            return true;
        }

        return false;
    }

    checkEmailField(event, newValueOFEmail) {
        let state;
        if (!this.validateEmail(newValueOFEmail)) {
            /*
                In case of NOT VALID mail
            */
            state = {
                emailSubmitState: false,
                email: newValueOFEmail
            };
        } else {
            /*
                In case of VALID mail
            */
            state = {
                emailSubmitState: true,
                email: newValueOFEmail
            };
        }

        this.setState(state);
    }

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    render() {
        return (
            <div>
                {this.getLoginContent()}
            </div>
        );
    }
}

const style = {
    margin: 15
};

export default LoginComponent;