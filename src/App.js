import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './citySearch';
import NumberOfEvents from './numberOfEvents';

class  App extends Component {
  render(){
  return (
    <div className="App">
      <CitySearch/>
      <NumberOfEvents/>
      <EventList/>
    </div>
  );
}
}

export default App;
