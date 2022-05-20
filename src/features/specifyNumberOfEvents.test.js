import React from 'react';
import { mount, shallow } from 'enzyme/build';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import NumberOfEvents from '../numberOfEvents';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, thirty-two is the default number.', ({ given, when, then }) => {
        given('user has not specified number of events', () => {

        });
        let AppWrapper;
        when('user opened main page', () => {
        AppWrapper = mount(<App />);
        
        });

        then('number of events shown is thirty-two', async () => {
        const NumberOfEventsState = AppWrapper.state('numberOfEvents');
        const allEvents =await getEvents();
        const eventsToShow = allEvents.slice(0, NumberOfEventsState);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        });
    });
    test('User can change number of event they want to see', ({ given, when, then }) => {
        let AppWrapper;
        const renderedEvents = 3;
        given('the main page is open', () => {
            AppWrapper = mount(<App />);
        });

        when('user has entered number of event they want to see', async () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            await NumberOfEventsWrapper.instance().handleInputChanged({target: {value: renderedEvents},});
        });

        then('number of events displayed equals users input', async () => {
            const allEvents =await getEvents();
            const eventsToShow = allEvents.slice(0, renderedEvents);
            expect(AppWrapper.state('events')).toEqual(eventsToShow);
            expect(AppWrapper.state("events")).toHaveLength(renderedEvents)
        });
    });     
});