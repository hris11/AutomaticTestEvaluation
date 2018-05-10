import React, {Component} from 'react';
import {RaisedButton} from "material-ui";
import {CircularProgress} from "material-ui";
import RestCalls from "../RESTCalls/RestCalls";
import BlankResult from "../Class/ClassCreation/BlankResult";
import './BlanksResultList.css';

class  BlanksResultList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: null,
            currentBlankId: null
        }
    }

    fetchBlanks() {
        const url = "/rest/users/classes/blanks";
        let self = this;
        let callback = (response) => {
            response.json().then(function (response) {
                self.setState({
                    result: response
                });
            });
        };

        RestCalls.get(url, callback);
    }

    getAllBlanks() {
        let blanks = Object.assign([], this.state.result);
        let self = this;
        return blanks.map(function (blank) {
            return (
                <li>
                    <span className="blank-result-name">{blank.name}</span>
                    <RaisedButton
                        className="result-button"
                        label="Резултати"
                        primary={true}
                        onClick={(id) => self.setBlankId(blank.id)}
                    />
                </li>
            );
        });
    }

    setBlankId(id) {
        this.setState({
            currentBlankId: id
        });
    }

    getResultForBlank() {
        if (this.state.currentBlankId === null) {
            return null;
        }
        return (
            <BlankResult
                blankId={this.state.currentBlankId}
            />
        );
    }

    componentDidMount() {
        this.fetchBlanks()
    }

    render() {
        if (this.state.result === null) {
            return <CircularProgress/>
        }
        return (
            <div className="blank-result-list">
                <h1>Резултати от бланки</h1> {/*header*/}

                {/*refresh button*/}
                <RaisedButton
                    label="обновяване на резултати"
                    secondary={true}
                    onClick={() => this.fetchBlanks()}
                    className="refresh-results"
                />
                {this.getResultForBlank()}
                <ul className="result-list">
                    {this.getAllBlanks()}
                </ul>
            </div>
        );
    }


}

export default BlanksResultList;