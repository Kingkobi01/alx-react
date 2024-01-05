import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<Footer />);

    expect(component).toBeDefined();
  });
  //
});
