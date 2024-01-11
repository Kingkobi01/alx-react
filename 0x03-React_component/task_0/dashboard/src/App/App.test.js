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

  it("calls logOut and displays alert on Control + H key press", () => {
    // Mock the logOut function
    const mockLogOut = jest.fn();

    // Spy on the window.alert function
    const alertSpy = jest.spyOn(window, "alert");

    // Shallow render the App component with the mocked logOut function
    const wrapper = shallow(<App logOut={mockLogOut} />);

    // Simulate a Control + H key press
    wrapper.instance().handleKeyDown({
      ctrlKey: true,
      key: "h",
    });

    // Verify that the logOut function was called
    expect(mockLogOut).toHaveBeenCalled();

    // Verify that the alert function was called with the expected string
    expect(alertSpy).toHaveBeenCalledWith("Logging you out");

    // Restore the original window.alert function after the test
    alertSpy.mockRestore();
  });

  it("does not call logOut on other key presses", () => {
    // Mock the logOut function
    const mockLogOut = jest.fn();

    // Spy on the window.alert function
    const alertSpy = jest.spyOn(window, "alert");

    // Shallow render the App component with the mocked logOut function
    const wrapper = shallow(<App logOut={mockLogOut} />);

    // Simulate a key press that is not Control + H
    wrapper.instance().handleKeyDown({
      ctrlKey: true,
      key: "a",
    });

    // Verify that the logOut function was not called
    expect(mockLogOut).not.toHaveBeenCalled();

    // Verify that the alert function was not called
    expect(alertSpy).not.toHaveBeenCalled();

    // Restore the original window.alert function after the test
    alertSpy.mockRestore();
  });
});
