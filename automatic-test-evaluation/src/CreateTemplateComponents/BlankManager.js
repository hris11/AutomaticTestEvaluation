import React, {Component} from 'react';
import SingleAnswerTemplateComponent from "./SingleAnswerBlankList";
import {Divider, FlatButton, List, Paper, RaisedButton, Step, StepLabel, Stepper} from "material-ui";
import BlankManagerFirstStepHandler from "./BlankManagerFirstStepHandler";
import './BlankManager.css';
import './BlankMenuToggles.css';
import BlankManagerSecondStepHandler from "./BlankManagerSecondStepHandler";

class BlankManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepperFinished: false,
            stepperIndex: 0,
            nameToggle: true,
            numberToggle: true,
            classToggle: true,
            groupToggle: true,
            listNameToggle: false,
            listNumberToggle: false,
            numberOfRows: 10,
            defaultOptions: 4,
        }
    }

    generatePrintablePage() {

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
                    handleAnswerSlider={(value) => this.handleAnswerSlider(value)}
                />
            }
                break;
            case 1: {
                return (<BlankManagerSecondStepHandler
                    answers={this.state.numberOfRows}
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
                                <a
                                    href="#"
                                    onClick={(event) => this.stepperReset(event)}
                                >
                                    ТУК
                                </a>.
                                <RaisedButton
                                    label="Принтиране на теста"
                                    onClick={(event) => this.generatePrintablePage(event)}
                                    primary={true}
                                />
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