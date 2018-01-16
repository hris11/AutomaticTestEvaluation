import React, {Component} from 'react';
import {CircularProgress, FlatButton, Paper, RaisedButton, Step, StepLabel, Stepper} from "material-ui";
import BlankManagerFirstStepHandler from "./FirstStep/BlankManagerFirstStepHandler";
import './BlankManager.css';
import './FirstStep/BlankMenuToggles.css';
import BlankManagerSecondStepHandler from "./SecondStep/BlankManagerSecondStepHandler";
import PrintPage from "./PrintPage/PrintPage";
import RestCalls from "../RESTCalls/RestCalls";

class BlankManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationDisplay: {
                display: 'inline'
            },
            printDisplay: {
                display: 'none'
            },
            stepperDisplay: {
                display: 'flex'
            },
            stepperFinished: false,
            stepperIndex: 0,
            nameToggle: props.navCall,
            numberToggle: props.navCall,
            classToggle: props.navCall,
            groupToggle: props.navCall,
            listNameToggle: !props.navCall,
            listNumberToggle: !props.navCall,
            sliderValue: 10,
            defaultOptions: 4,
            studentsFetched: false,
            students: [],
            eachAnswerNumberOfOptions: [
                {
                    options: 4,
                    rightAnswer: 0,
                    group: 0,
                    cssClassName: 'box-default-color'
                }, {
                    options: 4,
                    rightAnswer: 0,
                    group: 0,
                    cssClassName: 'box-default-color'
                }, {
                    options: 4,
                    rightAnswer: 0,
                    group: 0,
                    cssClassName: 'box-default-color'
                }, {
                    options: 4,
                    rightAnswer: 0,
                    group: 0,
                    cssClassName: 'box-default-color'
                }, {
                    options: 4,
                    rightAnswer: 0,
                    group: 0,
                    cssClassName: 'box-default-color'
                }, {
                    options: 4,
                    rightAnswer: 0,
                    group: 0,
                    cssClassName: 'box-default-color'
                }, {
                    options: 4,
                    rightAnswer: 0,
                    group: 0,
                    cssClassName: 'box-default-color'
                }, {
                    options: 4,
                    rightAnswer: 0,
                    group: 0,
                    cssClassName: 'box-default-color'
                }, {
                    options: 4,
                    rightAnswer: 0,
                    group: 0,
                    cssClassName: 'box-default-color'
                }, {
                    options: 4,
                    rightAnswer: 0,
                    group: 0,
                    cssClassName: 'box-default-color'
            }],
            groups:
                [{
                    name: 'група: 1',
                    active: true,
                    newValueOfName: 'група: 1'
                }, {
                    name: 'група: 2',
                    active: true,
                    newValueOfName: 'група: 2'
                }, {
                    name: 'група: 3',
                    active: true,
                    newValueOfName: 'група: 3'
                }, {
                    name: 'група: 4',
                    active: true,
                    newValueOfName: 'група: 4'
                }, {
                    name: 'група: 5',
                    active: true,
                    newValueOfName: 'група: 5'
                }, {
                    name: 'група: 6',
                    active: true,
                    newValueOfName: 'група: 6'
                }],
            lastGroupEdited: 0
        }
    }

    handleGroupEditing(event, index, value) {
        this.setState({
            lastGroupEdited: value
        });
    }

    safeChanges(event) {
        let oldGroups = this.state.groups;

        for (let i = 0; i < oldGroups.length; i++) {
            if (oldGroups[i].name !== oldGroups[i].newValueOfName) {
                oldGroups[i].name = this.state.groups[i].newValueOfName;
            }
        }

        //this.toggleMenu();

        this.setState({
            groups: oldGroups
        });
    }

    discardChanges() {
        let oldGroups = this.state.groups;

        for (let i = 0; i < this.state.groups.length; i++) {
            if (this.state.groups[i].name !== this.state.groups[i].newValueOfName) {
                oldGroups[i].newValueOfName = oldGroups[i].name;
            }
        }

        //this.toggleMenu();

        this.setState({
            groups: oldGroups
        });
    }

    handleUpdateInput(event, newValue) {
        let oldGroups = this.state.groups;

        if (newValue !== '') {
            oldGroups[this.state.lastGroupEdited].newValueOfName = newValue;
        }

        this.setState({
            groups: oldGroups
        })
    }

    generateAnswers() {
        let result = [];

        result = this.state.eachAnswerNumberOfOptions.slice(0, this.state.sliderValue).map(function (answer, index) {
            return {
                options: answer.options,
                rightAnswer: answer.rightAnswer,
                group: answer.group,
                index: index
            }
        });

        return result;
    }

    postTest() {
        const url = `/rest/user/class/${this.props.classId}/blanks`;

        const body = {
            numberOfAnswers: this.state.sliderValue,
            name: this.props.blankTitle,
            answers: this.generateAnswers(),
            classId: this.props.classId
        };

        let callback = (response) => {

        };

        RestCalls.post(url, undefined, body, callback);
    }

    generatePrintablePage() {
        if (!this.props.navCall) {
            this.postTest();
        }

        this.setState({
            printDisplay: {
                display: 'inline'
            },
            navigationDisplay: {
                display: 'none'
            },
            stepperDisplay: {
                display: 'none'
            }
        });
    }

    handleSlider(event, value) {
        let memEachAnswerNumberOfOptions = this.state.eachAnswerNumberOfOptions;

        if (this.state.eachAnswerNumberOfOptions.length < 60) {
            for (let i = 0; i < 52; i++) {
                memEachAnswerNumberOfOptions.push({
                    options: this.state.defaultOptions,
                    rightAnswer: 0,
                    group: 0,
                    cssClassName: 'box-default-color'
                });
            }
        }

        this.setState({
            sliderValue: value,
            eachAnswerNumberOfOptions: memEachAnswerNumberOfOptions
        });
    }

    handleOptionsChange(index, newValue) {
        let memEachAnswerNumberOfOptions = this.state.eachAnswerNumberOfOptions;

        console.log(memEachAnswerNumberOfOptions);

        memEachAnswerNumberOfOptions[index].options = newValue;

        console.log(memEachAnswerNumberOfOptions);

        this.setState({
            eachAnswerNumberOfOptions: memEachAnswerNumberOfOptions
        });
    }

    stepperReset(event) {
        this.setState({
            stepperFinished: false,
            stepperIndex: 0
        });
    }

    stepperHandleNext() {
        let memStepperIndex = this.state.stepperIndex;

        this.setState({
            stepperIndex: memStepperIndex + 1,
            stepperFinished: memStepperIndex >= 1
        });
    }

    stepperHandlePrev() {
        let memStepperIndex = this.state.stepperIndex;

        if (memStepperIndex > 0) {
            this.setState({
                stepperIndex: memStepperIndex - 1
            });
        }
    }

    handleAnswerSlider(value) {
        this.setState({
            sliderValue: value
        });
    }

    changeGroupOfLine(index, value) {
        let mem = Object.assign([], this.state.eachAnswerNumberOfOptions);
        mem[index].group = value;

        switch (value) {
            case 0: {
                mem[index].cssClassName = 'box-default-color';
            } break;
            case 1: {
                mem[index].cssClassName = 'box-first-color'
            }break;
            case 2: {
                mem[index].cssClassName = 'box-second-color'
            }break;
            case 3: {
                mem[index].cssClassName = 'box-third-color'
            }break;
            case 4: {
                mem[index].cssClassName = 'box-forth-color'
            }break;
            case 5: {
                mem[index].cssClassName = 'box-fifth-color'
            }break;
            default: {
                console.log('shit happens');
                mem[index].cssClassName = 'box-default-color'
            }
        }

        this.setState({
            eachAnswerNumberOfOptions: mem
        });
    }

    handleRightAnswerChange(index, rightAnswerIndex) {
        let mem = Object.assign([], this.state.eachAnswerNumberOfOptions);

        mem[index].rightAnswer = rightAnswerIndex;

        this.setState({
            eachAnswerNumberOfOptions: mem
        });
    }

    stepperGetStepContent(index) {
        switch (index) {
            case 0: {
                return <BlankManagerFirstStepHandler
                    handleSlider={(event, value) => this.handleSlider(event, value)}
                    sliderValue={this.state.sliderValue}
                    toggleName={this.state.nameToggle}
                    toggleNumber={this.state.numberToggle}
                    toggleClass={this.state.classToggle}
                    toggleGroup={this.state.groupToggle}
                    toggleListName={this.state.listNameToggle}
                    toggleListNumber={this.state.listNumberToggle}
                    handleToggleName={(event) => this.handleNameToggle(event)}
                    handleToggleNumber={(event) => this.handleNumberToggle(event)}
                    handleToggleClass={(event) => this.handleClassToggle(event)}
                    handleToggleGroup={(event) => this.handleGroupToggle(event)}
                    handleToggleListName={(event) => this.handleListNameToggle(event)}
                    handleToggleListNumber={(event) => this.handleListNumberToggle(event)}
                    logged={this.props.logged}
                    handleDefaultOptionsChange={(event, index, value) => this.handleDefaultOptionsChange(event, index, value)}
                    defaultOptions={this.state.defaultOptions}
                    navCall={this.props.navCall}
                />
            }
            case 1: {
                return (<BlankManagerSecondStepHandler
                    handleGroupEditing={(event, index, value) => this.handleGroupEditing(event, index, value)}
                    safeChanges={(event) => this.safeChanges(event)}
                    discardChanges={() => this.discardChanges()}
                    handleUpdateInput={(event, newValue) => this.handleUpdateInput(event, newValue)}
                    groups={this.state.groups}
                    changeGroupOfLine={(index, value) => this.changeGroupOfLine(index, value)}
                    lastGroupEdited={this.state.lastGroupEdited}
                    answers={this.state.sliderValue}
                    answersOptions={this.state.eachAnswerNumberOfOptions}
                    optionsChange={(index, newValue) => this.handleOptionsChange(index, newValue)}
                    defaultOptions={this.state.defaultOptions}
                    logged={this.props.logged}
                    handleRightAnswerChange={(index, rightAnswerIndex) => this.handleRightAnswerChange(index, rightAnswerIndex)}
                    navCall={this.props.navCall}
                />);
            }
            default: {
                return <h1>An error appeared</h1>
            }
        }
    }

    handleNameToggle() {
        this.setState({
            nameToggle: !this.state.nameToggle
        });
    }

    handleNumberToggle() {
        this.setState({
            numberToggle: !this.state.numberToggle
        });
    }

    handleClassToggle() {
        this.setState({
            classToggle: !this.state.classToggle
        });
    }

    handleGroupToggle() {
        this.setState({
            groupToggle: !this.state.groupToggle
        });
    }

    handleListNameToggle() {
        this.setState({
            listNameToggle: !this.state.listNameToggle
        });
    }

    handleListNumberToggle() {
        this.setState({
            listNumberToggle: !this.state.listNumberToggle
        });
    }

    handleDefaultOptionsChange(event, index, value) {
        let defaultOptions = value;
        let memEachAnswerNumberOfOptions = this.state.eachAnswerNumberOfOptions;

        for (let i = 0; i < memEachAnswerNumberOfOptions.length; i++) {
            if (memEachAnswerNumberOfOptions[i].options === 4) {
                memEachAnswerNumberOfOptions[i].options = value;
            }
        }

        this.setState({
            defaultOptions: defaultOptions,
            eachAnswerNumberOfOptions: memEachAnswerNumberOfOptions
        });
    }

    render() {
        if (this.props.navCall === false && this.state.studentsFetched === false) {
            return <CircularProgress />;
        }
        return (
            <Paper zDepth={0} style={style.paper}>
                <div style={{width: '100%', maxWidth: 1000, margin: 'auto'}} className="blank-background-paper">
                    <Stepper activeStep={this.state.stepperIndex} style={this.state.stepperDisplay}>
                        <Step>
                            <StepLabel>Изберете какви атрибути да има теста</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Структура на теста</StepLabel>
                        </Step>
                    </Stepper>

                    <div style={{width: '100%'}}>
                        {this.state.stepperFinished ? (
                            <div>
                                <span className='final-step-header' style={this.state.navigationDisplay}>
                                    Успешно завършихте структурата на теста. В последствие няма да имате възможност да
                                    направите промени по нея, но ако желате да промените нещо натиснете
                                    <div className="result-navigation-wrapper">
                                        <RaisedButton
                                            label="Рестартиране"
                                            onClick={(event) => this.stepperReset(event)}
                                        />
                                        <RaisedButton
                                            label="Завършване"
                                            onClick={(event) => this.generatePrintablePage(event)}
                                            primary={true}
                                        />
                                    </div>
                                </span>
                                <div style={this.state.printDisplay}>
                                    {this.getPrintablePages()}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="stepper-navigation">
                                    <FlatButton
                                        label="Назад"
                                        disabled={this.state.stepperIndex === 0}
                                        onClick={() => this.stepperHandlePrev()}
                                    />
                                    <RaisedButton
                                        label={this.state.stepperIndex === 1 ? 'Завършване' : 'Напред'}
                                        primary={true}
                                        onClick={() => this.stepperHandleNext()}
                                    />
                                </div>

                                <div style={{display: 'block'}}>
                                    {this.stepperGetStepContent(this.state.stepperIndex)}
                                </div>

                                <div className="stepper-navigation">
                                    <FlatButton
                                        label="Назад"
                                        disabled={this.state.stepperIndex === 0}
                                        onClick={() => this.stepperHandlePrev()}
                                    />
                                    <RaisedButton
                                        label={this.state.stepperIndex === 1 ? 'Завършване' : 'Напред'}
                                        primary={true}
                                        onClick={() => this.stepperHandleNext()}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Paper>
        );
    }

    getPrintablePages() {
        if (this.props.navCall) {
            return (
                <PrintPage
                    parentState={this.state}
                    navCall={this.props.navCall}
                />
            );
        } else {
            let self = this;
            return this.state.students.map(function (student) {
               return (
                   <PrintPage
                       parentState={self.state}
                       navCall={self.props.navCall}
                       student={student}
                   />
               );
            });
        }

    }

    componentDidMount() {
        if (this.props.navCall === false) {
            const url = `/rest/students/all/${this.props.classId}`;

            let self = this;
            let callback = (response) => {
                if (response.ok) {
                    response.json().then(function (response) {
                        self.setState({
                            students: response,
                            studentsFetched: true
                        });
                    });
                }
            };

            RestCalls.get(url, callback);
        }
    }
}

const style = {
    paper: {
        padding: 30,
        margin: '0 auto',
        textAlign: 'center',
        display: 'block',
    }
};

export default BlankManager;