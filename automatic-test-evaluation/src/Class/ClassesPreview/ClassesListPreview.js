import React, {Component} from 'react';
import RestCalls from "../../RESTCalls/RestCalls";
import SingleClassPreview from "./SingleClassPreview";

class ClassesListPreview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    fetchUserClasses() {
        const url = "/rest/user/classes/";
        const body = {
            email: this.props.email
        };
        let self = this;
        let callback = (response) => {
            if (response.ok) {
                response.json().then(function (response) {
                    console.log(response);
                    self.setState({
                        data: response
                    });
                });
            }
        };

        RestCalls.post(url, undefined, body, callback);
    }

    createClassFields() {
        let result = [];
        let data = Object.assign([], this.state.data);

        for (let i = 0; i < data.length; i++) {
            result.push(<SingleClassPreview
                data={data[i]}
            />)
        }

        return result;
    }

    componentDidMount() {
        this.fetchUserClasses();
    }

    render() {
        return (
            <div>
                Classes List Preview
                <ul>
                    {this.createClassFields()}
                </ul>
            </div>
        );
    }
}

export default ClassesListPreview;