import React, {Component} from 'react';
import {RaisedButton, TextField} from "material-ui";
import AddNewStudent from "./AddNewStudent";
import './ClassBox.css';
import ClassNamePicker from "./ClassNamePicker";
import RestCalls from "../../RESTCalls/RestCalls";

class ClassBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: '',
            newClassName: '',
            students: [],
            newClassButtonState: false,

            studentFirstName: 'dsd',
            studentLastName: '',
            studentNumber: '',

            data: []

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
            studentNumber: value
        };
        this.setState(state);
    }

    getStudents() {
        let result = [];

        for (let i = 0; i < this.state.data.length; i++) {
            let key = "mn test" + i;
            result.push(
                <li key={key}>
                    {this.state.data[i].firstName}
                    {this.state.data[i].lastName}
                    {this.state.data[i].number}
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
                            studentFirstName={this.state.studentFirstName}
                            studentLastName={this.state.studentLastName}
                            studentNumber={this.state.studentNumber}
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
        const url = "/rest/students/new";
        const body = {
            newClassInput: {
                inputEmail: {
                    email: this.props.email
                },
                newClass: {
                    name: this.state.newClassName
                }
            },
            newStudent: {
                firstName: this.state.studentFirstName,
                lastName: this.state.studentLastName,
                number: parseInt(this.state.studentNumber)
            }
        };

        let self = this;

        const callback = (response) => {
            if (response.ok) {
                // self.clearInputFields();
                let data = [];
                response.json().then(function (response) {
                    response.forEach(function (student) {
                        data.push(student);
                    });
                    self.setState({
                        studentFirstName: '',
                        studentLastName: '',
                        studentNumber: '',
                        data: data
                    });
                });
            }
        };
        RestCalls.post(url, undefined, body, callback);



    }

    clearInputFields() {
        const state = {
            studentFirstName: '',
            studentLastName: '',
            studentNumber: ''
        };

        this.setState(state);
    }

    insertNewClass() {
        const url = "/rest/user/classes/new";
        const body = {
            inputEmail: {
                email: this.props.email
            },
            newClass: {
                name: this.state.newClassName
            }
        };

        const callback = (response) => {
            if (response.ok) {

            }
        };

        RestCalls.post(url, undefined, body, callback);
    }
}

export default ClassBox;