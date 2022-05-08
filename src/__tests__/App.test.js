import React from "react";
import { shallow } from 'enzyme';
import App from "../App";
import EventList from '../EventList';
import citySearch from '../citySearch';
import NumberOfEvents from '../numberOfEvents';

describe('<app/> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    test('render CitySearch', () => {
        expect(AppWrapper.find(citySearch)).toHaveLength(1);
    });

    test('render number of events', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
});