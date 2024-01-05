import { shallow } from "enzyme";
import React from "react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList Tests", () => {
  it("renders CourseList component without crashing", () => {
    const component = shallow(<CourseList />);
    expect(component).toBeDefined();
  });
  it("CourseList component renders 5 rows", () => {
    const component = shallow(<CourseList />);
    expect(component.find(CourseListRow)).toHaveLength(5);
  });
});
