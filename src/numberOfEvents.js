import React, { Component } from 'react';

class NumberOfEvents extends Component {

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.props.updateNumberOfEvents(value);
    }
    render() {
        return <input
                    type="text"
                    className='numberOfEvents'
                    value= {this.props.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
    }
}

export default NumberOfEvents;