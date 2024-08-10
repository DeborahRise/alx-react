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

      it('renders a header row with correct styles and content', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Subheader" />);
        expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#deb5b545' });
        expect(wrapper.find('th').at(0).text()).toBe('Header');
        expect(wrapper.find('th').at(1).text()).toBe('Subheader');
      });
    
      it('renders a regular row with correct styles and content', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell1" textSecondCell="Cell2" />);
        expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
        expect(wrapper.find('td').at(0).text()).toBe('Cell1');
        expect(wrapper.find('td').at(1).text()).toBe('Cell2');
      });
    
      it('renders a header row with only one cell when no second cell is provided', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
        expect(wrapper.find('th').prop('colSpan')).toBe('2');
        expect(wrapper.find('th').text()).toBe('Header');
      });
})