import React, {Component} from  'react';
import OptionsHandler from "./OptionsHandler";
import './PrintPage.css';

class PrintPage extends Component {

    nameHeaderGenerator() {
        if (this.props.parentState.nameToggle) {
            return ([
                "Име:",
                "______________________________"
            ]);
        } else {
            return ([
                "",
                ""
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
                "",
                ""
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
                "",
                ""
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
                "",
                ""
            ]);
        }
    }

    render() {
        let nameHeader = this.nameHeaderGenerator();
        let numberHeader = this.numberHeaderGenerator();
        let classHeader = this.classHeaderGenerator();
        let groupHeader = this.groupHeaderGenerator();

        console.log(this.props.parentState.eachAnswerNumberOfOptions);

        return (
            <div className="blank-for-print">
                <div className="site-header">this blank is created with automatic test evaluation</div>
                <div className="main-header">
                    <div className="content-headers">
                        <div className="headers-floating" >
                            <div>
                                <div className="name-header">{nameHeader[0]}</div>
                                <div className="class-header">{classHeader[0]}</div>
                                <div className="number-header">{numberHeader[0]}</div>
                                <div className="group-header">{groupHeader[0]}</div>
                            </div>
                            <div>
                                <div className="header-field">{nameHeader[1]}</div>
                                <div className="header-field">{classHeader[1]}</div>
                                <div className="header-field">{numberHeader[1]}</div>
                                <div className="header-field">{groupHeader[1]}</div>
                            </div>
                        </div>
                        <img alt="QR code / Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" className="qr-code-field"/>
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