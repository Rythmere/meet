import React from "react";
import shallow from "enzyme/build/shallow";
import Event from "../Event";
import { mockData } from "../mockData";

describe('<Event /> Component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
    });
    test('render event', () => {
        expect(EventWrapper.find('.Event')).toHaveLength(1);
    });

    test('render event summarry', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    test('render event summarry', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('render event summarry', () => {
        expect(EventWrapper.find('.date')).toHaveLength(1);
    });

    test('event collapsed by default', () => {
        expect(EventWrapper.state('collapsed')).toBe(true);
    });

    test('render show details button', () => {
        expect(EventWrapper.find('.show-details')).toHaveLength(1);
    });

    test('show detail button set collapse state false upon click', () => {
        EventWrapper.find('.show-details').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
    });

    test('hidden details rendered after details button clicked', () => {
        expect(EventWrapper.find('.hiddenDetails')).toHaveLength(1);
    });

    test('render calendar details link', () => {
        expect(EventWrapper.find('.calendarLink')).toHaveLength(1);
    });

    test('render event description', () => {
        expect(EventWrapper.find('.description')).toHaveLength(1);
    })

    test('render hide details button', () => {
        expect(EventWrapper.find('.hideDetails')).toHaveLength(1);
    });

    test('hide details button set collapsed state to true', () => {
        EventWrapper.find('.hideDetails').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(true);

    })
})