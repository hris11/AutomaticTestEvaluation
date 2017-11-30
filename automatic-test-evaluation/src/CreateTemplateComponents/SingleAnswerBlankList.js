import React, {Component} from 'react';
import {Checkbox, CommunicationChatBubble, DropDownMenu, ListItem, MenuItem} from "material-ui";
import './SingleAnswerBlankList.css'

class SingleAnswerBlankList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberValue: this.props.defaultOptions
        }
    }

    checkboxesGenerator(numberOfCheckboxes) {
        let newCheckBoxes = [];
        for (let index = 0; index < numberOfCheckboxes; index++) {
            newCheckBoxes.push(
                <div className="check-box-style">
                    <Checkbox
                        label=""
                        disabled={true}
                    />
                </div>
            );
        }

        return newCheckBoxes;
    }

    handleNumberChange(event, index, value) {

        this.checkboxesGenerator(value);

        this.setState({
            numberValue: value
        });
    }

    render() {
        let checkBoxes = this.checkboxesGenerator(this.state.numberValue);
        return (
            <li >
                {checkBoxes}
                <DropDownMenu
                    value={this.state.numberValue}
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
            </li>
        );
    }
}

export default SingleAnswerBlankList;