import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import './Register.css'
import {CircularProgress} from "material-ui";
import RestCalls from '../RESTCalls/RestCalls'

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            firstNameSubmitState: false,
            lastNameSubmitState: false,
            emailSubmitState: false,
            passwordSubmitState: false,
            passwordError: '',
            registerStatus: 1
        }
    }



    registerSubmit() {
        this.handleRegisterStatus(3);
        /*
        * Started spinner*/
        let url = "/rest/auth/register";

        let body = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            classes: [{name: 'test'}, {name: 'test2'}, {name: 'test3'}]
        };

        const self = this;
        const success = (response) => {
            if (response.ok) {
                /*
                * Welcome message*/
                self.handleRegisterStatus(2);
            } else {
                /*
                * Return to register*/
                self.handleRegisterStatus(1);
            }
        };

        RestCalls.post(url, undefined, body, success);

    }

    handleRegisterStatus(value) {
        this.setState({
            registerStatus: value
        });
    }

    submitStateChecker() {
        if (this.state.firstNameSubmitState === true &&
            this.state.lastNameSubmitState === true &&
            this.state.emailSubmitState === true &&
            this.state.passwordSubmitState === true) {
            return true;
        } else { // TODO: edit
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

    checkLastNameField(event, newName) {
        let state;
        if (newName.indexOf(' ') >= 0 || newName === "") {
            state = {
                lastNameSubmitState: false,
                lastName: newName
            };
        } else {
            state = {
                lastNameSubmitState: true,
                lastName: newName
            };
        }

        this.setState(state);
    }

    // TODO: da citiram ot kude sum vzel koda : https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
        let state;
        if (newPassword.search(/[A-Z]/) < 0) {
            state = {
                passwordSubmitState: false,
                password: newPassword,
                passwordError: 'паролата Ви трябва да съдържа главна буква'
            };
        } else if (newPassword.search(/[a-z]/) < 0) {
            state = {
                passwordSubmitState: false,
                password: newPassword,
                passwordError: 'паролата Ви трябва да съдържа малка буква'
            };
        } else if (newPassword.search(/[0-9]/) < 0) {
            state = {
                passwordSubmitState: false,
                password: newPassword,
                passwordError: 'паролата Ви трябва да съдържа цифра'
            };
        } else if (newPassword.length < 8) {
            state = {
                passwordSubmitState: false,
                password: newPassword,
                passwordError: 'паролата Ви трябва да е поне 8 символа'
            };
        } else {
            state = {
                passwordSubmitState: true,
                password: newPassword,
                passwordError: ''
            };
        }

        this.setState(state);
    }

    firstNameErrorChecking() {
        if (this.state.firstName === '') {
            return "Въвеждането на това поле е задължително";
        } else if (this.state.firstNameSubmitState === false) {
            return "Полето не трябва да съдържа символи, различни от букви";
        } else {
            return false;
        }
    }

    secondNameErrorChecking() {
        if (this.state.lastName === '') {
            return "Въвеждането на това поле е задължително";
        } else if (this.state.lastNameSubmitState === false) {
            return "Полето не трябва да съдържа символи, различни от букви";
        } else {
            return false;
        }
    }

    emailErrorChecking() {
        if (this.state.email === '') {
            return "Въвеждането на това поле е задължително";
        } else if (this.state.emailSubmitState === false) {
            return "Имейлът е невалиден";
        } else {
            return false;
        }
    }

    passwordErrorChecking() {
        if (this.state.password === '') {
            return "Въвеждането на това поле е задължително";
        } else if (this.state.passwordError !== '') {
            return this.state.passwordError;
        } else {
            return false;
        }
    }

    getRegisterContent() {
        if (this.state.registerStatus === 1) {
            return (<MuiThemeProvider>
                <div>
                    {/*<AppBar
                            title="Регистрация"
                        />*/}
                    <TextField
                        hintText="Въведете име"
                        floatingLabelText="Име"
                        onChange={(event, newValue) => this.checkFirstNameField(event, newValue)}
                        errorText={this.firstNameErrorChecking()}
                    />
                    <br/>
                    <TextField
                        hintText="Въведете фамилия"
                        floatingLabelText="Фамилия"
                        onChange={(event, newValue) => this.checkLastNameField(event, newValue)}
                        errorText={this.secondNameErrorChecking()}
                    />
                    <br/>
                    <TextField
                        hintText="Въведете Email"
                        type="email"
                        floatingLabelText="Email"
                        onChange={(event, newValue) => this.checkEmailField(event, newValue)}
                        errorText={this.emailErrorChecking()}
                    />
                    <br/>
                    <TextField
                        hintText="Въведете парола"
                        type="password"
                        floatingLabelText="Парола"
                        onChange={(event, newValue) => this.checkPasswordField(event, newValue)}
                        errorText={this.passwordErrorChecking()}
                    />
                    <br/>
                    <RaisedButton
                        className="register-submit-button"
                        label="Регистритране"
                        primary={true}
                        onClick={(event) => this.registerSubmit(event)}
                        disabled={!this.submitStateChecker()}
                    />
                </div>
            </MuiThemeProvider>);
        } else if (this.state.registerStatus === 2) {
            return (
                <div>
                    Регистрирахте се успешно
                    <br/>
                    {this.state.firstName} {this.state.lastName}
                </div>
            );
        } else if (this.state.registerStatus === 3) {
            return (
                <div>
                    <CircularProgress />
                </div>
            );
        } else {
            return (
                <div>
                    An error appeared
                </div>
            );
        }
    }

    render() {
        return (
            <div className="register-block">
                {this.getRegisterContent()}
            </div>
        );
    }
}

export default RegisterComponent;
