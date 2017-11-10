import React, { Component } from 'react';
import RegisterLoginComponent from './RegisterLoginComponent/RegisterLoginComponent'
import ClassCreateComponent from './ClassCreateComponent/ClassCreateComponent'

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
            .then(function (response)
            {
                response.text().then(function (data)
                {
                    self.setState({data: data, error: ''});                        
                });

            })
            .catch(function (error)
            {
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
                    <div>
                    <RegisterLoginComponent/>
                    <ClassCreateComponent/>
                    </div>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Welcome to React</h1>
                        </header>
                        <p className="App-intro">
                            To get started, edit <code>src/App.js</code> and save to reload.
                        </p>
                        {data}
                        {error}
                        <button onClick={this.makeAjaxRequest.bind(this, '/rest/hello')} >Click me</button>
                    </div>
                </div>
                );
    }
}

export default App;
