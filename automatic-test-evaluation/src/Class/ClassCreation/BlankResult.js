import React, {Component} from 'react';
import Radar from 'react-d3-radar';
import RestCalls from "../../RESTCalls/RestCalls";
import {CircularProgress, RaisedButton} from "material-ui";
import './BlankResult.css';
import * as FileSaver from "file-saver";

class BlankResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: null,
            studentMarks: null,
            materials: null,
            matUrl: ''
        }
    }

    getDomainMax() {
        let max = 0;
        let result = this.state.result;
        Object.keys(result).forEach(function (key) {
            let currentNumber = Number(result[key]);
            if (currentNumber > max) {
                max = currentNumber;
            }
        });
        return max + 1;
    }

    fetchMarks() {
        const url = `/rest/result/${this.props.blankId}/marks`;
        let self = this;
        let callback = (response) => {
            if (response.ok) {
                response.json().then(function (response) {
                    self.setState({
                        result: response
                    });
                });
            }
        };

        RestCalls.get(url, callback);
    }

    fetchStudentsAndMarks() {
        const url = `/rest/result/${this.props.blankId}`;
        let self = this;
        let callback = (response) => {
            if (response.ok) {
                response.json().then(function (response) {
                    self.setState({
                        studentMarks: response
                    });
                });
            }
        };

        RestCalls.get(url, callback);
    }

    fetchMaterials() {
        const url = `/rest/files/materials/${this.props.blankId}`;
        let self = this;
        let callback = (response) => {
            if (response.ok) {
                response.json().then(function (response) {
                    self.setState({
                        materials: response
                    });
                });
            }
        };

        RestCalls.get(url, callback);
    }

    getEachStudentMark() {
        return (
            this.state.studentMarks.map(function (studentResult, index) {
                return (
                    <li className="result-li-blanks" key={`blank-result-key-${index}`}>
                        <div className="blank-result-list">
                            <span className="student-result-list-name">
                                {studentResult.name}
                            </span>
                            <span className="student-result-list-mark">
                                {studentResult.mark}
                            </span>
                        </div>
                    </li>
                )
            })
        );
    }

    componentWillMount() {
        this.fetchMarks();
        this.fetchMaterials();
        this.fetchStudentsAndMarks();
    }

    render() {
        let result = this.state.result;
        if (result === null || this.state.studentMarks === null) {
            return <CircularProgress/>
        } else {

            return (
                <div>
                    <h1>Оценки от бланката</h1>
                    <div className="student-result-box">
                        <div>
                            <Radar
                                width={500}
                                height={500}
                                padding={70}
                                domainMax={this.getDomainMax()}
                                highlighted={null}
                                onHover={(point) => {
                                    /*if (point) {
                                        console.log('hovered over a data point');
                                    } else {
                                        console.log('not over anything');
                                    }*/
                                }}
                                data={{
                                    variables: [
                                        {key: 'mark2', label: 'Оценка 2'},
                                        {key: 'mark3', label: 'Оценка 3'},
                                        {key: 'mark4', label: 'Оценка 4'},
                                        {key: 'mark5', label: 'Оценка 5'},
                                        {key: 'mark6', label: 'Оценка 6'},
                                    ],
                                    sets: [
                                        {
                                            key: 'all',
                                            label: 'all marks',
                                            values: {
                                                mark2: result.mark2,
                                                mark3: result.mark3,
                                                mark4: result.mark4,
                                                mark5: result.mark5,
                                                mark6: result.mark6,
                                            },
                                        },
                                    ],
                                }}
                            />
                        </div>
                        <div>
                            <ul className="result-list">
                                {this.getEachStudentMark()}
                            </ul>
                        </div>
                    </div>
                    <div className="materials">
                        <ul className="result-list">
                            {this.getMaterials()}
                        </ul>
                    </div>
                </div>
            );
        }
    }

    getMaterials() {
        if (this.state.materials === null) {
            return null
        } else {
            let mats = Object.assign([], this.state.materials);
            let self = this;
            return (
                mats.map(function (material, index) {
                    return (
                        <li
                            key={`blank-result-materials-key-${index}`}
                            className="result-li-blanks"
                        >
                            <span>{material.name}</span>
                            <RaisedButton
                                label="сваляне"
                                onClick={(id, name) => self.downloadMaterial(material.id, material.name)}
                            />
                        </li>
                    );
                })
            );
        }
    }

    downloadMaterial(id, name) {
        let callback = (response) => {
            if (response.ok) {
                response.blob().then(function(blob) {
                    FileSaver.saveAs(blob, name);
                });
            }
        };

        const url2 = `/rest/files/${id}`;
        RestCalls.get(url2, callback);
    }
}

export default BlankResult;