import React, {Component} from 'react'
import {Divider, Paper} from "material-ui";
import BlankMenuToggles from "./BlankMenuToggles";
import BlankMenuSlider from "./BlankMenuSlider";

class BlankMenuManger extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
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