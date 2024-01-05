import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

describe("Login tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<Login />);

    expect(component).toBeDefined();
  });
  //
});
