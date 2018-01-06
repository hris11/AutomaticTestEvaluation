import React,{Component} from 'react';

class Student extends Component {

    render() {
        return (
            <li>
                <span>Име: {this.props.firstName}</span>
                <span>Фамилия: {this.props.lastName}</span>
                <span>Номер: {this.props.number}</span>
            </li>
        );
    }
}

export default Student;