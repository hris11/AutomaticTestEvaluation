import React, {Component} from 'react';
import {Toggle} from "material-ui";
import './BlankMenuToggles.css';


class BlankMenuToggles extends Component {
    render() {
        return (
            <div>
                <div className="barBox">
                    <div className="leftBarTab">
                        <Toggle
                            className="toggleMargins"
                            label="Поле за име"
                            defaultToggled={true}
                            onToggle={this.props.handleName}
                        />
                        <Toggle
                            className="toggleMargins"
                            label="Поле за номер"
                            defaultToggled={true}
                            onToggle={this.props.handleName}
                        />
                        <Toggle
                            className="toggleMargins"
                            label="Имена на учениците от списъка"
                            defaultToggled={false}
                            onToggle={this.props.handleName}
                        />
                    </div>

                    <div className="rightBarTab">
                        <Toggle
                            className="toggleMargins"
                            label="Поле за група"
                            defaultToggled={true}
                            onToggle={this.props.handleName}
                            labelPosition="right"
                        />
                        <Toggle
                            className="toggleMargins"
                            label="Поле за клас"
                            defaultToggled={true}
                            onToggle={this.props.handleName}
                            labelPosition="right"
                        />
                        <Toggle
                            className="toggleMargins"
                            label="Номер на учениците от списъка"
                            defaultToggled={false}
                            onToggle={this.props.handleName}
                            labelPosition="right"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BlankMenuToggles;