import React, {Component} from 'react';
import {Toggle} from "material-ui";
import './BlankMenuToggles.css';

class BlankMenuToggles extends Component {

    handleDisplayToggleListName() {
        if (this.props.parentProps.navCall === true) {
            return '';
        } else {
            return (
                <Toggle
                    className="toggleMargins"
                    label="Имена на учениците от списъка"
                    defaultToggled={this.props.parentProps.toggleListName}
                    onToggle={() => this.props.parentProps.handleToggleListName()}
                    disabled={!this.props.parentProps.logged}
                />
            );
        }
    }

    handleDisplayToggleListNumbers() {
        if (this.props.parentProps.navCall === true) {
            return '';
        } else {
            return (
                <Toggle
                    className="toggleMargins"
                    label="Номер на учениците от списъка"
                    defaultToggled={this.props.parentProps.toggleListNumber}
                    onToggle={() => this.props.parentProps.handleToggleListNumber()}
                    labelPosition="right"
                    disabled={!this.props.parentProps.logged}
                />
            );
        }
    }
    render() {
        return (
            <div>
                <div className="barBox">
                    <div className="leftBarTab">
                        <Toggle
                            className="toggleMargins"
                            label="Поле за име"
                            defaultToggled={this.props.parentProps.toggleName}
                            onToggle={() => this.props.parentProps.handleToggleName()}
                        />
                        <Toggle
                            className="toggleMargins"
                            label="Поле за номер"
                            defaultToggled={this.props.parentProps.toggleNumber}
                            onToggle={() => this.props.parentProps.handleToggleNumber()}
                        />
                        {this.handleDisplayToggleListName()}
                    </div>

                    <div className="rightBarTab">
                        <Toggle
                            className="toggleMargins"
                            label="Поле за група"
                            defaultToggled={this.props.parentProps.toggleGroup}
                            onToggle={() => this.props.parentProps.handleToggleGroup()}
                            labelPosition="right"
                        />
                        <Toggle
                            className="toggleMargins"
                            label="Поле за клас"
                            defaultToggled={this.props.parentProps.toggleClass}
                            onToggle={() => this.props.parentProps.handleToggleClass()}
                            labelPosition="right"
                        />
                        {this.handleDisplayToggleListNumbers()}
                    </div>
                </div>
            </div>
        );
    }
}

export default BlankMenuToggles;