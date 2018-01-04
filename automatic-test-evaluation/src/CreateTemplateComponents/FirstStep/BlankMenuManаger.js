import React, {Component} from 'react'
import {Divider, DropDownMenu, MenuItem} from "material-ui";
import BlankMenuToggles from "./BlankMenuToggles";
import BlankMenuSlider from "./BlankMenuSlider";
import './BlankMenuManager.css'

class BlankMenuManger extends Component {

    render() {
        return (
            <div className="menu-bar">
                <div className="default-options-bar">
                    <div>
                        Изберете колко опции да имат отговорите по подразбиране
                    </div>
                    <DropDownMenu
                        value={this.props.parentProps.defaultOptions}
                        onChange={
                            (event, index, value) => this.props.parentProps.handleDefaultOptionsChange(event, index, value)
                        }
                    >
                        <MenuItem value={2} primaryText="2"/>
                        <MenuItem value={3} primaryText="3"/>
                        <MenuItem value={4} primaryText="4"/>
                        <MenuItem value={5} primaryText="5"/>
                        <MenuItem value={6} primaryText="6"/>
                        <MenuItem value={7} primaryText="7"/>
                    </DropDownMenu>
                </div>

                <Divider/>

                <BlankMenuToggles
                    parentProps={this.props.parentProps}
                />

                <Divider/>

                <BlankMenuSlider
                    handleSlider={(event, value) => this.props.parentProps.handleSlider(event, value)}
                    sliderValue={this.props.parentProps.sliderValue}
                />
            </div>
        );
    }
}

export default BlankMenuManger;