import React, {Component} from 'react';

class ClassesListPreview extends Component {

    fetchUserClasses() {
        let url = "/rest/user/classes/";

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        const options = {
            method: 'POST',
            body: JSON.stringify({
                email: this.props.email
            }),
            headers: headers
        };

        const self = this;
        fetch(url, options)
            .then(function (response) {

                console.log(response);

                if (response.ok) {

                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                {this.fetchUserClasses()}
                Classes List Preview
            </div>
        );
    }
}

export default ClassesListPreview;