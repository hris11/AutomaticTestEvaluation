import React, {Component} from 'react';
import './BlankLine.css'

class BlankLine extends Component {

    constructLine(numberOfOptions) {
        let line = [];


        for (let i = 0; i < numberOfOptions; i++) {
            let key = "blankLineSpan" + i;
            line.push(<span
                className="blank-option"
                key={key}
            >
                &#9711;
            </span>
            );
        }
        return line;
    }

    render() {
        let finalLine = this.constructLine(this.props.information.options);

        return (
            <li>
                {finalLine}
            </li>
        );
    }
}

export default BlankLine;