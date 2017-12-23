import React, {Component} from 'react';
import BlankLine from "./BlankLine";
import './OptionsHandler.css'

class OptionsHandler extends Component {
    constructor(props) {
        super(props);
    }

    generateLines() {
        let lines = [];

        for (let i = 0; i < this.props.parentState.sliderValue; i++) {

            lines.push(<BlankLine
                        information={this.props.parentState.eachAnswerNumberOfOptions[i]}
            />);

            console.log(this.props.parentState.eachAnswerNumberOfOptions[i]);
        }

        return lines;
    }

    render() {
        let lines = this.generateLines();
        return (
            <ol className="print-page-list">
                {lines}
            </ol>
        );
    }
}

export default OptionsHandler;