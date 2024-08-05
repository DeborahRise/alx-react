import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe('Testing the CourseListRow component', () => {
    it('renders without crashing', () => {
        const component = shallow(<CourseListRow textFirstCell="testing" />);
        expect(component.exists()).toBe(true);
    });

    it('renders one cell with colspan = 2', () => {
        const component = shallow(<CourseListRow isHeader={true} textFirstCell="something" textSecondCell={null} />)
        expect(component.find("tr").children()).toHaveLength(1);
        expect(component.find("tr").childAt(0).html).toEqual('<th colSpan="2">something</th>');
    });
    it("renders two cells when textSecondCell has a value", () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);
    
        expect(wrapper.find("tr").children()).toHaveLength(2);
        expect(wrapper.find("tr").childAt(0).html()).toEqual("<td>test</td>");
        expect(wrapper.find("tr").childAt(1).html()).toEqual("<td>test</td>");
      });
})