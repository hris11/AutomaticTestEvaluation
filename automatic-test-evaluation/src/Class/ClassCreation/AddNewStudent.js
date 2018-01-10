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
                        onChange={(event, value) => this.props.handleFirstName(event, value)}
                    />
                    <Divider/>
                    <TextField
                        hintText="Фамилия"
                        style={style}
                        underlineShow={false}
                        onChange={(event, value) => this.props.handleLastName(event, value)}
                    />
                    <Divider/>
                    <TextField
                        hintText="Номер"
                        style={style}
                        underlineShow={false}
                        onChange={(event, value) => this.props.handleNumber(event, value)}
                    />
                    <Divider/>
                </Paper>
            </MuiThemeProvider>
        );
    }
}


export default AddNewStudent;