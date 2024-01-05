import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

describe("Header tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<Header />);

    expect(component).toBeDefined();
  });

  it("renders img tag", () => {
    const component = shallow(<Header />);
    expect(component.find("img")).toBeDefined();
  });

  it("renders h1 tag", () => {
    const component = shallow(<Header />);
    expect(component.find("h1")).toBeDefined();
  });
});
