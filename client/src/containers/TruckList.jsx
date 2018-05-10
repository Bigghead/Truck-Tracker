import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        trucks: state.trucks.trucks
    };
}

class TruckList extends Component {

    getTrucks = () => {
        console.log( this.props.trucks );
        return this.props.trucks.map( t => {
            return <li key={ t._id }>{ t.truckName }</li>
        } )
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