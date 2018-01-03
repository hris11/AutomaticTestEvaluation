import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, {Component} from 'react'

class LoginComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            emailSubmitState: false,
        }
    }

    handleLoginSubmit() {
        console.log("Username: " + this.state.username + " Password: " + this.state.password)
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
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        {/*<AppBar
                            title="Вписване"
                        />*/}
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
                            onClick={() => this.handleLoginSubmit()}
                            disabled={!this.handleSubmitButtonState()}
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15
};
const restPath = 'spagethi';

export default LoginComponent;