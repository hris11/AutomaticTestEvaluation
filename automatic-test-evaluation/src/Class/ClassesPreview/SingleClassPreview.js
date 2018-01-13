import React,{Component} from 'react';
import {RaisedButton} from "material-ui";
import './SingleClassPreview.css'

class SingleClassPreview extends Component {
    render() {
        return (
            <li className="class-preview-line">
                name: {this.props.data.name}
                <RaisedButton
                    label="Промени"
                    secondary={true}
                    onClick={(classTitle) => this.props.modifyClass(this.props.data.name)}
                />
                <RaisedButton
                    label="Изтрии"
                    onClick={(classId) => this.props.deleteClass(this.props.data.id)}
                />
            </li>
        );
    }
}

export default SingleClassPreview;