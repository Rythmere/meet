import React from "react";
import { shallow } from "enzyme/build";
import EventList from "../EventList";
import Event from "../Event";
import { mockData } from "../mockData";

describe('<EventList /> Component', () => {
    test('render correct number of events', () => {
        const EventListWrapper = shallow(<EventList events={mockData} />);
        expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });
});