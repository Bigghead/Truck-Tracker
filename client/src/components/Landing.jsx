import React from 'react';
import TruckList from '../containers/TruckList';
import TruckCreate from '../containers/TruckCreate'
import JobCreate from '../containers/JobCreate';


const Landing = () => {
    return (
        <div>
            <div className="create-form-container">
                <TruckCreate></TruckCreate>
                <JobCreate></JobCreate>
            </div>

            <div>
                <TruckList></TruckList>
            </div>
        </div>
    );
};

export default Landing;