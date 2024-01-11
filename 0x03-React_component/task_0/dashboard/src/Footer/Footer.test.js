import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<Footer />);

    expect(component).toBeDefined();
  });

  it('at the very least render the text “Copyright"', () => {
    const component = shallow(<Footer />);
    expect(component.html()).toContain("Copyright");
  });
});
