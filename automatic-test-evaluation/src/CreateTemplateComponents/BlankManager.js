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
        console.log(this.state);
    }

    handleSlider(event, value) {
        let memEachAnswerNumberOfOptions = this.state.eachAnswerNumberOfOptions;

        if (value > this.state.eachAnswerNumberOfOptions.length) {
            for (let i = 0; i < value - this.state.eachAnswerNumberOfOptions.length + 1; i++) {
                memEachAnswerNumberOfOptions.push({
                    options: 4,
                    rightAnswer: -1});
            }
        } else if (value < this.state.eachAnswerNumberOfOptions.length) {
            console.log("in second if");
            for (let i = 0; i < this.state.eachAnswerNumberOfOptions.length - value + 1; i++) {
                memEachAnswerNumberOfOptions.pop();
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

    render() {
        return (
            <Paper>
                <div style={{width: '100%', maxWidth: 1000, margin: 'auto'}}>
                    <Stepper activeStep={this.state.stepperIndex}>
                        <Step>
                            <StepLabel>Изберете какви атрибути да има теста</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Структура на теста</StepLabel>
                        </Step>
                    </Stepper>

                    <div style={{width: '100%'}}>
                        {this.state.stepperFinished ? (
                            <p>
                                Успешно завършихте структурата на теста. В последствие няма да имате възможност да
                                направите промени по структурата, но ако желате да смените нещо натиснете
                                <RaisedButton
                                    label="Рестартиране"
                                    onClick={(event) => this.stepperReset(event)}
                                />
                                <RaisedButton
                                    label="Принтиране на теста"
                                    onClick={(event) => this.generatePrintablePage(event)}
                                    primary={true}
                                />
                                <PrintPage parentState={this.state}/>
                            </p>
                        ) : (
                            <div>
                                <div style={{display: 'block'}}>
                                    {this.stepperGetStepContent(this.state.stepperIndex)}
                                </div>

                                <div className="stepperNavigation">
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

export default BlankManager;