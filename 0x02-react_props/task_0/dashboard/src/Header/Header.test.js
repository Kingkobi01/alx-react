import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

describe("Header tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<Header />);

    expect(component).toBeDefined();
  });
});
