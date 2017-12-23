import React, {Component} from  'react';
import OptionsHandler from "./OptionsHandler";
import './PrintPage.css';
import {Divider} from "material-ui";

class PrintPage extends Component {
    constructor(props) {
        super(props)
    }

    nameHeaderGenerator() {
        if (this.props.parentState.nameToggle) {
            return "Име: _____________________________________";
        } else {
            return "";
        }
    }

    classHeaderGenerator() {
        if (this.props.parentState.classToggle) {
            return "Клас: ____";
        } else {
            return "";
        }
    }

    numberHeaderGenerator() {
        if (this.props.parentState.numberToggle) {
            return "Номер: ____";
        } else {
            return "";
        }
    }

    groupHeaderGenerator() {
        if (this.props.parentState.groupToggle) {
            return "Група: ____";
        } else {
            return "";
        }
    }

    render() {
        let nameHeader = this.nameHeaderGenerator();
        let numberHeader = this.numberHeaderGenerator();
        let classHeader = this.classHeaderGenerator();
        let groupHeader = this.groupHeaderGenerator();

        return (
            <div className="blank-for-print">
                <div className="site-header">this blank is created with automatic test evaluation</div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" className="qr-code-field"/>
                <div className="content-headers">
                    <div className="name-header">{nameHeader}</div>
                    <div className="class-header">{classHeader}</div>
                    <div className="number-header">{numberHeader}</div>
                    <div className="group-header">{groupHeader}</div>
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