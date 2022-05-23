import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        errorText:''
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if(value > 32 || value <= 0) {
            this.setState({
                errorText: 'Enter a number between 1 and 32'
            });
        }else {
            this.props.updateNumberOfEvents(value);
            this.setState({
                errorText: ''
            });
        }
        
    }
    render() {
        return ( 
            <div className='numberOfEvents'>
                
                <input
                    type="text"
                    
                    onChange={this.handleInputChanged}
                />
                <ErrorAlert text={this.state.errorText} />
            </div>
        );
    }
}

export default NumberOfEvents;