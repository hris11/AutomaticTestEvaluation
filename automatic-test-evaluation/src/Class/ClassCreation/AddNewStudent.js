import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './AddNewStudent.css';

const style = {
    marginLeft: 20,
};

class AddNewStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentFirstName: '',
            studentSecondName: '',
            studentLastName: ''
        }
    }

    handleFirstName(event, value) {
        console.log(event);
        let state;
        state = {
            studentFirstName: value
        };
        this.setState(state);
    }

    handleSecondName(event, value) {
        let state;
        state = {
            studentSecondName: value
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

    addNewStudent(event) {
        // router magic here
    }

    render() {
        return (
            <MuiThemeProvider>
                <Paper
                    zDepth={1}
                >
                    <TextField
                        hintText="Име"
                        style={style}
                        underlineShow={false}
                        onChange={(event, value) => this.handleFirstName(event, value)}
                    />
                    <Divider/>
                    <TextField
                        hintText="Презиме"
                        style={style}
                        underlineShow={false}
                        onChange={(event, value) => this.handleSecondName(event, value)}
                    />
                    <Divider/>
                    <TextField
                        hintText="Фамилия"
                        style={style}
                        underlineShow={false}
                        onChange={(event, value) => this.handleLastName(event, value)}
                    />
                    <Divider/>
                </Paper>
            </MuiThemeProvider>
        );
    }
}


export default AddNewStudent;