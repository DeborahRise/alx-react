import React from "react";
import BodySection from './BodySection'
import { shallow } from "enzyme";

describe('BodySection Component Test', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<BodySection title={title} children={children} />);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.contains("h2").find("test title")).toBe(true);
        expect(wrapper.find("h2").html).toEqual("test title");
    });
});