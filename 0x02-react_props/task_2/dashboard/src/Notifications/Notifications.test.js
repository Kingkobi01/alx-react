import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";
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

  it("should render four NotificationItem components", () => {
    const component = shallow(<Notifications />);
    expect(component.find(NotificationItem)).toHaveLength(4);
  });
  it("renders correct text", () => {
    const component = shallow(<Notifications />);

    expect(component.find(NotificationItem).first().html()).toBe(
      '<li data-notification-type="default">New course available</li>'
    );
  });
});
