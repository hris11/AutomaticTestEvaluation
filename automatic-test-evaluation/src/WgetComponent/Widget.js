import FileDownload from './FileDownload';
import React, {Component} from 'react';

export default class Widget extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const downloadPath = this.props.downloadPath;

        return (

            // button/icon with click bound to this.handleDownload goes here

            {downloadPath &&
            <FileDownload
                actionPath={downloadPath}
            />
            }
        );
    }
}