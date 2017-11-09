import React, { Component } from 'react';
import RegisterLoginComponent from './RegisterLoginComponent/RegisterLoginComponent'
import ClassCreateComponent from './ClassCreateComponent/ClassCreateComponent'

class App extends Component {
    render() {
        return (
            <div>
                <RegisterLoginComponent/>
                <ClassCreateComponent/>
            </div>
        );
    }
}

export default App;
