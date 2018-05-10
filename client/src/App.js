import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import getTrucks from './store/actions/GetTrucks';


import Navbar from './components/Navbar';
import TruckList from './containers/TruckList';

class App extends Component {

    constructor( props ) {
        super( props );
        this.props.store.dispatch(getTrucks());
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ TruckList } />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
