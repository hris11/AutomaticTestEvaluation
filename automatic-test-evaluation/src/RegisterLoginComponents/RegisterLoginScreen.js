import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
import './RegisterLoginScreen.css'
import {Divider, Paper} from "material-ui";

class RegisterLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginscreen: [],
            loginmessage: '',
            buttonLabel: 'Регистриране',
            isLogin: true
        }
    }

    handleClick(event) {
        let loginmessage;
        if (this.state.isLogin) {
            let loginscreen = [];
            loginscreen.push(<Register
                key="Register"
                parentContext={this}
            />);
            loginmessage = "Вече сте регистрирани, впишете се!";
            this.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Вписване",
                isLogin: false
            })
        }
        else {
            let loginscreen = [];
            loginscreen.push(<Login
                key="Login"
                parentContext={this}
            />);
            loginmessage = "Още нямате регистрация, регистрирайте се сега!";
            this.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Регистриране",
                isLogin: true
            })
        }
    }

    componentWillMount() {
        let loginscreen = [];
        loginscreen.push(<Login
            key="LoginFirstMount"
            parentContext={this}
            appContext={this.props.parentContext}/>);
        let loginmessage = "Още нямате регистрация, регистрирайте се сега!";
        this.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage
        });
    }

    render() {
        return (
            <div className="paper-box">
                <Paper>
                    <div className="register-login-screen">
                        {this.state.loginscreen}
                        <Divider/>
                        <div className="register-login-screen-navigation">
                            <div>
                                {this.state.loginmessage}
                            </div>

                            <MuiThemeProvider>
                                <div>
                                    <RaisedButton
                                        label={this.state.buttonLabel}
                                        primary={true}
                                        style={style}
                                        onClick={(event) => this.handleClick(event)}/>
                                </div>
                            </MuiThemeProvider>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

const style = {
    margin: 15,
};
export default RegisterLoginComponent;