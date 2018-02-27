/*The fallowing part of code is taken from:
* https://stackoverflow.com/questions/35206589/how-to-download-fetch-response-in-react-as-file#36075562*/

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class FileDownload extends Component {

    static defaultProps = {
        method: 'GET'
    };

    componentDidMount() {
        ReactDOM.findDOMNode(this).submit();
    }

    render() {
        const {actionPath, method} = this.props;

        return (
            <form
                action={actionPath}
                className="hidden"
                method={method}
            >
            </form>
        );
    }
}