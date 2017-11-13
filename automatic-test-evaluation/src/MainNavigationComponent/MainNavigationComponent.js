import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RegisterLoginComponent from "../RegisterLoginComponent/RegisterLoginComponent";
import AddNewStudentComponent from "../AddNewStudentComponent/AddNewStudentComponent";

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    fullBody: {
        width: "90%",
        background: "pink",
    },
};

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
            <MuiThemeProvider>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <Tab label="Начало" value="a">
                        <div className={styles.full}>
                            <p>

                            </p>
                        </div>
                    </Tab>
                    <Tab label="За нас" value="b">
                        <div>
                            <h2 style={styles.headline}>Controllable Tab B</h2>
                            <p>
                                This is another example of a controllable tab. Remember, if you
                                use controllable Tabs, you need to give all of your tabs values or else
                                you wont be able to select them.
                            </p>
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
                </Tabs>
            </MuiThemeProvider>
        );
    }
}

export default MainNavigationComponent;