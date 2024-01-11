import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";
import { Notifications } from "./Notifications";

describe("Tests for Notifications", () => {
  it("should render without crashing", () => {
    const component = shallow(<Notifications displayDrawer={true} />);
    expect(component).toBeDefined();
  });
  it("should render ul", () => {
    const component = shallow(<Notifications displayDrawer={true} />);
    expect(component.find("ul")).toBeDefined();
  });

  it("should render four NotificationItem components", () => {
    const component = shallow(<Notifications displayDrawer={true} />);
    expect(component.find(NotificationItem)).toHaveLength(4);
  });
  it("renders correct text", () => {
    const component = shallow(<Notifications displayDrawer={true} />);

    expect(component.find(NotificationItem).first().html()).toBe(
      '<li data-notification-type="default">New course available</li>'
    );
  });
  it("renders menuItem when displayDrawer is false", () => {
    const component = shallow(<Notifications displayDrawer={false} />);

    expect(component.find(".menuItem")).toBeDefined();
  });
  it("does not render .Notification when displayDrawer is false", () => {
    const component = shallow(<Notifications displayDrawer={false} />);

    expect(component.find(".Notification")).toHaveLength(0);
  });
  it("renders menuItem when displayDrawer is true", () => {
    const component = shallow(<Notifications displayDrawer={true} />);

    expect(component.find(".menuItem")).toBeDefined();
  });

  it("render .Notification when displayDrawer is true", () => {
    const component = shallow(<Notifications displayDrawer={true} />);

    expect(component.find(".Notification")).toBeDefined();
  });
});
