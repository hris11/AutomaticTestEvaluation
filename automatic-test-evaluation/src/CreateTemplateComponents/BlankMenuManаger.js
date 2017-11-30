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
                <BlankMenuToggles/>
                <Divider/>
                <BlankMenuSlider
                    handleAnswerSlider={(value) => this.props.handleAnswerSlider(value)}
                />
            </div>
        );
    }
}

export default BlankMenuManger;