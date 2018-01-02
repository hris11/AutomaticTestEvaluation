import React, {Component} from 'react';
import SingleAnswerTemplateComponent from "./SecondStep/SingleAnswerBlankList";
import {Divider, FlatButton, List, Paper, RaisedButton, Step, StepLabel, Stepper} from "material-ui";
import BlankManagerFirstStepHandler from "./FirstStep/BlankManagerFirstStepHandler";
import './BlankManager.css';
import './FirstStep/BlankMenuToggles.css';
import BlankManagerSecondStepHandler from "./SecondStep/BlankManagerSecondStepHandler";
import PrintPage from "./PrintPage/PrintPage";

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
            logged: false,
            stepperFinished: false,
            stepperIndex: 0,
            nameToggle: true,
            numberToggle: true,
            classToggle: true,
            groupToggle: true,
            listNameToggle: false,
            listNumberToggle: false,
            sliderValue: 10,
            defaultOptions: 4,
            eachAnswerNumberOfOptions: [
                {
                    options: 4,
                    rightAnswer: -1,
                    group: 0
                }, {
                    options: 4,
                    rightAnswer: -1,
                    group: 0
                }, {
                    options: 4,
                    rightAnswer: -1,
                    group: 0
                }, {
                    options: 4,
                    rightAnswer: -1,
                    group: 0
                }, {
                    options: 4,
                    rightAnswer: -1,
                    group: 0
                }, {
                    options: 4,
                    rightAnswer: -1,
                    group: 0
                }, {
                    options: 4,
                    rightAnswer: -1,
                    group: 0
                }, {
                    options: 4,
                    rightAnswer: -1,
                    group: 0
                }, {
                    options: 4,
                    rightAnswer: -1,
                    group: 0
                }, {
                    options: 4,
                    rightAnswer: -1,
                    group: 0
            }]
        }
    }

    generatePrintablePage() {
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
                    rightAnswer: -1,
                    group: 0
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
                    logged={this.state.logged}
                    handleDefaultOptionsChange={(event, index, value) => this.handleDefaultOptionsChange(event, index, value)}
                    defaultOptions={this.state.defaultOptions}
                />
            }
                break;
            case 1: {
                return (<BlankManagerSecondStepHandler
                    answers={this.state.sliderValue}
                    answersOptions={this.state.eachAnswerNumberOfOptions}
                    optionsChange={(index, newValue) => this.handleOptionsChange(index, newValue)}
                    defaultOptions={this.state.defaultOptions}
                />);
            }
                break;
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
                                    <PrintPage parentState={this.state}/>
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