import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeTimes, postData } from '../helpers/index';

class JobCreate extends Component {


    state = {
        personName: '',
        moveDate  : '',
        moveLength: 0,
        startTime : 7
    }


    setNameAndTime = ( val, e ) => {
        const { target: { value } } = e;
        this.setState( { [val]: value } );
    }


    getStartTime = ( e ) => {
        const { target: { value } } = e;
        const timeValue = parseInt( value.replace(/\D+/g, '') );
        this.setState( { startTime: timeValue } );
    }

    handleSubmit = async ( e ) => {
        e.preventDefault();
        const { personName, moveDate, moveLength, startTime } = this.state;
        try { 

            const response = await postData( 'http://localhost:9009/job', {
                personName,
                moveDate,
                moveLength,
                startTime
            } );

            // ===== update truck if successful ===== //


        } catch ( e ) { 
            console.log( e ); 
            alert('No trucks are available');
        }
    }

    render() {
        return (
            <div className="create-form">
                <span>Add Job</span>

                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="personName">Name</label>
                    <input type="text" id="personName"
                           placeholder="Name of person"
                           onChange={ this.setNameAndTime.bind( this, 'personName' ) }/>

                    <label htmlFor="jobDate">Move Date</label>
                    <input type="date"
                           onChange={ this.setNameAndTime.bind( this, 'moveDate') }/>

                    <label htmlFor="startTime">Start Time ( hour )</label>
                    <select id="startTime" name="startTime"
                            style={ { display: 'block' } }
                            onChange={ this.getStartTime }
                         >
                        { makeTimes() }
                    </select>

                    <label htmlFor="hour">Estimated Hours</label>
                    <input type="number" 
                           id="hour"
                           onChange={ this.setNameAndTime.bind( this, 'moveLength' ) }/>

                    <button type="submit">Add Job</button>
                </form>
            </div>
        );
    }
}

export default connect( null )( JobCreate );