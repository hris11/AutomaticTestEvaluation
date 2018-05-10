import React, {Component} from 'react';
import AddNewStudent from "./AddNewStudent";
import {RaisedButton} from "material-ui";
import RestCalls from "../../RESTCalls/RestCalls";
import './ModifyClass.css';

class ModifyClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentFirstName: '',
            studentLastName: '',
            studentNumber: '',
            data: []
        }
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
            let key = `class-modify-${i}-single-key`;
            result.push(
                <li key={key} className="class-modify-student-li">
                    <div className="class-modify-student-first-name">
                        <span>{this.state.data[i].firstName}</span>
                    </div>
                    <div className="class-modify-student-last-name">
                        <span>{this.state.data[i].lastName}</span>
                    </div>
                    <div className="class-modify-student-number">
                        <span>{this.state.data[i].number}</span>
                    </div>
                </li>
            )
        }

        return result;
    }

    initialGetStudents() {
        const url = "/rest/students/all";
        const body = {
            inputEmail: {
                email: this.props.email
            },
            newClass: {
                name: this.props.classTitle
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
                        data: data
                    });
                });
            }
        };
        RestCalls.post(url, undefined, body, callback);
    }

    addNewStudent(event) {
        const url = "/rest/students/new";
        const body = {
            newClassInput: {
                inputEmail: {
                    email: this.props.email
                },
                newClass: {
                    name: this.props.classTitle
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

    componentWillMount() {
        if (!this.props.edit) {
            this.initialGetStudents();
        }
    }

    render() {
        return (
            <div className="class-box-content-holder">
                <div className="class-modify-box">
                    <h2>Ученици</h2>
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
                        onClick={(event) => this.addNewStudent(event)}
                    />
                </div>
            </div>
        );
    }
}

export default ModifyClass;