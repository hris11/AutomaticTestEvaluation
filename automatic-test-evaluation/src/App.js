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

    setMail(mail) {
        console.log(mail);
        this.setState({
            loggedMail: mail
        })
    }

    handleLogin(event) {
        const cookies = new Cookies();
        // TODO citirai https://www.npmjs.com/package/universal-cookie
        cookies.set('ate-session', "true", { path: '/' });
        this.setState({
            loginStatus: true
        });
    }

    componentWillMount() {
        console.log(this.getCookie("ate-session"));
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

    makeAjaxRequest(url) {
        console.log('clicked');
        const options = {
            method: 'GET'
        };
        const self = this;
        fetch(url, options)
            .then(function (response) {
                response.text().then(function (data) {
                    self.setState({data: data, error: ''});
                });

            })
            .catch(function (error) {
                self.setState({data: '', error: error});
            });
    }

    render() {
        let data;
        if (this.state.data.length > 0) {
            data = (<p>Data: {this.state.data}</p>);
        }
        let error;
        if (this.state.error.length > 0) {
            error = (<p>Error: {this.state.error}</p>);
        }
        return (
            <div>
                <MainNavigationComponent
                    logged={this.state.loginStatus}
                    logout={(event) => this.handleLogout(event)}
                    login={(event) => this.handleLogin(event)}
                    setMail={(mail) => this.setMail(mail)}
                    email={this.state.loggedMail}
                />
            </div>
        );
    }
}

export default App;
