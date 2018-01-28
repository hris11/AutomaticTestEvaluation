import React, {Component} from 'react';
import {Paper, RaisedButton} from "material-ui";
import ExitAccount from 'material-ui/svg-icons/action/account-circle';
import NewClass from 'material-ui/svg-icons/content/add-circle';
import ClassesListPreview from "../Class/ClassesPreview/ClassesListPreview";
import ClassBox from "../Class/ClassCreation/ClassBox";
import './AccountManager.css'
import ModifyClass from "../Class/ClassCreation/ModifyClass";
import BlankManager from "../CreateTemplateComponents/BlankManager";
import ModifyBlanks from "../Class/ClassCreation/ModifyBlanks";
import PrintPage from "../CreateTemplateComponents/PrintPage/PrintPage";
import RestCalls from "../RESTCalls/RestCalls";

class AccountManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationDisplayContent: 'class-list-preview',
            currentClass: '',
            currentClassId: 0,
            newBlankName: '',
            childResponse: {},
            students: {}
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

    handleModifyBlanks(classId, className) {
        this.setState({
            navigationDisplayContent: 'modify-blanks',
            currentClassId: classId,
            currentClass: className
        });
    }

    handleNewBlank(blankTitle) {
        this.setState({
            navigationDisplayContent: 'new-blank',
            newBlankName: blankTitle
        });
    }

    getContent() {
        switch (this.state.navigationDisplayContent) {
            case 'class-list-preview': {
                return <ClassesListPreview
                    email={this.props.email}
                    modifyClass={(classTitle) => this.handleModifyClass(classTitle)}
                    modifyBlanks={(classId) => this.handleModifyBlanks(classId)}
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
            case 'modify-blanks': {
                return <ModifyBlanks
                    classId={this.state.currentClassId}
                    handleNewBlank={(blankTitle) => this.handleNewBlank(blankTitle)}
                    displayBlank={(response) => this.displayBlank(response)}
                />
            }
            case 'new-blank': {
                return <BlankManager
                    blankTitle={this.state.newBlankName}
                    logged={this.props.logged}
                    navCall={false}
                    classId={this.state.currentClassId}
                />
            }
            case 'display-blank': {
                let data = Object.assign([], this.state.students);
                let self = this;
                console.log(data.students);
                
                return data.students.map(function (student, index) {
                    return (
                        <PrintPage
                            numberToggle={false}
                            groupToggle={false}
                            classToggle={false}
                            nameToggle={false}
                            listNameToggle={true}
                            listNumberToggle={true}
                            sliderValue={self.state.childResponse.numberOfAnswers}
                            eachAnswerNumberOfOptions={self.state.childResponse.answers}

                            navCall={false}
                            student={student}
                            blankId={self.state.childResponse.id}
                        />
                    );
                });
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

    displayBlank(blankResponse) {
        const url = `/rest/user/classes/${this.state.currentClassId}`;
        let self = this;

        let callback = (response) => {
            if (response.ok) {
                response.json().then(function (response) {
                    self.setState({
                        childResponse: blankResponse,
                        students: response,
                        navigationDisplayContent: 'display-blank'
                    });
                });
            }
        };

        RestCalls.get(url, callback)

    }
}

export default AccountManager;