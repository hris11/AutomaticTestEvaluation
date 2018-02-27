import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RegisterLoginComponent from "../RegisterLoginComponents/RegisterLoginScreen";
import AddNewStudentComponent from "../Class/ClassCreation/AddNewStudent";
import BlankManager from "../CreateTemplateComponents/BlankManager";
import RegisterLoginAccountManager from "./RegisterLoginAccountManager";
import HomeIcon from 'material-ui/svg-icons/action/home';
import AccountCircle from 'material-ui/svg-icons/action/account-box';
import SettingsApplication from 'material-ui/svg-icons/action/build';
import Upload from 'material-ui/svg-icons/file/file-upload';
import Results from 'material-ui/svg-icons/action/assignment';
import UploadPicture from "./UploadPicture";
import BlanksResultList from "../Blanks/BlanksResultList";
import UploadFiles from "../CreateTemplateComponents/SecondStep/UploadFiles";
import Home from "./Home";

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
                            icon={<HomeIcon/>}
                        >
                            <div>
                                <Home/>
                            </div>
                        </Tab>
                        <Tab
                            label="Качване на снимка"
                            value="b"
                            icon={<Upload/>}
                        >
                            <div className='upload-picture'>
                                <UploadPicture/>
                            </div>
                        </Tab>
                        <Tab
                            label="Резултати"
                            value="d"
                            icon={<Results/>}
                        >
                            <div>
                                <BlanksResultList/>
                            </div>
                        </Tab>
                        <Tab
                            label="Генериране на бланка"
                            value='e'
                            icon={<SettingsApplication/>}
                        >
                            <div>
                                <BlankManager
                                    blankTitle={''}
                                    logged={false}
                                    navCall={true}
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
                                    logout={(event) => this.props.logout(event)}
                                    login={(email) => this.props.login(email)}
                                    setMail={(mail) => this.props.setMail(mail)}
                                    email={this.props.email}
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
