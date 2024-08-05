import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe('Testing the CourseListRow component', () => {
    it('renders without crashing', () => {
        const component = shallow(<CourseListRow textFirstCell="testing" />);
        expect(component.exists()).toBe(true);
    });

    it('renders one cell with colspan = 2, when isHeader is true and textSecondCell is null', () => {
        const component = shallow(<CourseListRow isHeader={true} textFirstCell="something" textSecondCell={null} />)
        expect(component.find("tr").children()).toHaveLength(1);
        expect(component.find("tr").childAt(0).html()).toEqual('<th colSpan="2">something</th>');
    });
    it("renders two cells when isHeader is true and textSecondCell is present", () => {
        const component = shallow(
          <CourseListRow isHeader={true} textFirstCell="first cell" textSecondCell="second cell" />
        );
        expect(component.find("tr").children()).toHaveLength(2);
        expect(component.find("th").at(0).text()).toEqual("first cell");
        expect(component.find("th").at(1).text()).toEqual("second cell");
      });
    
      it("renders correctly two td elements within a tr element when isHeader is false", () => {
        const component = shallow(
          <CourseListRow isHeader={false} textFirstCell="first cell" textSecondCell="second cell" />
        );
        expect(component.find("tr").children()).toHaveLength(2);
        expect(component.find("td").at(0).text()).toEqual("first cell");
        expect(component.find("td").at(1).text()).toEqual("second cell");
      });
})