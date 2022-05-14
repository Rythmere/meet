import React from "react";
import shallow from "enzyme/build/shallow";
import NumberOfEvents from '../numberOfEvents';

describe('<NumberOfEvents /> Component', () => {
    test('render event number input', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

    test('renders text input correctly', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
        expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(numberOfEvents);
    });

    test('change state when text input changes', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        const eventObject = { target: { value: 10 }};
        NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(10);
    });
});