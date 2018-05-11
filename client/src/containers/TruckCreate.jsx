import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTruck } from '../store/actions/TruckActions/index'
import { makeTimes } from '../helpers/index';


class TruckCreate extends Component {

    state = {
        truckName: '',
        startTime: 7,
        endTime  : 7
    }


    handleInput = ( e ) => {
        const { target: { value } } = e;
        this.setState( { truckName: value } );
    }



    changeTime = ( time, e ) => {
        const { target: { value } } = e;
        const timeValue = parseInt( value.replace(/\D+/g, '') );
        this.setState( { [ time ]: timeValue } );
    }


    handleSubmit = ( e ) => {
        e.preventDefault();
        const { truckName, startTime, endTime } = this.state;
        console.log( truckName, startTime, endTime );
        this.props.dispatch( addTruck( { truckName, startTime, endTime } ) );
    }


    render() {
        return (
            <div className="create-form">
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
                        { makeTimes() }
                    </select>

                    <label htmlFor="startTime">End Time ( hour )</label>
                    <select id="startTime" name="startTime" 
                            style={  { display: 'block'}}
                            onChange={ this.changeTime.bind( this, 'endTime' ) } >
                        { makeTimes() }
                    </select>

                    <button type="submit">Create Truck</button>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
)( TruckCreate );