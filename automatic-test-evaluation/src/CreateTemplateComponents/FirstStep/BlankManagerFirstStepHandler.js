import React, {Component} from 'react';
import BlankMenuManger from "./BlankMenuManаger";

class BlankManagerFirstStepHandler extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BlankMenuManger
                parentProps={this.props}
            />
        );
    }
}

export default BlankManagerFirstStepHandler;