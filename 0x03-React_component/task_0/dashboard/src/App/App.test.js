import { shallow } from "enzyme";
import React from "react";
import CourseList from "../CourseList/CourseList";
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

  it("does not render CourseList component on default", () => {
    const component = shallow(<App />);
    expect(component.find(CourseList)).toHaveLength(0);
  });

  it("does not render Login component when isLoggedIn is true", () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.find(Login)).toHaveLength(0);
  });

  it("render CourseList component when isLoggedIn is true", () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.find(CourseList)).toBeDefined();
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
