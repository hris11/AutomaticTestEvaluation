import React, { Component } from 'react';
import RestCalls from "../RESTCalls/RestCalls";
import {CircularProgress} from "material-ui";
import './ClassMarks.css';


class ClassMarks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marks: undefined
        }
    }

    render() {
        if (this.state.marks === undefined) {
            return (
                <CircularProgress/>
            );
        }

        return (
            <div>
                <h1>Сравняване на класове</h1>
                <ul className="result-list-classes">
                    <li className="result-li">
                        <div className="class-mark-result-box-headers">
                            <div className="class-mark-result-list-name-header">Име на класа</div>
                            <div className="class-mark-result-list-mark-header">Средна оценка</div>
                        </div>
                    </li>
                    {this.getClassesMarksTable()}
                </ul>
            </div>
        );
    }

    getClassesMarksTable() {
        let classes = Object.assign([], this.state.marks);
        return classes.map(function (aClass, index) {
            return (
                <li className="result-li" key={`class-marks-key-${index}`}>
                    <div className="class-mark-result-list">
                        <span className="class-mark-result-list-name">{aClass.className}</span>
                        <span className="class-mark-result-list-mark">
                            {(aClass.averageMark === 0)?
                            "Няма оценка" :
                            parseFloat(Math.round(aClass.averageMark * 100) / 100).toFixed(2)}
                        </span>
                    </div>
                </li>
            );
        });
    }

    getClassesMarks() {
        const url = `/rest/result/classes/marks`;

        const body = {
            email: this.props.email
        };
        const self = this;

        const callback = (response) => {
            if (response.ok) {
                response.json().then(function (response) {
                    self.setState({
                        marks: response
                    });
                });
            }
        };

        RestCalls.post(url, undefined, body, callback);
    }

    componentWillMount() {
        this.getClassesMarks();
    }
}

export default ClassMarks;