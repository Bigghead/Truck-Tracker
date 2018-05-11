import React from 'react';
// import TruckList from '../containers/TruckList';
import TruckCreate from '../containers/TruckCreate'
import JobCreate from '../containers/JobCreate';


const Landing = () => {
    return (
        <div className="create-form-container">
            <TruckCreate></TruckCreate>
            <JobCreate></JobCreate>
        </div>
    );
};

export default Landing;