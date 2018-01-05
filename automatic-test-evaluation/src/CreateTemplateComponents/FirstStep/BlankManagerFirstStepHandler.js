import React, {Component} from 'react';
import BlankMenuManger from "./BlankMenuManаger";

class BlankManagerFirstStepHandler extends Component {
    render() {
        return (
            <BlankMenuManger
                parentProps={this.props}
            />
        );
    }
}

export default BlankManagerFirstStepHandler;