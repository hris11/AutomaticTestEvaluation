import React, {Component} from 'react';
import {RaisedButton, TextField} from "material-ui";
import AddNewStudent from "./AddNewStudent";
import './ClassBox.css';
import ClassNamePicker from "./ClassNamePicker";

class ClassBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: '',
            newClassName: '',
            students: [],
            newClassButtonState: false,

            studentFirstName: '',
            studentLastName: '',
            studentNumber: undefined,

            data: [
                {
                    studentFirstName: 'TEst',
                    studentSecondName: 'lastNameTEST',
                    studentNumber: 12
                },
                {
                    studentFirstName: 'TEst2',
                    studentSecondName: 'lastNameTEST2',
                    studentNumber: 13
                }
            ]

        }
    }

    handleNameChange(event, newValue) {
        let buttonState = false;

        /*TODO add checking if the name is equal with one user's other classes*/

        /*if not then*/

        if (newValue !== '') {
            buttonState = true;
        } else {
            buttonState = false;
        }

        this.setState({
            newClassName: newValue,
            newClassButtonState: buttonState
        });
    }

    nameChangeErrorText() {
        if (this.state.newClassName === '') {
            return 'Моля изберете име';
        } else {
            return false;
        }
    }

    handleNameChangeButton(event) {
        if (this.state.newClassName !== '') {
            this.setState({
               className: this.state.newClassName
            });
        }
        this.insertNewClass();
    }

    handleFirstName(event, value) {
        console.log(event);
        let state;
        state = {
            studentFirstName: value
        };
        this.setState(state);
    }

    handleLastName(event, value) {
        let state;
        state = {
            studentLastName: value
        };
        this.setState(state);
    }

    handleNumber(event, value) {
        let state;
        state = {
            studentLastName: value
        };
        this.setState(state);
    }

    getStudents() {
        let result = [];

        for (let i = 0; i < this.state.data.length; i++) {
            let key = "mn test" + i;
            result.push(
                <li key={key}>
                    {this.state.data[i].studentFirstName}
                    {this.state.data[i].studentLastName}
                    {this.state.data[i].studentNumber}
                </li>
            )
        }

        return result;
    }

    getContent() {
        if (this.state.className === '') {
            /*the name is not picked yet*/
            return (
                <div className="class-box-name-picker">
                    <ClassNamePicker
                        buttonState={this.state.newClassButtonState}
                        handleNameChange={(event, newValue) => this.handleNameChange(event, newValue)}
                        nameChangeErrorText={() => this.nameChangeErrorText()}
                        handleNameChangeButton={(event) => this.handleNameChangeButton(event)}
                    />
                </div>
            );
        } else {
            /*the name is selected and now the user can add new Students*/
            return (
                <div className="class-box-content-holder">
                    <div>
                        Students:
                        <ol>
                            {this.getStudents()}
                        </ol>
                    </div>
                    <div>
                        <AddNewStudent
                            handleFirstName={(event, value) => this.handleFirstName(event, value)}
                            handleLastName={(event, value) => this.handleLastName(event, value)}
                            handleNumber={(event, value) => this.handleNumber(event, value)}
                        />
                        <RaisedButton
                            primary={true}
                            label="Добави ученик"
                            onClick={(event) =>this.addNewStudent(event)}
                        />
                    </div>
                </div>
            );

        }
    }

    render() {
        return (
            <div className="class-box-main-box">
                <span>{this.state.className}</span>
                {this.getContent()}
            </div>
        );
    }

    addNewStudent(event) {
        let mem = this.state.data;

        mem.push({
            studentFirstName: this.state.studentFirstName,
            studentSecondName: this.state.studentLastName,
            studentNumber: this.state.studentNumber
        });

        this.setState({
            data: mem
        });
    }

    insertNewClass() {
        let url = "/rest/user/classes/new";

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        const options = {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.newClassName
            }),
            headers: headers
        };

        const self = this;
        fetch(url, options)
            .then(function (response) {
                if (response.ok) {
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}

export default ClassBox;