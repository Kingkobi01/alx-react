import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

describe("Login tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<Login />);

    expect(component).toBeDefined();
  });

  it("renders 2 input tags", () => {
    const component = shallow(<Login />);
    expect(component.find("input")).toHaveLength(2);
  });
  it("renders 2 label tags", () => {
    const component = shallow(<Login />);
    expect(component.find("label")).toHaveLength(2);
  });
});
