import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTruck } from '../store/actions/TruckActions/index'
import { makeTimes } from '../helpers/index';


class TruckCreate extends Component {

    constructor( props ){
        super( props );
        this.truckInput = React.createRef();
        this.truckStart = React.createRef();
        this.truckEnd   = React.createRef();
    }

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
        this.clearForm();
    }


    clearForm = () => {
        this.truckInput.current.value = '';
        this.truckStart.current.value = 7;
        this.truckEnd.current.value   = 7;        
    }


    render() {
        return (
            <div className="create-form">
                <span>Create Truck</span>

                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="truckName">Name</label>
                    <input type="text" id="truckName" 
                            placeholder="Name of truck"
                            onChange={ this.handleInput }
                            ref={ this.truckInput } />

                    <label htmlFor="startTime">Start Time ( hour )</label>
                    <select id="startTime" name="startTime" 
                            style={  { display: 'block'}}
                            onChange={ this.changeTime.bind( this, 'startTime' ) }
                            ref={ this.truckStart } >
                        { makeTimes() }
                    </select>

                    <label htmlFor="startTime">End Time ( hour )</label>
                    <select id="startTime" name="startTime" 
                            style={  { display: 'block'}}
                            onChange={ this.changeTime.bind( this, 'endTime' ) }
                            ref={ this.truckEnd } >
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