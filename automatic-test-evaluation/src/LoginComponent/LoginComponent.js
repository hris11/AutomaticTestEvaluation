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
            submitState: true
        }
    }

    loginSubmit() {
        console.log("Username: " + this.state.username + " Password: " + this.state.password)
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
                            onChange = {(event,newValue) => this.checkEmailField({username:newValue})}
                        /> <br/>

                        <TextField
                            type="password"
                            hintText="Въведете парола"
                            floatingLabelText="Парола"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <RaisedButton
                            label="Вписване"
                            primary={true}
                            style={style}
                            onClick={() => this.loginSubmit()}
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