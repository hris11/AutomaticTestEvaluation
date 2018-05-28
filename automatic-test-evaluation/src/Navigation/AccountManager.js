import React, {Component} from 'react';
import {Paper, RaisedButton} from "material-ui";
import ExitAccount from 'material-ui/svg-icons/action/account-circle';
import NewClass from 'material-ui/svg-icons/content/add-circle';
import Compare from 'material-ui/svg-icons/action/compare-arrows';
import Class from 'material-ui/svg-icons/action/class';
import ClassesListPreview from "../Class/ClassesPreview/ClassesListPreview";
import ClassBox from "../Class/ClassCreation/ClassBox";
import './AccountManager.css'
import ModifyClass from "../Class/ClassCreation/ModifyClass";
import BlankManager from "../CreateTemplateComponents/BlankManager";
import ModifyBlanks from "../Class/ClassCreation/ModifyBlanks";
import PrintPage from "../CreateTemplateComponents/PrintPage/PrintPage";
import RestCalls from "../RESTCalls/RestCalls";
import BlankResult from "../Class/ClassCreation/BlankResult";
import UploadFiles from "../CreateTemplateComponents/SecondStep/UploadFiles";
import ClassMarks from "../Blanks/ClassMarks";

class AccountManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationDisplayContent: 'class-list-preview',
            currentClass: '',
            currentClassId: 0,
            newBlankName: '',
            childResponse: {},
            students: {},
            result: null,
            blankId: null
        }
    }

    handleNewClassButton(event) {
        this.setState({
            navigationDisplayContent: 'class-box'
        });
    }

    handleAllClassMarks(event) {
        this.setState({
            navigationDisplayContent: 'class-marks'
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
                    displayBlankResult={(response) => this.displayBlankResult(response)}
                    displayMaterialBar={(id) => this.displayMaterialBar(id)}
                    handlePreviewClasses={(evt) => this.handlePreviewClasses(evt)}
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
                console.log('students', data.students);
                
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

            case 'display-result': {
                return (
                    <BlankResult
                        blankId={this.state.blankId}
                    />
                );
            }

            case 'new-materials-bar': {
                return (
                    <UploadFiles
                        handlePreviewClasses={(evt) => this.handlePreviewClasses(evt)}
                        blankId={this.state.blankId}
                    />
                );
            }

            case 'class-marks': {
                return (
                    <ClassMarks/>
                );
            }
        }
    }

    render() {
        const displayClass = this.state.navigationDisplayContent === 'display-blank'
            ? 'class-blanks'
            : 'account-inner-workplace';
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
                        label="Излизане от профила"
                        icon={<ExitAccount/>}
                        onClick={(event) => this.logout(event)}
                    />
                    <RaisedButton
                        className="account-navigation-button"
                        primary={true}
                        onClick={(event) => this.handleNewClassButton(event)}
                        label="Създаване на клас"
                        icon={<NewClass/>}
                    />
                    <RaisedButton
                        className="account-navigation-button"
                        primary={true}
                        onClick={(event) => this.handlePreviewClasses(event)}
                        label="Моите класове"
                        icon={<Class/>}
                    />
                    <RaisedButton
                        className="account-navigation-button"
                        primary={true}
                        onClick={(event) => this.handleAllClassMarks(event)}
                        label="Сравняване на класове"
                        icon={<Compare/>}
                    />
                </div>

                <div className="account-workplace">
                    <Paper zDepth={2}>
                        <div className={displayClass}>
                            {this.getContent()}
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }

    displayBlankResult(id) {
        this.setState({
            navigationDisplayContent: 'display-result',
            blankId: id
        });
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

    displayMaterialBar(id) {
        this.setState({
            blankId: id,
            navigationDisplayContent: 'new-materials-bar'
        })
    }

    logout(event) {
        const url = "/rest/auth/logout";

        let callback = (response) => {
            if (response.ok) {
                this.props.logout(event);
            }
        };

        RestCalls.post(url, undefined, undefined, callback)
    }
}

export default AccountManager;