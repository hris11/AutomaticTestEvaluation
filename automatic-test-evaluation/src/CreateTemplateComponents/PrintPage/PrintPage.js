import React, {Component} from  'react';
import OptionsHandler from "./OptionsHandler";
import './PrintPage.css';

class PrintPage extends Component {
    constructor(props) {
        super(props)
    }

    /*logged: false,
    stepperFinished: false,
    stepperIndex: 0,
    nameToggle: true,
    numberToggle: true,
    classToggle: true,
    groupToggle: true,
    listNameToggle: false,
    listNumberToggle: false,
    sliderValue: 10,
    defaultOptions: 4,*/

    nameHeaderGenerator() {
        if (this.props.parentState.nameToggle) {
            return "Име: _____________________________________________________";
        } else {
            return "";
        }
    }

    classHeaderGenerator() {
        if (this.props.parentState.classToggle) {
            return "Клас: _______";
        } else {
            return "";
        }
    }

    numberHeaderGenerator() {
        if (this.props.parentState.numberToggle) {
            return "Номер: ______";
        } else {
            return "";
        }
    }

    render() {
        let nameHeader = this.nameHeaderGenerator();
        let numberHeader = this.numberHeaderGenerator();
        let classHeader = this.classHeaderGenerator();

        return (
            <div className="blank-for-print">
                <div className="site-header">this blank is created with automatic test evaluation</div>
                <div className="qr-code-field">d</div>
                <div className="content-headers">
                    <div className="name-header">{nameHeader}</div>
                    <div className="class-header">{classHeader}</div>
                    <div className="number-header">{numberHeader}</div>
                </div>
                <OptionsHandler parentState={this.props.parentState}/>
            </div>
        );
    }
}

export default PrintPage;