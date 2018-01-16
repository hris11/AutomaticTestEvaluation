import React, {Component} from  'react';
import OptionsHandler from "./OptionsHandler";
import './PrintPage.css';
import QRCode from 'react-qr-component'

class PrintPage extends Component {

    nameHeaderGenerator() {

        if (this.props.parentState.nameToggle) {
            return ([
                "Име:",
                "______________________________"
            ]);
        } else {
            return ([
                null,
                null
            ]);
        }
    }

    classHeaderGenerator() {
        if (this.props.parentState.classToggle) {
            return ([
                "Клас:",
                "________"
            ]);
        } else {
            return ([
                null,
                null
            ]);
        }
    }

    numberHeaderGenerator() {
        if (this.props.parentState.numberToggle) {
            return ([
                "Номер:",
                "________"
            ]);
        } else {
            return ([
                null,
                null
            ]);
        }
    }

    groupHeaderGenerator() {
        if (this.props.parentState.groupToggle) {
            return ([
                "Група:",
                "________"
            ]);
        } else {
            return ([
                null,
                null
            ]);
        }
    }

    studentName() {
        if (this.props.parentState.listNameToggle) {
            return ([
                "Име: ",
                `${this.props.student.firstName} ${this.props.student.lastName}`
            ]);
        } else {
            return ([
                null,
                null
            ]);
        }
    }

    studentNumber() {
        if (this.props.parentState.listNumberToggle) {
            return ([
                "Номер: ",
                `${this.props.student.number}`
            ]);
        } else {
            return ([
                null,
                null
            ]);
        }
    }

    getQr() {
        if (this.props.navCall === true) {
            return <QRCode value="https://evening-sierra-80012.herokuapp.com/" />
        } else {
            return <QRCode value={`${this.props.student.id}`} />
        }
    }

    render() {
        let nameHeader = null;
        let numberHeader = null;
        if (this.props.navCall === true) {
            nameHeader = this.nameHeaderGenerator();
            numberHeader = this.numberHeaderGenerator();
        } else {
            nameHeader = this.studentName();
            numberHeader = this.studentNumber();
        }

        let classHeader = this.classHeaderGenerator();
        let groupHeader = this.groupHeaderGenerator();

        console.log(this.props.parentState.eachAnswerNumberOfOptions);

        return (
            <div className="blank-for-print">
                <div className="site-header">this blank is created with automatic test evaluation</div>
                <div className="main-header">
                    <div className="content-headers">
                        <div className="headers-floating" >
                            <div className="header-titles" >
                                <div className="name-header">{nameHeader[0]}</div>
                                <div className="class-header">{classHeader[0]}</div>
                                <div className="number-header">{numberHeader[0]}</div>
                                <div className="group-header">{groupHeader[0]}</div>
                            </div>
                            <div className="header-fields">
                                <div className="header-field">{nameHeader[1]}</div>
                                <div className="header-field">{classHeader[1]}</div>
                                <div className="header-field">{numberHeader[1]}</div>
                                <div className="header-field">{groupHeader[1]}</div>
                            </div>
                            <div className="header-qr">
                                {this.getQr()}
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="test-header-divider"/>
                <div className="blank-lines-block">
                    <OptionsHandler parentState={this.props.parentState}/>
                </div>
                <hr className="test-header-divider"/>
            </div>
        );
    }


}

export default PrintPage;