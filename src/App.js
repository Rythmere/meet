import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventList from './EventList';
import CitySearch from './citySearch';
import NumberOfEvents from './numberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { OfflineAlert } from './Alert';
import EventGenre from './eventGenre';


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
    const isTokenValid = !(accessToken && !navigator.onLine) && (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    const byPassWelcomeScreen = code || isTokenValid;

    this.setState({ showWelcomeScreen: !byPassWelcomeScreen });
    if (byPassWelcomeScreen && this.mounted) {
      getEvents().then((events) => {
      if (this.mounted) {
      let eventsRendered = this.state.numberOfEvents
      this.setState({ events:events.slice(0, eventsRendered), locations: extractLocations(events) });
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location) =>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render(){
    if (this.state.showWelcomeScreen === undefined) return <div
className="App" />
  return (
    <div className="App">
      <OfflineAlert text={this.state.offlineText} />
      <h1>Meet App</h1>
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
      <div className='data-vis-wrapper'>
      <EventGenre events={this.state.events} />
      <ResponsiveContainer height={400}>
      <ScatterChart
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="number of events" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>
        </ResponsiveContainer>
        </div>
      <EventList events={this.state.events}/>
      <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
    </div>
  );
}
}

export default App;
