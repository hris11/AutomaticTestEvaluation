import React,{Component} from 'react';
import {RaisedButton} from "material-ui";
import './SingleClassPreview.css'

class SingleClassPreview extends Component {
    render() {
        return (
            <li className="class-preview-line">
                <div>{this.props.data.name}</div>
                <div>
                    <RaisedButton
                        label="Промени"
                        secondary={true}
                        onClick={(classTitle) => this.props.modifyClass(this.props.data.name)}
                    />
                </div>
                <div>
                    <RaisedButton
                        label="Тестове"
                        primary={true}
                        onClick={(classId) => this.props.modifyBlanks(this.props.data.id)}
                    />
                </div>
                <div>
                    <RaisedButton
                        label="Изтрии"
                        onClick={(classId) => this.props.deleteClass(this.props.data.id)}
                    />
                </div>
            </li>
        );
    }
}

export default SingleClassPreview;