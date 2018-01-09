import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RegisterLoginComponent from "../RegisterLoginComponents/RegisterLoginScreen";
import AddNewStudentComponent from "../Class/ClassCreation/AddNewStudent";
import BlankManager from "../CreateTemplateComponents/BlankManager";
import RegisterLoginAccountManager from "./RegisterLoginAccountManager";
import Home from 'material-ui/svg-icons/action/home';
import AccountCircle from 'material-ui/svg-icons/action/account-box';
import SettingsApplication from 'material-ui/svg-icons/action/build';
import Info from 'material-ui/svg-icons/action/perm-device-information';
import Results from 'material-ui/svg-icons/action/assignment';

class MainNavigationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange(value) {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <div className="navigation-main">
                <MuiThemeProvider>
                    <Tabs
                        value={this.state.value}
                        onChange={(value) => this.handleChange(value)}

                    >
                        <Tab
                            label="Начало"
                            value="a"
                            icon={<Home/>}
                        >
                            <div>
                                <p>

                                </p>
                            </div>
                        </Tab>
                        <Tab
                            label="За нас"
                            value="b"
                            icon={<Info/>}
                        >
                            <div className='test'>
                                <BlankManager/>
                            </div>
                        </Tab>
                        <Tab
                            label="Резултати"
                            value="d"
                            icon={<Results/>}
                        >
                            <div>

                            </div>
                        </Tab>
                        <Tab
                            label="Генерирай бланка"
                            value='e'
                            icon={<SettingsApplication/>}
                        >
                            <div>
                                <BlankManager
                                    // logged={this.props.logged}
                                    logged={false}
                                    navCall={true}
                                    logout={() => this.props.logout()}
                                    login={() => this.props.login()}
                                />
                            </div>
                        </Tab>
                        <Tab
                            label={this.props.logged ? "Профил" : "Вписване"}
                            value="c"
                            icon={<AccountCircle/>}
                        >
                            <div>
                                <RegisterLoginAccountManager
                                    logged={this.props.logged}
                                    logout={() => this.props.logout()}
                                    login={() => this.props.login()}
                                />
                            </div>
                        </Tab>
                    </Tabs>
                </MuiThemeProvider>
                <div className="printable-page">

                </div>
            </div>
        );
    }
}

export default MainNavigationComponent;