import React, {Component} from 'react';
import {DropDownMenu, MenuItem, RadioButton, RadioButtonGroup} from "material-ui";
import './SingleAnswerBlankList.css'

class SingleAnswerBlankList extends Component {

    testGenerate(count) {
        let test = [];

        for (let index = 0; index < count; index++) {
            let key = 'test' + index;

            test.push(
                    <RadioButton
                        key={key}
                        value={index}
                        disabled={!this.props.logged}
                    />
            )
        }

        return test;
    }

    handleNumberChange(event, index, value) {
        this.props.optionsChange(this.props.index, value)
    }

    render() {
        let test = this.testGenerate(this.props.answersOptions[this.props.index].options);
        const cssClasses = `${this.props.answersOptions[this.props.index].cssClassName} list-item-wrapper`;
        
        return (
            <li className={cssClasses}>
                <RadioButtonGroup
                    className="radio-button-group"
                    onChange={(event, value) => this.handleAnswerChange(event, value)}
                    name="shipSpeed"
                    defaultSelected={this.props.logged ? 0 : -1}
                >
                    {test}
                </RadioButtonGroup>
                <DropDownMenu
                    value={this.props.answersOptions[this.props.index].options}
                    onChange={
                        (event, index, value) => this.handleNumberChange(event, index, value)
                    }
                >
                    <MenuItem value={2} primaryText="2"/>
                    <MenuItem value={3} primaryText="3"/>
                    <MenuItem value={4} primaryText="4"/>
                    <MenuItem value={5} primaryText="5"/>
                    <MenuItem value={6} primaryText="6"/>
                    <MenuItem value={7} primaryText="7"/>
                </DropDownMenu>
                {this.getGroupContent()}
            </li>
        );
    }

    handleGroupChange(event, index, value) {
        this.props.changeGroupOfLine(this.props.index, value);
    }

    handleAnswerChange(event, value) {
        this.props.handleRightAnswerChange(this.props.index, value)
    }

    getGroupContent() {
        if (this.props.navCall === true) {
            return null;
        } else {
            return (
                <DropDownMenu
                    value={this.props.answersOptions[this.props.index].group}
                    onChange={
                        (event, index, value) => this.handleGroupChange(event, index, value)
                    }
                >
                    <MenuItem value={0} primaryText={this.props.groups[0].name}/>
                    <MenuItem value={1} primaryText={this.props.groups[1].name}/>
                    <MenuItem value={2} primaryText={this.props.groups[2].name}/>
                    <MenuItem value={3} primaryText={this.props.groups[3].name}/>
                    <MenuItem value={4} primaryText={this.props.groups[4].name}/>
                    <MenuItem value={5} primaryText={this.props.groups[5].name}/>
                </DropDownMenu>
            );
        }
    }
}


export default SingleAnswerBlankList;