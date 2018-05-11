import React, { Component } from 'react';

class JobCreate extends Component {
    render() {
        return (
            <div className="create-form">
                <span>Add Job</span>

                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="personName">Name</label>
                    <input type="text" id="personName"
                        placeholder="Name of person"
                        />

                    <label htmlFor="jobDate">Move Date</label>
                    <input type="date"/>

                    <label htmlFor="startTime">Start Time ( hour )</label>
                    <select id="startTime" name="startTime"
                        style={ { display: 'block' } }
                         >
                        {/* { this.makeTimes() } */}
                    </select>

                    <button type="submit">Add Job</button>
                </form>
            </div>
        );
    }
}

export default JobCreate;