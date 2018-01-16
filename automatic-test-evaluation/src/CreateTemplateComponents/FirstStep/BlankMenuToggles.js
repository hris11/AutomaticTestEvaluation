import React, {Component} from 'react';
import {Toggle} from "material-ui";
import './BlankMenuToggles.css';

class BlankMenuToggles extends Component {

    handleDisplayLeft() {
        if (this.props.parentProps.navCall === true) {
            return (<div>
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
            </div>);
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

    handleDisplayRight() {
        if (this.props.parentProps.navCall === true) {
            return (<div>
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
            </div>);
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
                        {this.handleDisplayLeft()}
                    </div>

                    <div className="rightBarTab">
                        {this.handleDisplayRight()}
                    </div>
                </div>
            </div>
        );
    }
}

export default BlankMenuToggles;