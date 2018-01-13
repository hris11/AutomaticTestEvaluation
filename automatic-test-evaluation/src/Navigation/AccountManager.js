import React, {Component} from 'react';
import {Paper, RaisedButton} from "material-ui";
import ExitAccount from 'material-ui/svg-icons/action/account-circle';
import NewClass from 'material-ui/svg-icons/content/add-circle';
import ClassesListPreview from "../Class/ClassesPreview/ClassesListPreview";
import ClassBox from "../Class/ClassCreation/ClassBox";
import './AccountManager.css'
import ModifyClass from "../Class/ClassCreation/ModifyClass";

class AccountManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationDisplayContent: 'class-list-preview',
            currentClass: ''
        }
    }

    handleNewClassButton(event) {
        this.setState({
            navigationDisplayContent: 'class-box'
        });
    }

    handlePreviewClasses(event) {
        this.setState({
            navigationDisplayContent: 'class-list-preview'
        });
    }

    handleModifyClass(classTitle) {
        this.setState({
            navigationDisplayContent: 'modify-class',
            currentClass: classTitle
        });
    }

    getContent() {
        switch (this.state.navigationDisplayContent) {
            case 'class-list-preview': {
                return <ClassesListPreview
                    email={this.props.email}
                    modifyClass={(classTitle) => this.handleModifyClass(classTitle)}
                />
            }
            case 'class-box': {
                return <ClassBox
                    email={this.props.email}
                />
            }
            case 'modify-class': {
                return <ModifyClass
                    classTitle={this.state.currentClass}
                    email={this.props.email}
                />
            }
        }
    }

    render() {
        return (
            <div className="account-manager">
                <div className="account-navigation">
                    {/*
                        navigation:
                            -   logout
                            -   create class
                            -   compare classes
                            -   etc
                    */}
                    <RaisedButton
                        className="account-navigation-button"
                        primary={true}
                        label="Излез от профила"
                        icon={<ExitAccount/>}
                        onClick={(event) => this.props.logout(event)}
                    />
                    <RaisedButton
                        className="account-navigation-button"
                        primary={true}
                        onClick={(event) => this.handleNewClassButton(event)}
                        label="Нов Клас"
                        icon={<NewClass/>}
                    />
                    <RaisedButton
                        className="account-navigation-button"
                        primary={true}
                        onClick={(event) => this.handlePreviewClasses(event)}
                        label="Мойте класове"
                        icon={<NewClass/>}
                    />
                    <RaisedButton
                        className="account-navigation-button"
                        primary={true}
                        onClick={(event) => this.handleNewClassButton(event)}
                        label="Сравни класове"
                    />
                </div>

                <div className="account-workplace">
                    <Paper zDepth={2}>
                        <div className="account-inner-workplace">
                            {this.getContent()}
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default AccountManager;