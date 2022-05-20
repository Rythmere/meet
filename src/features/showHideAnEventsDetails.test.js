import React from 'react';
import { shallow } from 'enzyme/build';
import { loadFeature, defineFeature } from 'jest-cucumber';
import Event from '../Event';
import { mockData } from '../mockData';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let EventWrapper;
        given('nothing has been clicked', () => {
            
        });
        
        when('user opened main page', () => {
            EventWrapper = shallow(<Event event={mockData[1]} />);
        });

        then('event detail will be collapsed', () => {
            expect(EventWrapper.state('collapsed')).toBe(true);
        });
    });
    test('User can expand an event to see its details', ({ given, when, then }) => {
        let EventWrapper;
        given('The main page is open', () => {
            EventWrapper = shallow(<Event event={mockData[1]} />);
        });

        when('an event has been clicked', () => {
            EventWrapper.find('.show-details').simulate('click');
        });

        then('event details will be shown/expanded', () => {
            expect(EventWrapper.state('collapsed')).toBe(false);
        });
    });
    test('User can collapse event to hide its details', ({ given, when, then }) => {
        let EventWrapper;
        given('Event details are open', () => {
            EventWrapper = shallow(<Event event={mockData[1]} />);
            EventWrapper.setState({collapsed: false});
        });

        when('hide event details has been clicked', () => {
            EventWrapper.find('.hideDetails').simulate('click');
        });

        then('event will collapse hiding details', () => {
            expect(EventWrapper.state('collapsed')).toBe(true);
        });
    });
});