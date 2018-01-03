import React, {Component} from 'react';
import RegisterLoginComponent from './RegisterLoginComponents/RegisterLoginScreen'
import ClassCreateComponent from './ClassCreateComponent/ClassCreateComponent'
import AddNewStudentComponent from './AddNewStudentComponent/AddNewStudentComponent'
import MainNavigationComponent from  './MainNavigationComponent/MainNavigationComponent'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '', // will contain response from AJAX request
            error: '' // will contain any network errors occured from AJAX request
        };
    }

    makeAjaxRequest(url) {
        console.log('clicked');
        const options = {
            method: 'GET'
        };
        const self = this;
        fetch(url, options)
            .then(function (response) {
                response.text().then(function (data) {
                    self.setState({data: data, error: ''});
                });

            })
            .catch(function (error) {
                self.setState({data: '', error: error});
            });
    }

    render() {
        let data;
        if (this.state.data.length > 0) {
            data = (<p>Data: {this.state.data}</p>);
        }
        let error;
        if (this.state.error.length > 0) {
            error = (<p>Error: {this.state.error}</p>);
        }
        return (
            <div>
                <MainNavigationComponent/>
            </div>
        );
    }
}

export default App;
