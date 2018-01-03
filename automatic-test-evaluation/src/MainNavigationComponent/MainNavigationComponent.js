import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RegisterLoginComponent from "../RegisterLoginComponents/RegisterLoginScreen";
import AddNewStudentComponent from "../AddNewStudentComponent/AddNewStudentComponent";
import BlankManagerFirstStepHandler from "../CreateTemplateComponents/FirstStep/BlankManagerFirstStepHandler";
import BlankManager from "../CreateTemplateComponents/BlankManager";

class MainNavigationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange = (value) => {
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
                        onChange={this.handleChange}

                    >
                        <Tab label="Начало" value="a">
                            <div>
                                <p>

                                </p>
                            </div>
                        </Tab>
                        <Tab label="За нас" value="b">
                            <div className='test'>
                                <BlankManager/>
                            </div>
                        </Tab>
                        <Tab label="Вписване" value="c">
                            <div>
                                <RegisterLoginComponent/>
                            </div>
                        </Tab>
                        <Tab label="Manage Classes" value="d">
                            <div>
                                <AddNewStudentComponent/>
                            </div>
                        </Tab>
                        <Tab label="Генерирай бланка" value='e'>
                            <div>
                                <BlankManager/>
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