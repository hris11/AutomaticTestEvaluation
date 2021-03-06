import React, {Component} from 'react'
import SingleAnswerBlankList from "./SingleAnswerBlankList";
import GroupsBar from "./GroupsBar";
import {Divider} from "material-ui";
import './BlankManagerSecondStepHandler.css';

class BlankManagerSecondStepHandler extends Component {

    render() {
        let numberOfAnswers = this.props.answers;
        let elements = [];

        for (let index = 0; index < numberOfAnswers; index++) {
            let key = "SingleAnswerBlankList" + index;
            elements.push(
                <SingleAnswerBlankList
                    key={key}
                    index={index}
                    answersOptions={this.props.answersOptions}
                    optionsChange={(index, newValue) => this.props.optionsChange(index, newValue)}
                    defaultOptions={this.props.defaultOptions}
                    groups={this.props.groups}
                    changeGroupOfLine={(index, value) => this.props.changeGroupOfLine(index, value)}
                    logged={this.props.logged}
                    handleRightAnswerChange={(index, rightAnswerIndex) => this.props.handleRightAnswerChange(index, rightAnswerIndex)}
                    navCall={this.props.navCall}
                />
            );
        }

        return (
            <div>
                {this.handleDisplayGroupBar()}
                <Divider/>
                <ol className="hr-group-list">
                    {elements.map((elem) => elem)}
                </ol>
            </div>
        );
    }

    handleDisplayGroupBar() {
        if (this.props.navCall === true) {
            return null;
        } else {
            return (
                <GroupsBar
                    handleGroupEditing={(event, index, value) => this.props.handleGroupEditing(event, index, value)}
                    safeChanges={(event) => this.props.safeChanges(event)}
                    discardChanges={() => this.props.discardChanges()}
                    handleUpdateInput={(event, newValue) => this.props.handleUpdateInput(event, newValue)}
                    groups={this.props.groups}
                    lastGroupEdited={this.props.lastGroupEdited}
                />
            );
        }
    }
}

export default BlankManagerSecondStepHandler;