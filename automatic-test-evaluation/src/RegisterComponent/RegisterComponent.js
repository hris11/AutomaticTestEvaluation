import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class RegisterComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            submitState: false,
            firstNameSubmitState: false,
            secondNameSubmitState: false,
            emailSubmitState: false,
            passwordSubmitState: false
        };
    }

    registerSubmit() {
        // here is where the magic happens
        // here we send the registration information to the backend and expect to be sent confirmation mail to the user's
        // mail
        // the router magic is here
    }

    submitStateChecker() {
        console.log("first: " + this.state.firstNameSubmitState,
                "second: " + this.state.secondNameSubmitState,
                "mail: " + this.state.emailSubmitState,
                "pass: " + this.state.passwordSubmitState);
        
        if (this.state.firstNameSubmitState === true &&
            this.state.secondNameSubmitState === true &&
            this.state.emailSubmitState === true &&
            this.state.passwordSubmitState === true) {
            return true;
        } else if (this.state.submitState === true) {
            return false;
        }
    }

    checkFirstNameField(event, newName) {
        let state;
        if (newName.indexOf(' ') >= 0 || newName === "") {
            state = {
                firstNameSubmitState: false,
                firstName: newName
            };
        } else {
            state = {
                firstNameSubmitState: true,
                firstName: newName
            };
        }
        
        this.setState(state);
    }

    checkSecondNameField(event, newName) {
        let state;
        if (newName.indexOf(' ') >= 0 || newName === "") {
            state = {
                secondNameSubmitState: false,
                secondName: newName
            };
        } else {
            state = {
                secondNameSubmitState: true,
                secondName: newName
            };
        }

        this.setState(state);
    }

    // TODO: da citiram ot kude sum vzel koda : https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
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

    checkPasswordField(event, newPassword) {

        // TODO: implement methood that all functions will use to compose error messages

        let state;
        if (newPassword.search(/[A-Z]/) < 0) {
            // паролата Ви трябва да съдържа главна буква
            state = {
                passwordSubmitState: false,
                password: newPassword
            };
        } else if (newPassword.search(/[a-z]/) < 0) {
            // паролата Ви трябва да съдържа малка буква
            state = {
                passwordSubmitState: false,
                password: newPassword
            };
        } else if (newPassword.search(/[0-9]/) < 0) {
            // паролата Ви трябва да съдържа цифра
            state = {
                passwordSubmitState: false,
                password: newPassword
            };
        } else {
            state = {
                passwordSubmitState: true,
                password: newPassword
            };
        }

        this.setState(state);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Регистрация"
                        />
                        <TextField
                            hintText="Въведете име"
                            floatingLabelText="Име"
                            onChange = {(event, newValue) => this.checkFirstNameField(event, newValue)}
                        />
                        <br/>
                        <TextField
                            hintText="Въведете фамилия"
                            floatingLabelText="Фамилия"
                            onChange = {(event, newValue) => this.checkSecondNameField(event, newValue)}
                        />
                        <br/>
                        <TextField
                            hintText="Въведете Email"
                            type="email"
                            floatingLabelText="Email"
                            onChange = {(event, newValue) => this.checkEmailField(event, newValue)}
                        />
                        <br/>
                        <TextField
                            hintText="Въведете парола"
                            type = "password"
                            floatingLabelText="Парола"
                            onChange = {(event, newValue) => this.checkPasswordField(event, newValue)}
                        />
                        <br/>
                        <RaisedButton
                            label="Регистритране"
                            primary={true}
                            onClick={(event) => this.registerSubmit(event)}
                            disabled={!this.submitStateChecker()}
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default RegisterComponent;