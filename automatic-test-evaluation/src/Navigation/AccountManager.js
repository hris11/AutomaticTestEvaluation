import React, {Component} from 'react';
import {RaisedButton} from "material-ui";
import ExitAccount from 'material-ui/svg-icons/action/account-circle';
import NewClass from 'material-ui/svg-icons/content/add-circle';
import ClassesListPreview from "../Class/ClassesPreview/ClassesListPreview";
import ClassBox from "../Class/ClassCreation/ClassBox";

class AccountManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationDisplayContent: <ClassesListPreview/>
        }
    }

    handleNewClassButton(event) {
        this.setState({
            navigationDisplayContent: <ClassBox/>
        })
    }

    render() {
        return (
            <div>
                sum deep shit
                <div className="account-navigation">
                    {/*
                        navigation:
                            -   logout
                            -   create class
                            -   compare classes
                            -   etc
                    */}
                    <RaisedButton
                        primary={true}
                        label="Излез от профила"
                        icon={<ExitAccount/>}
                    />
                    <RaisedButton
                        primary={true}
                        onClick={(event) => this.handleNewClassButton(event)}
                        label="Нов Клас"
                        icon={<NewClass/>}
                    />
                </div>

                <div>
                    {this.state.navigationDisplayContent}
                </div>

                <div className="account-classes">
                    {/*
                        lists all user classes like catalog
                    */}
                </div>
            </div>
        );
    }
}

export default AccountManager;