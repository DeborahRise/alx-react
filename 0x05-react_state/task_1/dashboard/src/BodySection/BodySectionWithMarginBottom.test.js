import React from "react";
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe('BodySectionWithMarginBottom Component Test', () => {
    it('renders BodySection with correctly passed props', () => {
        const props = {
            title: "test title",
            children: "<p>test children node</p>",
        };
        const wrapper = shallow(<BodySectionWithMarginBottom {...props} />);
        const BS = wrapper.find('.bodySectionWithMargin');
        expect(wrapper.find('.bodySectionWithMargin')).toHaveLength(1);
        expect(wrapper.find(BodySection)).toHaveLength(1);
        expect(wrapper.find(BodySection).prop('title')).toBe(props.title);
        expect(wrapper.find(BodySection).prop('children')).toBe(props.children);
    });
});
