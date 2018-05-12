import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeTimes, postData } from '../helpers/index';
import { UPDATE_TRUCK } from '../store/actions/actions';

class JobCreate extends Component {

    constructor( props ) {
        super( props );
        this.nameInput      = React.createRef();
        this.dateInput      = React.createRef();
        this.startTimeInput = React.createRef();
        this.endTimeInput   = React.createRef();
        
    }
    state = {
        personName: '',
        moveDate  : '',
        startTime : 7,
        endTime   : 1,
    }


    setNameOrDate = ( val, e ) => {
        const { target: { value } } = e;
        this.setState( { [val]: value } );
    }


    getStartTime = ( e ) => {
        const { target: { value } } = e;
        const timeValue = parseInt( value.replace(/\D+/g, '') );
        this.setState( { startTime: timeValue } );
    }


    getEndTime = ( e ) => {
        const { target: { value } } = e;
        this.setState( { endTime: parseInt( value ) } );
    }


    handleSubmit = async ( e ) => {
        e.preventDefault();
        const { personName, moveDate, startTime, endTime } = this.state;
        try { 

            const response = await postData( '/job', {
                personName,
                moveDate,
                startTime,
                endTime: startTime + endTime
            } );

            // ===== update truck if successful ===== //
            this.props.dispatch( {
                type   : UPDATE_TRUCK,
                payload: response
            } )

            this.clearForm();



        } catch ( e ) { 
            console.log( e ); 
        }
    }


    clearForm = () => {
        this.nameInput.current.value      = '',
        this.dateInput.current.value      = '',
        this.startTimeInput.current.value = 7,
        this.endTimeInput.current.value   = 1
    }


    render() {
        return (
            <div className="create-form">
                <span>Add Job</span>

                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="personName">Name</label>
                    <input type="text" id="personName"
                           placeholder="Name of person"
                           onChange={ this.setNameOrDate.bind( this, 'personName' ) }
                           ref={ this.nameInput }/>

                    <label htmlFor="jobDate">Move Date</label>
                    <input type="date"
                           onChange={ this.setNameOrDate.bind( this, 'moveDate') }
                           ref={ this.dateInput }/>

                    <label htmlFor="startTime">Start Time ( hour )</label>
                    <select id="startTime" name="startTime"
                            style={ { display: 'block' } }
                            onChange={ this.getStartTime }
                            ref={ this.startTimeInput }
                         >
                        { makeTimes() }
                    </select>

                    <label htmlFor="hour">Estimated Hours</label>
                    <input type="number" 
                           id="hour"
                           onChange={ this.getEndTime }
                           ref={ this.endTimeInput }/>

                    <button type="submit">Add Job</button>
                </form>
            </div>
        );
    }
}

export default connect( null )( JobCreate );