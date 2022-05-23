import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './citySearch';
import NumberOfEvents from './numberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { OfflineAlert } from './Alert';


class  App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    offlineText: '',
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
      if (this.mounted) {
      this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

    if(!navigator.onLine) {
      this.setState({offlineText: 'There is no internet connection, events may not be up to date.'}); 
    } else {
      this.setState({offlineText: ''});
    }
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
    if (this.state.showWelcomeScreen === undefined) return <div
className="App" />
  return (
    <div className="App">
      <OfflineAlert text={this.state.offlineText} /> 
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
      <EventList events={this.state.events}/>
      <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
    </div>
  );
}
}

export default App;
