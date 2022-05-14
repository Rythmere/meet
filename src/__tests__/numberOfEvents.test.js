import React from "react";
import shallow from "enzyme/build/shallow";
import NumberOfEvents from '../numberOfEvents';

describe('<NumberOfEvents /> Component', () => {
    let NumberOfEventsWrapper, numberOfEvents;
    beforeAll(() => {
        numberOfEvents = 32;
        NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={numberOfEvents} updateEvents={() => {}} />);
    });
    test('render event number input', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

    test('renders text input correctly', () => {
        const AmountOfEvents = numberOfEvents;
        expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(AmountOfEvents);
    });
});