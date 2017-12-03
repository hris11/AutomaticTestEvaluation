import React, {Component} from 'react'
import SingleAnswerBlankList from "./SingleAnswerBlankList";

class BlankManagerSecondStepHandler extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let numberOfAnswers = this.props.answers;
        let elements = [];

        for (let index = 0; index < numberOfAnswers; index++) {
            elements.push(
                <SingleAnswerBlankList
                    key={index}
                    index={index}
                    answersOptions={this.props.answersOptions}
                    optionsChange={(index, newValue) => this.props.optionsChange(index, newValue)}
                    defaultOptions={this.props.defaultOptions}
                />
            );
        }

        return (
            <ol>
                {elements.map((elem) => elem)}
            </ol>
        );
    }
}

export default BlankManagerSecondStepHandler;