import React, {Component} from 'react';
import {TextField} from "material-ui";
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
            newClassButtonState: false
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
        } else if (false) { /*implement the checking if exists*/

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
    }

    getContent() {
        if (this.state.className === '') {
            /*the name is not picked yet*/
            return <ClassNamePicker
                handleNameChange={(event, newValue) => this.handleNameChange(event, newValue)}
                nameChangeErrorText={() => this.nameChangeErrorText()}
                handleNameChangeButton={(event) => this.handleNameChangeButton(event)}
            />
        } else {
            /*the name is selected and now the user can add new Students*/
            return 'yes';
        }
    }

    render() {
        return (
            <div>
                {this.getContent()}

            {/*<div className="class-name-picker">
                <div>
                    <p>
                        Изберете име на класа
                    </p>

                </div>
                <div className="class-box-students-list">

                        Load the list of Students

                </div>
                <div className="class-box-new-student">

                        Can add new Student to the list

                    <AddNewStudent/>
                </div>
            </div>*/}
            </div>
        );
    }
}

export default ClassBox;