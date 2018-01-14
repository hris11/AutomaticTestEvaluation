import React, {Component} from 'react';
import RestCalls from "../../RESTCalls/RestCalls";
import ClassNamePicker from "./NamePicker";

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
        for (let i = 0; i < data.length; i++) {
            result.push(
                <li>
                    BlankName: {data[i].name}
                </li>
            );
        }

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
}
export default ModifyBlanks;