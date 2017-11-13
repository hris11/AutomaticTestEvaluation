import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
    marginLeft: 20,
};

const paperStyle = {
    width: 300,
    display: 'inline-block',
    textAlign: 'center',
};

const buttonStyle = {
    marginBottom: 50,
    marginLeft: 100,
};

class AddNewStudentComponent extends Component {
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
                    zDepth={4}
                    style={paperStyle}
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
                <FloatingActionButton
                    style={buttonStyle}
                    onClick={(event) => this.addNewStudent(event)}
                >
                    <ContentAdd/>
                </FloatingActionButton>
            </MuiThemeProvider>
        );
    }
}


export default AddNewStudentComponent;