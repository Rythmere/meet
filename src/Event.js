import React, { Component } from 'react';

class Event extends Component {
    state = {
        collapsed: true
    }

    handleClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    render() {
        const {event} = this.props;
        const {collapsed} = this.state;
        return <div className='Event'>
            <p className='summary'>{event.summary}</p>
            <p className='location'>{event.location}</p>
            <p className='date'>{event.start}</p>
            {collapsed && <button className='show-details' onClick={this.handleClick}>Show Details</button> }
            {!collapsed &&
                <div className='hiddenDetails'>
                    <p>About Event</p>
                    <a className='calendarLink' href={event.htmlLink} target='_blank'>See event details on Google Calendar</a>
                    <p className='description'>{event.description}</p>
                    <button className='hideDetails' onClick={this.handleClick}>Hide Details</button>
                </div>
            }
        </div>;
    }
}

export default Event;