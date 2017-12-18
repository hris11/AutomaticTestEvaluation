import React, {Component} from 'react';
import BlankLine from "./BlankLine";

class OptionsHandler extends Component {
    constructor(props) {
        super(props);
    }

    generateLines() {
        let lines = [];

        for (let i = 0; i < this.props.parentState.eachAnswerNumberOfOptions.length; i++) {

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
            <ol>
                {lines}
            </ol>
        );
    }
}

export default OptionsHandler;