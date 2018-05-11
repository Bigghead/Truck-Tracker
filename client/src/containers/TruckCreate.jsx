import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTruck } from '../store/actions/TruckActions/index'


class TruckCreate extends Component {

    state = {
        truckName: '',
        startTime: 0,
        endTime  : 0
    }


    handleInput = ( e ) => {
        const { target: { value } } = e;
        this.setState( { truckName: value } );
    }

    makeTimes = () => {
        
        const times = [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ];
        
        return times.map( ( t, index ) => {
            return <option defaultValue={ index === 0 } 
                           key={t} 
                           value={t}
                           >{ this.parseTime( t )}</option>;
        } );
    }


    parseTime( time ) {
        return time <= 12 
            ? `${ time.toString() } am`
            : `${ ( time - 12 ).toString() } pm`
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
                        { this.makeTimes() }
                    </select>

                    <label htmlFor="startTime">End Time ( hour )</label>
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
    null,
)( TruckCreate );