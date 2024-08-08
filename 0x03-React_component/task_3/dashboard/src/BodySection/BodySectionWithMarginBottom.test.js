import React from "react";
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { shallow } from "enzyme";

describe('BodySectionWithMarginBottom Component Test', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title='test title'
            children='<p>test children node</p>'> </BodySectionWithMarginBottom>);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.contains("h2").find("test title")).toBe(true);
        expect(wrapper.find("h2").html).toEqual("test title");
    });
});
