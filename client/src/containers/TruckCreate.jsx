import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps( state ) {
    return {

    };
}

class TruckCreate extends Component {

    state = {
        truckName: '',
        startTime: '',
        endTime  : ''
    }


    handleInput = ( e ) => {
        const { target: { value } } = e;
        this.setState( { truckName: value } );
    }

    makeTimes = () => {
        
        const times = [ '7am', '8am', '9am', '10am', '11am', '12pm', 
                        '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',
                        '8pm', '9pm' ];
        
        return times.map( ( t, index ) => {
            return <option defaultValue={ index === 0 } 
                           key={t} 
                           value={t}
                           >{t}</option>;
        } );
    }


    changeTime = ( time, e ) => {
        const { target: { value } } = e;
        this.setState( { [ time ]: value } );
    }


    handleSubmit = ( e ) => {
        e.preventDefault();
        const { truckName, startTime, endTime } = this.state;
        console.log( truckName, startTime, endTime );
    }


    render() {
        return (
            <div>
                <span>Create Truck</span>

                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="truckName">Name</label>
                    <input type="text" id="truckName" 
                            placeholder="Name of truck"
                            onChange={ this.handleInput } />

                    <label htmlFor="startTime">Start Time ( hour )</label>
                    <select id="startTime" name="startTime" 
                            style={  { display: 'block'}}
                            onChange={ this.changeTime.bind( this, 'startTime' ) } >
                        { this.makeTimes() }
                    </select>

                    <label htmlFor="startTime">Start Time ( hour )</label>
                    <select id="startTime" name="startTime" 
                            style={  { display: 'block'}}
                            onChange={ this.changeTime.bind( this, 'endTime' ) } >
                        { this.makeTimes() }
                    </select>

                    <button type="submit">Create Truck</button>
                </form>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)( TruckCreate );