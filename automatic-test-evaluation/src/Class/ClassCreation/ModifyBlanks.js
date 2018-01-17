import React, {Component} from 'react';
import RestCalls from "../../RESTCalls/RestCalls";
import ClassNamePicker from "./NamePicker";
import {RaisedButton} from "material-ui";

class ModifyBlanks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blankName: '',
            blanks: [],
            pickerBlankName: ''
        }
    }

    fetchExistingBlanks() {
        let url = `/rest/user/class/${this.props.classId}/blanks`;
        let self = this;
        let callback = (response) => {
            if (response.ok) {
                response.json().then(function (response) {
                    console.log(response);
                    self.setState({
                        blanks: response
                    });
                });
            }
        };

        RestCalls.get(url, callback);
    }

    componentWillMount() {
        this.fetchExistingBlanks();
    }

    generateExistingBlanks() {
        let data = Object.assign([], this.state.blanks);
        let result = [];

        let self = this;

        result = data.map(function (blank) {
            return (
                <li>
                    <span>{blank.name}</span>
                    <RaisedButton
                        label="Принтиране"
                        onClick={() => self.printBlank(blank.id)}
                        primary={true}
                    />
                    <RaisedButton
                        label="Изтриване"
                        onClick={() => self.deleteBlank(blank.id)}
                    />
                </li>
            );
        });

        if (result.length === 0) {
            return "Все още нямате бланки";
        } else {
            return (
                <ul>
                    {result}
                </ul>
            );
        }
    }

    handleNameChange(event, newValue) {
        this.setState({
            pickerBlankName: newValue
        });
    }

    handleNameChangeButton(event) {
        this.setState({
            blankName: this.state.pickerBlankName
        });

        this.props.handleNewBlank(this.state.pickerBlankName);
    }

    nameChangeErrorText() {
        if (this.state.pickerBlankName === '') {
            return 'Моля изберете име';
        } else {
            return false;
        }
    }


    getDisplayContent() {
        if (this.state.blankName === '') {
            return <ClassNamePicker
                handleNameChange={(event, newValue) => this.handleNameChange(event, newValue)}
                nameChangeErrorText={() => this.nameChangeErrorText()}
                handleNameChangeButton={(event) => this.handleNameChangeButton(event)}
                buttonState={this.state.pickerBlankName === ''}
            />
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <div className="modify-blanks-blanks-list">
                    {this.generateExistingBlanks()}
                </div>
                <div className="modify-blanks-create-new-blank">
                    {this.getDisplayContent()}
                </div>
            </div>
        );
    }

    deleteBlank(id) {
        const url = `/rest/user/class/blanks/${id}`;
        let self = this;
        let callback = (response) => {
            self.fetchExistingBlanks();
        };

        RestCalls.delete(url, callback);
    }

    printBlank(id) {
        const url = `/rest/user/class/blanks/${id}`;
        let self = this;
        let callback = (response) => {
            if (response.ok) {
                /*mounts the print component*/
                response.json().then(function (response) {
                    self.props.displayBlank(response);
                });

            }
        };

        RestCalls.get(url, callback);

    }
}
export default ModifyBlanks;