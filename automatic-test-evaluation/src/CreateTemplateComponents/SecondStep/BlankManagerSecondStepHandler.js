import React, {Component} from 'react'
import SingleAnswerBlankList from "./SingleAnswerBlankList";
import GroupsBar from "./GroupsBar";
import {Divider} from "material-ui";

class BlankManagerSecondStepHandler extends Component {

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
                    groups={this.props.groups}
                    changeGroupOfLine={(index, value) => this.props.changeGroupOfLine(index, value)}
                />
            );
        }

        return (
            <div>
                <GroupsBar
                    handleGroupEditing={(event, index, value) => this.props.handleGroupEditing(event, index, value)}
                    safeChanges={(event) => this.props.safeChanges(event)}
                    discardChanges={() => this.props.discardChanges()}
                    handleUpdateInput={(event, newValue) => this.props.handleUpdateInput(event, newValue)}
                    groups={this.props.groups}
                    lastGroupEdited={this.props.lastGroupEdited}
                />
                <Divider/>
                <ol>
                    {elements.map((elem) => elem)}
                </ol>
            </div>
        );
    }
}

export default BlankManagerSecondStepHandler;