import React from "react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

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
})