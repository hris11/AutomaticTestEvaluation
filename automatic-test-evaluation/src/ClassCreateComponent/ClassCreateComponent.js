import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, {Component} from 'react'

class classCreateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: ''
        }
    }

    classSubmit(event) {
        // some router magic here too
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <TextField
                        hintText="Име на класа /12б клас/"
                        floatingLabelFixed='Клас'
                        onChange={(event, newValue) => this.setState({className: newValue})}
                    />
                    <RaisedButton
                        label="Направи класа"
                        onClick={(event) => this.classSubmit(event)}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default classCreateComponent;