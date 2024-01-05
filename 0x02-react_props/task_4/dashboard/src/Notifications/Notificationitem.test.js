import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";

describe("Tests for NotificationItem", () => {
  it("should render without crashing without props", () => {
    const component = shallow(<NotificationItem />);
    expect(component).toBeDefined();
  });
  it("should render without crashing v1", () => {
    const props = { type: "urgent", value: "whatever" };
    const component = shallow(<NotificationItem {...props} />);
    expect(component.html()).toBe(
      '<li data-notification-type="urgent">whatever</li>'
    );
  });
  it("should render without crashing v2", () => {
    const props = {
      type: "urgent",
      value: "whatever",
      html: { __html: "<u>test</u>" }, // Correct format for dangerouslySetInnerHTML
    };

    const component = shallow(<NotificationItem {...props} />);
    expect(component.html()).toBe(
      '<li data-notification-type="urgent"><u>test</u></li>'
    );
  });
});
