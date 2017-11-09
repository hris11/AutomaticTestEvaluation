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
            submitState: true,
            errorMessage: ''
        }
    }

    registerSubmit() {
        // here is where the magic happens
        // here we send the registration information to the backend and expect to be sent confirmation mail to the user's
        // mail
        // the router magic is here
    }

    checkFirstNameField(event, newName) {
        let otherErrorMessages = this.state.errorMessage;
        let nameArray = newName.split('');

        // TODO: to styleies the error messages

        if (nameArray.contain(' ')) {
            this.setState({
                submitState: false,
                errorMessage: otherErrorMessages.concat("Сгрешено име")
            });
        } else {
            this.setState({
                firstName: newName
            });
        }
    }

    checkSecondNameField(event, newName) {
        let otherErrorMessages = this.state.errorMessage;
        let nameArray = newName.split('');

        if (nameArray.contain(' ')) {
            this.setState({
                submitState: false,
                errorMessage: otherErrorMessages.concat("Сгрешенa фамилия")
            });
        } else {
            this.setState({
                secondName: newName
            });
        }
    }

    checkEmailField(event, newValueOFEmail) {
        // Check if the mail is in valid form

        if (true);
        /*
            In case of miss spelled mail
        */
        this.setState({
            buttonState: false
        });
        /*
            In case of right typed mail
        */
        this.setState({
            email: newValueOFEmail,
            buttonState: true
        });
    }

    checkPasswordField(event, newPassword) {
        let passwordArray = newPassword.split('');
        let otherErrorMessages = this.state.errorMessage;

        // TODO: implement methood that all functions will use to compose error messages

        if (!passwordArray.contain(/[A-Z]/)) {
            this.setState({
                buttonState: false,
                errorMessage: otherErrorMessages
                // паролата Ви трябва да съдържа главна буква
            });
        }
        if (!passwordArray.contain(/[a-z]/)) {
            this.setState({
                buttonState: false,
                errorMessage: otherErrorMessages
                // паролата Ви трябва да съдържа малка буква
            });
        }
        if (!passwordArray.contain(/[0-9]/)) {
            this.setState({
                buttonState: false,
                errorMessage: otherErrorMessages
                // паролата Ви трябва да съдържа главна буква
            });
        }
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
                            style={style}
                            onClick={(event) => this.registerSubmit(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default RegisterComponent;