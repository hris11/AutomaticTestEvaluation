import React,{Component} from 'react';
import AccountManager from "./AccountManager";
import RegisterLoginComponent from "../RegisterLoginComponents/RegisterLoginScreen";

class RegisterLoginAccountManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginMessage: '',
            componentForRender: undefined
        }
    }

    renderHandler() {
        if (this.props.logged === true) {
            return <AccountManager
                logged={this.props.logged}
                logout={(event) => this.props.logout(event)}
                email={this.props.email}
            />;
        } else {
            return <RegisterLoginComponent
                logged={this.props.logged}
                logout={(event) => this.props.logout(event)}
                login={(email) => this.props.login(email)}
                setMail={(mail) => this.props.setMail(mail)}
            />;
        }
    }

    render() {
        return (
            <div>
                {this.renderHandler()}
            </div>
        );
    }
}

export default RegisterLoginAccountManager;