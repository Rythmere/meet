import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({
             numberOfEvents: value
            });
    }
    render() {
        return <input
                    type="text"
                    className='numberOfEvents'
                    value= {this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
    }
}

export default NumberOfEvents;