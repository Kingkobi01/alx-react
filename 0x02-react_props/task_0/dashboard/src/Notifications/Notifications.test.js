import { shallow } from "enzyme";
import React from "react";
import { Notifications } from "./Notifications";

describe("Tests for Notifications", () => {
  it("should render without crashing", () => {
    const component = shallow(<Notifications />);
    expect(component).toBeDefined();
  });
  it("should render ul", () => {
    const component = shallow(<Notifications />);
    expect(component.find("ul")).toBeDefined();
  });
  it("should render four li elements", () => {
    const component = shallow(<Notifications />);
    expect(component.find("ul li")).toHaveLength(4);
  });
  it("renders correct text", () => {
    const component = shallow(<Notifications />);

    expect(component.find("p").prop("children")).toBe(
      "Here is the list of notifications"
    );
  });
});
