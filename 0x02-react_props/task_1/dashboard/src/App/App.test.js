import { shallow } from "enzyme";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import App from "./App";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("should render the Header component", () => {
    const component = shallow(<Header />);

    expect(component).toBeDefined();
  });
  it("should render the Login component", () => {
    const component = shallow(<Login />);

    expect(component).toBeDefined();
  });
  it("should render the Footer component", () => {
    const component = shallow(<Footer />);

    expect(component).toBeDefined();
  });
});
