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
                        label="Промяна"
                        secondary={true}
                        onClick={(classTitle) => this.props.modifyClass(this.props.data.name)}
                    />
                </div>
                <div>
                    <RaisedButton
                        label="Бланки"
                        primary={true}
                        onClick={(classId) => this.props.modifyBlanks(this.props.data.id)}
                    />
                </div>
                <div>
                    <RaisedButton
                        label="Изтриване"
                        onClick={(classId) => this.props.deleteClass(this.props.data.id)}
                    />
                </div>
            </li>
        );
    }
}

export default SingleClassPreview;