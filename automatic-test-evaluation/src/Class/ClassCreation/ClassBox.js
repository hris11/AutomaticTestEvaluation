import React, {Component} from 'react';
import './ClassBox.css';
import ClassNamePicker from "./NamePicker";
import RestCalls from "../../RESTCalls/RestCalls";
import ModifyClass from "./ModifyClass";

class ClassBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: '',
            newClassName: '',
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

    getContent() {
        if (this.state.className === '') {
            /*the name is not picked yet*/
            return (
                <div className="class-box-name-picker">
                    <ClassNamePicker
                        buttonState={this.state.newClassButtonState === ''}
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
                    <ModifyClass
                        edit={true}
                        classTitle={this.state.className}
                        email={this.props.email}
                    />
                </div>
            );

        }
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

    render() {
        return (
            <div className="class-box-main-box">
                <span>{this.state.className}</span>
                {this.getContent()}
            </div>
        );
    }

}

export default ClassBox;