import React from "react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe('CourseList Component Test', () => {
    it('renders without crashing', () => {
        const component = shallow(<CourseList />);
        expect(component.exists()).toBe(true)
    });

    it('renders the 5 different rows', () => {
        const component = shallow(<CourseList/>);
        const allrows = component.find("CourseListRow");
        expect(allrows).toHaveLength(5);

        expect(rows.at(0).props()).toEqual({
            isHeader: true,
            textFirstCell: "Available courses",
            textSecondCell: undefined,
          });
          expect(rows.at(1).props()).toEqual({
            isHeader: true,
            textFirstCell: "Course name",
            textSecondCell: "Credit",
          });
          expect(rows.at(2).props()).toEqual({
            isHeader: false,
            textFirstCell: "ES6",
            textSecondCell: "60",
          });
          expect(rows.at(3).props()).toEqual({
            isHeader: false,
            textFirstCell: "Webpack",
            textSecondCell: "20",
          });
          expect(rows.at(4).props()).toEqual({
            isHeader: false,
            textFirstCell: "React",
            textSecondCell: "40",
          });
    });

    it("renders correctely when passed a list of courses", () => {
      const wrapper = shallow(<CourseList listCourses={listCourses} />);
  
      expect(wrapper.find("tbody").children()).toHaveLength(3);
      expect(wrapper.find("tbody").childAt(0).html()).toEqual("<tr><td>ES6</td><td>60</td></tr>");
      expect(wrapper.find("tbody").childAt(1).html()).toEqual("<tr><td>Webpack</td><td>20</td></tr>");
      expect(wrapper.find("tbody").childAt(2).html()).toEqual("<tr><td>React</td><td>40</td></tr>");
    });
})