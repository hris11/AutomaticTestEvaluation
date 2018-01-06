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
                logout={() => this.props.logout()}
                login={() => this.props.login()}
            />;
        } else {
            return <RegisterLoginComponent
                logged={this.props.logged}
                logout={() => this.props.logout()}
                login={() => this.props.login()}
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