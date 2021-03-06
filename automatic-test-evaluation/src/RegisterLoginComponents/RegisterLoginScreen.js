import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
import './RegisterLoginScreen.css'
import {Divider, Paper} from "material-ui";

/*
* Some parts of the code are taken from: https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede*/

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
                logged={this.props.logged}
                logout={(event) => this.props.logout(event)}
                login={(email) => this.props.login(email)}
                key="Register"
                parentContext={this}
            />);
            loginmessage = "Вече сте регистрирани, впишете се!";
            this.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Вписване",
                isLogin: false
            });
        }
        else {
            let loginscreen = [];
            loginscreen.push(<Login
                logged={this.props.logged}
                logout={(event) => this.props.logout(event)}
                login={(email) => this.props.login(email)}
                setMail={(mail) => this.props.setMail(mail)}
                key="Login"
                parentContext={this}
            />);
            loginmessage = "Още нямате регистрация, регистрирайте се сега!";
            this.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Регистриране",
                isLogin: true
            });
        }
    }

    componentWillMount() {
        let loginScreen = [];
        loginScreen.push(<Login
            logged={this.props.logged}
            logout={(event) => this.props.logout(event)}
            login={(email) => this.props.login(email)}
            setMail={(mail) => this.props.setMail(mail)}
            key="LoginFirstMount"
            parentContext={this}
            appContext={this.props.parentContext}/>);
        let loginmessage = "Още нямате регистрация, регистрирайте се сега!";
        this.setState({
            loginscreen: loginScreen,
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