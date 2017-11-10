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
        }
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
            this.setState({
                submitState: true
            });
        } else if (this.state.submitState === true) {
            this.setState({
                submitState: false
            })
        }
    }

    checkFirstNameField(event, newName) {
        if (newName.indexOf(' ') >= 0 || newName === "") {
            this.setState({
                firstNameSubmitState: false,
                firstName: newName
            });
        } else {
            this.setState({
                firstNameSubmitState: true,
                firstName: newName
            });
        }

        this.submitStateChecker();
    }

    checkSecondNameField(event, newName) {
        if (newName.indexOf(' ') >= 0 || newName === "") {
            this.setState({
                secondNameSubmitState: false,
                secondName: newName
            });
        } else {
            this.setState({
                secondNameSubmitState: true,
                secondName: newName
            });
        }

        this.submitStateChecker();
    }

    // TODO: da citiram ot kude sum vzel koda : https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    checkEmailField(event, newValueOFEmail) {
        if (!this.validateEmail(newValueOFEmail)) {
            /*
                In case of NOT VALID mail
            */
            this.setState({
                emailSubmitState: false,
                email: newValueOFEmail
            });
        } else {
            /*
                In case of VALID mail
            */
            this.setState({
                emailSubmitState: true,
                email: newValueOFEmail
            });
        }

        this.submitStateChecker();
    }

    checkPasswordField(event, newPassword) {

        // TODO: implement methood that all functions will use to compose error messages

        if (newPassword.search(/[A-Z]/) < 0) {
            // паролата Ви трябва да съдържа главна буква
            this.setState({
                passwordSubmitState: false,
                password: newPassword
            });
        } else if (newPassword.search(/[a-z]/) < 0) {
            // паролата Ви трябва да съдържа малка буква
            this.setState({
                passwordSubmitState: false,
                password: newPassword
            });
        } else if (newPassword.search(/[0-9]/) < 0) {
            // паролата Ви трябва да съдържа цифра
            this.setState({
                passwordSubmitState: false,
                password: newPassword
            });
        } else {
            this.setState({
                passwordSubmitState: true,
                password: newPassword
            })
        }

        this.submitStateChecker();
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
                            disabled={!this.state.submitState}
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default RegisterComponent;