import React from "react";
import BodySection from './BodySection'
import { shallow } from "enzyme";

describe('BodySection Component Test', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<BodySection title="test title"> children="<p>test children node</p>" </BodySection> );

        expect(wrapper.exists()).toBe(true);
    });
    it('', () => {
        const wrapper = shallow();

        expect(wrapper.find("h2")).lenght(1);
        expect(wrapper.find("h2").text()).toBe("test title");
        expect(wrapper.find("p").text()).toBe("test children node");
    
    })
});