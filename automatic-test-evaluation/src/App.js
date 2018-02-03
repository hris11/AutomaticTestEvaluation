import React, {Component} from 'react';
import MainNavigationComponent from './Navigation/TopNavigation'
import Cookies from 'universal-cookie';

/*
* Copyright (c) 2004-2010 by Internet Systems Consortium, Inc. ("ISC")
Copyright (c) 1995-2003 by Internet Software Consortium*/

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '', // will contain response from AJAX request
            error: '', // will contain any network errors occured from AJAX request
            loginStatus: false,
            loggedMail: ''
        };
        console.log(props);
    }

    handleLogout(event) {
        this.setState({
            loginStatus: false
        });
    }

    handleLogin(email) {
        this.setCookie('email', email, 1);

        this.setState({
            loginStatus: true,
            loggedMail: email
        });
    }

    componentWillMount() {
        if (this.getCookie('email').length > 0) {
            this.setState({
                loginStatus: true,
                loggedMail: this.getCookie('email')
            });
        }
    }

    // TODO: da se citira https://www.w3schools.com/js/js_cookies.asp

    setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    render() {
        return (
            <div>
                <MainNavigationComponent
                    logged={this.state.loginStatus}
                    logout={(event) => this.handleLogout(event)}
                    login={(email) => this.handleLogin(email)}
                    setMail={(mail) => this.setMail(mail)}
                    email={this.state.loggedMail}
                />
            </div>
        );
    }
}

export default App;
