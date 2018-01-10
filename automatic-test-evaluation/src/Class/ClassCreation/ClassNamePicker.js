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
                    floatingLabelText="Клас"
                    onChange={(event, newValue) => this.props.handleNameChange(event, newValue)}
                    errorText={this.props.nameChangeErrorText()}
                />
                <br/>
                <RaisedButton
                    primary={true}
                    label="Избери"
                    onClick={(event) => this.props.handleNameChangeButton()}
                />
            </div>
        );
    }
}

export default ClassNamePicker;