import React, {Component} from 'react';
import {TextField} from "material-ui";
import AddNewStudent from "./AddNewStudent";

class ClassBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: '',
            students: [],
        }
    }

    render() {
        return (

            <div>
                <div>
                    <p>
                        Изберете име на класа
                    </p>

                </div>
                <div className="class-box-students-list">
                    {/*
                        Load the list of Students
                    */}
                </div>
                <div className="class-box-new-student">
                    {/*
                        Can add new Student to the list
                    */}
                    <AddNewStudent/>
                </div>
            </div>
        );
    }
}

export default ClassBox;