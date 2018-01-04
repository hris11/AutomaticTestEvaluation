import React, {Component} from 'react';
import BlankLine from "./BlankLine";
import './OptionsHandler.css'

class OptionsHandler extends Component {

    generateLines() {
        let lines = [];

        for (let i = 0; i < this.props.parentState.sliderValue; i++) {
            let key = "BlankLine" + i;
            lines.push(<BlankLine
                key={key}
                information={this.props.parentState.eachAnswerNumberOfOptions[i]}
            />);
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