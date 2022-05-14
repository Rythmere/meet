import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './citySearch';
import NumberOfEvents from './numberOfEvents';
import { extractLocations, getEvents } from './api';

class  App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all'
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      let renderedEvents = 32;
      if (this.mounted) {
        this.setState({ events: events.slice(0, renderedEvents), locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateNumberOfEvents = (number) => {
    this.setState({
      numberOfEvents: number
    });

    this.updateEvents(this.state.currentLocation, number);
    
  }

  updateEvents = (location, number) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
      events:
      events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, number),
        currentLocation: location
      });
    });
  }

  render(){
  return (
    <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
      <EventList events={this.state.events}/>
    </div>
  );
}
}

export default App;
