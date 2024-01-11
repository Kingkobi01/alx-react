import { shallow } from "enzyme";
import React from "react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Tests", () => {
  it("renders the CourseListRow component", () => {
    const props = { textFirstCell: "something" };
    const component = shallow(<CourseListRow {...props} />);
    expect(component).toBeDefined();
  });
  it("renders appropriate html if textSecondCell exists", () => {
    const props = {
      isHeader: true,
      textFirstCell: "textFirstCell",
      textSecondCell: "textSecondCell",
    };
    const component = shallow(<CourseListRow {...props} />);
    expect(component.html()).toBe(
      `<tr><th>${props.textFirstCell}</th><th>${props.textSecondCell}</th></tr>`
    );
  });

  it("renders appropriate html if isHeader is false", () => {
    const props = {
      textFirstCell: "textFirstCell",
      textSecondCell: "textSecondCell",
    };
    const component = shallow(<CourseListRow {...props} />);
    expect(component.html()).toBe(
      `<tr><td>${props.textFirstCell}</td><td>${props.textSecondCell}</td></tr>`
    );
  });

  it("renders appropriate html if textSecondCell doesn't exist", () => {
    const props = {
      isHeader: true,
      textFirstCell: "textFirstCell",
    };
    const component = shallow(<CourseListRow {...props} />);

    expect(component.html()).toBe(
      `<tr><th colSpan="2">${props.textFirstCell}</th></tr>`
    );
  });
});
