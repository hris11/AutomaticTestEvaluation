import React, {Component} from 'react';
import RestCalls from "../../RESTCalls/RestCalls";
import ClassNamePicker from "./NamePicker";
import {RaisedButton} from "material-ui";
import './ModifyBlanks.css';

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
        let url = `/rest/users/classes/${this.props.classId}/blanks`;
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

        result = data.map(function (blank, index) {
            return (
                <li
                    key={`modify-blanks-key-${index}`}
                >
                    <div className="blank-name-box">
                        <span>{blank.name}</span>
                    </div>
                    <RaisedButton
                        label="Принтиране"
                        onClick={() => self.printBlank(blank.id)}
                        primary={true}
                    />
                    <RaisedButton
                        label="Резултати"
                        secondary={true}
                        onClick={() => self.getBlankResults(blank.id)}
                    />
                    <RaisedButton
                        label="Добавяне на материали"
                        primary={true}
                        onClick={(id) => self.props.displayMaterialBar(blank.id)}
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
                <div className="list-of-blanks-box-div">
                    <ul className="list-of-blanks-ul">
                        {result}
                    </ul>
                </div>
            );
        }
    }

    getBlankResults(id) {
        /*const url = `/rest/result/${id}/marks`;
        let self = this;
        let callback = (response) => {
            response.json().then(function (response) {
                self.props.displayBlankResult(response, id);
            });
        };

        RestCalls.get(url, callback);*/
        this.props.displayBlankResult(id);
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
        const url = `/rest/users/classes/blanks/${id}`;
        let self = this;
        let callback = (response) => {
            self.fetchExistingBlanks();
        };

        RestCalls.delete(url, callback);
    }

    printBlank(id) {
        const url = `/rest/users/classes/blanks/${id}`;
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

    addMaterials(id) {

    }
}
export default ModifyBlanks;