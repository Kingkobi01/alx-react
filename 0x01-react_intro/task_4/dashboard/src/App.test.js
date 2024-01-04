import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("should render the App-header div", () => {
    const component = shallow(<App />);

    expect(component.find(".App-header")).toBeDefined();
  });
  it("should render the App-body div", () => {
    const component = shallow(<App />);

    expect(component.find(".App-body")).toBeDefined();
  });
  it("should render the App-footer div", () => {
    const component = shallow(<App />);

    expect(component.find(".App-footer")).toBeDefined();
  });
});
