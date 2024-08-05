import React from "react";
import CourseList from "./CourseList";
import { shallow } from "enzyme";

describe('CourseList Component Test', () => {
    it('renders without crashing', () => {
        const component = shallow(<CourseList />)
        expect(component.exists()).toBe(true)
    });

    it('renders the 5 different rows', () => {
        
    })
})