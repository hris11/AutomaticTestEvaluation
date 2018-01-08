import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {RaisedButton} from "material-ui";
import './ClassNamePicker.css';

class ClassNamePicker extends Component {
    render() {
        return (
            <div className="class-name-picker-box">
                <TextField
                    hintText="Име на класа"
                    floatingLabelText="dsa"
                    onChange={(event, newValue) => this.props.handleNameChange(event, newValue)}
                    errorText={this.props.nameChangeErrorText()}
                />
                <RaisedButton
                    primary={true}
                    label="Напред"
                    onClick={(event) => this.props.handleNameChangeButton(event)}
                />
            </div>
        );
    }
}

export default ClassNamePicker;