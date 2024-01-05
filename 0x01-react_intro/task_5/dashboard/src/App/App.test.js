import { shallow } from "enzyme";
import React from "react";

// AppHeader.test.js

test("should render the App-header div", () => {
  const wrapper = shallow(<AppHeader />);
  expect(wrapper.find(".App-header")).toHaveLength(1);
});

// AppBody.test.js
test("should render the App-body div", () => {
  const wrapper = shallow(<AppBody />);
  expect(wrapper.find(".App-body")).toHaveLength(1);
});

// AppFooter.test.js
test("should render the App-footer div", () => {
  const wrapper = shallow(<AppFooter />);
  expect(wrapper.find(".App-footer")).toHaveLength(1);
});
