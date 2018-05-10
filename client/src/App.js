import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Navbar from './components/Navbar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container">
                    <Switch>
                        {/* <Route exact path="/" component={ LandingPage } /> */}
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
