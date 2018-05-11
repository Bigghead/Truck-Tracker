import React, { Component } from 'react';
import { connect } from 'react-redux';
import { parseTime } from '../helpers/index';

function mapStateToProps(state) {
    return {
        trucks: state.trucks.trucks
    };
}

class TruckList extends Component {

    getTrucks = () => {
        return this.props.trucks.map( t => {
            return <li key={ t._id }>
                <p>{ t.truckName }</p>
                <p>{ t.truckName } Assignments</p>
                { this.getAssignments( t.reservations ) }
            </li>
        } )
    }


    getAssignments = ( reservations ) => {
        return reservations.map( r => {
            const { personName, moveDate, from, to } = r;
            console.log(r)
            return <p key={ r._id }>
                { personName }, { moveDate }, { parseTime(from) }, { to - from } hours
            </p>
        })
    }


    render() {
        return (
            <div>
                <ul>
                    { this.getTrucks() }
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(TruckList);