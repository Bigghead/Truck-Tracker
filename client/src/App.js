import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getTrucks } from './store/actions/TruckActions';


import NavBar from './components/Navbar';
import Landing from './components/Landing';

class App extends Component {

    constructor( props ) {
        super( props );
        this.props.store.dispatch(getTrucks());
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ Landing } />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
