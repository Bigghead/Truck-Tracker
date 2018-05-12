import React, { Component } from 'react';
import { connect } from 'react-redux';
import { parseTime } from '../helpers/index';

function mapStateToProps( state ) {
    return {
        trucks: state.trucks.trucks
    };
}

class TruckList extends Component {

    getTrucks = () => {
        console.log( this.props )
        return this.props.trucks.map( t => {
            return <li key={ t._id }>
                <div className="truck-container">
                    <h5>{ t.truckName } ( { parseTime( t.startTime ) } - { parseTime(t.endTime) } )
                    </h5>
                    <p>Assignments: </p>
                    { t.reservations.length === 0
                        ? 'No Assignments'
                        : this.getAssignments( t.reservations ) }
                </div>
            </li>
        } )
    }


    getAssignments = ( reservations ) => {
        return reservations.map( r => {
            const { personName, moveDate, from, to } = r;
            return <p key={ r._id }>
                { personName }, { moveDate }, { parseTime( from ) }, { to - from } { to - from === 1 ? 'hour' : 'hours' }
            </p>
        } )
    }


    render() {
        return (
            <div className="truck-list-container">
                <h4>Trucks</h4>
                <ul>
                    { this.getTrucks() }
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)( TruckList );