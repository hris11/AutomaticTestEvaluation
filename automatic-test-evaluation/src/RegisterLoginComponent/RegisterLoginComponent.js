import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from '../LoginComponent/LoginComponent';
import Register from '../RegisterComponent/RegisterComponent';

const compsStyle = {
    content: 'center',
    margin: "auto",
    width: 400,
};

class RegisterLoginComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            loginscreen:[],
            loginmessage:'',
            buttonLabel:'Регистриране',
            isLogin:true
        }
    }

    handleClick(event){
        var loginmessage;
        if(this.state.isLogin){
            var loginscreen=[];
            loginscreen.push(<Register parentContext={this}/>);
            loginmessage = "Вече сте регистрирани, впишете се!";
            this.setState({
                loginscreen:loginscreen,
                loginmessage:loginmessage,
                buttonLabel:"Вписване",
                isLogin:false
            })
        }
        else{
            loginscreen=[];
            loginscreen.push(<Login parentContext={this}/>);
            loginmessage = "Още нямате регистрация, регистрирайте се сега!";
            this.setState({
                loginscreen:loginscreen,
                loginmessage:loginmessage,
                buttonLabel:"Регистриране",
                isLogin:true
            })
        }
    }

    componentWillMount(){
        var loginscreen=[];
        loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
        var loginmessage = "Още нямате регистрация, регистрирайте се сега!";
        this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage
        })
    }
    render() {
        return (
            <div className="loginscreen" style={compsStyle}>
                {this.state.loginscreen}
                <div>
                    {this.state.loginmessage}
                    <MuiThemeProvider>
                        <div>
                            <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default RegisterLoginComponent;