import React, {Component} from 'react';
import BlankMenuManger from "./BlankMenuManаger";

class BlankManagerFirstStepHandler extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BlankMenuManger
                handleAnswerSlider={(value) => this.props.handleAnswerSlider(value)}
            />
        );
    }
}

export default BlankManagerFirstStepHandler;