import React, {Component} from 'react';
import MainNavigationComponent from './Navigation/TopNavigation'
import RestCalls from "./RESTCalls/RestCalls";
import UploadPicture from "./Navigation/UploadPicture";
import {MuiThemeProvider} from "material-ui";
import FooterComponent from "./FooterComponent/FooterComponent";



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '', // will contain response from AJAX request
            error: '', // will contain any network errors occured from AJAX request
            loginStatus: false,
            loggedMail: ''
        };
    }

    handleLogout(event) {
        this.setState({
            loginStatus: false,
            loggedMail: ''
        });
        this.setCookie("email", "", "expires=Thu, 01 Jan 1970 00:00:01 GMT");

        const url = '/rest/auth/logout';

        let callback = (response) => {

        };

        RestCalls.post(url, undefined, null, callback, null);
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
        } else {
            this.setState({
                loginStatus: false,
                loggedMail: ''
            });
        }
    }

    /*
    * The next part of code is taken from: https://www.w3schools.com/js/js_cookies.asp
    * */

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
        console.log("width", window);
        if (window.innerWidth <= 800 && window.innerHeight <= 600) {
            return (
                <div>
                    <MuiThemeProvider>
                    <UploadPicture/>
                    </MuiThemeProvider>
                </div>
            );
        }
        return (
            <div>
                <MainNavigationComponent
                    logged={this.state.loginStatus}
                    logout={(event) => this.handleLogout(event)}
                    login={(email) => this.handleLogin(email)}
                    setMail={(mail) => this.setMail(mail)}
                    email={this.state.loggedMail}
                />

                <FooterComponent/>
            </div>
        );
    }
}

export default App;
