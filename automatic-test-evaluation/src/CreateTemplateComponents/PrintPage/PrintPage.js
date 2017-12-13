import React, {Component} from  'react'
import OptionsHandler from "./OptionsHandler";

class PrintPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>Име...................................................................................</p>
                <OptionsHandler parentState={this.props.parentState}/>
            </div>
        );
    }
}

export default PrintPage;